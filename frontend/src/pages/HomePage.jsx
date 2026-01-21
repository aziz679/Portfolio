import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp, Code, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { heroStats, projectsDetailed } from '../data/expandedMock';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e915_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e915_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span className="text-sm text-sky-400 font-medium">Available for opportunities</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-sky-200 to-orange-200 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Mohammed Azizuddin
          </h1>
          
          <p className="text-2xl md:text-3xl text-slate-300 font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Product Marketing Specialist
          </p>
          
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I turn chaos into conversions (and save money while doing it)
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg group transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              onClick={() => navigate('/projects')}
            >
              View My Work
            </Button>
          </div>
          
          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
            {heroStats.map((stat, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-800 p-6 hover:border-sky-500/30 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-sky-400 mb-1">{stat.number}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What I Do <span className="text-sky-400">Best</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                <TrendingUp className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Marketing That Converts</h3>
              <p className="text-slate-400 leading-relaxed">
                From ₹8Cr in ad spend to 0→1000 organic users, I build marketing systems that work. GTM strategies, content engines, and paid campaigns that actually ROI.
              </p>
              <Link to="/experience" className="inline-flex items-center text-sky-400 hover:text-sky-300 mt-4 font-medium">
                View Experience <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 p-8 hover:border-orange-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Code className="w-6 h-6 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Building Real Products</h3>
              <p className="text-slate-400 leading-relaxed">
                AI Kaptan: 1000+ users. Emareach AI: Email automation. Not just marketing theory—I ship products that people actually use.
              </p>
              <Link to="/projects" className="inline-flex items-center text-orange-400 hover:text-orange-300 mt-4 font-medium">
                View Projects <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>
            
            <Card className="bg-slate-900/50 border-slate-800 p-8 hover:border-green-500/30 transition-all duration-300 hover:scale-105 group">
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Efficiency Engineering</h3>
              <p className="text-slate-400 leading-relaxed">
                Saved ₹84K annually through automation. 70% faster response times. If it can be automated, I've probably already built it.
              </p>
              <Link to="/about" className="inline-flex items-center text-green-400 hover:text-green-300 mt-4 font-medium">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-orange-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-400">
              Side projects that actually ship 🚀
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectsDetailed.slice(0, 2).map((project) => (
              <Card 
                key={project.id} 
                className="bg-slate-900/50 border-slate-800 p-8 hover:border-sky-500/30 transition-all duration-300 hover:scale-[1.02] group cursor-pointer"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                {project.screenshots && project.screenshots[0] && (
                  <div className="mb-6 rounded-lg overflow-hidden border border-slate-800">
                    <img 
                      src={project.screenshots[0].url} 
                      alt={project.screenshots[0].title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-orange-400 font-medium text-lg mb-4">{project.tagline}</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>
                <div className="flex items-center text-sky-400 hover:text-sky-300 font-medium">
                  View Details <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-8 py-6 text-lg transition-all duration-300"
              onClick={() => navigate('/projects')}
            >
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="text-sky-400">Awesome</span>
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Whether you need marketing that actually works, a product that ships, or just someone to optimize the chaos—let's talk.
          </p>
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-12 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/contact')}
          >
            Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
