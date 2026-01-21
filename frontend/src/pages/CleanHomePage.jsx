import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin, ExternalLink, Menu, X, Sun, Moon, Download } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { projects, techStack } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import { useScrollAnimation, useStaggeredAnimation } from '../hooks/useAnimations';

const CleanHomePage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  
  // Animation hooks
  const [heroRef, heroVisible] = useScrollAnimation();
  const [interestsRef, interestsVisible] = useStaggeredAnimation(4, 150);
  const [achievementsRef, achievementsVisible] = useScrollAnimation();
  const [techRef, techVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [workRef, workVisible] = useScrollAnimation();
  
  const email = "aziziddinmohd7@gmail.com";
  const linkedin = "https://www.linkedin.com/in/mohammed-azizuddin-701434288/";
  const resumeUrl = "/Mohammed_Azizuddin_Resume.pdf";

  const interests = [
    { text: "Coffee", desc: "Fueled by caffeine, powered by deadlines ☕" },
    { text: "Building Products", desc: "Because talking about ideas is boring" },
    { text: "Swimming", desc: "Where I brainstorm (and occasionally drown in thoughts)" },
    { text: "Long Drives", desc: "Best ideas hit at 120 kmph" }
  ];

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-black text-white' : 'bg-white text-slate-900'}`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b transition-colors duration-300 ${isDark ? 'bg-black/80 border-slate-800' : 'bg-white/80 border-slate-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className={`text-xl font-bold transition-colors ${isDark ? 'text-white hover:text-emerald-400' : 'text-slate-900 hover:text-emerald-600'}`}>
            MA
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors font-medium underline-animation ${isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all hover:scale-110 ${isDark ? 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800' : 'text-slate-600 hover:text-emerald-600 hover:bg-slate-100'}`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Resume Download */}
            <a href={resumeUrl} download>
              <Button size="sm" variant="outline" className={`btn-press ${isDark ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10' : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'}`}>
                <Download className="mr-2 w-4 h-4" />
                Resume
              </Button>
            </a>
            
            <a href={`mailto:${email}`}>
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold btn-press">
                <Mail className="mr-2 w-4 h-4" />
                Contact
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              className={`transition-colors ${isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-4 animate-fade-in-up ${isDark ? 'bg-black/95 border-slate-800' : 'bg-white/95 border-slate-200'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-3 transition-colors font-medium ${isDark ? 'text-slate-400 hover:text-emerald-400' : 'text-slate-600 hover:text-emerald-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a href={resumeUrl} download className="block py-3">
              <Button size="sm" variant="outline" className="w-full border-emerald-500/30 text-emerald-400">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </a>
            <a href={`mailto:${email}`} className="block py-3">
              <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold w-full">
                <Mail className="mr-2 w-4 h-4" />
                Contact
              </Button>
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-6">
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
            <a href={`mailto:${email}`}>
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
            Beyond the <span className="text-emerald-400">Code</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {interests.map((interest, index) => (
              <div 
                key={index}
                className="bg-slate-900/30 border border-slate-800 hover:border-emerald-500/50 rounded-lg p-4 transition-all cursor-default group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {interest.text}
                </span>
                <p className="text-slate-500 text-sm mt-1 italic">{interest.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
            >
              <Linkedin className="mr-2 w-5 h-5" />
              <span className="text-lg font-medium border-b-2 border-emerald-400/0 group-hover:border-emerald-400/100 transition-all">
                Do you like to view my LinkedIn Profile?
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Achievements Highlight */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            The <span className="text-emerald-400">Numbers</span> Don&apos;t Lie
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl font-bold text-emerald-400">1,000+</div>
              <div className="text-sm text-slate-400 mt-1">Users in 30 days</div>
              <div className="text-xs text-slate-600 mt-1">AI Kaptan launch</div>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl font-bold text-emerald-400">₹84K+</div>
              <div className="text-sm text-slate-400 mt-1">Saved annually</div>
              <div className="text-xs text-slate-600 mt-1">Smart automation</div>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl font-bold text-emerald-400">Page 1</div>
              <div className="text-sm text-slate-400 mt-1">Google ranking</div>
              <div className="text-xs text-slate-600 mt-1">In 30 days, $0 ads</div>
            </Card>
            <Card className="bg-slate-900/50 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-3xl font-bold text-emerald-400">₹8 Cr</div>
              <div className="text-sm text-slate-400 mt-1">Ad spend managed</div>
              <div className="text-xs text-slate-600 mt-1">18% ROI improvement</div>
            </Card>
          </div>
          
          <p className="text-slate-500 text-center italic">
            &quot;I don&apos;t just talk strategy—I ship products, break spreadsheets, and occasionally break the internet.&quot;
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Tech <span className="text-emerald-400">Stack</span>
          </h2>
          
          <div className="grid grid-cols-6 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {Object.values(techStack).flat().map((tool, index) => (
              <div
                key={index}
                className="aspect-square bg-slate-900/50 rounded-md border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group cursor-pointer p-2"
                title={tool.name}
              >
                {tool.logo ? (
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      parent.innerHTML = `<div class="text-lg opacity-70 group-hover:opacity-100 transition-opacity">${tool.icon}</div>`;
                    }}
                  />
                ) : (
                  <div className="text-lg opacity-70 group-hover:opacity-100 transition-opacity">
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
                          const fallback = project.images[0].fallback || '🚀';
                          e.target.parentElement.innerHTML = `<div class="w-full h-48 bg-slate-800 flex items-center justify-center text-4xl">${fallback}</div>`;
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

      {/* Experience Work Section */}
      <section className="py-24 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Experience <span className="text-emerald-400">Work</span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-8">
            Building marketing systems and shipping products at startups. From first marketing hire to leading teams.
          </p>
          
          <div className="space-y-4">
            {/* Ralvie AI */}
            <Card className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 cursor-pointer group" onClick={() => navigate('/work')}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      Ralvie AI
                    </h3>
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs">
                      Current
                    </Badge>
                  </div>
                  <p className="text-emerald-400 font-medium text-sm mb-2">First Marketing Hire → Product Marketing Specialist</p>
                  <p className="text-slate-400 text-sm">Built the entire marketing function from zero. CRM implementation, content systems, website launch, cost optimization (₹84K saved), pricing models.</p>
                </div>
                <span className="text-slate-500 text-sm">2024 - Present</span>
              </div>
            </Card>

            {/* ISBM */}
            <Card className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 cursor-pointer group" onClick={() => navigate('/work')}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    ISBM
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Marketing Executive</p>
                  <p className="text-slate-400 text-sm">Campus outreach across 20+ campuses, 1000+ students engaged. Publisher partnerships with 15-20% cost reduction.</p>
                </div>
                <span className="text-slate-500 text-sm">Aug - Dec 2023</span>
              </div>
            </Card>

            {/* Presenova */}
            <Card className="bg-slate-900/30 border-slate-800 hover:border-emerald-500/50 transition-all duration-300 p-6 cursor-pointer group" onClick={() => navigate('/work')}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors mb-2">
                    Presenova Management Solution LLP
                  </h3>
                  <p className="text-emerald-400 font-medium text-sm mb-2">Digital Marketing Executive</p>
                  <p className="text-slate-400 text-sm">Managed ₹8 Cr annual ad spend. 18% ROI improvement, 20% CPL optimization, 25-30% lead-to-application conversion.</p>
                </div>
                <span className="text-slate-500 text-sm">Sep 2022 - Jul 2023</span>
              </div>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              onClick={() => navigate('/work')}
            >
              View Full Experience
              <ArrowRight className="ml-2 w-4 h-4" />
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

export default CleanHomePage;
