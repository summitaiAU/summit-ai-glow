import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useScrollFade } from '@/hooks/useScrollFade';
import { Button } from '@/components/ui/button';

const PartnershipSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { getFadeStyle } = useScrollFade();

  return (
    <section 
      ref={ref} 
      className={`relative py-32 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto px-8 text-center" style={getFadeStyle(800)}>
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 font-sans leading-tight">
          The best AI systems<br />
          are built <span className="text-accent italic">side by side</span>.
        </h2>

        {/* CTA Button */}
        <Button 
          variant="outline" 
          size="lg"
          className="px-8 py-4 text-lg border-2 border-white text-white bg-transparent hover:bg-white hover:text-background transition-all duration-300 rounded-full"
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