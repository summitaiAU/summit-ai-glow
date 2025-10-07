import React, { useEffect, useState } from 'react';
import SummitAILogo from './SummitAILogo';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`fixed top-2 sm:top-3 md:top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6 md:px-8 transition-all duration-500 ${
      isScrolled ? 'top-2 sm:top-3 md:top-4' : 'top-4 sm:top-6 md:top-8'
    }`}>
      <div className={`flex justify-between items-center rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/20 backdrop-blur-xl border border-white/30 shadow-2xl shadow-black/20' 
          : 'bg-transparent'
      }`}>
        {/* Logo */}
        <SummitAILogo />
        
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Button 
            variant="ghost" 
            className="btn-ghost text-primary hover:text-accent transition-colors duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3"
            onClick={() => window.location.href = '/casestudy1'}
          >
            Case Studies
          </Button>
          
          <Button
          variant="ghost" 
          className="btn-ghost text-primary hover:text-accent transition-colors duration-300 text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3"
          onClick={() => window.open('https://calendly.com/kirt-quar-summitai/discovery-call', '_blank')}
        >
          Book a Call
          <svg 
            className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
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
      </div>
    </header>
  );
};

export default Header;