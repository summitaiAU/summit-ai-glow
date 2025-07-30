import React from 'react';

const SummitAILogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Isosceles Triangle Logo */}
      <div className="relative">
        <svg
          width="32"
          height="28"
          viewBox="0 0 32 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Outer triangle with gradient */}
          <path
            d="M16 2 L30 26 L2 26 Z"
            fill="url(#summitGradient)"
            stroke="hsl(var(--accent))"
            strokeWidth="1"
            className="drop-shadow-glow"
          />
          {/* Inner highlight for depth */}
          <path
            d="M16 6 L26 22 L6 22 Z"
            fill="url(#summitInner)"
            opacity="0.6"
          />
          
          <defs>
            <linearGradient id="summitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--accent))" />
              <stop offset="50%" stopColor="hsl(var(--accent-glow))" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <linearGradient id="summitInner" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.1)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold text-primary leading-none tracking-tight">
          Summit
        </span>
        <span className="text-sm font-medium text-accent leading-none tracking-wider">
          AI
        </span>
      </div>
    </div>
  );
};

export default SummitAILogo;