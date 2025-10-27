// src/components/Experience.jsx
import React from 'react';

const Experience = () => {
  // Custom Icon for Experience
  const ExperienceIcon = () => (
    // Icon color set to primary accent
    <svg className="w-8 h-8 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/></svg>
  );

  return (
    <div id="experience" className="py-16">
      <h3 className="section-header text-4xl font-bold text-white mb-10 text-center md:text-left">Professional Experience</h3>
      <div className="space-y-8 max-w-4xl mx-auto">
          
          {/* Experience Card */}
          <div className="card-pop p-8 rounded-xl shadow-xl border border-slate-700 flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-8 transition duration-300 hover:ring-2 hover:ring-blue-500"
               style={{borderColor: 'var(--color-primary)'}}> {/* FIX: Set border color to PRIMARY */}
              
              <div className="w-16 h-16 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500 mx-auto md:mx-0">
                  <ExperienceIcon />
              </div>
              
              <div className="text-center md:text-left">
                  {/* FIX: Set heading color to PRIMARY */}
                  <h4 className="text-2xl font-semibold" style={{color: 'var(--color-primary)'}}>DevOps Engineer</h4>
                  <p className="text-base text-slate-300">ToXSL Technologies</p>
                  <p className="text-md font-bold text-white mt-2">Sep 2025 - Present</p>
                  <p className="text-base text-slate-400 mt-2">
                      Focused on practical implementation of DevOps methodologies and toolchains, including CI/CD automation, cloud services, and container orchestration.
                  </p>
              </div>
          </div>
      </div>
    </div>
  );
};
export default Experience;