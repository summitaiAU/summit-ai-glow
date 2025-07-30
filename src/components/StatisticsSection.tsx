import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useViewportFade } from '@/hooks/useViewportFade';
import Counter from './Counter';

const StatisticsSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  const { useFadeRef } = useViewportFade();
  const headlineRef = useFadeRef();
  const stat1Ref = useFadeRef();
  const stat2Ref = useFadeRef();
  const stat3Ref = useFadeRef();

  return (
    <section ref={ref} className={`min-h-screen flex items-center justify-center relative py-10 sm:py-15 md:py-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Headline */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 ref={headlineRef.ref} style={headlineRef.style} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-left font-sans">
            <span className="text-white">We don't sell AI. We sell </span>
            <span className="text-accent italic">Results</span>
            <span className="text-white">.</span>
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8">
          {/* Column 1 */}
          <div ref={stat1Ref.ref} style={stat1Ref.style} className="text-left">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="relative">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-white mb-2 sm:mb-3 md:mb-4 font-sans">
                  <Counter end={10} duration={2000} suffix="+" isVisible={isVisible} />
                </h3>
                <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans">
                Bespoke AI solutions developed
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div ref={stat2Ref.ref} style={stat2Ref.style} className="text-left">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="relative">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-white mb-2 sm:mb-3 md:mb-4 font-sans">
                  <Counter end={25} duration={2000} suffix="+" isVisible={isVisible} />
                </h3>
                <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans">
                AI opportunities identified for businesses
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div ref={stat3Ref.ref} style={stat3Ref.style} className="text-left">
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <div className="relative">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-white mb-2 sm:mb-3 md:mb-4 font-sans">
                  <Counter end={100} duration={2000} suffix="%" isVisible={isVisible} />
                </h3>
                <div className="w-8 sm:w-12 md:w-16 h-0.5 sm:h-0.5 md:h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed font-sans">
                Client satisfaction rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;