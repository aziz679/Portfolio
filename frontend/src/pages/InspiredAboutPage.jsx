import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, MapPin, Phone, Download, ExternalLink, Rocket, Target, Cog } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { hero, introduction, capabilities, techStack, personalInfo } from '../data/portfolioData';
import { education, certifications } from '../data/workExperienceData';

const InspiredAboutPage = () => {
  const navigate = useNavigate();

  const getIconComponent = (iconEmoji) => {
    const icons = {
      '🚀': <Rocket className="w-6 h-6" />,
      '⚡': <Target className="w-6 h-6" />,
      '🛠️': <Cog className="w-6 h-6" />,
      '📈': <Target className="w-6 h-6" />,
    };
    return icons[iconEmoji] || <Rocket className="w-6 h-6" />;
  };

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
          <a href={`mailto:${personalInfo.email}`}>
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
            {introduction.cta}
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            {introduction.greeting}
          </h1>
          
          <p className="text-2xl text-slate-300 max-w-3xl leading-relaxed mb-8">
            {introduction.tagline}
          </p>

          <p className="text-lg text-slate-400 max-w-3xl leading-relaxed">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Traits */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {introduction.traits.map((trait, index) => (
              <Card 
                key={index}
                className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">{trait.title}</h3>
                <p className="text-slate-400 leading-relaxed">{trait.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            What I <span className="text-emerald-400">Do</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <Card 
                key={index}
                className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0 group-hover:scale-110 transition-transform">
                    {getIconComponent(capability.icon)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                      {capability.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm">{capability.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Tech <span className="text-emerald-400">Stack</span>
          </h2>
          
          <div className="space-y-8">
            {Object.entries(techStack).map(([category, tools]) => (
              <div key={category}>
                <h3 className="text-lg font-medium text-slate-400 mb-4 capitalize">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-10 gap-3">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="aspect-square bg-slate-900/50 rounded-lg border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer p-2"
                      title={tool.name}
                    >
                      {tool.logo ? (
                        <img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = 'text-xl opacity-70 group-hover:opacity-100 transition-opacity';
                            fallback.textContent = tool.icon;
                            e.target.parentElement.appendChild(fallback);
                          }}
                        />
                      ) : (
                        <div className="text-xl opacity-70 group-hover:opacity-100 transition-opacity">
                          {tool.icon}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-emerald-400">Education</span>
              </h2>
              <Card className="bg-slate-900/30 border-slate-800 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                <p className="text-emerald-400 font-medium mb-2">{education.institution}</p>
                <p className="text-slate-400 text-sm">{education.year} • {education.location}</p>
              </Card>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-emerald-400">Certifications</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <Badge 
                    key={index}
                    variant="outline"
                    className="border-slate-700 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-all py-2 px-3"
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Get in <span className="text-emerald-400">Touch</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href={`mailto:${personalInfo.email}`}>
              <Card className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                <Mail className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Email</h4>
                <p className="text-slate-400 text-sm truncate">{personalInfo.email}</p>
              </Card>
            </a>
            
            <a href={`tel:${personalInfo.phone}`}>
              <Card className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                <Phone className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Phone</h4>
                <p className="text-slate-400 text-sm">{personalInfo.phone}</p>
              </Card>
            </a>
            
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Card className="bg-slate-900/30 border-slate-800 p-6 hover:border-emerald-500/50 transition-colors cursor-pointer group">
                <Linkedin className="w-6 h-6 text-emerald-400 mb-3" />
                <h4 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">LinkedIn</h4>
                <p className="text-slate-400 text-sm">Connect with me</p>
              </Card>
            </a>
            
            <Card className="bg-slate-900/30 border-slate-800 p-6">
              <MapPin className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="font-semibold text-white">Location</h4>
              <p className="text-slate-400 text-sm">{personalInfo.location}</p>
            </Card>
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
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href={`mailto:${personalInfo.email}`} className="inline-block">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold pointer-events-auto">
                <Mail className="mr-2 w-5 h-5" />
                Contact Me
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 pointer-events-auto"
              onClick={() => navigate('/work')}
            >
              View Experience
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InspiredAboutPage;
