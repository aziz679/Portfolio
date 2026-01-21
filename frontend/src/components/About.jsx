import React from 'react';
import { TrendingUp, Zap, Target, DollarSign } from 'lucide-react';
import { Card } from './ui/card';

const About = ({ about }) => {
  const icons = [TrendingUp, DollarSign, Zap, Target];
  
  return (
    <section className="py-24 bg-slate-950" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Marketing, but make it <span className="text-sky-400">efficient</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {about.summary}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {about.highlights.map((highlight, index) => {
            const Icon = icons[index];
            return (
              <Card 
                key={index} 
                className="bg-slate-900/50 border-slate-800 p-6 hover:bg-slate-900 hover:border-sky-500/30 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
                    <Icon className="w-6 h-6 text-sky-400" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-sky-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    {highlight.metric}
                  </div>
                  <div className="text-sm text-slate-400 font-medium">
                    {highlight.label}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
