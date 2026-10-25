import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Mail, ArrowRight, FileText, Sparkles, BookOpen } from 'lucide-react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessModal: React.FC<AccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'access' | 'preview'>('access');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleDownloadFile = (fileName: string) => {
    // Generate simple text download blob for immediate utility
    const content = `QUIETLY PROFITABLE AI OFFERS — EXECUTIVE REPORT
Published by BirthdayMessaging

PROMISE: How to price one AI service so your quote makes sense and stays profitable after you send it — by defining overlooked scope details that most beginners miss.

THE 7 SCOPE LEVERS:
1. Scope Multiplier: Integrations, data, approvals, exceptions
2. Deliverable Boundary: Quantity + Format + Outcome + Revisions + Excludes
3. Hidden Labor Ledger: Discovery, setup, cleanup, QA, handoff
4. Support Tail: Split Setup Fee from Ongoing Care
5. Risk Adjustment: Low vs Medium vs High-risk outputs
6. Three-Price Comparison: Starter, Standard, Care
7. Change-Request Trigger: The exact line that stops scope creep

DELIVERABLE BOUNDARY FORMULA:
[Quantity] + [Schema Format] + [Outcome Test] + [Max 2 Revision Rounds within 7 Days] + [Explicit Exclusions]

CHANGE-REQUEST TRIGGER SCRIPT:
"We can absolutely do that! That falls under Phase 2 / Add-On Scope — shall I send the addendum quote for $X, or shall we wrap our current agreed deliverables first?"

(c) BirthdayMessaging. All rights reserved.`;

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-xl bg-[#0A1931] border border-[#D4AF37]/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#D4AF37]/20 bg-[#060F1E]">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-white text-base">
              Quietly Profitable AI Offers
            </span>
            <span className="text-slate-600">·</span>
            <span className="text-[#7DD3E0] text-xs font-semibold">BirthdayMessaging</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {!submitted ? (
            <div>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0F2242] border border-[#D4AF37]/40 mx-auto flex items-center justify-center text-[#F5D76E] mb-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-1">
                  Get Instant Access — $17
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  Complete your one-time $17 order below to instantly unlock the Secret Report, 1-Page Scoping Checklist, and 3-Tier Proposal Templates.
                </p>
              </div>

              {/* Order Breakdown Box */}
              <div className="bg-[#060F1E] border border-[#D4AF37]/30 rounded-xl p-4 mb-5 text-xs">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-300">
                  <span>Product: Quietly Profitable AI Offers</span>
                  <span className="font-mono text-white font-semibold">$17.00</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-1">
                  <span>+ Bonus: 1-Page Scoping Checklist (Notion/PDF)</span>
                  <span className="text-[#7DD3E0] font-mono">Included</span>
                </div>
                <div className="flex items-center justify-between text-slate-400 text-[11px] pb-2 border-b border-slate-800">
                  <span>+ Bonus: 3-Tier Proposal & Swipe Templates</span>
                  <span className="text-[#7DD3E0] font-mono">Included</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-sm font-bold text-white">
                  <span>Total Due Today:</span>
                  <span className="text-[#F5D76E] font-mono text-base">$17.00</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Best Email Address (For Delivery)
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full pl-11 pr-4 py-3 bg-[#060F1E] border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#F5D76E] focus:ring-1 focus:ring-[#F5D76E] text-sm"
                    />
                  </div>
                </div>

                <div className="bg-[#0F2242]/70 rounded-xl p-3.5 border border-[#D4AF37]/20 text-xs text-slate-300 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#F5D76E] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Instant Digital Download immediately after confirmation</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#F5D76E] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>30-Day Money-Back Scope Guarantee</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full gold-btn py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing $17 Order...</span>
                  ) : (
                    <>
                      <span>Pay $17 & Get Instant Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 pt-1">
                  Secure checkout. One-time payment of $17. No recurring charges. Published by <span className="text-[#7DD3E0]">BirthdayMessaging</span>.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-2">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Access Granted!
              </h3>
              <p className="text-sm text-slate-300 mb-6">
                We’ve sent the full kit to <strong className="text-white">{email}</strong>. You can also download the package immediately below:
              </p>

              <div className="space-y-3 mb-6 text-left">
                <div className="p-4 bg-[#060F1E] border border-[#D4AF37]/30 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-white">Quietly-Profitable-AI-Offers-Report.txt</div>
                    <div className="text-xs text-slate-400">Complete 7 Levers Guide + Formulas</div>
                  </div>
                  <button
                    onClick={() => handleDownloadFile('Quietly-Profitable-AI-Offers-Report.txt')}
                    className="px-3 py-1.5 bg-[#0F2242] hover:bg-[#1a386b] text-[#F5D76E] text-xs font-semibold rounded-lg border border-[#D4AF37]/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                </div>

                <div className="p-4 bg-[#060F1E] border border-[#D4AF37]/30 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm text-white">1-Page-AI-Pricing-Checklist.txt</div>
                    <div className="text-xs text-slate-400">Scoping questions for live client calls</div>
                  </div>
                  <button
                    onClick={() => handleDownloadFile('1-Page-AI-Pricing-Checklist.txt')}
                    className="px-3 py-1.5 bg-[#0F2242] hover:bg-[#1a386b] text-[#F5D76E] text-xs font-semibold rounded-lg border border-[#D4AF37]/30 flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Return to page
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
