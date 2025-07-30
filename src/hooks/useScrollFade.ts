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
    // Much gentler fade that keeps content visible much longer
    const fadeDistance = 2000; // Very long fade distance
    const scrollProgress = Math.max(0, (scrollY - offset - 800) / fadeDistance); // Start fading much later
    const opacity = Math.max(0.1, 1 - scrollProgress); // Never go completely invisible
    const translateY = Math.min(5, scrollProgress * 5); // Minimal movement
    
    return {
      opacity,
      transform: `translateY(-${translateY}px)`,
      transition: 'none'
    };
  };

  return { scrollY, getFadeStyle };
};