import React from 'react';
import { Check, FileCheck, BookOpen, Layers, Shield, Sparkles } from 'lucide-react';

export const BenefitSection: React.FC<{ onOpenAccess: () => void }> = ({ onOpenAccess }) => {
  const benefits = [
    {
      title: 'Define Scope Before Price',
      desc: 'The exact conversational sequence to isolate requirements before throwing out numbers, preventing anchoring yourself into low-ball estimates.',
    },
    {
      title: 'Split Setup From Care',
      desc: 'How to separate high-ticket implementation from low-stress recurring maintenance so you never field “quick tweaks” for free.',
    },
    {
      title: 'Trigger New Scope Clearly',
      desc: 'The frictionless script that instantly signals to the client when a new request is billable Phase 2 work without causing conflict.',
    },
    {
      title: 'Write a one-sentence boundary clients can check',
      desc: 'A crystal-clear deliverable boundary formula (Outcome + Limit + Exclusion) that makes your contract immune to scope creep.',
    },
    {
      title: 'Use the one-page pricing checklist on every call',
      desc: 'The bulletproof 8-point checklist you run through before sending any proposal so no hidden labor detail is left uncounted.',
    },
  ];

  const packageEnclosures = [
    {
      label: 'Core Secret Report',
      format: 'PDF + Digital Reader',
      detail: 'The comprehensive tactical breakdown of all 7 Levers with real-world case breakdowns.',
    },
    {
      label: 'The 1-Page Scoping Checklist',
      format: 'Printable + Notion',
      detail: 'The rapid audit sheet you keep next to your keyboard during every client scoping call.',
    },
    {
      label: '3-Tier Defensible Proposal Template',
      format: 'Docs + Markdown',
      detail: 'The exact three-tier proposal structure that makes your middle package the natural choice.',
    },
    {
      label: 'Change-Request Email Swipe File',
      format: '5 Copy-Paste Scripts',
      detail: 'Pre-written polite responses to handle out-of-scope demands with zero friction.',
    },
  ];

  return (
    <section id="discover" className="relative py-20 lg:py-28 bg-[#060F1E] border-t border-[#D4AF37]/15">
      <div className="absolute inset-0 bg-low-poly-grid opacity-40 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
            Inside The Report
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-balance">
            What You'll <span className="gold-gradient-text">Discover</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Straight-to-the-point operational frameworks designed to be deployed on your very next client call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Bulleted Checklist with Checkmarks */}
          <div className="lg:col-span-7 space-y-5">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rotate-45 bg-[#D4AF37]" />
              <span>Core Methodologies & Protocols</span>
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="bg-[#0A1931]/80 border border-[#D4AF37]/20 rounded-xl p-5 hover:border-[#D4AF37]/50 transition-colors flex items-start gap-4 group"
                >
                  {/* Premium Gold Checkmark Badge */}
                  <div className="w-8 h-8 rounded-lg bg-[#0F2242] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#F5D76E] group-hover:bg-[#D4AF37] group-hover:text-[#0A1931] transition-colors">
                    <Check className="w-5 h-5 stroke-[2.5]" />
                  </div>

                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-white mb-1 group-hover:text-[#F5D76E] transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: What's Enclosed in the Digital Asset Bundle */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0F2242] to-[#0A1931] border border-[#D4AF37]/35 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#D4AF37]/20 mb-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#7DD3E0] font-mono font-semibold">Immediate Delivery</span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <h4 className="font-display font-bold text-lg text-white">Everything Included</h4>
                  <span className="text-[#F5D76E] font-display font-black text-xl">$17</span>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-[#0A1931] border border-[#D4AF37]/40 flex items-center justify-center text-[#F5D76E]">
                <FileCheck className="w-4 h-4" />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {packageEnclosures.map((enc, idx) => (
                <div key={idx} className="bg-[#060F1E]/70 border border-[#D4AF37]/15 rounded-lg p-3.5">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-[#F5D76E]">{enc.label}</span>
                    <span className="text-[#7DD3E0] font-mono text-[10px] bg-[#0A1931] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                      {enc.format}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    {enc.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenAccess}
                className="gold-btn w-full py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Download Report & Checklist — $17</span>
                <Check className="w-4 h-4" />
              </button>
              <p className="text-center text-[11px] text-slate-400 mt-3 font-medium">
                Created & Published by <span className="text-[#7DD3E0]">BirthdayMessaging</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
