import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projects } from '../data/portfolioData';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, ArrowLeft, CheckCircle, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === parseInt(id));
  
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
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
          className="text-slate-400 hover:text-sky-400 mb-8 group"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Button>
        
        {/* Header */}
        <div className="mb-12">
          <Badge variant="outline" className="border-orange-500/30 text-orange-400 mb-4">
            {project.type}
          </Badge>
          
          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">{project.name}</h1>
              <p className="text-3xl text-sky-400 font-semibold mb-4">{project.tagline}</p>
              {project.status && (
                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                  {project.status}
                </Badge>
              )}
            </div>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-sky-500 hover:bg-sky-600 text-white">
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Visit Live
                </Button>
              </a>
            )}
          </div>
          
          <div className="bg-sky-500/10 border border-sky-500/20 rounded-lg p-6">
            <p className="text-sky-300 font-semibold text-lg">{project.tldr}</p>
          </div>
        </div>
        
        {/* Main Project Image */}
        {project.images && project.images[0] && (
          <div className="mb-12 rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
            <img 
              src={project.images[0].url} 
              alt={project.images[0].caption}
              className="w-full"
              onError={(e) => {
                e.target.parentElement.innerHTML = `<div class="w-full aspect-video bg-slate-800 flex items-center justify-center"><div class="text-8xl">${project.images[0].fallback || '🚀'}</div></div>`;
              }}
            />
            {project.images[0].caption && (
              <div className="bg-slate-900 px-6 py-3 border-t border-slate-800">
                <p className="text-slate-400 text-sm">{project.images[0].caption}</p>
              </div>
            )}
          </div>
        )}
        
        {/* The Challenge */}
        <Card className="bg-slate-900/50 border-slate-800 p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Lightbulb className="w-8 h-8 text-orange-400" />
            The Challenge
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">{project.challenge}</p>
        </Card>
        
        {/* What I Built */}
        <Card className="bg-slate-900/50 border-slate-800 p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Rocket className="w-8 h-8 text-sky-400" />
            What I Built
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">{project.whatIBuilt}</p>
          
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Badge key={index} variant="outline" className="border-sky-500/30 text-sky-400 text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
        
        {/* Additional Images Gallery */}
        {project.images && project.images.length > 1 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Product Screens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-lg overflow-hidden border border-slate-800 hover:border-sky-500/30 transition-all duration-300">
                  <img 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full aspect-video object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  {image.caption && (
                    <div className="bg-slate-900 px-4 py-3 border-t border-slate-800">
                      <p className="text-slate-400 text-sm">{image.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Impact & Results */}
        <Card className="bg-slate-900/50 border-slate-800 p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-green-400" />
            Impact & Results
          </h2>
          <div className="space-y-3">
            {project.impact.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 text-lg">{item}</span>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Metrics Grid */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {project.metrics.map((metric, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-sky-500/30 transition-all duration-300 hover:scale-105">
                  <div className="text-4xl font-bold text-sky-400 mb-2">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </Card>
              ))}
            </div>
          </div>
        )}
        
        {/* The Story */}
        {project.story && (
          <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700 p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">The Story</h2>
            <p className="text-slate-300 text-lg leading-relaxed">{project.story}</p>
          </Card>
        )}
        
        {/* Key Learnings */}
        {project.learnings && (
          <Card className="bg-slate-900/50 border-slate-800 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">Key Learnings</h2>
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-orange-400 font-bold">{index + 1}</span>
                  </div>
                  <p className="text-slate-300 text-lg leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailPage;
