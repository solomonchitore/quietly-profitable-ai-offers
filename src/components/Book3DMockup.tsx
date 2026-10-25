import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Layers, Shield } from 'lucide-react';

interface Book3DMockupProps {
  className?: string;
  onOpenAccess?: () => void;
}

export const Book3DMockup: React.FC<Book3DMockupProps> = ({ className = '', onOpenAccess }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(6);
  const [rotateY, setRotateY] = useState<number>(-18);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [specular, setSpecular] = useState<{ x: number; y: number }>({ x: 30, y: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate tilt angles centered around default 3D pose
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;

    setRotateY(-18 + deltaX * 18);
    setRotateX(6 - deltaY * 14);
    setSpecular({
      x: Math.max(0, Math.min(100, (x / rect.width) * 100)),
      y: Math.max(0, Math.min(100, (y / rect.height) * 100)),
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(6);
    setRotateY(-18);
    setSpecular({ x: 30, y: 20 });
  };

  return (
    <div 
      className={`relative flex items-center justify-center p-4 sm:p-8 select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Ambient background gold glow & depth */}
      <div 
        className="absolute w-72 h-96 sm:w-88 sm:h-110 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none transition-opacity duration-700"
        style={{ opacity: isHovered ? 0.35 : 0.2 }}
      />
      <div 
        className="absolute w-60 h-60 bg-[#7DD3E0]/10 rounded-full blur-2xl pointer-events-none translate-x-12 translate-y-12"
      />

      {/* 3D Book Stage */}
      <div 
        className="book-stage relative w-[280px] sm:w-[330px] md:w-[350px] aspect-[1/1.42] cursor-pointer"
        onClick={onOpenAccess}
      >
        {/* Soft realistic cast shadow on ground plane */}
        <div 
          className="absolute -bottom-8 left-6 right-2 h-14 bg-black/60 rounded-[100%] blur-xl transition-transform duration-300 pointer-events-none"
          style={{
            transform: `scale(${isHovered ? 1.05 : 1}) rotate(${rotateY * 0.3}deg) translateZ(-50px)`,
            opacity: 0.75,
          }}
        />

        {/* 3D Book Object Assembly */}
        <div 
          className="book-card-3d relative w-full h-full rounded-r-xl rounded-l-sm"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(0deg)`,
            transformOrigin: 'left center',
          }}
        >
          {/* BOOK COVER (Front) */}
          <div 
            className="absolute inset-0 rounded-r-xl rounded-l-sm overflow-hidden bg-[#0A1931] border border-[#D4AF37]/35 shadow-2xl flex flex-col justify-between p-6 sm:p-8 z-20"
            style={{
              backgroundImage: `
                radial-gradient(circle at ${specular.x}% ${specular.y}%, rgba(245, 215, 110, 0.25) 0%, transparent 45%),
                linear-gradient(135deg, #0F2242 0%, #0A1931 55%, #060F1E 100%)
              `,
              boxShadow: 'inset 0 0 0 1px rgba(212, 175, 55, 0.2), 0 25px 50px -12px rgba(0, 0, 0, 0.85)',
            }}
          >
            {/* Fine Geometric Gold Filigree Border */}
            <div className="absolute inset-3 border border-[#D4AF37]/25 rounded-md pointer-events-none">
              {/* Corner Accents */}
              <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[#D4AF37]" />
              <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[#D4AF37]" />
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[#D4AF37]" />
            </div>

            {/* Left Cover Hinge / Crease shadow */}
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/45 via-black/15 to-transparent pointer-events-none" />
            <div className="absolute left-5 top-0 bottom-0 w-[1px] bg-[#D4AF37]/20 pointer-events-none" />

            {/* Cover Top Badge / Edition Mark */}
            <div className="relative z-10 pt-2 text-center">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#060F1E]/60 border border-[#D4AF37]/30 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F5D76E]">
                  Secret Report & Architecture
                </span>
              </div>
            </div>

            {/* Cover Center: Large Gold Title */}
            <div className="relative z-10 my-auto text-center py-4">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mb-2">
                A Strategic Manual For AI Practitioners
              </p>
              
              <h1 className="font-display font-black text-2xl sm:text-3xl md:text-[34px] leading-[1.12] tracking-tight uppercase">
                <span className="gold-gradient-text block drop-shadow-md">
                  Quietly
                </span>
                <span className="gold-gradient-text block drop-shadow-md">
                  Profitable
                </span>
                <span className="gold-gradient-text block drop-shadow-md">
                  AI Offers
                </span>
              </h1>

              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-2 my-4">
                <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
                <div className="w-2 h-2 rotate-45 border border-[#D4AF37] bg-[#D4AF37]/20" />
                <div className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
              </div>

              <p className="text-[11px] sm:text-xs text-slate-300 font-medium max-w-[240px] mx-auto leading-relaxed">
                The 7 Scope Levers & 3 Defensible Packages to Price Confidently
              </p>
            </div>

            {/* Cover Bottom: Brand Name */}
            <div className="relative z-10 pb-2 text-center border-t border-[#D4AF37]/20 pt-3">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-0.5">
                Authored by
              </p>
              <div className="text-xs sm:text-sm font-semibold tracking-wide text-[#7DD3E0] flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#7DD3E0]" />
                <span>BirthdayMessaging</span>
              </div>
            </div>

            {/* Specular Sheen Stripe */}
            <div 
              className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 transition-opacity"
              style={{
                background: `linear-gradient(115deg, transparent 20%, rgba(255, 255, 255, 0.4) ${specular.x}%, transparent ${specular.x + 25}%)`
              }}
            />
          </div>

          {/* BOOK SPINE (Left 3D Edge) */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-8 bg-[#071326] border-y border-l border-[#D4AF37]/30 flex flex-col items-center justify-between py-6 rounded-l-sm"
            style={{
              transform: 'rotateY(-90deg) translateX(-16px)',
              transformOrigin: 'left',
              boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)',
            }}
          >
            <span className="text-[8px] font-mono tracking-widest text-[#D4AF37] uppercase">BM-2026</span>
            <div 
              className="text-[9px] font-display uppercase tracking-widest text-[#F5D76E] whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Quietly Profitable AI Offers
            </div>
            <span className="text-[8px] font-semibold text-[#7DD3E0] uppercase tracking-wider">BM</span>
          </div>

          {/* GILDED BOOK PAGES (Right 3D Paper Thickness) */}
          <div 
            className="absolute right-0 top-1 bottom-1 w-6 rounded-r-sm"
            style={{
              transform: 'rotateY(90deg) translateX(12px)',
              transformOrigin: 'right',
              background: `repeating-linear-gradient(
                to bottom,
                #d4af37 0px,
                #d4af37 1px,
                #aa820a 2px,
                #f5d76e 3px,
                #fcf4cf 4px
              )`,
              boxShadow: 'inset 2px 0 6px rgba(0,0,0,0.6)',
            }}
          />

          {/* TOP PAGES EDGE */}
          <div 
            className="absolute top-0 left-0 right-0 h-6"
            style={{
              transform: 'rotateX(90deg) translateY(-12px)',
              transformOrigin: 'top',
              background: 'linear-gradient(to right, #1a2a44 0%, #aa820a 15%, #f5d76e 50%, #aa820a 85%, #0d1a2d 100%)',
            }}
          />

          {/* BOTTOM PAGES EDGE */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-6"
            style={{
              transform: 'rotateX(-90deg) translateY(12px)',
              transformOrigin: 'bottom',
              background: 'linear-gradient(to right, #0d1a2d 0%, #aa820a 20%, #d4af37 50%, #aa820a 80%, #0d1a2d 100%)',
            }}
          />
        </div>
      </div>

      {/* Floating 3D Hint Badge */}
      <div className="absolute -bottom-3 sm:-bottom-5 z-20 pointer-events-none flex items-center gap-1.5 text-[11px] font-medium text-[#D4AF37]/80 bg-[#0A1931]/90 border border-[#D4AF37]/25 px-3 py-1 rounded-full shadow-lg backdrop-blur-sm">
        <Sparkles className="w-3 h-3 text-[#F5D76E]" />
        <span>Move cursor to inspect 3D cover</span>
      </div>
    </div>
  );
};
