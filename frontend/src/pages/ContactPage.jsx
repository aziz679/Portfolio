import React, { useState } from 'react';
import { personalInfo } from '../data/expandedMock';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show a toast
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };
  
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Build Something <span className="text-sky-400">Awesome</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Whether you need marketing that actually works, a product that ships, or just someone to optimize the chaos—let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            
            <div className="space-y-4 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-sky-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Email</div>
                  <div className="text-white font-medium">{personalInfo.email}</div>
                </div>
              </a>
              
              <a 
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-orange-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">Phone</div>
                  <div className="text-white font-medium">{personalInfo.phone}</div>
                </div>
              </a>
              
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">LinkedIn</div>
                  <div className="text-white font-medium">Connect with me</div>
                </div>
              </a>
              
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wide">GitHub</div>
                  <div className="text-white font-medium">Check my code</div>
                </div>
              </a>
            </div>
            
            <Card className="bg-slate-900/50 border-slate-800 p-6">
              <h3 className="text-lg font-bold text-white mb-3">Location</h3>
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-5 h-5 text-sky-400" />
                <span>{personalInfo.location}</span>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 focus:border-sky-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 focus:border-sky-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-slate-900/50 border-slate-800 text-white placeholder:text-slate-500 focus:border-sky-500 resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white py-6 text-lg group transition-all duration-300 hover:scale-105"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
        
        {/* Fun Note */}
        <Card className="bg-gradient-to-r from-sky-500/10 to-orange-500/10 border-sky-500/20 p-6 mt-12 text-center">
          <p className="text-slate-300 text-lg">
            🚀 <span className="font-semibold text-white">Pro tip:</span> I respond fastest to emails about interesting projects, growth challenges, or opportunities to automate things that probably shouldn't be automated (but definitely should).
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
