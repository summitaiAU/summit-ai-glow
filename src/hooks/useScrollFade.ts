import React, { useEffect, useState } from 'react';

export const useScrollFade = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getFadeStyle = (offset: number = 0) => {
    const fadeDistance = 600; // Increased from 300 to make content visible longer
    const scrollProgress = (scrollY - offset) / fadeDistance;
    const opacity = Math.max(0, 1 - scrollProgress);
    const translateY = Math.min(30, scrollProgress * 30); // Reduced movement
    
    return {
      opacity,
      transform: `translateY(-${translateY}px)`,
      transition: 'none'
    };
  };

  return { scrollY, getFadeStyle };
};