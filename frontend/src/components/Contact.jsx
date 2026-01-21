import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const Contact = ({ personalInfo }) => {
  return (
    <section className="py-24 bg-slate-950" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Build Something <span className="text-sky-400">Awesome</span>
          </h2>
          <p className="text-xl text-slate-400">
            I promise I won't automate our conversation... yet 🤖
          </p>
        </div>
        
        <Card className="bg-slate-900/50 border-slate-800 p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Email</div>
                <div className="font-medium">{personalInfo.email}</div>
              </div>
            </a>
            
            <a 
              href={`tel:${personalInfo.phone}`}
              className="flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <Phone className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">Phone</div>
                <div className="font-medium">{personalInfo.phone}</div>
              </div>
            </a>
            
            <a 
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Linkedin className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">LinkedIn</div>
                <div className="font-medium">Connect with me</div>
              </div>
            </a>
            
            <a 
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-purple-400 transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                <Github className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wide">GitHub</div>
                <div className="font-medium">Check my code</div>
              </div>
            </a>
          </div>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.location.href = `mailto:${personalInfo.email}`}
          >
            <Mail className="mr-2 w-5 h-5" />
            Hire Me
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => window.open(personalInfo.linkedin, '_blank')}
          >
            <Linkedin className="mr-2 w-5 h-5" />
            Let's Connect
          </Button>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, FastAPI, and way too much caffeine ☕
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
