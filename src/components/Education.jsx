// src/components/Education.jsx
import React from 'react';

const Education = () => {
  // Default Book Icon for all entries
  const EducationIcon = () => (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19V6.5l8-3 8 3V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2zm12 0h2V8l-6-2.25L6 8v11h2v-5h8v5z"/></svg>
  );

  return (
    <div id="education" className="py-16">
      <h3 className="section-header text-4xl font-bold text-white mb-10 text-center md:text-left">Academic Background</h3>
      <div className="space-y-6 max-w-4xl mx-auto">

          {/* 1. MCA Degree (Post-Graduate) */}
          <div className="card-pop p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4 transition duration-300 hover:ring-2 hover:ring-blue-500"
               style={{borderColor: 'var(--color-primary)'}}>
              <div className="w-12 h-12 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500">
                  <EducationIcon />
              </div>
              <div>
                  <h4 className="text-xl font-semibold" style={{color: 'var(--color-primary)'}}>Master of Computer Applications (MCA)</h4>
                  <p className="text-base text-slate-300">I.K. Gujral Punjab Technical University (IKPTU)</p>
                  <p className="text-sm text-slate-400 mt-1">Specialization in Advanced Software Development and IT Infrastructure.</p>
              </div>
          </div>

          {/* 2. BCA Degree (Under-Graduate) */}
          <div className="card-pop p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4 transition duration-300 hover:ring-2 hover:ring-blue-500"
               style={{borderColor: 'var(--color-primary)'}}>
              <div className="w-12 h-12 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500">
                  <EducationIcon />
              </div>
              <div>
                  <h4 className="text-xl font-semibold" style={{color: 'var(--color-primary)'}}>Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-base text-slate-300">Himachal Pradesh University (HPU)</p>
                  <p className="text-sm text-slate-400 mt-1">Foundation in programming, databases, and computer systems.</p>
              </div>
          </div>

          {/* 3. Intermediate (10+2) */}
          <div className="card-pop p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4 transition duration-300 hover:ring-2 hover:ring-blue-500"
               style={{borderColor: 'var(--color-primary)'}}>
              <div className="w-12 h-12 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500">
                  <EducationIcon />
              </div>
              <div>
                  <h4 className="text-xl font-semibold" style={{color: 'var(--color-primary)'}}>Intermediate (10+2)</h4>
                  <p className="text-base text-slate-300">H.P. Bose Dharamshala</p>
                  <p className="text-sm text-slate-400 mt-1">Focus on Science and Computer Fundamentals.</p>
              </div>
          </div>

          {/* 4. Matriculation (10th) */}
          <div className="card-pop p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4 transition duration-300 hover:ring-2 hover:ring-blue-500"
               style={{borderColor: 'var(--color-primary)'}}>
              <div className="w-12 h-12 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500">
                  <EducationIcon />
              </div>
              <div>
                  <h4 className="text-xl font-semibold" style={{color: 'var(--color-primary)'}}>Matriculation (10th)</h4>
                  <p className="text-base text-slate-300">H.P. Bose Dharamshala</p>
                  <p className="text-sm text-slate-400 mt-1">Foundational High School Education.</p>
              </div>
          </div>

      </div>
    </div>
  );
};
export default Education;