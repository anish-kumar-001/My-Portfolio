// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div id="about" className="py-16">
      <h3 className="section-header text-4xl font-bold text-white mb-10 text-center md:text-left">About Me</h3>
      <div className="card-pop p-8 rounded-xl shadow-2xl border border-slate-700 mx-auto max-w-4xl">
          <p className="text-base text-slate-300 mb-4">
              I am a dedicated DevOps Engineer focused on optimizing software delivery pipelines and infrastructure management. I leverage modern practices and a strong academic background in Computer Applications to drive efficiency and reliability.
          </p>
          <p className="text-base text-slate-300">
              My core expertise centers on CI/CD pipeline automation, Infrastructure as Code (IaC), and container orchestration using tools like Docker and Kubernetes to build scalable and robust solutions.
          </p>
      </div>
    </div>
  );
};
export default About;