import React from 'react';
import { ExternalLink, Github, Code, Smartphone, Brain, Globe } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Disco Microservices Platform",
      description: "A microservices and microfrontend platform for Orange, laureate of DTW23. It integrates 5 open-source components for prepaid mobile offers according to TMF standards.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Spring Boot", "Kafka", "OpenShift", "Docker"],
      category: "Enterprise",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700",
      githubLink: "https://github.com/your-disco-repo", // Add actual GitHub link
      externalLink: "https://example.com/disco-project" // Add actual external link if applicable
    },
    {
      title: "VR Medical Education Platform",
      description: "An innovative solution combining VR, smart contracts, and Rental NFTs with an AI virtual professor using NLP and ML for medical education in the Metaverse.",
      image: "src/assets/VR.jpeg",
      technologies: ["Unity", "Oculus Quest", "Blockchain", "AI/ML", "NLP"],
      category: "Innovation",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-600 to-purple-700",
      githubLink: "https://github.com/your-vr-medical-repo",
      externalLink: "https://example.com/vr-medical-project"
    },
    {
      title: "MetaSports AR Application",
      description: "A multiplayer mixed reality application for MetaSports with AI integration for real-time interactions and full HoloLens 2 compatibility.",
      image: "https://images.pexels.com/photos/7862481/pexels-photo-7862481.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HoloLens 2", "Unity", "Mixed Reality", "AI", "C#"],
      category: "AR/VR",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-green-600 to-green-700",
      githubLink: "https://github.com/your-metasports-repo",
      externalLink: "https://example.com/metasports-project"
    },
    {
      title: "Lip-Reading System",
      description: "A supervised final year project, developing an intelligent lip-reading system using advanced computer vision and deep learning techniques.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Computer Vision"],
      category: "AI/ML",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-600 to-orange-700",
      githubLink: "https://github.com/your-lip-reading-repo",
      externalLink: "https://example.com/lip-reading-project"
    },
    {
      title: "Big Data Dashboard",
      description: "An application with a drag-and-drop interface for real-time customer data processing and display, providing comprehensive Big Data solutions.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "Apache Spark", "MongoDB", "Node.js"],
      category: "Big Data",
      icon: <Globe className="w-6 h-6" />,
      color: "from-teal-600 to-teal-700",
      githubLink: "https://github.com/your-big-data-repo",
      externalLink: "https://example.com/big-data-project"
    },
    {
      title: "NASA Space Apps Challenge",
      description: "Award-winning 'Galactic Problem-Solver' solution for the international NASA Space Apps Challenge, demonstrating innovation in the space domain.",
      image: "https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["JavaScript", "Python", "Data Analysis", "APIs", "Visualization"],
      category: "Innovation",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-600 to-indigo-700",
      githubLink: "https://github.com/your-nasa-repo",
      externalLink: "https://example.com/nasa-project"
    }
  ];

  const categories = ["All", "Enterprise","Web", "Innovation", "AR/VR", "AI/ML", "Big Data"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All"
      ? projects
      : projects.filter(project => project.category === selectedCategory);

  return (
      <section id="projects" className={`py-20 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Projects & Achievements
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Explore my most significant projects
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                        selectedCategory === category
                            ? 'bg-blue-600 text-white shadow-lg'
                            : darkMode
                                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
                <div
                    key={index}
                    className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                        darkMode
                            ? 'bg-gray-900 border border-gray-700'
                            : 'bg-white border border-gray-100'
                    }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className={`absolute top-4 left-4 p-2 rounded-lg bg-gradient-to-r ${project.color} text-white`}>
                      {project.icon}
                    </div>
                    <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      darkMode
                          ? 'bg-gray-800/80 text-gray-200'
                          : 'bg-white/80 text-gray-700'
                  }`}>
                    {project.category}
                  </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${
                        darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {project.title}
                    </h3>

                    <p className={`text-sm mb-4 leading-relaxed ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                          <span
                              key={techIndex}
                              className={`px-3 py-1 text-xs rounded-full ${
                                  darkMode
                                      ? 'bg-gray-700 text-gray-300'
                                      : 'bg-gray-100 text-gray-700'
                              }`}
                          >
                      {tech}
                    </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-3">
                        {project.githubLink && ( // Conditionally render GitHub button
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} on GitHub`}
                                className={`p-2 rounded-lg transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                              <Github size={16} />
                            </a>
                        )}
                        {project.externalLink && ( // Conditionally render External Link button
                            <a
                                href={project.externalLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} live`}
                                className={`p-2 rounded-lg transition-colors duration-200 ${
                                    darkMode
                                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                            >
                              <ExternalLink size={16} />
                            </a>
                        )}
                      </div>
                      <button className={`px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${project.color} text-white hover:shadow-lg transition-all duration-200`}>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};