import React, { useEffect, useRef } from 'react';
import AnimatedText from './AnimatedText';
import { useGSAP, animateIn, animateText } from '@/hooks/useGSAP';

const HeroSection = () => {
  const { containerRef } = useGSAP();
  const heroRef = useRef<HTMLDivElement>(null);

  const animatedWords = [
    'Development',
    'Consulting', 
    'Solutions',
    'Innovation',
    'Technology',
    'Strategy'
  ];

  useEffect(() => {
    if (heroRef.current) {
      // Animate main title
      animateText('.hero-title', {
        to: { delay: 0.5, duration: 1.2 }
      });
      
      // Animate company text
      animateText('.hero-company', {
        to: { delay: 1.2, duration: 1 }
      });
      
      // Animate tagline
      animateIn('.hero-tagline', {
        to: { delay: 1.8, duration: 0.8 }
      });
      
      // Animate decorative elements
      animateIn('.hero-decoration', {
        to: { delay: 2.2, duration: 1, stagger: 0.2 }
      });
    }
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen flex items-center justify-center animated-bg relative" data-scroll-section>
      {/* 3D CSS Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="w-full h-full bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-cyan-900/20 animate-pulse"></div>
      </div>
      
      <div ref={heroRef} className="text-center space-y-8 px-8 max-w-4xl mx-auto relative z-10">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="hero-title font-sans text-5xl md:text-7xl lg:text-8xl text-white animated-text">
            We are not an AI
          </h1>
          
          {/* Animated Middle Word */}
          <div className="h-20 md:h-28 lg:h-32 flex items-center justify-center">
            <AnimatedText 
              words={animatedWords}
              className="font-display text-4xl md:text-6xl lg:text-7xl"
            />
          </div>
          
          {/* Company */}
          <h2 className="hero-company font-sans text-5xl md:text-7xl lg:text-8xl text-white animated-text">
            Company
          </h2>
        </div>
        
        {/* Tagline */}
        <div className="pt-8">
          <p className="hero-tagline text-lg md:text-xl text-white font-medium opacity-80 animated-text">
            We are all of the above.
          </p>
        </div>
        
        {/* Subtle call-to-action */}
        <div className="pt-12 opacity-60">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Discover what we can build together</span>
            <svg 
              className="w-4 h-4 animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="hero-decoration absolute bottom-10 left-10 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse"></div>
      <div className="hero-decoration absolute top-1/3 right-10 w-1 h-1 bg-accent rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="hero-decoration absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;