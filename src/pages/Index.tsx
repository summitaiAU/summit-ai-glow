import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnershipSection from '@/components/PartnershipSection';
import LoadingScreen from '@/components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate content loading
  useEffect(() => {
    // Preload any assets if needed
    const timer = setTimeout(() => {
      // Additional loading logic can go here
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
