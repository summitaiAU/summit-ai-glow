import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnershipSection from '@/components/PartnershipSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
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
