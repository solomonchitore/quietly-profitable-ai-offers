import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenAccess: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAccess }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0A1931]/85 border-b border-[#D4AF37]/15 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2 text-xl font-bold tracking-tight whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37]"
        >
          <span className="font-display tracking-wider text-white group-hover:text-[#F5D76E] transition-colors">
            Birthday<span className="text-[#7DD3E0] font-sans font-semibold">Messaging</span>
          </span>
        </a>

        {/* Zone 2: Single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a 
            href="#problem" 
            className="hover:text-[#F5D76E] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Why Scope First
          </a>
          <a 
            href="#levers" 
            className="hover:text-[#F5D76E] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            The 7 Levers
          </a>
          <a 
            href="#discover" 
            className="hover:text-[#F5D76E] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            What You'll Discover
          </a>
          <a 
            href="#estimator" 
            className="hover:text-[#F5D76E] transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Scope Stress Test
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenAccess}
            className="gold-btn px-4 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D76E]"
          >
            <span>Get Report — $17</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
