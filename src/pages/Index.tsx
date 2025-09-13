import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnershipSection from '@/components/PartnershipSection';
import SummitAILogo from '@/components/SummitAILogo';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const [loadingChecks, setLoadingChecks] = useState({
    splineLoaded: false,
    contentLoaded: false,
    assetsLoaded: false,
    minimumTimeElapsed: false
  });
  const [showHomepage, setShowHomepage] = useState(false);
  const [hideLoadingScreen, setHideLoadingScreen] = useState(false);

  // Check if all loading conditions are met
  const checkAllLoaded = () => {
    if (Object.values(loadingChecks).every(check => check === true)) {
      revealHomepage();
    }
  };

  const revealHomepage = () => {
    setShowHomepage(true);
    setTimeout(() => {
      setHideLoadingScreen(true);
    }, 100); // Small delay for smooth transition
  };

  // Check loading status whenever loadingChecks changes
  useEffect(() => {
    checkAllLoaded();
  }, [loadingChecks]);

  // Minimum loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingChecks(prev => ({ ...prev, minimumTimeElapsed: true }));
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // Preload images
  useEffect(() => {
    const imageUrls = [
      '/lovable-uploads/9758e9cf-dd23-41d1-b627-739956c2f01a.png',
      '/lovable-uploads/483b0c93-f171-47bc-9400-6988015ebfa9.png'
    ];

    let loadedCount = 0;
    const totalImages = imageUrls.length;

    imageUrls.forEach(url => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoadingChecks(prev => ({ ...prev, assetsLoaded: true }));
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setLoadingChecks(prev => ({ ...prev, assetsLoaded: true }));
        }
      };
      img.src = url;
    });
  }, []);

  // Check when window is fully loaded
  useEffect(() => {
    const handleLoad = () => {
      setLoadingChecks(prev => ({ ...prev, contentLoaded: true }));
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  const handleBackgroundLoad = () => {
    // Give Spline extra time to render before marking as loaded
    setTimeout(() => {
      setLoadingChecks(prev => ({ ...prev, splineLoaded: true }));
    }, 1000);
  };

  return (
    <>
      {/* Loading Screen Curtain */}
      <div 
        className={`fixed top-0 left-0 w-screen h-screen z-[9999] bg-background flex items-center justify-center transition-all duration-800 ease-out ${
          hideLoadingScreen ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100'
        }`}
      >
        <div className="animate-pulse">
          <SummitAILogo />
        </div>
      </div>

      {/* Homepage - Loads immediately but stays hidden */}
      <div 
        className={`min-h-screen relative transition-all duration-800 ease-in-out ${
          showHomepage ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Fallback Background - Prevents white flash */}
        <div className="fixed top-0 left-0 w-screen h-screen z-[-2]"
             style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)' }} />
        
        {/* 3D Animated Background */}
        <iframe 
          id="spline-background"
          src="https://my.spline.design/animatedgradientbackgroundforweb-rMoVYVkwOU56cPVND2NH4lpP/" 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
          title="Animated Background"
          loading="eager"
          onLoad={handleBackgroundLoad}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <StatisticsSection />
          <PartnershipSection />
          
          {/* Lead Revive Link */}
          <div className="flex justify-center pb-8">
            <Button variant="ghost" asChild className="text-white hover:text-white/80">
              <Link to="/leadrevive">Lead Revive</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
