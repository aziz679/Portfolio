import React, { useState } from 'react';
import { Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const ExperienceItem = ({ exp, isLast }) => {
  const [expandedAchievements, setExpandedAchievements] = useState({});
  
  const toggleAchievement = (index) => {
    setExpandedAchievements(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div className="relative">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-sky-500 to-slate-800" />
      )}
      
      <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300 ml-0 md:ml-16">
        {/* Timeline dot */}
        <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-slate-900 border-4 border-sky-500 flex items-center justify-center hidden md:flex">
          <Briefcase className="w-5 h-5 text-sky-400" />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
            <p className="text-sky-400 font-semibold text-lg">{exp.company}</p>
            <p className="text-slate-500 text-sm">{exp.location}</p>
          </div>
          <div className="text-orange-400 font-medium mt-2 md:mt-0">{exp.period}</div>
        </div>
        
        <p className="text-slate-300 mb-6 italic">{exp.description}</p>
        
        <div className="space-y-4">
          {exp.achievements.map((achievement, index) => (
            <div key={index} className="border-l-2 border-slate-700 pl-4 hover:border-sky-500 transition-colors">
              <div 
                className="flex items-start justify-between cursor-pointer group"
                onClick={() => toggleAchievement(index)}
              >
                <h4 className="text-white font-semibold group-hover:text-sky-400 transition-colors flex-1">
                  {achievement.title}
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-slate-400 hover:text-sky-400 ml-2"
                >
                  {expandedAchievements[index] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </div>
              
              {expandedAchievements[index] && (
                <div className="mt-3 space-y-2 animate-fade-in">
                  <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
                  <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-3 mt-2">
                    <p className="text-sky-300 text-sm font-medium">💪 Impact:</p>
                    <p className="text-slate-300 text-sm mt-1">{achievement.impact}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

const Experience = ({ experience }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Journey: From <span className="text-orange-400">Chaos</span> to <span className="text-sky-400">Conversions</span>
          </h2>
          <p className="text-xl text-slate-400">
            3 years of turning "that's impossible" into "that's done" ✨
          </p>
        </div>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <ExperienceItem 
              key={exp.id} 
              exp={exp} 
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
