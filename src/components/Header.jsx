// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#1E293B] shadow-lg border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start">
            <a href="#" className="text-2xl font-extrabold text-blue-400 hover:text-blue-300 transition duration-300">Anish Kumar</a>
          </div>
          <nav className="hidden md:flex space-x-8 items-center">
            {['about', 'experience', 'education', 'skills', 'projects'].map(item => (
              <a key={item} href={`#${item}`} className="text-base font-medium text-slate-300 hover:text-blue-400 transition duration-300 capitalize">
                {item}
              </a>
            ))}
            
            <a href="https://github.com/anish-kumar-001" target="_blank" className="text-slate-400 hover:text-blue-400 transition duration-300 ml-4" title="GitHub Profile">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.884-.015-1.745-2.784.603-3.37-.267-3.37-.267-.454-1.157-1.11-1.46-1.11-1.46-.908-.618.069-.607.069-.607 1.002.07 1.534 1.037 1.534 1.037.89 1.528 2.336 1.085 2.903.829.091-.645.349-1.085.634-1.334-2.228-.25-4.577-1.116-4.577-4.965 0-1.096.39-1.993 1.03-2.693-.103-.254-.447-1.272.098-2.658 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.502.336 1.91-1.296 2.748-1.026 2.748-1.026.546 1.386.202 2.404.098 2.658.64.7 1.03 1.597 1.03 2.693 0 3.858-2.35 4.71-4.585 4.958.358.31.678.928.678 1.874 0 1.353-.012 2.443-.012 2.775 0 .267.18.583.687.483C19.136 20.19 22 16.435 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
            
            <a href="https://linkedin.com/in/anish-kumar-2003-" target="_blank" className="text-slate-400 hover:text-blue-400 transition duration-300" title="LinkedIn Profile">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.528-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;