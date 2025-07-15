import React, { useState } from 'react';
import { Search, ArrowLeft, ExternalLink, Code, Database, Cloud, Smartphone, Settings, Brain } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  logo: string;
  category: string;
  level: number;
  description: string;
  experience: string;
  projects: string[];
  useCases: string[];
  borderColor: string;
  bgColor: string;
}

interface SkillsProps {
  darkMode?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({ darkMode = false }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const skills: Skill[] = [
    // Programming Languages
    {
      id: 'java',
      name: 'Java',
      logo: '☕',
      category: 'Programming Languages',
      level: 85,
      description: 'Object-oriented programming language used for enterprise applications and backend development.',
      experience: '5+ years of experience building scalable enterprise applications',
      projects: ['E-commerce Platform', 'Banking System', 'Microservices Architecture'],
      useCases: ['REST API Development', 'Spring Boot Applications', 'Database Integration', 'Enterprise Solutions'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      logo: '🟨',
      category: 'Programming Languages',
      level: 95,
      description: 'Dynamic programming language for web development, both frontend and backend.',
      experience: '6+ years of full-stack JavaScript development',
      projects: ['React Applications', 'Node.js APIs', 'Real-time Chat Apps'],
      useCases: ['Frontend Development', 'Backend APIs', 'Real-time Applications', 'DOM Manipulation'],
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50'
    },
    {
      id: 'typescript',
      name: 'TypeScript',
      logo: '🔷',
      category: 'Programming Languages',
      level: 80,
      description: 'Strongly typed superset of JavaScript that compiles to plain JavaScript.',
      experience: '3+ years developing type-safe applications',
      projects: ['Enterprise Web Apps', 'Angular Applications', 'Node.js Services'],
      useCases: ['Type Safety', 'Large-scale Applications', 'Better IDE Support', 'Code Maintainability'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'python',
      name: 'Python',
      logo: '🐍',
      category: 'Programming Languages',
      level: 90,
      description: 'High-level programming language used for AI, web development, and data science.',
      experience: '4+ years in AI/ML and web development',
      projects: ['Machine Learning Models', 'Data Analysis Tools', 'Web Scraping'],
      useCases: ['Machine Learning', 'Data Analysis', 'Web Development', 'Automation Scripts'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    },

    // Frameworks
    {
      id: 'react',
      name: 'React.js',
      logo: '⚛️',
      category: 'Frameworks',
      level: 95,
      description: 'JavaScript library for building user interfaces with component-based architecture.',
      experience: '5+ years building modern web applications',
      projects: ['E-commerce Dashboard', 'Social Media Platform', 'Portfolio Websites'],
      useCases: ['Single Page Applications', 'Component Reusability', 'State Management', 'UI Development'],
      borderColor: 'border-cyan-500',
      bgColor: 'bg-cyan-50'
    },
    {
      id: 'angular',
      name: 'Angular',
      logo: '🅰️',
      category: 'Frameworks',
      level: 90,
      description: 'TypeScript-based framework for building scalable web applications.',
      experience: '4+ years developing enterprise applications',
      projects: ['Admin Dashboards', 'Enterprise Portals', 'Progressive Web Apps'],
      useCases: ['Enterprise Applications', 'Complex Forms', 'Routing', 'Dependency Injection'],
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50'
    },
    {
      id: 'springboot',
      name: 'Spring Boot',
      logo: '🍃',
      category: 'Frameworks',
      level: 85,
      description: 'Java-based framework for building production-ready applications quickly.',
      experience: '4+ years building microservices and APIs',
      projects: ['REST APIs', 'Microservices', 'Banking Applications'],
      useCases: ['REST API Development', 'Microservices Architecture', 'Database Integration', 'Security Implementation'],
      borderColor: 'border-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'nodejs',
      name: 'Node.js',
      logo: '🟢',
      category: 'Frameworks',
      level: 80,
      description: 'JavaScript runtime for building scalable server-side applications.',
      experience: '3+ years developing backend services',
      projects: ['Real-time Chat', 'API Services', 'Web Scraping Tools'],
      useCases: ['Backend Development', 'Real-time Applications', 'API Development', 'Server-side Scripting'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    },

    // Cloud & DevOps
    {
      id: 'aws',
      name: 'AWS',
      logo: '☁️',
      category: 'Cloud & DevOps',
      level: 80,
      description: 'Amazon Web Services for cloud computing and infrastructure.',
      experience: '3+ years deploying and managing cloud applications',
      projects: ['Serverless Applications', 'Cloud Migration', 'Auto-scaling Systems'],
      useCases: ['Cloud Deployment', 'Serverless Computing', 'Storage Solutions', 'Database Management'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'docker',
      name: 'Docker',
      logo: '🐳',
      category: 'Cloud & DevOps',
      level: 85,
      description: 'Containerization platform for developing and deploying applications.',
      experience: '3+ years containerizing applications',
      projects: ['Microservices Deployment', 'Development Environments', 'CI/CD Pipelines'],
      useCases: ['Application Containerization', 'Development Consistency', 'Deployment Automation', 'Scalability'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'kubernetes',
      name: 'Kubernetes',
      logo: '☸️',
      category: 'Cloud & DevOps',
      level: 75,
      description: 'Container orchestration platform for managing containerized applications.',
      experience: '2+ years orchestrating container deployments',
      projects: ['Microservices Orchestration', 'Auto-scaling Applications', 'Service Mesh'],
      useCases: ['Container Orchestration', 'Auto-scaling', 'Service Discovery', 'Load Balancing'],
      borderColor: 'border-blue-600',
      bgColor: 'bg-blue-50'
    },

    // Databases
    {
      id: 'mongodb',
      name: 'MongoDB',
      logo: '🍃',
      category: 'Databases',
      level: 90,
      description: 'NoSQL document database for flexible and scalable data storage.',
      experience: '4+ years working with document-based databases',
      projects: ['E-commerce Systems', 'Content Management', 'Real-time Analytics'],
      useCases: ['Document Storage', 'Real-time Data', 'Flexible Schema', 'Scalable Applications'],
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50'
    },
    {
      id: 'mysql',
      name: 'MySQL',
      logo: '🐬',
      category: 'Databases',
      level: 85,
      description: 'Relational database management system for structured data storage.',
      experience: '5+ years designing and optimizing databases',
      projects: ['E-commerce Platforms', 'User Management Systems', 'Analytics Dashboards'],
      useCases: ['CRUD Operations', 'Data Relations', 'Transaction Management', 'Performance Optimization'],
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50'
    },

    // AI & Machine Learning
    {
      id: 'tensorflow',
      name: 'TensorFlow',
      logo: '🧠',
      category: 'AI & Machine Learning',
      level: 80,
      description: 'Open-source machine learning framework for building AI applications.',
      experience: '2+ years developing ML models',
      projects: ['Image Classification', 'Natural Language Processing', 'Recommendation Systems'],
      useCases: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP Applications'],
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'opencv',
      name: 'OpenCV',
      logo: '👁️',
      category: 'AI & Machine Learning',
      level: 75,
      description: 'Computer vision library for image and video processing.',
      experience: '2+ years in computer vision projects',
      projects: ['Object Detection', 'Image Processing', 'Video Analysis'],
      useCases: ['Image Processing', 'Object Detection', 'Feature Extraction', 'Video Analysis'],
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50'
    }
  ];

  const categories = [
    { name: 'Programming Languages', icon: <Code className="w-5 h-5" /> },
    { name: 'Frameworks', icon: <Settings className="w-5 h-5" /> },
    { name: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Databases', icon: <Database className="w-5 h-5" /> },
    { name: 'AI & Machine Learning', icon: <Brain className="w-5 h-5" /> }
  ];

  const filteredSkills = skills.filter(skill =>
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const skillsByCategory = categories.map(category => ({
    ...category,
    skills: filteredSkills.filter(skill => skill.category === category.name)
  })).filter(category => category.skills.length > 0);

  if (selectedSkill) {
    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
          <div className="max-w-4xl mx-auto px-4 py-8">
            <button
                onClick={() => setSelectedSkill(null)}
                className={`flex items-center gap-2 mb-6 px-4 py-2 rounded-lg transition-colors ${
                    darkMode
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                        : 'bg-white hover:bg-gray-100 text-gray-700'
                }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Skills
            </button>

            <div className={`rounded-2xl p-8 shadow-lg ${
                darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-6xl">{selectedSkill.logo}</div>
                <div>
                  <h1 className="text-3xl font-bold mb-2">{selectedSkill.name}</h1>
                  <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedSkill.category}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Description</h2>
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedSkill.description}
                  </p>

                  <h2 className="text-xl font-semibold mb-4">Experience</h2>
                  <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {selectedSkill.experience}
                  </p>

                  <h2 className="text-xl font-semibold mb-4">Proficiency Level</h2>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                    <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {selectedSkill.name}
                    </span>
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {selectedSkill.level}%
                    </span>
                    </div>
                    <div className={`w-full bg-gray-200 rounded-full h-3 ${
                        darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div
                          className={`h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out`}
                          style={{ width: `${selectedSkill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-4">Projects</h2>
                  <div className="space-y-3 mb-6">
                    {selectedSkill.projects.map((project, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-100'
                            }`}
                        >
                      <span className="flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        {project}
                      </span>
                        </div>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold mb-4">Use Cases</h2>
                  <div className="space-y-2">
                    {selectedSkill.useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className={`p-3 rounded-lg ${
                                darkMode ? 'bg-gray-700' : 'bg-gray-100'
                            }`}
                        >
                      <span className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {useCase}
                      </span>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 tracking-wide">SKILLS</h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Click on any skill to explore my experience and projects
            </p>
          </div>

          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
              }`} />
              <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border transition-colors ${
                      darkMode
                          ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
              />
            </div>
          </div>

          <div className="space-y-8">
            {skillsByCategory.map((category, categoryIndex) => (
                <div key={categoryIndex} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-5 h-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                    <div className="flex items-center gap-2">
                      {category.icon}
                      <h2 className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {category.name}
                      </h2>
                    </div>
                    <div className={`flex-1 h-0.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-400'}`}></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                        <div
                            key={skillIndex}
                            onClick={() => setSelectedSkill(skill)}
                            className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                                darkMode
                                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-750'
                                    : 'bg-white border-gray-200 hover:bg-gray-50'
                            }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{skill.logo}</div>
                            <div className="flex-1">
                              <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                {skill.name}
                              </h3>
                              <div className="mt-2">
                                <div className={`w-full bg-gray-200 rounded-full h-1.5 ${
                                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                                }`}>
                                  <div
                                      className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
                                      style={{ width: `${skill.level}%` }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};