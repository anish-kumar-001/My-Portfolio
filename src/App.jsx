// src/App.jsx
import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        {/* Sections with unique IDs for navigation */}
        <div className="space-y-20 pt-10"> 
          <section id="about" className="pt-10"><About /></section>
          <section id="experience" className="pt-10"><Experience /></section>
          <section id="education" className="pt-10"><Education /></section>
          <section id="skills" className="pt-10"><Skills /></section>
          <section id="projects" className="pt-10"><Projects /></section>
          <section id="contact" className="pt-10 pb-24"><Contact /></section>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;