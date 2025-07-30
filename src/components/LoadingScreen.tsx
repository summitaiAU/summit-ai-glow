import React, { useEffect, useState } from 'react';
import SummitAILogo from './SummitAILogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000); // Simple 2 second loading

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center">
      <div className="animate-pulse">
        <SummitAILogo />
      </div>
    </div>
  );
};

export default LoadingScreen;