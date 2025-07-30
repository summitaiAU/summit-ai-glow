import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} className="min-h-screen relative overflow-hidden" data-scroll-container>
      <Header />
      <HeroSection />
      <StatisticsSection />
    </div>
  );
};

export default Index;
