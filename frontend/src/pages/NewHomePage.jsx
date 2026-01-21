import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hero, introduction, capabilities, projects, techStack } from '../data/portfolioData';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, ExternalLink, Sparkles, Code2 } from 'lucide-react';

const NewHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e920_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e920_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              {hero.greeting}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {hero.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-7 text-lg group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20"
              onClick={() => {
                const element = document.getElementById('capabilities');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See What I Do
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-7 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Let's Connect
            </Button>
          </div>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-sm text-green-400 font-medium">{introduction.cta}</span>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-slate-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {introduction.greeting}
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              {introduction.tagline}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {introduction.traits.map((trait, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/10"
                style={{ 
                  animation: `fadeInUp 0.6s ease-out forwards`,
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0
                }}
              >
                <h3 className="text-2xl font-bold text-sky-400 mb-3">{trait.title}</h3>
                <p className="text-slate-300 leading-relaxed">{trait.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section id="capabilities" className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Where I'm <span className="text-sky-400">Most Useful</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Most of my work falls into a few patterns. If you see yourself in one of these, we should talk.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card 
                key={index} 
                className="bg-slate-950/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-sky-500/10 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">{capability.title}</h3>
                <p className="text-slate-300 leading-relaxed">{capability.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects as Cards */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Things I've <span className="text-orange-400">Built & Shipped</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Real products. Real users. Real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                onClick={() => navigate(`/projects/${project.id}`)}
                className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/20 cursor-pointer group"
                style={{ 
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0
                }}
              >
                {/* Project Image */}
                <div className="mb-6 rounded-lg overflow-hidden border border-slate-800 aspect-video bg-slate-800 group-hover:border-sky-500/30 transition-colors">
                  {project.images && project.images[0] ? (
                    <img 
                      src={project.images[0].url} 
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center"><div class="text-6xl">${project.id === 1 ? '🚀' : project.id === 2 ? '📧' : project.id === 3 ? '📞' : '📺'}</div></div>`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl">{project.id === 1 ? '🚀' : project.id === 2 ? '📧' : project.id === 3 ? '📞' : '📺'}</div>
                    </div>
                  )}
                </div>
                
                {/* Project Content */}
                <div>
                  <Badge variant="outline" className="border-orange-500/30 text-orange-400 mb-3">
                    {project.type}
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-xl text-sky-400 font-semibold mb-4">{project.tagline}</p>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                  
                  {/* Quick metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.slice(0, 4).map((metric, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                          <div className="text-xs text-slate-400 mb-1">{metric.label}</div>
                          <div className="text-lg font-bold text-sky-400">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sky-400 font-medium group-hover:text-sky-300 transition-colors">
                      View Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-slate-400 hover:text-orange-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tech <span className="text-orange-400">Stack</span>
            </h2>
            <p className="text-xl text-slate-400">
              Tools I use to ship products and grow businesses
            </p>
          </div>
          
          {Object.entries(techStack).map(([category, tools], catIndex) => (
            <div key={category} className="mb-12 last:mb-0">
              <h3 className="text-2xl font-bold text-white mb-6 capitalize flex items-center gap-2">
                <Code2 className="w-6 h-6 text-sky-400" />
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {tools.map((tool, index) => (
                  <Card 
                    key={index} 
                    className="bg-slate-900/50 border-slate-800 p-4 hover:border-sky-500/30 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-sky-500/10 group cursor-pointer relative overflow-hidden"
                    style={{ 
                      animation: `fadeInUp 0.5s ease-out forwards`,
                      animationDelay: `${(catIndex * 0.1) + (index * 0.05)}s`,
                      opacity: 0
                    }}
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative text-center">
                      {/* Logo image */}
                      {tool.logo && (
                        <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                          <img 
                            src={tool.logo} 
                            alt={tool.name}
                            className="w-full h-full object-contain group-hover:scale-125 transition-transform duration-300"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextElementSibling.style.display = 'block';
                            }}
                          />
                          <div className="text-4xl hidden group-hover:scale-125 transition-transform duration-300">{tool.icon}</div>
                        </div>
                      )}
                      {!tool.logo && (
                        <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">{tool.icon}</div>
                      )}
                      <div className="text-sm font-medium text-slate-300 group-hover:text-sky-400 transition-colors">{tool.name}</div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-sky-400">Real</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            If you need someone who can ship products, drive growth, and make marketing actually work—let's talk.
          </p>
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-7 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-500/20"
            onClick={() => navigate('/contact')}
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Add animation keyframes */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default NewHomePage;
