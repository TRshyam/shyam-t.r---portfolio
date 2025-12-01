import React from 'react';
import { User, Target, Globe } from 'lucide-react';
import { ABOUT_CONTENT, FUTURE_GOALS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                <User size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Who I Am</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              {ABOUT_CONTENT}
            </p>
          </div>

          {/* Goals Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Future Goals</h3>
            </div>
            <p className="text-slate-600 leading-relaxed mb-6">
              {FUTURE_GOALS}
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 bg-white p-3 rounded-lg border border-slate-200 inline-flex">
              <Globe size={16} />
              <span>Planning to relocate to Germany</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;