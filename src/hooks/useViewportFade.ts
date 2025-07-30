import React, { useEffect, useState, useRef } from 'react';

export const useViewportFade = () => {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getElementFadeStyle = (element?: HTMLElement | null) => {
    if (!element) return { opacity: 1, transform: 'translateY(0px)' };

    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Calculate fade based on element position in viewport
    let opacity = 1;
    let translateY = 0;
    
    // Fade out as element goes above viewport (top fade)
    if (rect.top < 0) {
      const fadeProgress = Math.abs(rect.top) / (windowHeight * 0.3);
      opacity = Math.max(0, 1 - fadeProgress);
      translateY = -Math.min(30, fadeProgress * 30);
    }
    
    // Fade in as element enters from bottom
    if (rect.top > windowHeight * 0.8) {
      const fadeProgress = (rect.top - windowHeight * 0.8) / (windowHeight * 0.3);
      opacity = Math.max(0, 1 - fadeProgress);
      translateY = Math.min(30, fadeProgress * 30);
    }
    
    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      transition: 'none'
    };
  };

  const useFadeRef = () => {
    const elementRef = useRef<any>(null);
    const [style, setStyle] = useState({ opacity: 1, transform: 'translateY(0px)' });

    useEffect(() => {
      const updateStyle = () => {
        if (elementRef.current) {
          setStyle(getElementFadeStyle(elementRef.current));
        }
      };

      updateStyle();
      window.addEventListener('scroll', updateStyle);
      window.addEventListener('resize', updateStyle);

      return () => {
        window.removeEventListener('scroll', updateStyle);
        window.removeEventListener('resize', updateStyle);
      };
    }, []);

    return { ref: elementRef, style };
  };

  return { useFadeRef, getElementFadeStyle };
};