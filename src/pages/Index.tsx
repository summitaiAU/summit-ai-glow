import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <HeroSection />
      <StatisticsSection />
    </div>
  );
};

export default Index;
