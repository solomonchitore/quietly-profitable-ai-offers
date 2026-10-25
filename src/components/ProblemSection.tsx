import React from 'react';
import { Target, Repeat, AlertTriangle, Layers, Clock, TrendingDown } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Target,
      number: '01',
      title: 'You price the output',
      quote: 'Clients pay for cleanup, testing, exceptions, and reliability around it.',
      diagnosis: 'Beginners quote the generated draft or the model endpoint. But the client evaluates the edge cases, edge errors, prompt drifting, and human sanitization. When that labor isn’t explicitly scoped, you do it for zero dollars.',
    },
    {
      icon: Repeat,
      number: '02',
      title: 'You sell process',
      quote: "‘I’ll build an agent’ has no finish line. Every request feels included.",
      diagnosis: 'Without a concrete deliverable boundary (Quantity + Format + Outcome + Revision Cap), any tweak to the agent prompt or data connector is perceived by the client as “just part of getting it working”.',
    },
    {
      icon: Clock,
      number: '03',
      title: 'You count tools',
      quote: '$20 + $29 feels like profit until support becomes forever.',
      diagnosis: 'Pricing based on software costs misses the invisible support tail. When an API schema updates 4 months later, you become on-call technical support for life — unless you explicitly split setup from care.',
    },
  ];

  return (
    <section id="problem" className="relative py-20 lg:py-28 bg-[#060F1E] border-y border-[#D4AF37]/15">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-low-poly-grid opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#0A1931] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-3">
            The Hidden Trap In AI Freelancing & Agencies
          </p>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-balance">
            Why Most AI Work Turns Into{' '}
            <span className="gold-gradient-text">Free Work</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            It is rarely a pricing problem. It is almost always an unstated scope failure that leaves your margins completely defenseless.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#0A1931]/90 rounded-2xl p-7 sm:p-8 border border-[#D4AF37]/20 card-hover-glow flex flex-col justify-between group"
              >
                {/* Subtle top indicator */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0F2242] border border-[#D4AF37]/30 flex items-center justify-center text-[#F5D76E] group-hover:border-[#F5D76E] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-mono font-semibold text-slate-500">
                      {item.number}
                    </span>
                  </div>

                  {/* Column Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-3">
                    {item.title}
                  </h3>

                  {/* Core Quote */}
                  <blockquote className="text-[#F5D76E] font-medium text-base sm:text-lg italic leading-snug mb-4 border-l-2 border-[#D4AF37]/50 pl-3">
                    “{item.quote}”
                  </blockquote>

                  {/* Editorial Diagnosis */}
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.diagnosis}
                  </p>
                </div>

                {/* Bottom marker */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <TrendingDown className="w-4 h-4 text-rose-400" />
                  <span>Result: Margin collapses post-delivery</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reality Check Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0F2242] via-[#0A1931] to-[#0F2242] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto shadow-xl">
          <p className="text-sm sm:text-base text-slate-200">
            <strong className="text-white font-semibold">The Core Truth:</strong> When you leave scope fuzzy, your client assumes <em>everything</em> is included. When you define the boundary first, your price stops feeling arbitrary and starts defending itself.
          </p>
        </div>

      </div>
    </section>
  );
};
