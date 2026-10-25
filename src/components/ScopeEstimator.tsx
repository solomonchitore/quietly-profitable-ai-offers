import React, { useState } from 'react';
import { Sliders, ShieldCheck, AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const ScopeEstimator: React.FC<{ onOpenAccess: () => void }> = ({ onOpenAccess }) => {
  const [integrationType, setIntegrationType] = useState<'static' | 'api' | 'live_crm'>('api');
  const [boundaryLevel, setBoundaryLevel] = useState<'fuzzy' | 'standard' | 'defensible'>('fuzzy');
  const [supportModel, setSupportModel] = useState<'bundled' | 'limited' | 'split'>('bundled');
  const [riskFactor, setRiskFactor] = useState<'low' | 'medium' | 'high'>('medium');

  // Calculate score & recommendations based on the 7 Levers
  const calculateResult = () => {
    let riskPoints = 0;
    if (integrationType === 'live_crm') riskPoints += 30;
    else if (integrationType === 'api') riskPoints += 15;

    if (boundaryLevel === 'fuzzy') riskPoints += 35;
    else if (boundaryLevel === 'standard') riskPoints += 15;

    if (supportModel === 'bundled') riskPoints += 25;
    else if (supportModel === 'limited') riskPoints += 10;

    if (riskFactor === 'high') riskPoints += 20;
    else if (riskFactor === 'medium') riskPoints += 10;

    const creepRiskPercentage = Math.min(95, Math.max(12, riskPoints));
    const profitSafety = 100 - creepRiskPercentage;

    return {
      creepRiskPercentage,
      profitSafety,
      status: profitSafety > 65 ? 'Defensible & Protected' : profitSafety > 35 ? 'Moderate Scope Vulnerability' : 'Critical Unpaid Labor Trap',
      color: profitSafety > 65 ? 'text-emerald-400' : profitSafety > 35 ? 'text-amber-300' : 'text-rose-400',
      primaryLeverNeeded: 
        boundaryLevel === 'fuzzy' 
          ? 'Lever 02: Deliverable Boundary (Lock Quantity + Revisions + Excludes)' 
          : supportModel === 'bundled' 
          ? 'Lever 04: Support Tail (Split Setup Fee from Ongoing Care)' 
          : 'Lever 01: Scope Multiplier (Account for live data exceptions)',
    };
  };

  const result = calculateResult();

  return (
    <section id="estimator" className="relative py-20 bg-[#0A1931] border-t border-[#D4AF37]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
            <span>Interactive Tool</span>
            <span aria-hidden="true" className="text-slate-500">·</span>
            <span className="text-[#7DD3E0]">Built on the 7 Levers</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Check Your Offer's <span className="gold-gradient-text">Scope Leak Risk</span>
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base">
            Simulate a typical client AI project to see how unstated scope drains profitability.
          </p>
        </div>

        {/* Interactive Matrix Grid */}
        <div className="bg-[#0F2242] border border-[#D4AF37]/30 rounded-2xl p-6 sm:p-8 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Form Controls */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Control 1 */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                1. Data & Integration Complexity (Lever 01)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'static', label: 'Static Docs / CSV' },
                  { id: 'api', label: 'Single Clean API' },
                  { id: 'live_crm', label: 'Live CRM / Custom DB' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setIntegrationType(opt.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      integrationType === opt.id
                        ? 'border-[#F5D76E] bg-[#0A1931] text-[#F5D76E] font-semibold'
                        : 'border-slate-700 bg-[#060F1E] text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 2 */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                2. Deliverable Boundary Definition (Lever 02)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'fuzzy', label: 'Fuzzy / Open-Ended' },
                  { id: 'standard', label: 'Standard Checklist' },
                  { id: 'defensible', label: '5-Point Locked Clause' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setBoundaryLevel(opt.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      boundaryLevel === opt.id
                        ? 'border-[#F5D76E] bg-[#0A1931] text-[#F5D76E] font-semibold'
                        : 'border-slate-700 bg-[#060F1E] text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 3 */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                3. Post-Delivery Support Structure (Lever 04)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'bundled', label: 'Bundled / “We’ll help”' },
                  { id: 'limited', label: '14-Day Warranty' },
                  { id: 'split', label: 'Setup + Monthly Care' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSupportModel(opt.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      supportModel === opt.id
                        ? 'border-[#F5D76E] bg-[#0A1931] text-[#F5D76E] font-semibold'
                        : 'border-slate-700 bg-[#060F1E] text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Control 4 */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                4. Consequence of Output Errors (Lever 05)
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'low', label: 'Low (Internal drafts)' },
                  { id: 'medium', label: 'Medium (Client workflows)' },
                  { id: 'high', label: 'High (Finance / Legal)' },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setRiskFactor(opt.id as any)}
                    className={`px-3 py-2 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                      riskFactor === opt.id
                        ? 'border-[#F5D76E] bg-[#0A1931] text-[#F5D76E] font-semibold'
                        : 'border-slate-700 bg-[#060F1E] text-slate-300 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 bg-[#0A1931] border border-[#D4AF37]/35 rounded-xl p-6 text-center flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-2">
                Project Margin Health Analysis
              </div>
              
              <div className={`text-4xl font-display font-extrabold ${result.color} mb-1`}>
                {result.profitSafety}%
              </div>
              <div className="text-xs font-medium text-slate-300">
                Protected Profit Margin
              </div>

              {/* Progress bar */}
              <div className="w-full bg-[#060F1E] h-2.5 rounded-full overflow-hidden my-4 border border-slate-700">
                <div 
                  className={`h-full transition-all duration-500 ${
                    result.profitSafety > 65 ? 'bg-emerald-400' : result.profitSafety > 35 ? 'bg-[#F5D76E]' : 'bg-rose-500'
                  }`}
                  style={{ width: `${result.profitSafety}%` }}
                />
              </div>

              <div className="text-sm font-semibold text-white mb-2">
                {result.status}
              </div>

              <div className="bg-[#060F1E] rounded-lg p-3 text-left border border-[#D4AF37]/20 my-4 text-xs">
                <span className="text-[#D4AF37] font-semibold block mb-1">
                  Primary Fix Required:
                </span>
                <span className="text-slate-300 leading-snug block">
                  {result.primaryLeverNeeded}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenAccess}
              className="gold-btn w-full py-3 rounded-lg text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <span>Get The Full 7-Lever Formula</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
