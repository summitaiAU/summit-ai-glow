import React from 'react';

const SummitAILogo = () => {
  return (
    <div className="flex items-center space-x-3">
      {/* Hollow white triangle - matching your design */}
      <div className="relative">
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Hollow triangle shape */}
          <path
            d="M14 2 L26 22 L2 22 Z"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
            className="drop-shadow-subtle"
          />
        </svg>
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