import React, { useRef } from 'react';
import { Code, Home, Mail, Github, MessageSquare, Instagram, FileCode, User } from 'lucide-react';

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const scrollToSection = (section: string) => {
    sectionsRef.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Keyboard */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
        <div className="grid grid-cols-3 gap-4 p-8 bg-black/50 backdrop-blur-lg rounded-2xl shadow-2xl">
          {[
            { icon: <Home size={24} />, label: 'HOME', color: 'bg-gray-700', section: 'home' },
            { icon: <Code size={24} />, label: 'CV', color: 'bg-gray-600', section: 'skills' },
            { icon: <Instagram size={24} />, label: 'IG', color: 'bg-gradient-to-br from-purple-500 to-pink-500', section: 'social' },
            { icon: <Mail size={24} />, label: '@', color: 'bg-amber-600', section: 'contact' },
            { icon: <User size={24} />, label: 'HIRE ME', color: 'bg-gray-700', section: 'hire' },
            { icon: <Github size={24} />, label: 'X', color: 'bg-gray-800', section: 'github' },
            { icon: <MessageSquare size={24} />, label: 'CALL ME', color: 'bg-blue-600', section: 'discord' },
            { icon: <FileCode size={24} />, label: 'DB', color: 'bg-pink-500', section: 'projects' },
            { icon: <Code size={24} />, label: 'BH', color: 'bg-blue-500', section: 'experience' },
          ].map((key, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(key.section)}
              className={`${key.color} w-24 h-24 rounded-xl flex flex-col items-center justify-center gap-2
                transform transition-all duration-200 hover:scale-95 hover:translate-y-1 active:translate-y-2
                shadow-lg hover:shadow-xl active:shadow-inner`}
            >
              {key.icon}
              <span className="text-xs font-bold">{key.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        <section ref={el => sectionsRef.current['home'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4">Matteo</h1>
            <p className="text-2xl text-gray-300">aka TNT_addict</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['skills'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-2xl mb-4">Swift</h3>
                <p>Medium proficiency</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-2xl mb-4">HTML/CSS</h3>
                <p>Medium proficiency</p>
              </div>
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-2xl mb-4">Python</h3>
                <p>Basic knowledge</p>
              </div>
            </div>
          </div>
        </section>

        <section ref={el => sectionsRef.current['social'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Social Media</h2>
            <p className="text-xl">Connect with me on social media!</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['contact'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Contact</h2>
            <p className="text-xl">Get in touch!</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['hire'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Hire Me</h2>
            <p className="text-xl">Looking for new opportunities</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['github'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">GitHub</h2>
            <p className="text-xl">Check out my projects</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['discord'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Discord</h2>
            <p className="text-xl">tntaddicts</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['projects'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Projects</h2>
            <p className="text-xl">My latest work</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['experience'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Experience</h2>
            <p className="text-xl">My journey in tech</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;