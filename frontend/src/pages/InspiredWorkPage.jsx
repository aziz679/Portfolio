import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, ExternalLink, Calendar, MapPin, Users, TrendingUp, DollarSign, Clock, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { workExperience, education, certifications } from '../data/workExperienceData';

const InspiredWorkPage = () => {
  const navigate = useNavigate();
  const email = "aziziddinmohd7@gmail.com";

  const getIconComponent = (iconName) => {
    const icons = {
      '📊': <TrendingUp className="w-6 h-6" />,
      '🎨': <Zap className="w-6 h-6" />,
      '🌐': <ExternalLink className="w-6 h-6" />,
      '💰': <DollarSign className="w-6 h-6" />,
      '🎯': <Target className="w-6 h-6" />,
      '🤝': <Users className="w-6 h-6" />,
      '🚀': <TrendingUp className="w-6 h-6" />,
    };
    return icons[iconName] || <Zap className="w-6 h-6" />;
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
            Experience <span className="text-emerald-400">Work</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
            From first marketing hire to product marketing specialist. Building systems, 
            shipping products, and driving growth at startups and agencies.
          </p>
        </div>
      </section>

      {/* Work Experience Timeline */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Ralvie AI */}
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 rounded-full bg-emerald-500 mt-2 flex-shrink-0 relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+200px)] bg-gradient-to-b from-emerald-500 to-transparent"></div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h2 className="text-3xl md:text-4xl font-bold">{workExperience.ralvie.company}</h2>
                  <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    Current
                  </Badge>
                </div>
                <h3 className="text-xl text-emerald-400 font-medium mb-2">{workExperience.ralvie.role}</h3>
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {workExperience.ralvie.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Startup • AI/Automation
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {workExperience.ralvie.teamSize}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-3xl">
                  {workExperience.ralvie.context}
                </p>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ml-10">
              {workExperience.ralvie.companyMetrics.map((metric, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-4 text-center hover:border-emerald-500/50 transition-colors">
                  <div className="text-2xl font-bold text-emerald-400">{metric.value}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </Card>
              ))}
            </div>

            {/* Big Wins */}
            <div className="space-y-6 ml-10">
              {workExperience.ralvie.bigWins.map((win, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        {getIconComponent(win.icon)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                          {win.title}
                        </h3>
                        <p className="text-emerald-400/80 text-sm">{win.subtitle}</p>
                      </div>
                    </div>
                    
                    {win.problem && (
                      <div className="mb-4">
                        <p className="text-slate-400 text-sm leading-relaxed">
                          <span className="text-slate-300 font-medium">Challenge: </span>
                          {win.problem}
                        </p>
                      </div>
                    )}
                    
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-lg p-4 mb-4">
                      <p className="text-emerald-300 font-medium text-sm">
                        {win.impact}
                      </p>
                    </div>
                    
                    {win.tools && (
                      <div className="flex flex-wrap gap-2">
                        {win.tools.map((tool, i) => (
                          <Badge 
                            key={i}
                            variant="outline" 
                            className="border-slate-700 text-slate-400 text-xs"
                          >
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* ISBM */}
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 rounded-full bg-slate-600 mt-2 flex-shrink-0 relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-[calc(100%+100px)] bg-gradient-to-b from-slate-600 to-transparent"></div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{workExperience.isbm.company}</h2>
                <h3 className="text-xl text-emerald-400 font-medium mb-2">{workExperience.isbm.role}</h3>
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {workExperience.isbm.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {workExperience.isbm.duration}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
                  {workExperience.isbm.context}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 ml-10">
              {workExperience.isbm.achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/30 border-slate-800 p-5 hover:border-emerald-500/50 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-400 text-sm mb-3">{achievement.description}</p>
                  <p className="text-emerald-400 text-sm font-medium">{achievement.impact}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Presenova */}
          <div className="mb-20">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-4 h-4 rounded-full bg-slate-600 mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-2">{workExperience.presenova.company}</h2>
                <h3 className="text-xl text-emerald-400 font-medium mb-2">{workExperience.presenova.role}</h3>
                <div className="flex flex-wrap gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {workExperience.presenova.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {workExperience.presenova.duration}
                  </span>
                </div>
                <p className="text-slate-400 leading-relaxed max-w-3xl mb-6">
                  {workExperience.presenova.context}
                </p>
              </div>
            </div>

            {/* Key Metrics for Presenova */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 ml-10">
              {workExperience.presenova.metrics.slice(0, 4).map((metric, index) => (
                <Card key={index} className="bg-slate-900/50 border-slate-800 p-4 text-center hover:border-emerald-500/50 transition-colors">
                  <div className="text-xl font-bold text-emerald-400">{metric.value || metric.improvement}</div>
                  <div className="text-sm text-slate-400">{metric.label}</div>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 ml-10">
              {workExperience.presenova.achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-slate-900/30 border-slate-800 p-5 hover:border-emerald-500/50 transition-colors"
                >
                  <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-slate-400 text-sm mb-3">{achievement.description}</p>
                  <p className="text-emerald-400 text-sm font-medium">{achievement.impact}</p>
                </Card>
              ))}
            </div>
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
                <div className="flex gap-4 text-slate-400 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {education.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {education.location}
                  </span>
                </div>
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

export default InspiredWorkPage;
