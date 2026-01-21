import React from 'react';
import { useNavigate } from 'react-router-dom';
import { projectsDetailed } from '../data/expandedMock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react';

const ProjectsPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projects That <span className="text-sky-400">Actually Ship</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Because building in production is more fun than PowerPoint decks 🚀
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsDetailed.map((project) => (
            <Card 
              key={project.id} 
              className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left: Image */}
                <div>
                  {project.screenshots && project.screenshots[0] && (
                    <div className="rounded-lg overflow-hidden border border-slate-800 h-full">
                      <img 
                        src={project.screenshots[0].url} 
                        alt={project.screenshots[0].title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                </div>
                
                {/* Right: Content */}
                <div className="flex flex-col">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-4xl font-bold text-white group-hover:text-sky-400 transition-colors">
                        {project.name}
                      </h2>
                      {project.link !== '#' && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-sky-400 transition-colors"
                        >
                          <ExternalLink className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    <p className="text-orange-400 font-medium text-xl mb-4">{project.tagline}</p>
                    <Badge 
                      variant="secondary" 
                      className={`${
                        project.status === 'Live & Growing' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : 'bg-orange-500/20 text-orange-400 border-orange-500/30'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.fullDescription}
                  </p>
                  
                  {/* Metrics */}
                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.metrics.slice(0, 4).map((metric, index) => (
                        <div key={index} className="bg-slate-800/50 rounded-lg p-3">
                          <div className="text-2xl font-bold text-sky-400">{metric.value}</div>
                          <div className="text-xs text-slate-400">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, index) => (
                        <Badge key={index} variant="outline" className="border-sky-500/30 text-sky-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    className="bg-sky-500 hover:bg-sky-600 text-white group mt-auto"
                    onClick={() => navigate(`/projects/${project.id}`)}
                  >
                    View Full Story
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
