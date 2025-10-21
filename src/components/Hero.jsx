// src/components/Hero.jsx
import React, { useState } from 'react';
// Correctly importing assets
import AnishKumarImage from '../assets/Anish-kumar-profile.png'; 
import ResumePDF from '../assets/anish_kumar_resume.pdf'; 

const Hero = () => {
  // State to control the visibility of the download confirmation modal
  const [showConfirm, setShowConfirm] = useState(false);

  // Function to initiate the download and hide the modal
  const handleDownload = () => {
    // We don't need a direct click listener on the anchor tag here because 
    // the anchor's 'download' attribute handles the file download when its href is accessed.
    // Instead, we just hide the modal after confirmation.
    setShowConfirm(false);
  };

  return (
    <section id="hero" className="py-20 md:py-32 flex flex-col md:flex-row items-center md:space-x-12 min-h-screen">
      
      {/* -------------------- DOWNLOAD CONFIRMATION MODAL -------------------- */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
          <div className="bg-[#1E293B] p-6 md:p-8 rounded-xl shadow-2xl border border-[var(--color-primary)] max-w-sm w-full text-center">
            <h4 className="text-xl font-semibold text-white mb-4">Confirm Download</h4>
            <p className="text-slate-300 mb-6">
              Are you sure you want to download Anish's resume (PDF)?
            </p>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={() => setShowConfirm(false)}
                className="px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition"
              >
                Cancel
              </button>
              
              {/* This anchor tag handles the actual download when the modal is open. */}
              <a 
                href={ResumePDF} 
                download="Anish_Kumar_Resume" 
                onClick={handleDownload} // Runs handleDownload to close modal
                className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg hover:opacity-90 transition"
              >
                Yes, Download
              </a>
            </div>
          </div>
        </div>
      )}
      {/* -------------------- END MODAL -------------------- */}


      {/* Profile Photo (LEFT side) */}
      <div className="flex-shrink-0 w-64 h-64 mb-8 md:mb-0 rounded-full flex items-center justify-center 
                  shadow-2xl shadow-slate-700/50 border-4 border-[var(--color-primary)] transition duration-500 hover:scale-105 
                  overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-800 mx-auto">
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
              {/* Button to SHOW the confirmation modal */}
              <button 
                onClick={() => setShowConfirm(true)} // Toggles the state to true
                className="px-8 py-3 font-medium text-[var(--color-secondary)] border-2 border-[var(--color-secondary)] rounded-lg hover:bg-[var(--color-secondary)]/10 transition duration-300 transform hover:scale-105"
              >
                  Download Resume
              </button>
          </div>
      </div>
    </section>
  );
};
export default Hero;