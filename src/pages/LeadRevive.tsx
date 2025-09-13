import React from 'react';
import SummitAILogo from '@/components/SummitAILogo';

const LeadRevive = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Logo at top */}
      <div className="p-8 sm:p-12">
        <SummitAILogo />
      </div>
      
      {/* Centered coming soon message */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4">
            Page Coming Soon
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            We're working on something amazing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadRevive;