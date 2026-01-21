import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsDetailed } from '../data/expandedMock';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, ArrowLeft, CheckCircle, TrendingUp } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsDetailed.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="text-slate-400 hover:text-sky-400 mb-8"
          onClick={() => navigate('/projects')}
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Projects
        </Button>
        
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-2xl text-orange-400 font-medium mb-4">{project.tagline}</p>
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
            <div className="flex gap-4">
              {project.link !== '#' && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Button variant="outline" className="border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white">
                    <ExternalLink className="mr-2 w-4 h-4" />
                    Visit Site
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Screenshot */}
        {project.screenshots && project.screenshots[0] && (
          <div className="mb-12 rounded-lg overflow-hidden border border-slate-800">
            <img 
              src={project.screenshots[0].url} 
              alt={project.screenshots[0].title}
              className="w-full"
            />
          </div>
        )}
        
        {/* Genesis Story */}
        {project.genesis && (
          <Card className="bg-slate-900/50 border-slate-800 p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Genesis Story</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-orange-400 mb-2">💡 The Problem</h3>
                <p className="text-slate-300 leading-relaxed">{project.genesis.problem}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-sky-400 mb-2">🧠 The Insight</h3>
                <p className="text-slate-300 leading-relaxed">{project.genesis.insight}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">✅ The Solution</h3>
                <p className="text-slate-300 leading-relaxed">{project.genesis.solution}</p>
              </div>
            </div>
          </Card>
        )}
        
        {/* Journey */}
        {project.journey && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">The Journey</h2>
            <div className="space-y-6">
              {project.journey.map((phase, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-sky-400 mb-3">{phase.phase}</h3>
                  <p className="text-slate-300 leading-relaxed">{phase.description}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Features */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.features.map((feature, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Metrics */}
        {project.metrics && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {project.metrics.map((metric, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-sky-500/30 transition-all duration-300 hover:scale-105">
                  <div className="text-3xl font-bold text-sky-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                  {metric.trend === 'up' && <TrendingUp className="w-4 h-4 text-green-400 mx-auto mt-2" />}
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech, index) => (
              <Badge key={index} variant="outline" className="border-sky-500/30 text-sky-400 text-lg px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Learnings */}
        {project.learnings && (
          <Card className="bg-slate-900/50 border-slate-800 p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-slate-300 leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </Card>
        )}
        
        {/* Roadmap */}
        {project.roadmap && (
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">Roadmap</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.roadmap.map((phase, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6">
                  <h3 className="text-xl font-bold text-sky-400 mb-4">{phase.phase}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-slate-300 flex items-start gap-2">
                        <span className="text-orange-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
