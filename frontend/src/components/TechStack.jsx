import React from 'react';
import { Card } from './ui/card';

const TechStack = ({ techStack }) => {
  const allTools = [
    ...techStack.design,
    ...techStack.aiAutomation,
    ...techStack.marketing,
    ...techStack.tools,
    ...techStack.development
  ];
  
  const categoryColors = {
    design: 'from-purple-500 to-pink-500',
    ai: 'from-sky-500 to-blue-500',
    automation: 'from-orange-500 to-red-500',
    marketing: 'from-green-500 to-emerald-500',
    crm: 'from-yellow-500 to-orange-500',
    web: 'from-indigo-500 to-purple-500',
    communication: 'from-blue-500 to-cyan-500',
    video: 'from-red-500 to-pink-500',
    tools: 'from-slate-500 to-slate-600',
    development: 'from-sky-500 to-cyan-500'
  };
  
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="tech-stack">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Tech <span className="text-orange-400">Arsenal</span>
          </h2>
          <p className="text-xl text-slate-400">
            Tools I've mastered (and some I've probably over-engineered) 🛠️
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allTools.map((tool, index) => (
            <Card 
              key={index} 
              className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoryColors[tool.category]} opacity-20 group-hover:opacity-30 transition-opacity mb-3`} />
                <span className="text-white font-medium text-sm group-hover:text-sky-400 transition-colors">
                  {tool.name}
                </span>
                <span className="text-slate-500 text-xs mt-1 capitalize">
                  {tool.category}
                </span>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-sky-400 mb-1">10+</div>
            <div className="text-slate-400 text-sm">Design Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-1">15+</div>
            <div className="text-slate-400 text-sm">Marketing Platforms</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-1">8+</div>
            <div className="text-slate-400 text-sm">AI Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-1">12+</div>
            <div className="text-slate-400 text-sm">Automation Tools</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-1">20+</div>
            <div className="text-slate-400 text-sm">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
