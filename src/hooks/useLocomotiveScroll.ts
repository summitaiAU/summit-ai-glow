import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    let locomotiveScroll: any;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            scrollFromAnywhere: false,
            touchMultiplier: 2,
            smoothMobile: false,
            smartphone: {
              smooth: false
            },
            tablet: {
              smooth: false
            }
          });

          locomotiveScrollRef.current = locomotiveScroll;
        }
      } catch (error) {
        console.error('Error initializing Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return {
    scrollRef,
    locomotiveScroll: locomotiveScrollRef.current
  };
};