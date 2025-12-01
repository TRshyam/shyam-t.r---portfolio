import React from 'react';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <a 
            href={SOCIAL_LINKS.github} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
          >
            <Github size={20} />
            <span>View more on GitHub</span>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full group"
            >
              <div className="p-6 md:p-8 flex-1">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  {/* Optional: Add link icon if live link exists, currently linking to github as generic placeholder */}
                  {/* <a href="#" className="text-slate-400 hover:text-blue-600"><ExternalLink size={20} /></a> */}
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6 space-y-2">
                  {project.points.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;