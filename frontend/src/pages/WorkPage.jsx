import React, { useState } from 'react';
import { workExperience, education, certifications } from '../data/workExperienceData';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Briefcase, Zap, TrendingUp, ChevronDown, ChevronUp, Award, GraduationCap, Target, ArrowRight } from 'lucide-react';

const BigWinCard = ({ win }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 md:p-8 hover:border-sky-500/30 transition-all duration-300 group">
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{win.icon}</div>
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{win.title}</h4>
              <p className="text-sky-400 font-medium mb-3">{win.subtitle}</p>
              <p className="text-slate-400 text-sm italic">{win.problem}</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-sky-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-6 space-y-6 animate-fade-in">
          {/* STAR Format */}
          {win.situation && (
            <div>
              <h5 className="text-white font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4 text-orange-400" />
                Situation
              </h5>
              <p className="text-slate-300 leading-relaxed">{win.situation}</p>
            </div>
          )}
          
          {win.task && (
            <div>
              <h5 className="text-white font-semibold mb-2">Task</h5>
              <p className="text-slate-300 leading-relaxed">{win.task}</p>
            </div>
          )}
          
          {win.action && (
            <div>
              <h5 className="text-white font-semibold mb-3">⚙️ Action Taken</h5>
              <ul className="space-y-2">
                {win.action.map((item, idx) => (
                  <li key={idx} className="text-slate-300 flex items-start gap-2">
                    <ArrowRight className="w-4 h-4 text-sky-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Impact */}
          <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
            <h5 className="text-green-400 font-semibold mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Impact
            </h5>
            <p className="text-green-300 font-medium">{win.impact}</p>
          </div>
          
          {/* Metrics Table */}
          {win.metrics && win.metrics.length > 0 && (
            <div>
              <h5 className="text-white font-semibold mb-3">By the Numbers</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {win.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <div className="text-sm text-slate-400 mb-1">{metric.label}</div>
                    <div className="text-xl font-bold text-sky-400">
                      {metric.value || metric.improvement || metric.before}
                    </div>
                    {metric.after && (
                      <div className="text-xs text-green-400 mt-1">
                        {metric.before} → {metric.after}
                      </div>
                    )}
                    {(metric.impact || metric.timeframe || metric.comparison) && (
                      <div className="text-xs text-slate-500 mt-1">
                        {metric.impact || metric.timeframe || metric.comparison}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Tools Used */}
          <div>
            <h5 className="text-white font-semibold mb-3">Tools Used</h5>
            <div className="flex flex-wrap gap-2">
              {win.tools.map((tool, idx) => (
                <Badge key={idx} variant="outline" className="border-sky-500/30 text-sky-400">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

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

        {/* Ralvie AI - Main Experience */}
        <div className="mb-16">
          <Card className="bg-slate-900/50 border-slate-800 p-8 md:p-12 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-sky-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-2">{workExperience.ralvie.company}</h2>
                    <p className="text-sky-400 font-semibold text-xl mb-2">{workExperience.ralvie.role}</p>
                    <div className="flex flex-wrap gap-3 items-center text-slate-500">
                      <span>{workExperience.ralvie.period}</span>
                      <span>•</span>
                      <span>{workExperience.ralvie.duration}</span>
                      <Badge variant="secondary" className="bg-orange-500/20 text-orange-400">
                        {workExperience.ralvie.type}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-4">{workExperience.ralvie.context}</p>
                
                <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-4 mt-4">
                  <p className="text-sky-300 font-medium">💼 {workExperience.ralvie.teamSize}</p>
                </div>
              </div>
            </div>
            
            {/* Company Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {workExperience.ralvie.companyMetrics.map((metric, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-sky-400 mb-1">{metric.value}</div>
                  <div className="text-xs text-slate-400">{metric.label}</div>
                  {metric.achievement && (
                    <div className="text-xs text-green-400 mt-1">{metric.achievement}</div>
                  )}
                </div>
              ))}
            </div>
          </Card>
          
          {/* Big Wins */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-orange-400" />
              The Big Wins
            </h3>
            <div className="space-y-4">
              {workExperience.ralvie.bigWins.map((win, index) => (
                <BigWinCard key={index} win={win} />
              ))}
            </div>
          </div>
        </div>

        {/* Previous Experience */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-orange-400">Before Ralvie:</span> The Foundation
          </h2>
          <p className="text-xl text-slate-400 mb-8">Cut my teeth managing ₹8Cr in ad spend across education clients. Learned how marketing works at scale.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* ISBM */}
            <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{workExperience.isbm.company}</h3>
                <p className="text-sky-400 font-semibold mb-2">{workExperience.isbm.role}</p>
                <div className="flex flex-wrap gap-2 items-center text-sm text-slate-500 mb-3">
                  <span>{workExperience.isbm.period}</span>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                    {workExperience.isbm.type}
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm">{workExperience.isbm.context}</p>
              </div>
              
              <div className="space-y-3 mb-4">
                {workExperience.isbm.achievements.map((achievement, idx) => (
                  <div key={idx} className="border-l-2 border-slate-700 pl-3 hover:border-sky-500 transition-colors">
                    <h4 className="text-white font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-slate-400 text-xs mb-1">{achievement.description}</p>
                    <p className="text-green-400 text-xs font-medium">{achievement.impact}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {workExperience.isbm.metrics.slice(0, 4).map((metric, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded p-2 text-center">
                    <div className="text-lg font-bold text-sky-400">{metric.value || metric.improvement || metric.increase}</div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Presenova */}
            <Card className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-2">{workExperience.presenova.company}</h3>
                <p className="text-sky-400 font-semibold mb-2">{workExperience.presenova.role}</p>
                <div className="flex flex-wrap gap-2 items-center text-sm text-slate-500 mb-3">
                  <span>{workExperience.presenova.period}</span>
                  <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                    {workExperience.presenova.type}
                  </Badge>
                </div>
                <p className="text-slate-400 text-sm">{workExperience.presenova.context}</p>
              </div>
              
              <div className="space-y-3 mb-4">
                {workExperience.presenova.achievements.map((achievement, idx) => (
                  <div key={idx} className="border-l-2 border-slate-700 pl-3 hover:border-orange-500 transition-colors">
                    <h4 className="text-white font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-slate-400 text-xs mb-1">{achievement.description}</p>
                    <p className="text-green-400 text-xs font-medium">{achievement.impact}</p>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {workExperience.presenova.metrics.slice(0, 4).map((metric, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded p-2 text-center">
                    <div className="text-lg font-bold text-orange-400">{metric.value || metric.improvement || metric.maintained}</div>
                    <div className="text-xs text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>
            <div>
              <p className="text-sky-400 font-semibold text-lg mb-1">{education.degree}</p>
              <p className="text-white mb-1">{education.institution}</p>
              <p className="text-slate-400 text-sm">{education.year} • {education.location}</p>
            </div>
          </Card>
          
          {/* Certifications */}
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </div>
            <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
              {certifications.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Zap className="w-4 h-4 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
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
            <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105">
              Let's Talk
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </Card>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(14, 165, 233, 0.5);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(14, 165, 233, 0.7);
        }
      `}</style>
    </div>
  );
};

export default WorkPage;