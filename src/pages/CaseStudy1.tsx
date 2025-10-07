import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, DollarSign, CheckCircle, Lightbulb, Shield, FileText, Lock, Users, Mail, AlertCircle, TrendingUp } from 'lucide-react';

const CaseStudy1 = () => {
  return (
    <div className="min-h-screen relative">
      {/* Fallback Background */}
      <div className="fixed top-0 left-0 w-screen h-screen z-[-2]"
           style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }} />
      
      {/* 3D Animated Background */}
      <iframe 
        src="https://my.spline.design/animatedgradientbackgroundforweb-rMoVYVkwOU56cPVND2NH4lpP/" 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
        title="Animated Background"
        loading="eager"
      />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary">
                How a Mortgage Brokerage<br />
                <span className="animated-text">Transformed Productivity</span><br />
                with an AI Email Assistant
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                SummitAI helped a leading brokerage reclaim over 7 hours per week per broker — while strengthening compliance and reducing operational stress.
              </p>
              <div className="pt-8">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://calendly.com/kirt-quar-summitai/new-meeting', '_blank')}
                >
                  Book a Discovery Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 - The Challenge */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-16">
              Email Overload and Compliance Risk
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <Clock className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Time Drain</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Brokers were losing 2+ hours per day to inbox management, reducing time available for client relationships and strategic work.
                </p>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <AlertCircle className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Compliance Risk</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Manual replies increased the risk of inconsistent advice under the Best Interests Duty (BID) framework.
                </p>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <DollarSign className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Scaling Costs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Scaling with new hires was unsustainable, costing over $104,000 per employee in salary and overhead.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 2 - The Solution */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-16">
              The AI Email Assistant
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-foreground text-center max-w-4xl mx-auto leading-relaxed">
                SummitAI built a secure, in-house AI assistant using Retrieval-Augmented Generation (RAG) technology.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Intelligent Learning</h4>
                      <p className="text-muted-foreground">Learns from past emails, SOPs, and compliance documents</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Instant Drafts</h4>
                      <p className="text-muted-foreground">Generates accurate, brand-authentic email drafts in seconds</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Secure Infrastructure</h4>
                      <p className="text-muted-foreground">Operates entirely inside the client's Microsoft 365 or Google Workspace</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="bg-card/50 backdrop-blur-sm border-border p-6">
                  <div className="flex items-start space-x-4">
                    <Lock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Privacy First</h4>
                      <p className="text-muted-foreground">Zero-trust PII redaction, AES-256 encryption, mandatory human review</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Before & After */}
              <div className="mt-16 grid md:grid-cols-2 gap-8">
                <Card className="bg-card/30 backdrop-blur-sm border-destructive/50 p-8">
                  <div className="text-center">
                    <div className="text-destructive font-bold text-lg mb-4">BEFORE</div>
                    <div className="text-5xl font-bold text-destructive mb-2">20 min</div>
                    <div className="text-muted-foreground">Manual email drafting</div>
                  </div>
                </Card>
                
                <Card className="bg-card/30 backdrop-blur-sm border-accent/50 p-8">
                  <div className="text-center">
                    <div className="text-accent font-bold text-lg mb-4">AFTER</div>
                    <div className="text-5xl font-bold text-accent mb-2">2 min</div>
                    <div className="text-muted-foreground">Strategic review & approval</div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 - The Results */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-16">
              A Tangible ROI
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 p-8 text-center hover:shadow-glow transition-all duration-300">
                <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">7.5 hours</div>
                <div className="text-muted-foreground">saved weekly<br />per broker</div>
              </Card>
              
              <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 p-8 text-center hover:shadow-glow transition-all duration-300">
                <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">$33,840</div>
                <div className="text-muted-foreground">annual capacity<br />gain per broker</div>
              </Card>
              
              <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 p-8 text-center hover:shadow-glow transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">Zero</div>
                <div className="text-muted-foreground">compliance breaches<br />during pilot</div>
              </Card>
              
              <Card className="bg-accent/10 backdrop-blur-sm border-accent/30 p-8 text-center hover:shadow-glow transition-all duration-300">
                <Lightbulb className="w-12 h-12 text-accent mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">positive feedback<br />from users</div>
              </Card>
            </div>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-accent/5 to-accent/10 backdrop-blur-sm border-accent/30 p-12 max-w-4xl mx-auto">
              <div className="text-center">
                <svg className="w-12 h-12 text-accent mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <blockquote className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                  "The project delivered exactly what was promised — seamless implementation, proactive problem-solving, and complete transparency throughout."
                </blockquote>
                <div className="text-muted-foreground font-semibold">
                  — Founder & CEO, Partner Organisation
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Section 4 - The Compliance Advantage */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary text-center mb-8">
              Built for Australia's Regulatory Environment
            </h2>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Engineered to meet the strictest compliance requirements in the financial services industry.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <Shield className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Privacy Act (APP 6 & 11)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Zero-trust in-memory redaction ensures personal information is protected at all times, meeting Australian Privacy Principles.
                </p>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <Users className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Best Interests Duty</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Mandatory human-in-the-loop approval ensures every communication meets the highest standards of client care.
                </p>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border p-8 hover:shadow-glow transition-all duration-300">
                <FileText className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">ASIC Record-Keeping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  7-year audit trail of all AI-assisted communications, ensuring full transparency and regulatory compliance.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Section 5 - The Bigger Picture */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8">
              From Practice to Platform
            </h2>
            <p className="text-xl text-foreground leading-relaxed mb-12">
              This pilot marked a pivotal shift from manual brokerage operations to a scalable, AI-enhanced model that improved both efficiency and broker wellbeing. By automating repetitive communication tasks, brokers gained back valuable time to focus on what matters most: building relationships and delivering exceptional client outcomes.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              The success of this implementation demonstrates that AI doesn't replace human expertise — it amplifies it. Brokers remain in full control, with AI serving as an intelligent assistant that handles the mundane so they can focus on the meaningful.
            </p>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-full shadow-glow transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://calendly.com/kirt-quar-summitai/new-meeting', '_blank')}
            >
              See What AI Can Do for Your Business
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-muted-foreground">
              © 2025 SummitAI. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CaseStudy1;
