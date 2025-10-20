// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-slate-500">
            <p>&copy; 2025 Anish Kumar. Built for Learning & Showcase.</p>
            <div className="mt-4 space-x-4">
                <a href="https://github.com/anish-kumar-001" target="_blank" className="text-slate-400 hover:text-blue-400 transition duration-300">GitHub</a>
                <a href="https://linkedin.com/in/anish-kumar-2003-" target="_blank" className="text-slate-400 hover:text-blue-400 transition duration-300">LinkedIn</a>
            </div>
        </div>
    </footer>
  );
};
export default Footer;