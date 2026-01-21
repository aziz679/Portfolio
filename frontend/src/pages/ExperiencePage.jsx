import React, { useState } from 'react';
import { expandedExperience } from '../data/expandedMock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const ExperienceStory = ({ story }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6 hover:border-sky-500/30 transition-all duration-300">
      <div 
        className="cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="text-sky-400 font-semibold text-sm mb-1">{story.chapter}</div>
            <h4 className="text-xl font-bold text-white mb-2">{story.title}</h4>
            <p className="text-slate-400 text-sm italic mb-3">"💡 Problem: {story.problem}"</p>
          </div>
          <Button variant="ghost" size="sm" className="text-slate-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-4 animate-fade-in">
          <div>
            <p className="text-slate-300 font-semibold mb-2">🛠️ The Action:</p>
            <p className="text-slate-400 leading-relaxed">{story.action}</p>
          </div>
          
          <div>
            <p className="text-slate-300 font-semibold mb-2">✅ The Solution:</p>
            <p className="text-slate-400 leading-relaxed">{story.solution}</p>
          </div>
          
          <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-4">
            <p className="text-sky-300 font-semibold mb-2">💪 Impact:</p>
            <p className="text-slate-300 leading-relaxed">{story.impact}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {story.tools.map((tool, index) => (
              <Badge key={index} variant="secondary" className="bg-slate-700 text-slate-300">
                {tool}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My Journey: From <span className="text-orange-400">Chaos</span> to <span className="text-sky-400">Conversions</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            3 years of turning "that's impossible" into "that's done" ✨
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {expandedExperience.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline connector */}
              {index !== expandedExperience.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-sky-500 to-slate-800 hidden md:block" />
              )}
              
              <Card className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 ml-0 md:ml-16">
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 w-12 h-12 rounded-full bg-slate-900 border-4 border-sky-500 flex items-center justify-center hidden md:flex">
                  <Briefcase className="w-5 h-5 text-sky-400" />
                </div>
                
                {/* Company Header */}
                <div className="mb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">{exp.role}</h2>
                      <p className="text-sky-400 font-semibold text-xl mb-1">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-slate-500 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <Badge variant="secondary" className="bg-orange-500/20 text-orange-400">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 italic mb-4">{exp.companyDescription}</p>
                  
                  <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-4">
                    <p className="text-sky-300 font-semibold text-sm mb-1">TL;DR</p>
                    <p className="text-slate-300">{exp.tldr}</p>
                  </div>
                </div>
                
                {/* Stories */}
                {exp.stories && exp.stories.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">The Stories</h3>
                    <div className="space-y-4">
                      {exp.stories.map((story, storyIndex) => (
                        <ExperienceStory key={storyIndex} story={story} />
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Skills */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Skills Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="border-sky-500/30 text-sky-400">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
