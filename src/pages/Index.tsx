import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatisticsSection from '@/components/StatisticsSection';
import PartnershipSection from '@/components/PartnershipSection';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      <HeroSection />
      <StatisticsSection />
      <PartnershipSection />
    </div>
  );
};

export default Index;
