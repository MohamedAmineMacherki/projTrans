import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: t('contact.email'),
      content: "mohamedamine.macherki@ieee.org",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t('contact.phone'),
      content: "+216 56586061", // Note: This number is for Oudref, Gabès Governorate, Tunisia
      color: "from-green-600 to-green-700"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t('contact.location'),
      content: t('hero.location'),
      color: "from-orange-600 to-orange-700"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/MohamedAmineMacherki",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-amine-macherki-b62a65200/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Credly", // Renamed from Twitter to Credly as per the URL
      url: "https://www.credly.com/users/mohamed-amine-machrki",
      color: "hover:text-blue-400"
    }
  ];

  return (
      <section id="contact" className={`py-20 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
      } transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {t('contact.title')}
            </h2>
            <p className={`text-xl ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                            darkMode
                                ? 'bg-gray-900 border border-gray-700'
                                : 'bg-white border border-gray-100'
                        }`}
                    >
                      <div className="flex items-center">
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white mr-4`}>
                          {info.icon}
                        </div>
                        <div>
                          <h3 className={`text-lg font-semibold ${
                              darkMode ? 'text-white' : 'text-gray-900'
                          }`}>
                            {info.title}
                          </h3>
                          <p className={`text-sm ${
                              darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {info.content}
                          </p>
                        </div>
                      </div>
                    </div>
                ))}
              </div>

              {/* Social Links */}
              <div className={`mt-8 p-6 rounded-xl shadow-lg ${
                  darkMode
                      ? 'bg-gray-900 border border-gray-700'
                      : 'bg-white border border-gray-100'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {t('contact.social')}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                      <a
                          key={index}
                          href={social.url}
                          className={`p-3 rounded-lg transition-all duration-200 ${
                              darkMode
                                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          } ${social.color}`}
                          target="_blank" // Added target="_blank" for external links
                          rel="noopener noreferrer" // Added rel="noopener noreferrer" for security
                      >
                        {social.icon}
                      </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className={`p-8 rounded-xl shadow-lg ${
                  darkMode
                      ? 'bg-gray-900 border border-gray-700'
                      : 'bg-white border border-gray-100'
              }`}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.name')}
                      </label>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                              darkMode
                                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder={t('contact.form.name.placeholder')}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${
                          darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {t('contact.form.email')}
                      </label>
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                              darkMode
                                  ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                          }`}
                          placeholder={t('contact.form.email.placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('contact.form.subject')}
                    </label>
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                            darkMode
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder={t('contact.form.subject.placeholder')}
                    />
                  </div>

                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {t('contact.form.message')}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        required
                        className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none ${
                            darkMode
                                ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400'
                                : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                        placeholder={t('contact.form.message.placeholder')}
                    />
                  </div>

                  <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center ${
                          isSubmitting
                              ? 'bg-gray-400 cursor-not-allowed'
                              : 'bg-gradient-to-r from-blue-600 to-orange-600 hover:shadow-lg hover:scale-105'
                      } text-white`}
                  >
                    {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    ) : (
                        <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};