import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects } from '../data/portfolioData';

const InspiredProjectsPage = () => {
  const navigate = useNavigate();
  const email = "aziziddinmohd7@gmail.com";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Projects <span className="text-emerald-400">Completed</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            I love <span className="font-semibold text-white">turning ideas into real products.</span>
            <br />
            Here I show you some of the developments I&apos;ve worked on, applying technology, marketing strategy, and lots of creativity.
            <br />
            <span className="text-emerald-400 font-medium">Check them out!</span>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-500 overflow-hidden group cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-2/5 relative overflow-hidden">
                    {project.images && project.images[0] ? (
                      <img 
                        src={project.images[0].url}
                        alt={project.name}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          const fallback = project.images[0].fallback || '🚀';
                          e.target.parentElement.innerHTML = `
                            <div class="w-full h-64 lg:h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                              <span class="text-6xl">${fallback}</span>
                            </div>
                          `;
                        }}
                      />
                    ) : (
                      <div className="w-full h-64 lg:h-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                        <span className="text-6xl">🚀</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/90"></div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-3/5 p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h2 className="text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {project.name}
                      </h2>
                      {project.status && (
                        <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">
                          {project.status}
                        </Badge>
                      )}
                    </div>
                    
                    <p className="text-emerald-400 font-medium mb-4">{project.tagline}</p>
                    
                    <p className="text-slate-400 leading-relaxed mb-6">
                      {project.tldr}
                    </p>

                    {/* Key Metrics */}
                    <div className="flex flex-wrap gap-4 mb-6">
                      {project.metrics.slice(0, 3).map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-xl font-bold text-emerald-400">{metric.value}</div>
                          <div className="text-xs text-slate-500">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 5).map((tech, i) => (
                        <Badge 
                          key={i}
                          variant="outline" 
                          className="border-slate-700 text-slate-400 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 5 && (
                        <Badge 
                          variant="outline" 
                          className="border-slate-700 text-slate-400 text-xs"
                        >
                          +{project.tech.length - 5} more
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                      <span className="flex items-center text-emerald-400 font-medium group-hover:underline">
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                      
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-slate-400 hover:text-emerald-400 transition-colors text-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Site
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to take your idea to the next level?
            <br />
            <span className="text-emerald-400">Let&apos;s work together.</span>
          </h2>
          
          <a href={`mailto:${email}`}>
            <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold mt-6">
              <Mail className="mr-2 w-5 h-5" />
              Contact Me
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default InspiredProjectsPage;
