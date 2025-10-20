// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skillItems = [
    { emoji: '🐧', label: 'Linux' },
    { emoji: '🐳', label: 'Docker' },
    { emoji: '☸️', label: 'Kubernetes' },
    { emoji: '☁️', label: 'AWS' },
    { emoji: '📜', label: 'Terraform / Ansible' },
    { emoji: '🔄', label: 'CI/CD (GitHub Actions)' },
    { emoji: '💾', label: 'Git / SCM' },
    { emoji: '💻', label: 'Shell Scripting' },
    { emoji: '🔥', label: 'Prometheus' },
    { emoji: '📈', label: 'Grafana' },
    { emoji: '🛡️', label: 'Basic DevSecOps' },
  ];

  return (
    <div id="skills" className="py-16">
      {/* FIX: Removed text-center so it aligns left by default on all screens */}
      <h3 className="section-header text-4xl font-bold text-white mb-10 md:text-left">DevOps & Technical Skills</h3>
      
      {/* FIX: Removed mx-auto to align description left */}
      <p className="text-base text-slate-400 mb-10 max-w-4xl">
        I am actively focusing on mastering the following core tools and technologies for infrastructure, deployment, and automation:
      </p>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skillItems.map((skill, index) => (
          <div 
            key={index} 
            className="card-pop text-center p-6 rounded-lg border border-slate-700 shadow-xl cursor-pointer"
            // FIX: Changed border color to use Primary Accent for consistency
            style={{ borderColor: 'var(--color-primary)' }}
          >
            {/* FIX: Changed emoji color to Primary Accent for consistency */}
            <span className="text-5xl" style={{color: 'var(--color-primary)'}}>{skill.emoji}</span>
            <p className="mt-3 text-sm font-medium text-slate-300">{skill.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;