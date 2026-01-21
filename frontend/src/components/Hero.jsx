import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

const Hero = ({ personalInfo }) => {
  return (
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
          {personalInfo.name}
        </h1>
        
        <p className="text-2xl md:text-3xl text-slate-300 font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {personalInfo.title}
        </p>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          {personalInfo.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            size="lg" 
            className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-6 text-lg group transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-500 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
