import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, ArrowRight, ShieldCheck } from 'lucide-react';

export const SalesLetterSection: React.FC<{ onOpenAccess: () => void }> = ({ onOpenAccess }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <section className="py-16 bg-[#071326] border-y border-[#D4AF37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Toggle Bar */}
        <div className="bg-[#0A1931] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 text-center shadow-xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#7DD3E0] mb-2">
            <span>Executive Briefing</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-[#F5D76E]">The Full Sales Letter</span>
          </div>

          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-3">
            Read The Complete Letter From BirthdayMessaging
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-6">
            Prefer reading the unfiltered argument before requesting access? Click below to expand the complete founder's letter on AI scope architecture.
          </p>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F2242] border border-[#D4AF37]/40 text-[#F5D76E] hover:text-white hover:border-[#F5D76E] font-semibold text-sm transition-all cursor-pointer shadow-md"
          >
            <BookOpen className="w-4 h-4 text-[#7DD3E0]" />
            <span>{isExpanded ? 'Collapse Sales Letter' : 'Expand Full Sales Letter (5-Minute Read)'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Collapsible Sales Letter Body */}
        {isExpanded && (
          <div className="mt-8 bg-[#0A1931] border border-[#D4AF37]/25 rounded-2xl p-8 sm:p-12 text-slate-200 space-y-6 leading-relaxed shadow-2xl animate-in fade-in duration-300">
            
            <div className="border-b border-[#D4AF37]/20 pb-6 mb-6 text-sm text-slate-400 flex items-center justify-between">
              <span>MEMORANDUM: To AI Agency Founders & Solo Operators</span>
              <span className="text-[#7DD3E0] font-mono">FROM: BirthdayMessaging</span>
            </div>

            <h4 className="font-display font-bold text-2xl sm:text-3xl text-white gold-gradient-subtle leading-snug">
              Dear AI Practitioner,
            </h4>

            <p className="text-base sm:text-lg">
              Here is what happens on almost every AI project: You quote <strong>$3,500</strong> for an automation system or intelligent workflow.
            </p>

            <p>
              In your head, you think: <em>“This is just an API call, a prompt chain, and a Make or Zapier scenario. It’ll take me 6 hours. That’s nearly $600 an hour.”</em>
            </p>

            <p>
              Then reality enters the room.
            </p>

            <div className="bg-[#060F1E] border-l-2 border-[#D4AF37] p-5 rounded-r-xl my-6 space-y-2 text-slate-300">
              <p className="font-semibold text-white">The client’s data is a disaster.</p>
              <p>They change their approval chain three times. The model hallucinates on edge cases you never budgeted for. And six months later, they send you a panic message on Slack because an OpenAI model endpoint updated and their workflow failed.</p>
            </div>

            <p>
              Suddenly, that 6-hour project took 48 hours of your life. Your effective hourly rate dropped to below minimum wage. And worse: you feel resentful every time their name pops up on your screen.
            </p>

            <h5 className="font-display font-bold text-xl text-white pt-4">
              The Problem Isn’t Your Price. It’s Your Undefended Scope.
            </h5>

            <p>
              Clients don’t pay you for the raw generated tokens. They pay you for the <strong>reliability, exceptions, data cleanup, and security perimeter around it</strong>.
            </p>

            <p>
              When you fail to explicitly name those details in your proposal, your client assumes they are automatically included forever.
            </p>

            <p>
              That is why we wrote <strong>Quietly Profitable AI Offers</strong>.
            </p>

            <p>
              It is not a 300-page book of academic theory. It is a razor-sharp, battlefield-tested tactical report that gives you:
            </p>

            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2.5">
                <span className="text-[#F5D76E] font-bold">1.</span>
                <span><strong>The 7 Scope Levers:</strong> The exact mathematical adjustments for data messiness, approval loops, and liability risk.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#F5D76E] font-bold">2.</span>
                <span><strong>The 3-Tier Packaging Formula:</strong> How to present Starter, Standard, and Ongoing Care so 80% of clients pick your highest-margin tier without negotiation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#F5D76E] font-bold">3.</span>
                <span><strong>The Change-Request Script:</strong> The single, non-defensive sentence that turns scope creep into instant $1,200 add-ons.</span>
              </li>
            </ul>

            <div className="pt-8 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-white font-semibold">Ready to price your next AI proposal with total confidence?</p>
                <p className="text-xs text-slate-400">Download the Secret Report and 1-Page Checklist immediately.</p>
              </div>
              <button
                onClick={onOpenAccess}
                className="gold-btn px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer"
              >
                Get The Report Now
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
