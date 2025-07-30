import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnershipSection from '@/components/PartnershipSection';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [elementsLoaded, setElementsLoaded] = useState({
    background: false,
    images: false,
    splineReady: false
  });
  const [loadingStartTime] = useState(Date.now());

  // Check if all elements are loaded
  useEffect(() => {
    if (elementsLoaded.background && elementsLoaded.images && elementsLoaded.splineReady) {
      // Ensure minimum loading time of 2 seconds for better UX
      const elapsed = Date.now() - loadingStartTime;
      const minLoadTime = 2000;
      const remainingTime = Math.max(0, minLoadTime - elapsed);
      
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, remainingTime + 500); // Additional 500ms for smooth transition
      
      return () => clearTimeout(timer);
    }
  }, [elementsLoaded, loadingStartTime]);

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
          setElementsLoaded(prev => ({ ...prev, images: true }));
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === totalImages) {
          setElementsLoaded(prev => ({ ...prev, images: true }));
        }
      };
      img.src = url;
    });
  }, []);

  const handleBackgroundLoad = () => {
    setElementsLoaded(prev => ({ ...prev, background: true }));
    
    // Additional check for Spline content readiness
    setTimeout(() => {
      setElementsLoaded(prev => ({ ...prev, splineReady: true }));
    }, 1000); // Give Spline extra time to render
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  return (
    <div className="min-h-screen relative animate-fade-in">
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
      </div>
    </div>
  );
};

export default Index;
