import React, { useState } from 'react';
import { 
  GitBranch, 
  Box, 
  Clock, 
  ShieldAlert, 
  Layers, 
  CheckCircle, 
  MessageSquareCode, 
  ChevronRight,
  Sparkles,
  Lock
} from 'lucide-react';

interface LeverItem {
  id: number;
  number: string;
  name: string;
  subtitle: string;
  summary: string;
  formula: string;
  example: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

export const MechanismSection: React.FC<{ onOpenAccess: () => void }> = ({ onOpenAccess }) => {
  const [selectedLever, setSelectedLever] = useState<number | null>(null);

  const levers: LeverItem[] = [
    {
      id: 1,
      number: '01',
      name: 'Scope Multiplier',
      subtitle: 'Integrations, data, approvals, exceptions',
      summary: 'Every external data source or human approval gate doesn’t add linear time — it compounds unpredictability exponentially.',
      formula: 'Base Service × (Data Cleanliness Factor + Approval Layers + Edge Case Allowance)',
      example: '“Connecting to 1 static CSV is 1x. Connecting to a client’s live messy Salesforce with 3 internal approvers is a 3.5x Scope Multiplier.”',
      icon: GitBranch,
      tag: 'Complexity Control',
    },
    {
      id: 2,
      number: '02',
      name: 'Deliverable Boundary',
      subtitle: 'Quantity + Format + Outcome + Revisions + Excludes',
      summary: 'The 5-point contract formula that eliminates ambiguity before money or code changes hands.',
      formula: 'Quantity [10 assets] + Format [.json/.csv schema] + Outcome [1 validated flow] + Revisions [max 2 rounds within 7 days] + Explicit Exclusions.',
      example: '“Delivered as 1 structured Zapier webhook payload. Excludes automated SMS retry loops and manual CRM record de-duplication.”',
      icon: Box,
      tag: 'Perimeter Defense',
    },
    {
      id: 3,
      number: '03',
      name: 'Hidden Labor Ledger',
      subtitle: 'Discovery, setup, cleanup, QA, handoff',
      summary: 'Clients only see the prompt, but 80% of your real time is swallowed by pre-work, sanitation, and client education.',
      formula: 'Itemized: 1. Architecture Audit (2h) · 2. Data Cleaning (3h) · 3. Engine Config (2h) · 4. Edge-Case QA (4h) · 5. Video Handoff (1h).',
      example: 'Show clients the 5 stages in your proposal table so they realize they are buying an operational system, not a 3-minute prompt.',
      icon: Clock,
      tag: 'Value Visibility',
    },
    {
      id: 4,
      number: '04',
      name: 'Support Tail',
      subtitle: 'Split Setup Fee from Ongoing Care',
      summary: 'Never bundle deployment with perpetual maintenance. The moment delivery is certified, the clock stops and Care begins.',
      formula: 'Implementation Fee (One-Time Build) + Monthly Retainer (Active Monitoring, Token Audits, API Version Shifts).',
      example: '“Includes 14 days of bug-fix warranty. Ongoing model retraining and prompt adjustments transition to the Monthly Care Tier.”',
      icon: ShieldAlert,
      tag: 'Recurring Margin',
    },
    {
      id: 5,
      number: '05',
      name: 'Risk Adjustment',
      subtitle: 'Low vs Medium vs High-risk outputs',
      summary: 'If an AI hallucination costs the client $50, you price at one level. If an error triggers legal liability, your price must reflect the liability shield.',
      formula: 'Risk Score (Internal Draft vs External Brand vs Financial/Legal Transaction) = Margin Tier.',
      example: 'Internal summarizer tool: Standard Margin. Public customer-facing support bot with refund capability: High-Risk Multiplier.',
      icon: Layers,
      tag: 'Liability Cushion',
    },
    {
      id: 6,
      number: '06',
      name: 'Three-Price Comparison',
      subtitle: 'Starter, Standard, Care',
      summary: 'Frame your quote with 3 defensible packages where the middle tier is the obvious, highest-margin anchor.',
      formula: 'Tier 1 (Bare Minimum Output) · Tier 2 (Standard Turnkey Pipeline - Recommended) · Tier 3 (Turnkey + 90-Day Ongoing Care).',
      example: '82% of clients select Tier 2 because Tier 1 highlights what they lose, while Tier 3 provides enterprise reassurance.',
      icon: CheckCircle,
      tag: 'Package Anchor',
    },
    {
      id: 7,
      number: '07',
      name: 'Change-Request Trigger',
      subtitle: 'The exact line that stops scope creep',
      summary: 'A neutral, polite, non-confrontational phrasing that converts out-of-bounds requests into instant additional billables.',
      formula: '“We can absolutely do that! That falls under Phase 2 / Add-On Scope — shall I send the addendum quote for $X, or shall we wrap our current agreed deliverables first?”',
      example: 'Instantly disarms tension while keeping your current project deadline and profitability 100% intact.',
      icon: MessageSquareCode,
      tag: 'Creep Stopper',
    },
  ];

  return (
    <section id="levers" className="relative py-20 lg:py-28 bg-[#0A1931]">
      {/* Background accents */}
      <div className="absolute inset-0 bg-mesh-pattern pointer-events-none opacity-60" />
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#7DD3E0] uppercase tracking-widest mb-3">
            <span>The Proprietary Framework</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-[#F5D76E]">7 Defensive Levers</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight text-balance">
            The 7 Scope Levers That{' '}
            <span className="gold-gradient-text">Quietly Control Your Price</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            These are the overlooked architectural levers that allow senior operators to charge 3× more with zero pushback, while beginners get trapped in free revisions.
          </p>
        </div>

        {/* 7 Stylish Cards in 2 Rows: Row 1 has 4 cards, Row 2 has 3 cards */}
        <div className="space-y-6">
          
          {/* Row 1: 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {levers.slice(0, 4).map((lever) => {
              const Icon = lever.icon;
              const isExpanded = selectedLever === lever.id;
              return (
                <div
                  key={lever.id}
                  onClick={() => setSelectedLever(isExpanded ? null : lever.id)}
                  className={`bg-[#0F2242]/90 border rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isExpanded 
                      ? 'border-[#F5D76E] shadow-2xl ring-1 ring-[#F5D76E]/30 bg-[#132b54]' 
                      : 'border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:bg-[#11274c]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#F5D76E] bg-[#0A1931] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                        LEVER {lever.number}
                      </span>
                      <span className="text-[11px] font-mono text-[#7DD3E0] tracking-wide">
                        {lever.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-[#0A1931] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display font-bold text-lg text-white mb-1">
                      {lever.name}
                    </h3>
                    <p className="text-xs text-[#7DD3E0] font-medium mb-3">
                      {lever.subtitle}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {lever.summary}
                    </p>
                  </div>

                  {/* Expandable Preview */}
                  <div className="pt-4 border-t border-[#D4AF37]/15">
                    {isExpanded ? (
                      <div className="space-y-3 pt-1 text-xs">
                        <div className="bg-[#0A1931] p-3 rounded-lg border border-[#D4AF37]/30">
                          <span className="text-[10px] text-[#F5D76E] uppercase font-mono block mb-1">Report Formula:</span>
                          <span className="text-slate-200 font-mono text-[11px]">{lever.formula}</span>
                        </div>
                        <p className="text-slate-300 italic text-[11px]">{lever.example}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-xs text-[#F5D76E] font-medium group">
                        <span>Click to inspect clause</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levers.slice(4, 7).map((lever) => {
              const Icon = lever.icon;
              const isExpanded = selectedLever === lever.id;
              const isHighlight = lever.id === 7; // Lever 7 is the creep stopper
              return (
                <div
                  key={lever.id}
                  onClick={() => setSelectedLever(isExpanded ? null : lever.id)}
                  className={`bg-[#0F2242]/90 border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isHighlight
                      ? 'border-[#D4AF37]/80 bg-gradient-to-b from-[#132c58] to-[#0F2242] shadow-xl'
                      : isExpanded
                      ? 'border-[#F5D76E] shadow-2xl ring-1 ring-[#F5D76E]/30 bg-[#132b54]'
                      : 'border-[#D4AF37]/25 hover:border-[#D4AF37]/60 hover:bg-[#11274c]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-[#F5D76E] bg-[#0A1931] px-2.5 py-1 rounded border border-[#D4AF37]/30">
                        LEVER {lever.number}
                      </span>
                      <span className="text-[11px] font-mono text-[#7DD3E0] tracking-wide">
                        {lever.tag}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-lg bg-[#0A1931] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-3">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      {lever.name}
                    </h3>
                    <p className="text-xs text-[#7DD3E0] font-medium mb-3">
                      {lever.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed mb-4">
                      {lever.summary}
                    </p>
                  </div>

                  {/* Expandable Preview */}
                  <div className="pt-4 border-t border-[#D4AF37]/15">
                    {isExpanded ? (
                      <div className="space-y-3 pt-1 text-xs">
                        <div className="bg-[#0A1931] p-3 rounded-lg border border-[#D4AF37]/30">
                          <span className="text-[10px] text-[#F5D76E] uppercase font-mono block mb-1">Report Formula:</span>
                          <span className="text-slate-200 font-mono text-[11px]">{lever.formula}</span>
                        </div>
                        <p className="text-slate-300 italic text-[11px]">{lever.example}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-xs text-[#F5D76E] font-medium group">
                        <span>Click to inspect script & formula</span>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Mechanism Footnote & Guide Integration */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-slate-400 mb-4">
            Master all 7 levers with copy-paste contract clauses, 3 pricing calculators, and word-for-word scripts.
          </p>
          <button
            onClick={onOpenAccess}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#F5D76E] hover:text-white transition-colors cursor-pointer border-b border-[#F5D76E]/40 pb-0.5"
          >
            <span>See the full 7-Lever implementation inside the Secret Report</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
