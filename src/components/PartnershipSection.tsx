import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useViewportFade } from '@/hooks/useViewportFade';
import { Button } from '@/components/ui/button';

const PartnershipSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { useFadeRef } = useViewportFade();

  const headlineRef = useFadeRef();
  const buttonRef = useFadeRef();

  return (
    <section 
      ref={ref} 
      className={`min-h-screen flex items-center justify-center relative transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
        {/* Main Headline */}
        <h2 ref={headlineRef.ref} style={headlineRef.style} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 md:mb-12 font-sans leading-tight">
          The best AI systems<br />
          are built <span className="text-accent italic">side by side</span>.
        </h2>

        {/* CTA Button */}
        <Button 
          ref={buttonRef.ref}
          style={buttonRef.style}
          variant="outline" 
          size="lg"
          className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-background transition-all duration-300 rounded-full"
        >
          Let's Partner Up
          <svg 
            className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default PartnershipSection;