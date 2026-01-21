import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, MapPin, Phone, Send, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { personalInfo } from '../data/portfolioData';

const InspiredContactPage = () => {
  const navigate = useNavigate();

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
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Let's <span className="text-emerald-400">Connect</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <a href={`mailto:${personalInfo.email}`}>
              <Card className="bg-slate-900/30 border-slate-800 p-8 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group h-full">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Mail className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Email Me
                </h3>
                <p className="text-slate-400 mb-4">The best way to reach me for project inquiries</p>
                <div className="flex items-center text-emerald-400 font-medium">
                  {personalInfo.email}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </a>

            {/* LinkedIn */}
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <Card className="bg-slate-900/30 border-slate-800 p-8 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group h-full">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  LinkedIn
                </h3>
                <p className="text-slate-400 mb-4">Connect with me professionally</p>
                <div className="flex items-center text-emerald-400 font-medium">
                  View Profile
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </a>

            {/* Phone */}
            <a href={`tel:${personalInfo.phone}`}>
              <Card className="bg-slate-900/30 border-slate-800 p-8 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer group h-full">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Phone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  Call Me
                </h3>
                <p className="text-slate-400 mb-4">For urgent matters or quick chats</p>
                <div className="flex items-center text-emerald-400 font-medium">
                  {personalInfo.phone}
                  <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </a>

            {/* Location */}
            <Card className="bg-slate-900/30 border-slate-800 p-8 h-full">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                <MapPin className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Location
              </h3>
              <p className="text-slate-400 mb-4">Based in</p>
              <div className="text-emerald-400 font-medium">
                {personalInfo.location}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What I'm Looking For */}
      <section className="py-16 px-6 border-t border-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What I&apos;m <span className="text-emerald-400">Looking For</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-900/30 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Product Launches</h3>
              <p className="text-slate-400 text-sm">
                0→1 products that need marketing-minded builders
              </p>
            </Card>
            
            <Card className="bg-slate-900/30 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-white mb-2">Growth Challenges</h3>
              <p className="text-slate-400 text-sm">
                Scaling systems that need engineering discipline
              </p>
            </Card>
            
            <Card className="bg-slate-900/30 border-slate-800 p-6 text-center hover:border-emerald-500/50 transition-colors">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-bold text-white mb-2">Collaborations</h3>
              <p className="text-slate-400 text-sm">
                Building with passionate teams
              </p>
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
          
          <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold mt-6" asChild>
            <a href={`mailto:${personalInfo.email}`}>
              <Mail className="mr-2 w-5 h-5" />
              Send me an email
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default InspiredContactPage;
