import React from 'react';

const SummitAILogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Image */}
      <div className="relative">
        <img
          src="/lovable-uploads/31ccc156-08b0-4621-988f-b0fc1e8d2862.png"
          alt="SummitAI Logo"
          width="32"
          height="32"
          className="drop-shadow-lg"
        />
      </div>
      
      {/* Brand Text - matching your style */}
      <div className="flex items-baseline">
        <span className="text-xl font-bold text-primary leading-none tracking-tight">
          summit
        </span>
        <span className="text-xl font-bold text-accent leading-none tracking-tight">
          AI
        </span>
      </div>
    </div>
  );
};

export default SummitAILogo;