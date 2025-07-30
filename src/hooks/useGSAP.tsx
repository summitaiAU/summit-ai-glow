import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP animations will be scoped to the container
    }, containerRef);

    return () => ctx.revert(); // Clean up animations
  }, []);

  return { containerRef, gsap };
};

export const animateIn = (element: string | Element, options: gsap.TweenVars = {}) => {
  return gsap.fromTo(element, 
    { 
      opacity: 0, 
      y: 50,
      ...options.from 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1,
      ease: "power3.out",
      ...options.to 
    }
  );
};

export const animateText = (element: string | Element, options: gsap.TweenVars = {}) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      y: 30,
      ...options.from
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1,
      ...options.to
    }
  );
};