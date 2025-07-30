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
    const fadeDistance = 1200; // Much longer fade distance
    const scrollProgress = (scrollY - offset) / fadeDistance;
    const opacity = Math.max(0, 1 - scrollProgress);
    const translateY = Math.min(15, scrollProgress * 15); // Minimal movement
    
    return {
      opacity,
      transform: `translateY(-${translateY}px)`,
      transition: 'none'
    };
  };

  return { scrollY, getFadeStyle };
};