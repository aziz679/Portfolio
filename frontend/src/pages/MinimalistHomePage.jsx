import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects, techStack, personalInfo } from '../data/portfolioData';

const MinimalistHomePage = () => {
  const navigate = useNavigate();

  const interests = [
    "Building Products",
    "Marketing",
    "Automation", 
    "Coffee ☕",
    "SEO",
    "Content"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6 hover:bg-emerald-500/20 transition-colors">
            Available for work
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            Mohammed Azizuddin 👋
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 leading-relaxed mb-12 max-w-3xl">
            Product Marketing Specialist | Builder | Growth Strategist with 3 years of experience. 
            I love building products people actually use and creating marketing systems that drive real growth. 🚀
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href={`mailto:${personalInfo.email}`}>
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold">
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </a>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              onClick={() => navigate('/about')}
            >
              About Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Beyond the Work */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Beyond the <span className="text-emerald-400">Work</span>
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {interests.map((interest, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all cursor-default text-base py-2 px-4"
              >
                {interest}
              </Badge>
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              <span className="text-lg font-medium border-b-2 border-emerald-400/0 group-hover:border-emerald-400/100 transition-all">
                Do you like view my LinkedIn Profile
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Tech <span className="text-emerald-400">Stack</span>
          </h2>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {Object.values(techStack).flat().map((tool, index) => (
              <div
                key={index}
                className="aspect-square bg-slate-900/50 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer p-3"
              >
                {tool.logo ? (
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    title={tool.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="text-2xl" title="${tool.name}">${tool.icon}</div>`;
                    }}
                  />
                ) : (
                  <div className="text-2xl opacity-70 group-hover:opacity-100 transition-opacity" title={tool.name}>
                    {tool.icon}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-emerald-400">Projects</span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-12">
            I love Transforming concepts into impact: where strategic vision meets measurable results. 
            See how I blend creativity, data, and execution to build products that resonate and drive growth.
            <br />
            <span className="text-emerald-400 font-medium">Check them out!</span>
          </p>
          
          <div className="space-y-6">
            {projects.slice(0, 3).map((project) => (
              <Card 
                key={project.id}
                className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 cursor-pointer group"
                onClick={() => navigate(`/projects/${project.id}`)}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image */}
                  {project.images && project.images[0] && (
                    <div className="md:w-1/3 rounded-lg overflow-hidden border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                      <img 
                        src={project.images[0].url}
                        alt={project.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.parentElement.innerHTML = `<div class="w-full h-48 bg-slate-800 flex items-center justify-center text-4xl">${project.images[0].fallback || '🚀'}</div>`;
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                      {project.name}
                    </h3>
                    <p className="text-emerald-400 font-medium text-sm mb-3">{project.tagline}</p>
                    <p className="text-slate-400 leading-relaxed mb-4">{project.shortDescription}</p>
                    
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 text-sm font-medium group-hover:underline">
                        View Project
                      </span>
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-slate-400 hover:text-emerald-400 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              onClick={() => navigate('/projects')}
            >
              View More Projects...
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to take your idea to the next level?
            <br />
            <span className="text-emerald-400">Let's work together.</span>
          </h2>
          
          <a href={`mailto:${personalInfo.email}`}>
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

export default MinimalistHomePage;