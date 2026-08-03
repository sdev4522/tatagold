'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyTataGold from '@/components/WhyTataGold';
import ProductCatalog from '@/components/ProductCatalog';
import WireCalculator from '@/components/WireCalculator';
import SpecTable from '@/components/SpecTable';
import ContactWeb3Form from '@/components/ContactWeb3Form';
import Footer from '@/components/Footer';
import QuickQuoteModal from '@/components/QuickQuoteModal';
import MobileTaskbar from '@/components/MobileTaskbar';

export default function Home() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedGauge, setSelectedGauge] = useState('');

  const handleOpenQuoteWithProduct = (productOrGauge: string) => {
    setSelectedGauge(productOrGauge);
    setIsQuoteOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-bg text-brand-text relative">
      {/* Sticky Top Header */}
      <Header onOpenQuote={() => handleOpenQuoteWithProduct('')} />

      {/* Hero Section featuring 3D Box Mockup */}
      <Hero onOpenQuote={() => handleOpenQuoteWithProduct('')} />

      {/* Value Propositions */}
      <WhyTataGold />

      {/* Filterable Product Catalog */}
      <ProductCatalog onSelectProduct={(prod) => handleOpenQuoteWithProduct(prod)} />

      {/* Interactive Wire Load Calculator */}
      <WireCalculator onSelectGauge={(gauge) => handleOpenQuoteWithProduct(gauge)} />

      {/* Technical Specifications Matrix */}
      <SpecTable />

      {/* Web3Forms Contact Mailer Form */}
      <ContactWeb3Form prefilledProduct={selectedGauge} />

      {/* Footer */}
      <Footer />

      {/* Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialGauge={selectedGauge}
      />

      {/* Sticky Mobile Taskbar for Mobile Devices (< 768px) */}
      <MobileTaskbar onOpenQuote={() => handleOpenQuoteWithProduct('')} />
    </main>
  );
}
