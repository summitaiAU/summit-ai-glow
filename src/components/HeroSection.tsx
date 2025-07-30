import React from 'react';
import AnimatedText from './AnimatedText';
import { useViewportFade } from '@/hooks/useViewportFade';

const HeroSection = () => {
  const { useFadeRef } = useViewportFade();
  const animatedWords = [
    'Development',
    'Consulting', 
    'Solutions',
    'Innovation',
    'Technology',
    'Strategy'
  ];

  const mainHeadlineRef = useFadeRef();
  const animatedTextRef = useFadeRef();
  const companyRef = useFadeRef();
  const taglineRef = useFadeRef();
  const ctaRef = useFadeRef();

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        {/* Main Headline */}
        <div className="space-y-4">
          <h1 ref={mainHeadlineRef.ref} style={mainHeadlineRef.style} className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white animated-text">
            We are not an AI
          </h1>
          
          {/* Animated Middle Word */}
          <div ref={animatedTextRef.ref} style={animatedTextRef.style} className="h-16 sm:h-18 md:h-24 lg:h-28 xl:h-32 flex items-center justify-center">
            <AnimatedText 
              words={animatedWords}
              className="font-display text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
          </div>
          
          {/* Company */}
          <h2 ref={companyRef.ref} style={companyRef.style} className="font-sans text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white animated-text">
            Company
          </h2>
        </div>
        
        {/* Tagline */}
        <div className="pt-4 sm:pt-6 md:pt-8">
          <p ref={taglineRef.ref} style={taglineRef.style} className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium opacity-80 animated-text">
            We are all of the above.
          </p>
        </div>
        
        {/* Subtle call-to-action */}
        <div className="pt-8 sm:pt-10 md:pt-12 opacity-60">
          <div ref={ctaRef.ref} style={ctaRef.style} className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-muted-foreground">
            <span className="text-center">Discover what we can build together</span>
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
      <div className="absolute bottom-10 left-10 w-2 h-2 bg-accent rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/3 right-10 w-1 h-1 bg-accent rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-accent rounded-full opacity-50 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;