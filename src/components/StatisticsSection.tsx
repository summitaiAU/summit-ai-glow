import React from 'react';
import { useScrollFade } from '@/hooks/useScrollFade';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import Counter from './Counter';

const StatisticsSection = () => {
  const { getFadeStyle } = useScrollFade();
  const { ref, isVisible } = useIntersectionObserver();
  return (
    <section ref={ref} className={`relative py-20 pb-40 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-7xl mx-auto px-8" style={getFadeStyle(200)}>
        {/* Headline */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-left font-sans">
            <span className="text-white">We don't sell AI. We sell </span>
            <span className="text-accent italic">Results</span>
            <span className="text-white">.</span>
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Column 1 */}
          <div className="text-left">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 font-sans">
                  <Counter end={10} duration={2000} suffix="+" isVisible={isVisible} />
                </h3>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-sans">
                Bespoke AI solutions developed
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="text-left">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 font-sans">
                  <Counter end={25} duration={2000} suffix="+" isVisible={isVisible} />
                </h3>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-sans">
                AI opportunities identified for businesses
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="text-left">
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-4 font-sans">
                  <Counter end={100} duration={2000} suffix="%" isVisible={isVisible} />
                </h3>
                <div className="w-16 h-1 bg-accent rounded-full"></div>
              </div>
              <p className="text-lg text-white/80 leading-relaxed font-sans">
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