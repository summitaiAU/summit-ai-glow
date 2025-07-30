import { useEffect, useRef } from 'react';

interface LocomotiveScrollOptions {
  smooth: boolean;
  multiplier: number;
  class: string;
}

export const useLocomotiveScroll = (options: Partial<LocomotiveScrollOptions> = {}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<any>(null);

  useEffect(() => {
    let locomotiveScroll: any = null;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: options.smooth ?? true,
            multiplier: options.multiplier ?? 1,
            class: options.class ?? 'is-revealed',
            ...options,
          });

          locomotiveScrollRef.current = locomotiveScroll;
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return { scrollRef, locomotiveScroll: locomotiveScrollRef.current };
};