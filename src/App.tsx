import React, { useRef, useEffect, useState } from 'react';
import { Code, Home, Mail, Github, MessageSquare, Instagram, FileCode, User } from 'lucide-react';

function App() {
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    sectionsRef.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Keyboard */}
      <div 
        className={`
          fixed z-50 transition-all duration-700 ease-in-out transform
          ${isScrolled 
            ? 'left-8 top-8' 
            : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
          }
        `}
      >
        <div className={`
          relative
          grid grid-cols-3 gap-4 p-8
          bg-gradient-to-br from-gray-900 to-black
          rounded-2xl
          transition-all duration-700
          ${isScrolled ? 'w-[280px]' : 'w-[360px]'}
          perspective-1000
          transform-style-preserve-3d
          rotate-y-[-15deg]
          rotate-x-[10deg]
          before:absolute before:inset-0
          before:rounded-2xl
          before:bg-gradient-to-br before:from-gray-700/20 before:to-transparent
          before:transform before:rotate-180
          after:absolute after:inset-0
          after:rounded-2xl
          after:bg-gradient-to-br after:from-gray-800/30 after:to-transparent
          shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_-2px_0_rgba(255,255,255,0.1),0_0_20px_rgba(0,0,0,0.8)]
          border border-gray-800/50
          hover:rotate-y-[-5deg]
          hover:rotate-x-[5deg]
          transition-transform
        `}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px'
        }}
        >
          {[
            { icon: <Home size={24} />, label: 'HOME', color: 'from-gray-700 to-gray-800', section: 'home' },
            { icon: <Code size={24} />, label: 'CV', color: 'from-gray-600 to-gray-700', section: 'skills' },
            { icon: <Instagram size={24} />, label: 'IG', color: 'from-purple-500 to-pink-500', section: 'social' },
            { icon: <Mail size={24} />, label: '@', color: 'from-amber-600 to-amber-700', section: 'contact' },
            { icon: <User size={24} />, label: 'HIRE ME', color: 'from-gray-700 to-gray-800', section: 'hire' },
            { icon: <Github size={24} />, label: 'X', color: 'from-gray-800 to-gray-900', section: 'github' },
            { icon: <MessageSquare size={24} />, label: 'CALL ME', color: 'from-blue-600 to-blue-700', section: 'discord' },
            { icon: <FileCode size={24} />, label: 'DB', color: 'from-pink-500 to-pink-600', section: 'projects' },
            { icon: <Code size={24} />, label: 'BH', color: 'from-blue-500 to-blue-600', section: 'experience' },
          ].map((key, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(key.section)}
              className={`
                relative
                bg-gradient-to-br ${key.color}
                w-full aspect-square
                rounded-xl
                flex flex-col items-center justify-center gap-2
                transform transition-all duration-200
                before:absolute before:inset-0
                before:rounded-xl
                before:bg-gradient-to-br before:from-white/20 before:to-transparent
                after:absolute after:inset-0
                after:rounded-xl
                after:bg-gradient-to-br after:from-black/40 after:to-transparent
                after:transform after:rotate-180
                shadow-[0_8px_16px_rgba(0,0,0,0.4),inset_0_-8px_8px_rgba(0,0,0,0.3)]
                hover:shadow-[0_4px_8px_rgba(0,0,0,0.3),inset_0_-4px_4px_rgba(0,0,0,0.2)]
                hover:translate-y-1
                active:shadow-[0_2px_4px_rgba(0,0,0,0.2),inset_0_2px_2px_rgba(0,0,0,0.3)]
                active:translate-y-2
                overflow-hidden
                transform-style-preserve-3d
                hover:translate-z-2
                group
              `}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative z-10 flex flex-col items-center transform transition-transform active:scale-95">
                <div className="transform-gpu transition-transform group-hover:scale-90 group-active:scale-75">
                  {key.icon}
                </div>
                <span className="text-xs font-bold mt-2 whitespace-nowrap">{key.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        <section ref={el => sectionsRef.current['home'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Matteo</h1>
            <p className="text-2xl text-gray-300">aka TNT_addict</p>
          </div>
        </section>

        <section ref={el => sectionsRef.current['skills'] = el} className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                <h3 className="text-2xl mb-4">Swift</h3>
                <p>Medium proficiency</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all">
                <h3 className="text-2xl mb-4">HTML/CSS</h3>
                <p>Medium proficiency</p>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition-all">
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