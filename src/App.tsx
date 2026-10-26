import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { MechanismSection } from './components/MechanismSection';
import { ScopeEstimator } from './components/ScopeEstimator';
import { BenefitSection } from './components/BenefitSection';
import { SalesLetterSection } from './components/SalesLetterSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { AccessModal } from './components/AccessModal';

export default function App() {
  const [isAccessModalOpen, setIsAccessModalOpen] = useState(false);

  // Send every purchase CTA to the InfluenceSoft order page.
  // PayPal must be enabled and configured for this product inside InfluenceSoft.
  const handleOpenAccess = () => {
    window.location.assign(
      'https://godigitiza.influencersoft.com/order/ai-agency-launch-system/'
    );
  };

  const handleCloseAccess = () => {
    setIsAccessModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A1931] text-white selection:bg-[#D4AF37]/30 selection:text-[#F5D76E] relative">
      {/* Top Bar adhering to the Top Bar Contract */}
      <Navbar onOpenAccess={handleOpenAccess} />

      <main>
        {/* Hero Section: Left 3D Ecover, Right Copy & Primary CTA */}
        <HeroSection onOpenAccess={handleOpenAccess} />

        {/* Problem Section: Why Most AI Work Turns Into Free Work */}
        <ProblemSection />

        {/* Mechanism Section: The 7 Scope Levers */}
        <MechanismSection onOpenAccess={handleOpenAccess} />

        {/* Interactive Scope & Pricing Stress Test Tool */}
        <ScopeEstimator onOpenAccess={handleOpenAccess} />

        {/* Benefit Section: What You'll Discover */}
        <BenefitSection onOpenAccess={handleOpenAccess} />

        {/* Sales Letter Deep Dive */}
        <SalesLetterSection onOpenAccess={handleOpenAccess} />

        {/* Final CTA Section */}
        <FinalCtaSection onOpenAccess={handleOpenAccess} />
      </main>

      {/* Instant Delivery Access Modal */}
      <AccessModal
        isOpen={isAccessModalOpen}
        onClose={handleCloseAccess}
      />
    </div>
  );
}
