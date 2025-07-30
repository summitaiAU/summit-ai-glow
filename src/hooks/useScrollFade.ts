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
    const opacity = Math.max(0, 1 - (scrollY - offset) / 300);
    const translateY = Math.min(50, (scrollY - offset) / 4);
    
    return {
      opacity,
      transform: `translateY(-${translateY}px)`,
      transition: 'none'
    };
  };

  return { scrollY, getFadeStyle };
};