import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, FileText, Sparkles } from 'lucide-react';
import { Book3DMockup } from './Book3DMockup';

interface HeroSectionProps {
  onOpenAccess: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenAccess }) => {
  return (
    <section className="relative pt-8 pb-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dimensional lighting with subtle gold light streaks and geometric mesh */}
      <div className="absolute inset-0 bg-mesh-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-low-poly-grid pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 gold-light-streak-1 pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 gold-light-streak-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Large 3D book ecover mockup */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <Book3DMockup onOpenAccess={onOpenAccess} />
          </div>

          {/* Right Column: Hero Proposition & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center order-1 lg:order-2 text-center lg:text-left">
            
            {/* Discrete editorial kicker */}
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-semibold text-[#D4AF37] mb-4 tracking-wider uppercase">
              <span className="text-[#7DD3E0]">BirthdayMessaging</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-[#F5D76E]">Special Executive Release</span>
            </div>

            {/* Headline: 48px+ on desktop, balanced wrap */}
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] leading-[1.12] tracking-tight text-white mb-6 text-balance">
              Price AI Services Confidently{' '}
              <span className="gold-gradient-text block sm:inline">
                — Using Overlooked Scope Details
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn one AI capability into three defensible offers. Define what you include, exclude, and protect — so your price explains itself.
            </p>

            {/* Primary Action Button & Trust Line */}
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="relative group">
                {/* Soft gold glow behind CTA */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#B89025] rounded-xl blur-lg opacity-60 group-hover:opacity-90 transition duration-300 group-hover:duration-200" />
                
                <button
                  onClick={onOpenAccess}
                  className="relative gold-btn px-8 sm:px-10 py-4 sm:py-4.5 rounded-xl text-base sm:text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F5D76E]"
                >
                  <span>Get Instant Access — $17</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust line under button */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium pt-1">
                <FileText className="w-4 h-4 text-[#7DD3E0] shrink-0" />
                <span>A focused Secret Report ($17 one-time) with checklist + templates from <strong className="text-[#7DD3E0] font-semibold">BirthdayMessaging</strong></span>
              </div>
            </div>

            {/* Proof/Key Takeaway Strip */}
            <div className="mt-10 pt-8 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#F5D76E]">7 Levers</div>
                <div className="text-xs text-slate-400 mt-0.5">Scope Architecture</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#F5D76E]">3 Tiers</div>
                <div className="text-xs text-slate-400 mt-0.5">Defensible Packages</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-xl sm:text-2xl font-display font-bold text-[#7DD3E0]">1 Page</div>
                <div className="text-xs text-slate-400 mt-0.5">Pricing Checklist</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
