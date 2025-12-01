import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Brain, Cpu, Server, Layout, Users } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (category: string) => {
    if (category.includes('Deep')) return <Brain size={20} />;
    if (category.includes('Vision')) return <Cpu size={20} />;
    if (category.includes('Backend')) return <Server size={20} />;
    if (category.includes('Frontend')) return <Layout size={20} />;
    return <Users size={20} />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">Technical & Soft Skills</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust AI and software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((categoryGroup, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:border-blue-200 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-2 bg-slate-100 text-slate-700 rounded-md">
                  {getIcon(categoryGroup.category)}
                </div>
                <h3 className="font-bold text-lg text-slate-800">{categoryGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categoryGroup.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1.5 bg-slate-50 text-slate-700 text-sm font-medium rounded-lg border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-100 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;