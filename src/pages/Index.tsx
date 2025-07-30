import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll';

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <div ref={scrollRef} className="min-h-screen relative overflow-hidden" data-scroll-container>
      <Header />
      <HeroSection />
    </div>
  );
};

export default Index;
