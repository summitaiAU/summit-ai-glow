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
    images: false
  });

  // Check if all elements are loaded
  useEffect(() => {
    if (elementsLoaded.background && elementsLoaded.images) {
      // Add a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [elementsLoaded]);

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
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }
  return (
    <div className="min-h-screen relative animate-fade-in">
      {/* 3D Animated Background */}
      <iframe 
        src="https://my.spline.design/animatedgradientbackgroundforweb-rMoVYVkwOU56cPVND2NH4lpP/" 
        frameBorder="0" 
        width="100%" 
        height="100%" 
        className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
        title="Animated Background"
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
