// src/components/Education.jsx
import React from 'react';

const Education = () => {
  // Default Book Icon for all entries
  const EducationIcon = () => (
      <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24"><path d="M4 19V6.5l8-3 8 3V19c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2zm12 0h2V8l-6-2.25L6 8v11h2v-5h8v5z"/></svg>
  );

  const EducationCard = ({ title, institution, description }) => (
    // Applied card-pop class and primary color styling to all individual cards
    <div className="card-pop p-6 rounded-xl shadow-lg border border-slate-700 flex items-start space-x-4 transition duration-300 hover:ring-2 hover:ring-blue-500"
         style={{borderColor: 'var(--color-primary)'}}>
        <div className="w-12 h-12 flex-shrink-0 bg-blue-900/40 rounded-full flex items-center justify-center border border-blue-500">
            <EducationIcon />
        </div>
        <div>
            <h4 className="text-xl font-semibold" style={{color: 'var(--color-primary)'}}>{title}</h4>
            <p className="text-base text-slate-300">{institution}</p>
            <p className="text-sm text-slate-400 mt-1">{description}</p>
        </div>
    </div>
  );

  return (
    <div id="education" className="py-16">
      <h3 className="section-header text-4xl font-bold text-white mb-10 text-center md:text-left">Academic Background</h3>
      
      {/* Grid container to display all four cards. Uses 1 column on mobile and 2 on desktop. */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          <EducationCard 
              title="Master of Computer Applications (MCA)"
              institution="I.K. Gujral Punjab Technical University (IKGPTU)"
              description="Specialization in Advanced Software Development and IT Infrastructure."
          />
          <EducationCard 
              title="Bachelor of Computer Applications (BCA)"
              institution="Himachal Pradesh University (HPU)"
              description="Foundation in programming, databases, and computer systems."
          />
          <EducationCard 
              title="Intermediate (10+2)"
              institution="H.P. Bose Dharamshala"
              description="Focused on core academic disciplines."
          />
          <EducationCard 
              title="Matriculation (10th)"
              institution="H.P. Bose Dharamshala"
              description="Foundational High School Education."
          />

      </div>
    </div>
  );
};
export default Education;