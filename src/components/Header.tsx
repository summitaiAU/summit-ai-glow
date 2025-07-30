import React from 'react';
import SummitAILogo from './SummitAILogo';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <SummitAILogo />
        
        {/* Get In Touch Button */}
        <Button 
          variant="ghost" 
          className="btn-ghost text-primary hover:text-accent transition-colors duration-300"
        >
          Get In Touch
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
    </header>
  );
};

export default Header;