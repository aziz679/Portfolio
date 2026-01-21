import React from 'react';
import { Link } from 'react-router-dom';
import { story, skills, funFacts } from '../data/expandedMock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { BookOpen, Target, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-sky-400">Me</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {story.intro}
          </p>
        </div>

        {/* Philosophy */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            My <span className="text-orange-400">Philosophy</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {story.philosophy.map((item, index) => {
              const icons = [Target, TrendingUp, BookOpen];
              const Icon = icons[index];
              return (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="text-sky-400">Skills</span> & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-slate-900/50 border-slate-800 p-8">
                <h3 className="text-xl font-bold text-white mb-6 capitalize">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-sky-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-sky-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Fun <span className="text-orange-400">Facts</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {funFacts.map((item, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <p className="text-slate-300 leading-relaxed">{item.fact}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
