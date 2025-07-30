import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Fade out the entire loading screen
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    // Initial setup
    gsap.set([logoRef.current, progressBarRef.current, textRef.current], {
      opacity: 0,
      y: 50
    });

    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.5,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut"
    }, "-=0.3");

    // Text and progress bar fade in
    tl.to([textRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    }, "-=0.5");

    // Progress bar animation
    const progressAnimation = gsap.to(progressFillRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.inOut",
      onUpdate: function() {
        const currentProgress = Math.round(this.progress() * 100);
        setProgress(currentProgress);
      }
    });

    tl.add(progressAnimation, "-=0.5");

    // Final logo pulse before exit
    tl.to(logoRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    })
    .to(logoRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut"
    });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-2 h-2 bg-accent/20 rounded-full animate-pulse top-1/4 left-1/4"></div>
        <div className="absolute w-1 h-1 bg-accent/30 rounded-full animate-pulse top-1/3 right-1/3 delay-1000"></div>
        <div className="absolute w-1.5 h-1.5 bg-accent/25 rounded-full animate-pulse bottom-1/3 left-1/5 delay-500"></div>
        <div className="absolute w-1 h-1 bg-accent/20 rounded-full animate-pulse bottom-1/4 right-1/4 delay-1500"></div>
      </div>

      {/* Logo container */}
      <div ref={logoRef} className="mb-16">
        <div className="relative">
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-accent/10 blur-3xl scale-150 rounded-full"></div>
          
          {/* Logo */}
          <div className="relative bg-gradient-to-br from-white via-accent to-white bg-clip-text text-transparent">
            <h1 className="text-4xl md:text-6xl font-bold tracking-wider">
              summit<span className="text-accent">AI</span>
            </h1>
          </div>

          {/* Rotating ring around logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-accent/20 rounded-full animate-spin"
                 style={{ animationDuration: '8s' }}>
              <div className="w-2 h-2 bg-accent rounded-full absolute top-0 left-1/2 transform -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Loading text */}
      <div ref={textRef} className="mb-8 text-center">
        <p className="text-white/80 text-lg font-light tracking-wide">
          Initializing AI Systems
        </p>
        <p className="text-accent/60 text-sm font-light mt-2">
          {progress}% Complete
        </p>
      </div>

      {/* Progress bar */}
      <div ref={progressBarRef} className="w-80 max-w-[80vw]">
        <div className="relative">
          {/* Background bar */}
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            {/* Progress fill */}
            <div 
              ref={progressFillRef}
              className="h-full bg-gradient-to-r from-accent via-accent-glow to-accent rounded-full relative"
              style={{ width: '0%' }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/50 blur-sm rounded-full"></div>
            </div>
          </div>
          
          {/* Progress indicator dot */}
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-accent rounded-full shadow-lg shadow-accent/50 transition-all duration-300"
            style={{ left: `${progress}%`, marginLeft: '-6px' }}
          >
            <div className="absolute inset-0 bg-accent/60 rounded-full animate-ping"></div>
          </div>
        </div>
      </div>

      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-accent/20"
              style={{ 
                animationDelay: `${Math.random() * 2}s`,
                animation: `pulse 4s infinite ease-in-out`
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;