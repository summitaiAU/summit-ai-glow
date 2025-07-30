import React, { useEffect, useState } from 'react';
import SummitAILogo from './SummitAILogo';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Wait for fade out animation to complete before calling onComplete
      setTimeout(onComplete, 500);
    }, 1500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="animate-pulse">
        <SummitAILogo />
      </div>
    </div>
  );
};

export default LoadingScreen;