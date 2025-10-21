// src/components/Projects.jsx
import React from 'react';

const Projects = () => {
  const GitHubIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.83 9.504.5.092.682-.217.682-.483 0-.237-.008-.884-.015-1.745-2.784.603-3.37-.267-3.37-.267-.454-1.157-1.11-1.46-1.11-1.46-.908-.618.069-.607.069-.607 1.002.07 1.534 1.037 1.534 1.037.89 1.528 2.336 1.085 2.903.829.091-.645.349-1.085.634-1.334-2.228-.25-4.577-1.116-4.577-4.965 0-1.096.39-1.993 1.03-2.693-.103-.254-.447-1.272.098-2.658 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.502.336 1.91-1.296 2.748-1.026 2.748-1.026.546 1.386.202 2.404.098 2.658.64.7 1.03 1.597 1.03 2.693 0 3.858-2.35 4.71-4.585 4.958.358.31.678.928.678 1.874 0 1.353-.012 2.443-.012 2.775 0 .267.18.583.687.483C19.136 20.19 22 16.435 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
  );

  return (
    <div id="projects" className="py-16">
      <h3 className="section-header text-4xl font-bold text-white mb-10 text-center md:text-left">Key DevOps Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Project 1: Docker Monitoring Stack */}
          <a href="https://github.com/anish-kumar-001/Docker-Monitoring-Stack-Project.git" target="_blank" className="block transform transition duration-300 hover:scale-[1.01]">
              <div className="card-pop p-8 rounded-xl shadow-2xl border border-slate-700 flex flex-col h-full hover:ring-2" style={{borderColor: 'var(--color-primary)'}}>
                  <h4 className="text-2xl font-semibold mb-3" style={{color: 'var(--color-primary)'}}>
                    📊 Monitoring Stack
                  </h4>
                  <p className="text-base text-slate-400 flex-grow">
                      DevOps project providing **end-to-end observability** using **Prometheus** and **Grafana** deployed via Docker Compose on AWS EC2.
                  </p>
                  <div className="mt-5 space-x-2">
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">AWS EC2</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Prometheus</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Grafana</span>
                  </div>
                  <span className="mt-4 font-medium flex items-center" style={{color: 'var(--color-primary)'}}>
                      View GitHub Repo <GitHubIcon />
                  </span>
              </div>
          </a>
          
          {/* Project 2: Containerized 3-Tier User Manager */}
          <a href="https://github.com/anish-kumar-001/containerized-fullstack-app" target="_blank" className="block transform transition duration-300 hover:scale-[1.01]">
              <div className="card-pop p-8 rounded-xl shadow-2xl border border-slate-700 flex flex-col h-full hover:ring-2" style={{borderColor: 'var(--color-primary)'}}>
                  <h4 className="text-2xl font-semibold mb-3" style={{color: 'var(--color-primary)'}}>
                    🐳 3-Tier Container Orchestration
                  </h4>
                  <p className="text-base text-slate-400 flex-grow">
                      Full-stack application (Node/MySQL/Nginx) orchestrated using **Docker Compose** with **Multi-Stage Builds** for image optimization and networking.
                  </p>
                  <div className="mt-5 space-x-2">
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Docker</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Docker Compose</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Nginx</span>
                  </div>
                  <span className="mt-4 font-medium flex items-center" style={{color: 'var(--color-primary)'}}>
                      View Source Code <GitHubIcon />
                  </span>
              </div>
          </a>
          
          {/* Project 3: CI/CD Portfolio Pipeline (Standardized to Primary Color) */}
          <a href="https://github.com/anish-kumar-001/My-Portfolio" target="_blank" className="block md:col-span-2 transform transition duration-300 hover:scale-[1.01]">
              <div className="card-pop p-8 rounded-xl shadow-2xl border border-slate-700 flex flex-col h-full hover:ring-2" style={{borderColor: 'var(--color-primary)'}}> 
                  <h4 className="text-2xl font-semibold mb-3" style={{color: 'var(--color-primary)'}}>
                    🔄 CI/CD Portfolio Pipeline 
                  </h4>
                  <p className="text-base text-slate-400 flex-grow">
                      This live site's pipeline is a demonstration of **DevOps automation**: zero-cost, automated deployment using **GitHub Actions** and **GitHub Pages** on every push to the `main` branch. This proves I can ship code reliably.
                  </p>
                  <div className="mt-5 space-x-2">
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">GitHub Actions</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">CI/CD</span>
                      <span className="inline-block bg-[var(--color-primary)]/40 text-[var(--color-primary)] text-xs font-medium px-3 py-1 rounded-full">Automation</span>
                  </div>
                  <span className="mt-4 font-medium flex items-center" style={{color: 'var(--color-primary)'}}>
                      View Source Code <GitHubIcon />
                  </span>
              </div>
          </a>
      </div>
    </div>
  );
};
export default Projects;
