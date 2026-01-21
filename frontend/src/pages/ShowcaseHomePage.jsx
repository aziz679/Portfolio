import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hero, impact, featuredWork, capabilities } from '../data/showcaseMock';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';

const ShowcaseHomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="mb-6">
            <span className="text-orange-400 font-semibold text-lg animate-fade-in">{hero.greeting}</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
              {hero.name}
            </span>
          </h1>
          
          <p className="text-3xl md:text-4xl text-sky-400 font-bold mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {hero.tagline}
          </p>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-10 py-7 text-lg group transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/work')}
            >
              {hero.cta.primary}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-10 py-7 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              {hero.cta.secondary}
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impact.map((item, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent mb-3">
                  {item.number}
                </div>
                <div className="text-white font-semibold text-lg mb-1">{item.label}</div>
                <div className="text-sky-400 text-sm mb-3">{item.sublabel}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{item.story}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Featured <span className="text-sky-400">Work</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Products I've built and launched. Not concepts. Not ideas. Shipped products with real users.
            </p>
          </div>
          
          <div className="space-y-16">
            {featuredWork.map((project, index) => (
              <Card 
                key={project.id} 
                className="bg-slate-900/50 border-slate-800 p-8 md:p-12 hover:border-sky-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Content */}
                  <div className="order-2 lg:order-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="outline" className="border-orange-500/30 text-orange-400 mb-4">
                          {project.type}
                        </Badge>
                        <h3 className="text-4xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-2xl text-sky-400 font-semibold mb-6">{project.subtitle}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-bold mb-3">💡 The Challenge</h4>
                      <p className="text-slate-400 leading-relaxed">{project.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-bold mb-3">✅ What I Built</h4>
                      <p className="text-slate-400 leading-relaxed">{project.solution}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h4 className="text-white font-bold mb-4">🎯 Results</h4>
                      <div className="space-y-2">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-green-400">
                            <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-slate-800 text-slate-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Button className="bg-sky-500 hover:bg-sky-600 text-white group">
                          <ExternalLink className="mr-2 w-4 h-4" />
                          Visit Live Project
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </a>
                    )}
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="order-1 lg:order-2">
                    <div className="bg-slate-800 rounded-lg border border-slate-700 aspect-video flex items-center justify-center overflow-hidden">
                      {project.images && project.images[0] ? (
                        <img 
                          src={project.images[0].url} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-8">
                          <div className="text-6xl mb-4">{project.id === 1 ? '🚀' : project.id === 2 ? '📞' : '📧'}</div>
                          <div className="text-slate-400 text-lg">{project.title}</div>
                        </div>
                      )}
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      {project.highlights.map((stat, idx) => (
                        <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                          <div className="text-sm text-slate-400 mb-1">{stat.label}</div>
                          <div className="text-xl font-bold text-sky-400">{stat.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              What I <span className="text-orange-400">Actually Do</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Not just marketing. Not just building. The full stack of getting products into the hands of users who love them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300">
                <div className="text-5xl mb-4">{capability.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-slate-300 leading-relaxed mb-4">{capability.description}</p>
                <div className="space-y-2">
                  {capability.examples.map((example, idx) => (
                    <div key={idx} className="text-sm text-sky-400">• {example}</div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-sky-400">Real</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            If you need someone who can both build the product AND get it to users, let's talk.
          </p>
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-7 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/contact')}
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseHomePage;
