import React, { useState } from 'react';
import { Trophy, Award, Star, ChevronLeft, ChevronRight, X, Users, Target, Crown, Medal, MapPin, Clock, Heart } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

export const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [albumType, setAlbumType] = useState<'achievement' | 'associative' | 'marathon'>('achievement');

  // Enhanced achievements with photo albums
  const enhancedAchievements = [
    {
      title: "1st Prize NASA Space Apps Challenge",
      subtitle: "Galactic Problem-Solver",
      description: "First place in the international NASA Space Apps Challenge with an innovative solution for space exploration.",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-500 to-yellow-600",
      category: "International Competition",
      year: "2021",
      photos: [
        {
          url: "src/assets/study/nasa.jpeg",
          caption: "Cérémonie de remise du prix NASA"
        },
        {
          url: "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb",
          caption: "Présentation du projet devant le jury"
        },
        {
          url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb",
          caption: "Équipe gagnante avec le trophée"
        },{
          url: "src/assets/study/nasa2.jpeg",
          caption: "Équipe gagnante avec le trophée"
        }
      ]
    },
    {
      title: "3rd Place Innov'Project",
      subtitle: "PACK DGSE Challenge",
      description: "Third place in the innovation challenge organized by PACK DGSE with a disruptive technological project.",
      icon: <Award className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      category: "National Competition",
      year: "2022",
      photos: [
        {
          url: "src/assets/Pyora/1.jpeg",
          caption: "Pitch de présentation du projet"
        },
        {
          url: "src/assets/Pyora/2.jpeg",
          caption: "Démonstration technique"
        },
        {
          url: "src/assets/Pyora/3.jpeg",
          caption: "Remise du prix d'innovation"
        },
        {
          url: "src/assets/Pyora/4.jpeg",
          caption: "Pitch de présentation du projet"
        },
        {
          url: "src/assets/Pyora/5.jpeg",
          caption: "Démonstration technique"
        },
        {
          url: "src/assets/Pyora/6.jpeg",
          caption: "Remise du prix d'innovation"
        },
        {
          url: "src/assets/Pyora/7.jpeg",
          caption: "Pitch de présentation du projet"
        },
        {
          url: "src/assets/Pyora/8.jpeg",
          caption: "Démonstration technique"
        }
      ]
    },
  ];

  const associativeExperience = [
    {
      title: "Founding Member & Marketing Manager",
      subtitle: "ENET'COM Junior Enterprise",
      description: "Co-founder and marketing manager of the Junior Enterprise, developing the student entrepreneurial ecosystem and promoting innovation projects.",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      category: "Entrepreneurship",
      year: "2020-2023",
      logo: "src/assets/logo/ejce.png",
      website: "https://jet.optimajuniorentreprise.com/en/enetcom-junior-entreprise/",
      photos: [
        {
          url: "src/assets/junior/1.jpg",
          caption: "Événement de lancement de la Junior Enterprise"
        },
        {
          url: "src/assets/junior/2.jpg",
          caption: "Workshop sur l'entrepreneuriat"
        },
        {
          url: "src/assets/junior/3.jpg",
          caption: "Formation en marketing digital"
        },
        {
          url: "src/assets/junior/4.jpg",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/5.jpg",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/6.jpg",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/7.jpg",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/8.jpg",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/9.png",
          caption: "Réunion de l'équipe marketing"
        },
        {
          url: "src/assets/junior/10.png",
          caption: "Réunion de l'équipe marketing"
        }
      ]
    },
    {
      title: "Vice-President",
      subtitle: "IEEE ENET'Com Student Branch",
      description: "Leadership of the IEEE student branch, organizing technical events, workshops, and professional training sessions for students.",
      icon: <Target className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
      category: "Leadership",
      year: "2020-2021",
      logo: "src/assets/logo/ieee.png",
      website: "https://enetcom.ieee.tn/",
      photos: [
        {
          url: "src/assets/ieee/1.jpg",
          caption: "Conférence IEEE sur l'innovation technologique"
        },
        {
          url: "src/assets/ieee/2.png",
          caption: "Atelier de formation technique"
        },
        {
          url: "src/assets/ieee/3.jpg",
          caption: "Compétition robotique IEEE"
        },
        {
          url: "src/assets/ieee/6.jpg",
          caption: "Cérémonie de remise des prix"
        }
      ]
    },
    {
      title: "Event Coordinator",
      subtitle: "Tech Conferences & Workshops",
      description: "Organized and coordinated multiple technical conferences, hackathons, and professional development workshops.",
      icon: <Crown className="w-8 h-8" />,
      color: "from-red-500 to-red-600",
      category: "Event Management",
      year: "2020-2023",
      photos: [
        {
          url: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=500&h=400&fit=crop&crop=entropy&cs=tinysrgb",
          caption: "Organisation d'événements tech"
        },
        {
          url: "src/assets/ieee/4.png",
          caption: "Ambassador NRW Event"
        }
      ]
    }
  ];

  const marathonExperience = [
    {
      title: "Ulysse Djerba Marathon",
      subtitle: "Team Sofrecom",
      description: "Participated in the prestigious Ulysse Djerba Marathon with Team Sofrecom, combining endurance running with team spirit and professional networking.",
      icon: <Heart className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
      category: "Marathon",
      year: "2025",
      location: "Djerba, Tunisia",
      distance: "10 km",
      photos: [
        {
          url: "src/assets/Djerba/1.jpeg",
          caption: "Départ du marathon Ulysse Djerba avec l'équipe Sofrecom"
        },
        {
          url: "src/assets/Djerba/2.jpeg",
          caption: "En course avec l'équipe"
        },
        {
          url: "src/assets/Djerba/5.png",
          caption: "Arrivée et célébration"
        },
        {
          url: "src/assets/Djerba/3.jpeg",
          caption: "Photo de groupe Team Sofrecom"
        },
        {
          url: "src/assets/Djerba/6.png",
          caption: "Remise des médailles"
        }
      ]
    },
    {
      title: "Vaga Run",
      subtitle: "Team Sofrecom",
      description: "Participated in the Vaga Run event, demonstrating commitment to fitness and team collaboration while representing Sofrecom values.",
      icon: <MapPin className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
      category: "Running Event",
      year: "2025",
      location: "Tunisia",
      distance: "5 km",
      photos: [
        {
          url: "src/assets/VAGA/1.jpg",
          caption: "Préparation avant le départ Vaga Run"
        },
        {
          url: "src/assets/VAGA/2.jpg",
          caption: "En action pendant la course"
        },
        {
          url: "src/assets/VAGA/3.jpeg",
          caption: "Équipe Sofrecom au complet"
        },
        {
          url: "src/assets/VAGA/5.jpg",
          caption: "Moment de récupération"
        },
        {
          url: "src/assets/VAGA/4.jpg",
          caption: "Célébration de fin de course"
        },
        {
          url: "src/assets/VAGA/6.jpeg",
          caption: "Célébration de fin de course"
        }
      ]
    },
    {
      title: "Mahdia Run",
      subtitle: "Team Sofrecom",
      description: "Completed the Mahdia Run with Team Sofrecom, showcasing dedication to personal fitness goals and team cohesion in a beautiful coastal setting.",
      icon: <Clock className="w-8 h-8" />,
      color: "from-cyan-500 to-cyan-600",
      category: "Coastal Run",
      year: "2025",
      location: "Mahdia, Tunisia",
      distance: "16 km",
      photos: [
        {
          url: "src/assets/Mahdia/5.png",
          caption: "Départ matinal du Mahdia Run"
        },
        {
          url: "src/assets/Mahdia/2.png",
          caption: "Course le long de la côte"
        },
        {
          url: "src/assets/Mahdia/1.jpg",
          caption: "Équipe Sofrecom motivée"
        },
        {
          url: "src/assets/Mahdia/3.png",
          caption: "Paysage côtier magnifique"
        },
        {
          url: "src/assets/Mahdia/5.png",
          caption: "Arrivée et félicitations"
        },
        {
          url: "src/assets/marathon/mahdia6.jpg",
          caption: "Photo souvenir équipe"
        }
      ]
    }
  ];

  const stats = [
    { value: "4", label: "Major Awards", color: "from-yellow-600 to-yellow-700" },
    { value: "3", label: "Leadership Roles", color: "from-green-600 to-green-700" },
    { value: "3", label: "Marathon Events", color: "from-orange-600 to-orange-700" },
    { value: "2", label: "International Competitions", color: "from-blue-600 to-blue-700" },
    { value: "5+", label: "Events Organized", color: "from-purple-600 to-purple-700" }
  ];

  const openAlbum = (index: number, type: 'achievement' | 'associative' | 'marathon') => {
    setSelectedAlbum(index);
    setAlbumType(type);
    setCurrentPhotoIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentPhotoIndex(0);
  };

  const nextPhoto = () => {
    if (selectedAlbum !== null) {
      const photos = albumType === 'achievement'
          ? enhancedAchievements[selectedAlbum].photos
          : albumType === 'associative'
              ? associativeExperience[selectedAlbum].photos
              : marathonExperience[selectedAlbum].photos;
      setCurrentPhotoIndex((prev) =>
          prev === photos.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedAlbum !== null) {
      const photos = albumType === 'achievement'
          ? enhancedAchievements[selectedAlbum].photos
          : albumType === 'associative'
              ? associativeExperience[selectedAlbum].photos
              : marathonExperience[selectedAlbum].photos;
      setCurrentPhotoIndex((prev) =>
          prev === 0 ? photos.length - 1 : prev - 1
      );
    }
  };

  return (
      <section id="achievements" className={`py-20 ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Achievements & Experiences
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Awards, competitions, associative leadership, and athletic achievements
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className={`text-center p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                        darkMode
                            ? 'bg-gray-800 border border-gray-700'
                            : 'bg-white border border-gray-100'
                    }`}
                >
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </p>
                </div>
            ))}
          </div>

          {/* Awards & Competitions */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Awards & Competitions
              </h3>
              <p className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Recognition and achievements in competitions and professional projects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {enhancedAchievements.map((achievement, index) => (
                  <div key={index} className={`group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      darkMode
                          ? 'bg-gray-800 border border-gray-700'
                          : 'bg-white border border-gray-100'
                  }`}>
                    {/* Photo Album Preview */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1 h-48">
                        {achievement.photos.slice(0, 4).map((photo, photoIndex) => (
                            <div
                                key={photoIndex}
                                className={`relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 ${
                                    photoIndex === 3 && achievement.photos.length > 4 ? 'relative' : ''
                                }`}
                                onClick={() => openAlbum(index, 'achievement')}
                            >
                              <img
                                  src={photo.url}
                                  alt={photo.caption}
                                  className="w-full h-full object-cover"
                              />
                              {photoIndex === 3 && achievement.photos.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        +{achievement.photos.length - 4}
                                    </span>
                                  </div>
                              )}
                            </div>
                        ))}
                      </div>
                      <button
                          onClick={() => openAlbum(index, 'achievement')}
                          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-70 transition-colors duration-200"
                      >
                        Voir album ({achievement.photos.length})
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color} text-white`}>
                          {achievement.icon}
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              darkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                          }`}>
                              {achievement.category}
                          </span>
                          <div className={`text-sm mt-1 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {achievement.year}
                          </div>
                        </div>
                      </div>

                      <h4 className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h4>

                      <p className={`text-sm font-medium mb-3 ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {achievement.subtitle}
                      </p>

                      <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {achievement.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className={`w-full h-1 rounded-full bg-gradient-to-r ${achievement.color} opacity-60`}></div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Associative Experience */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Associative Experience
              </h3>
              <p className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Leadership roles and contributions to student organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {associativeExperience.map((experience, index) => (
                  <div key={index} className={`group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      darkMode
                          ? 'bg-gray-800 border border-gray-700'
                          : 'bg-white border border-gray-100'
                  }`}>
                    {/* Photo Album Preview */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1 h-48">
                        {experience.photos.slice(0, 4).map((photo, photoIndex) => (
                            <div
                                key={photoIndex}
                                className={`relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 ${
                                    photoIndex === 3 && experience.photos.length > 4 ? 'relative' : ''
                                }`}
                                onClick={() => openAlbum(index, 'associative')}
                            >
                              <img
                                  src={photo.url}
                                  alt={photo.caption}
                                  className="w-full h-full object-cover"
                              />
                              {photoIndex === 3 && experience.photos.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        +{experience.photos.length - 4}
                                    </span>
                                  </div>
                              )}
                            </div>
                        ))}
                      </div>
                      <button
                          onClick={() => openAlbum(index, 'associative')}
                          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-70 transition-colors duration-200"
                      >
                        Voir album ({experience.photos.length})
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${experience.color} text-white`}>
                          {experience.icon}
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              darkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                          }`}>
                              {experience.category}
                          </span>
                          <div className={`text-sm mt-1 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {experience.year}
                          </div>
                        </div>
                      </div>

                      <h4 className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {experience.title}
                      </h4>

                      <p className={`text-sm font-medium mb-3 ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {experience.subtitle}
                      </p>

                      <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {experience.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className={`w-full h-1 rounded-full bg-gradient-to-r ${experience.color} opacity-60`}></div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Marathon & Running Experience */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Marathon & Running Experience
              </h3>
              <p className={`text-lg ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Athletic achievements and team participation with Sofrecom
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {marathonExperience.map((marathon, index) => (
                  <div key={index} className={`group rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                      darkMode
                          ? 'bg-gray-800 border border-gray-700'
                          : 'bg-white border border-gray-100'
                  }`}>
                    {/* Photo Album Preview */}
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-1 h-48">
                        {marathon.photos.slice(0, 4).map((photo, photoIndex) => (
                            <div
                                key={photoIndex}
                                className={`relative overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105 ${
                                    photoIndex === 3 && marathon.photos.length > 4 ? 'relative' : ''
                                }`}
                                onClick={() => openAlbum(index, 'marathon')}
                            >
                              <img
                                  src={photo.url}
                                  alt={photo.caption}
                                  className="w-full h-full object-cover"
                              />
                              {photoIndex === 3 && marathon.photos.length > 4 && (
                                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">
                                        +{marathon.photos.length - 4}
                                    </span>
                                  </div>
                              )}
                            </div>
                        ))}
                      </div>
                      <button
                          onClick={() => openAlbum(index, 'marathon')}
                          className="absolute top-2 right-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm hover:bg-opacity-70 transition-colors duration-200"
                      >
                        Voir album ({marathon.photos.length})
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${marathon.color} text-white`}>
                          {marathon.icon}
                        </div>
                        <div className="text-right">
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                              darkMode
                                  ? 'bg-gray-700 text-gray-300'
                                  : 'bg-gray-100 text-gray-700'
                          }`}>
                              {marathon.category}
                          </span>
                          <div className={`text-sm mt-1 ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {marathon.year}
                          </div>
                        </div>
                      </div>

                      <h4 className={`text-xl font-bold mb-2 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {marathon.title}
                      </h4>

                      <p className={`text-sm font-medium mb-3 ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {marathon.subtitle}
                      </p>

                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className={`text-xs ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {marathon.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className={`text-xs ${
                              darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}>
                            {marathon.distance}
                          </span>
                        </div>
                      </div>

                      <p className={`text-sm leading-relaxed ${
                          darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {marathon.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className={`w-full h-1 rounded-full bg-gradient-to-r ${marathon.color} opacity-60`}></div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
          {/* Call to Action */}
          <div className={`text-center p-8 rounded-xl ${
              darkMode
                  ? 'bg-gray-800 border border-gray-700'
                  : 'bg-white border border-gray-100'
          } shadow-lg`}>
            <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Ready for New Challenges
            </h3>
            <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Always seeking innovation and stimulating projects that push technological boundaries
            </p>
          </div>

          {/* Photo Album Modal */}
          {selectedAlbum !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
                <div className="max-w-4xl max-h-full p-4">
                  <div className="relative">
                    <button
                        onClick={closeAlbum}
                        className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors duration-200 z-10"
                    >
                      <X className="w-6 h-6" />
                    </button>

                    <div className="bg-white rounded-lg overflow-hidden">
                      {(() => {
                        const currentData = albumType === 'achievement'
                            ? enhancedAchievements[selectedAlbum]
                            : albumType === 'associative'
                                ? associativeExperience[selectedAlbum]
                                : marathonExperience[selectedAlbum];
                        const currentPhoto = currentData.photos[currentPhotoIndex];

                        return (
                            <>
                              <img
                                  src={currentPhoto.url}
                                  alt={currentPhoto.caption}
                                  className="w-full h-96 object-cover"
                              />

                              <div className="p-6">
                                <h4 className="font-bold text-gray-800 mb-2">
                                  {albumType === 'achievement' ? currentData.title : currentData.subtitle}
                                </h4>
                                <p className="text-gray-600 mb-4">
                                  {currentPhoto.caption}
                                </p>

                                {/* Marathon specific info */}
                                {albumType === 'marathon' && (
                                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                                      <div className="flex items-center gap-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>{currentData.location}</span>
                                      </div>
                                      <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{currentData.distance}</span>
                                      </div>
                                    </div>
                                )}

                                <div className="flex items-center justify-between">
                                  <button
                                      onClick={prevPhoto}
                                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                  >
                                    <ChevronLeft className="w-5 h-5 mr-1" />
                                    Précédent
                                  </button>

                                  <span className="text-gray-500 text-sm">
                                    {currentPhotoIndex + 1} / {currentData.photos.length}
                                  </span>

                                  <button
                                      onClick={nextPhoto}
                                      className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                                  >
                                    Suivant
                                    <ChevronRight className="w-5 h-5 ml-1" />
                                  </button>
                                </div>
                              </div>
                            </>
                        );
                      })()}
                    </div>
                  </div>
                </div>
              </div>
          )}
        </div>
      </section>
  );
};