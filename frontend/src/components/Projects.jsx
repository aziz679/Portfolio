import React from 'react';
import { ExternalLink, Github, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const ProjectCard = ({ project }) => {
  return (
    <Card className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 hover:scale-[1.02] group">
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-orange-400 font-medium text-lg">{project.tagline}</p>
            </div>
            {project.link !== '#' && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-sky-400 transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </a>
            )}
          </div>
          
          <p className="text-slate-300 leading-relaxed mb-6">
            {project.description}
          </p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <span className="text-lg">✨ Features</span>
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, index) => (
              <li key={index} className="text-slate-400 text-sm flex items-start">
                <span className="mr-2">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-3 flex items-center">
            <Award className="w-4 h-4 mr-2 text-orange-400" />
            <span>Results</span>
          </h4>
          <ul className="space-y-2">
            {project.results.map((result, index) => (
              <li key={index} className="text-sky-300 text-sm flex items-start">
                <span className="mr-2">•</span>
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-slate-800 text-slate-300 hover:bg-sky-500/20 hover:text-sky-400 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

const Projects = ({ projects }) => {
  return (
    <section className="py-24 bg-slate-950" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Side Projects That <span className="text-sky-400">Actually Ship</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Because building in production is more fun than PowerPoint decks 🚀
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
