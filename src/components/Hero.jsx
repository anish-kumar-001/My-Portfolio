// src/components/Hero.jsx
import React from 'react';
import AnishKumarImage from '../assets/Anish-kumar-profile.png'; 
// NOTE: I am using the .jpg extension as uploaded in the last step.

const Hero = () => {
  return (
    <section id="hero" className="py-20 md:py-32 flex flex-col md:flex-row items-center md:space-x-12 min-h-screen">
      
      {/* Profile Photo (LEFT side) */}
      <div className="flex-shrink-0 w-64 h-64 mb-8 md:mb-0 rounded-full flex items-center justify-center 
                  shadow-2xl shadow-slate-700/50 border-4 border-[var(--color-primary)] transition duration-500 hover:scale-105 
                  overflow-hidden bg-gradient-to-br from-[#121212] to-slate-800 mx-auto">
          <img 
            src={AnishKumarImage} 
            alt="Anish Kumar" 
            className="w-full h-full object-cover rounded-full p-1"
          />
      </div>

      {/* Text Content (RIGHT side) */}
      <div className="flex-grow text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
              <span style={{color: 'var(--color-primary)'}}>Anish</span> Kumar
          </h1>
          <h2 className="text-3xl font-semibold mt-2 mb-4">
              DevOps <span style={{color: 'var(--color-secondary)'}}>Engineer</span>
          </h2>
          <p className="text-base text-slate-400 mb-8 max-w-2xl md:max-w-full">
              Focused on mastering modern CI/CD, Infrastructure as Code (IaC), and container orchestration. My goal is to automate, optimize, and scale robust infrastructure solutions.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
              <a href="#projects" className="px-8 py-3 font-medium text-white rounded-lg shadow-xl bg-[var(--color-primary)] hover:opacity-90 transition duration-300 transform hover:scale-105">
                  Explore Projects 🛠️
              </a>
              <a href="your_resume.pdf" target="_blank" className="px-8 py-3 font-medium text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-secondary)]/10 transition duration-300 transform hover:scale-105">
                  Download Resume
              </a>
          </div>
      </div>
    </section>
  );
};
export default Hero;