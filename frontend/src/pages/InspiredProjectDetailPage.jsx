import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, ExternalLink, Check, Lightbulb, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/portfolioData';

const InspiredProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const email = "aziziddinmohd7@gmail.com";

  const project = projects.find(p => p.id === parseInt(id));
  const otherProjects = projects.filter(p => p.id !== parseInt(id)).slice(0, 2);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/projects')} className="bg-emerald-500 hover:bg-emerald-600 text-black">
            View All Projects
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>All Projects</span>
          </button>
          <a href={`mailto:${email}`}>
            <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
              <Mail className="mr-2 w-4 h-4" />
              Contact
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6">
            {project.type}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {project.name}
          </h1>
          
          <p className="text-2xl text-emerald-400 font-medium mb-6">
            {project.tagline}
          </p>
          
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed mb-8">
            {project.tldr}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                  <ExternalLink className="mr-2 w-5 h-5" />
                  View Live Site
                </Button>
              </a>
            )}
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              onClick={() => navigate('/projects')}
            >
              More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {project.metrics.map((metric, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors"
              >
                <div className="text-3xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                <div className="text-sm text-slate-400">{metric.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots */}
      {project.images && project.images.length > 0 && (
        <section className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-emerald-400">Screenshots</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/30 border-slate-800 overflow-hidden hover:border-emerald-500/50 transition-all group"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={image.url}
                      alt={image.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const fallback = image.fallback || '🖼️';
                        e.target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                            <span class="text-6xl">${fallback}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-slate-400 text-sm">{image.caption}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenge */}
            <Card className="bg-slate-900/30 border-slate-800 p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
              <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
            </Card>

            {/* Solution */}
            <Card className="bg-emerald-500/5 border-emerald-500/20 p-8">
              <h3 className="text-2xl font-bold mb-4 text-emerald-400">What I Built</h3>
              <p className="text-slate-300 leading-relaxed">{project.whatIBuilt}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-emerald-400">Impact</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {project.impact.map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-colors"
              >
                <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      {project.keyFeatures && (
        <section className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Key <span className="text-emerald-400">Features</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.keyFeatures.map((feature, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-colors"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Story */}
      {project.story && (
        <section className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              The <span className="text-emerald-400">Story</span>
            </h2>
            
            <Card className="bg-slate-900/30 border-slate-800 p-8">
              <p className="text-slate-300 leading-relaxed text-lg">{project.story}</p>
            </Card>
          </div>
        </section>
      )}

      {/* Learnings */}
      {project.learnings && (
        <section className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              <span className="text-emerald-400">Key Learnings</span>
            </h2>
            
            <div className="space-y-4">
              {project.learnings.map((learning, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-lg border border-slate-800 hover:border-emerald-500/30 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-slate-300 leading-relaxed">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Tech <span className="text-emerald-400">Stack</span>
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {project.tech.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all py-2 px-4 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">
              Other <span className="text-emerald-400">Projects</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((otherProject) => (
                <Card 
                  key={otherProject.id}
                  className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group cursor-pointer"
                  onClick={() => navigate(`/projects/${otherProject.id}`)}
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {otherProject.name}
                    </h3>
                    <p className="text-emerald-400/80 text-sm mb-3">{otherProject.tagline}</p>
                    <p className="text-slate-400 text-sm line-clamp-2">{otherProject.shortDescription}</p>
                    
                    <div className="flex items-center mt-4 text-emerald-400 text-sm font-medium">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to take your idea to the next level?
            <br />
            <span className="text-emerald-400">Let&apos;s work together.</span>
          </h2>
          
          <a href={`mailto:${email}`} className="inline-block mt-6">
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold pointer-events-auto">
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default InspiredProjectDetailPage;
