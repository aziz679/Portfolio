import React from 'react';
import { workExperience, quickFacts } from '../data/showcaseMock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Briefcase, Zap, TrendingUp } from 'lucide-react';

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How I <span className="text-sky-400">Get Things Done</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Not a chronological CV. These are the big wins, the systems I built, and the problems I actually solved.
          </p>
        </div>

        {/* Quick Facts */}
        <Card className="bg-gradient-to-r from-sky-500/10 to-orange-500/10 border-sky-500/20 p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-start gap-2">
                <Zap className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{fact}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Work Experience */}
        <div className="space-y-12">
          {workExperience.map((work, index) => (
            <div key={index} className="relative">
              {index !== workExperience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-sky-500 to-slate-800 hidden md:block" />
              )}
              
              <Card className="bg-slate-900/50 border-slate-800 p-8 md:p-12 hover:border-sky-500/30 transition-all duration-300 ml-0 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-12 h-12 rounded-full bg-slate-900 border-4 border-sky-500 flex items-center justify-center hidden md:flex">
                  <Briefcase className="w-5 h-5 text-sky-400" />
                </div>
                
                {/* Company Header */}
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h2 className="text-4xl font-bold text-white mb-2">{work.company}</h2>
                      <p className="text-sky-400 font-semibold text-xl mb-2">{work.role}</p>
                      <div className="flex flex-wrap gap-3 items-center">
                        <span className="text-slate-500">{work.period}</span>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                          {work.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-4 mt-4">
                    <p className="text-sky-300 font-semibold text-lg">{work.headline}</p>
                  </div>
                </div>
                
                {/* Big Wins */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-orange-400" />
                    The Big Wins
                  </h3>
                  
                  {work.bigWins.map((win, winIndex) => (
                    <Card key={winIndex} className="bg-slate-800/50 border-slate-700 p-6 hover:border-sky-500/30 transition-all duration-300">
                      <h4 className="text-2xl font-bold text-white mb-3">{win.title}</h4>
                      
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-2">
                          <span className="text-green-400 font-bold">🎯 Impact:</span>
                          <span className="text-green-300 font-semibold">{win.impact}</span>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 leading-relaxed text-lg">{win.story}</p>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <Card className="bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700 p-12 mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Like What You See?
          </h2>
          <p className="text-xl text-slate-400 mb-6">
            I'm always interested in challenging problems and ambitious projects.
          </p>
          <a href="/contact">
            <button className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105">
              Let's Talk
            </button>
          </a>
        </Card>
      </div>
    </div>
  );
};

export default WorkPage;
