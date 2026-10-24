import React from 'react';

export const BrandMarquee: React.FC = () => {
  const items = [
    'DESIGN THAT MAKES YOU LOOK TWICE',
    'EVENT POSTER & PRINT DESIGN',
    'BRAND IDENTITY SYSTEMS',
    'COMMUNITY & TECH EVENT CREATIVES',
    'SOCIAL MEDIA CAMPAIGNS',
    'EXPERIMENTAL TYPOGRAPHY',
    'SWISS GRID & EDITORIAL LAYOUT',
    'RITESH YADAV // 2026 FOLIO',
  ];

  return (
    <div className="w-full bg-[#FF1738] text-white py-3 overflow-hidden select-none border-y-2 border-[#111111] shadow-sm">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Render twice for seamless continuous scroll */}
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 px-4">
            <span className="text-xs md:text-sm font-display font-black uppercase tracking-[0.25em] whitespace-nowrap text-white">
              {text}
            </span>
            <span className="text-[#111111] font-bold text-sm">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
