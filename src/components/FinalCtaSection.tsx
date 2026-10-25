import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenAccess: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenAccess }) => {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0A1931] overflow-hidden">
      {/* Dimensional lighting and warm gold glow */}
      <div className="absolute inset-0 bg-mesh-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-low-poly-grid pointer-events-none opacity-40" />
      
      {/* Central Majestic Gold Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] bg-[#F5D76E]/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Discrete Brand Badge */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7DD3E0] tracking-widest uppercase mb-6">
          <span>Official Release</span>
          <span aria-hidden="true" className="text-slate-500">·</span>
          <span className="text-[#F5D76E]">BirthdayMessaging</span>
        </div>

        {/* Headline: 48px+ on desktop, balanced wrap */}
        <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[58px] text-white tracking-tight leading-[1.12] mb-6 text-balance max-w-4xl mx-auto">
          Define Scope First.{' '}
          <span className="gold-gradient-text block sm:inline">
            Then Let Price Make Sense.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed mb-10 max-w-2xl mx-auto">
          Get Quietly Profitable AI Offers today for just <span className="text-[#F5D76E] font-semibold">$17</span> and build your 3 packages before your next proposal.
        </p>

        {/* Large Gold CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative group w-full sm:w-auto">
            {/* Soft gold glow behind button */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F5D76E] via-[#D4AF37] to-[#B89025] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-300" />
            
            <button
              onClick={onOpenAccess}
              className="relative gold-btn px-10 sm:px-14 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#F5D76E]"
            >
              <span>Yes, I Want The Report — $17</span>
              <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

          {/* Quick confirmation chips */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300 mt-4">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F5D76E]" />
              <span>$17 One-Time Investment</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F5D76E]" />
              <span>1-Page Scoping Checklist</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#F5D76E]" />
              <span>3-Tier Offer Templates</span>
            </span>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <footer className="mt-24 pt-8 border-t border-[#D4AF37]/15 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-display text-sm">
            <span className="text-white font-bold">Quietly Profitable AI Offers</span>
            <span className="text-slate-600">·</span>
            <span className="text-[#7DD3E0] font-sans font-semibold">BirthdayMessaging</span>
          </div>
          <div className="text-slate-400">
            A publication by <span className="text-[#7DD3E0] font-medium">BirthdayMessaging</span>. All rights reserved.
          </div>
        </div>
      </footer>
    </section>
  );
};
