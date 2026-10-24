import React, { useState } from 'react';
import type { Project } from '../data/projects';

interface ProjectArtworkProps {
  project: Project;
  className?: string;
  variant?: 'card' | 'hero' | 'detail';
}

export const ProjectArtwork: React.FC<ProjectArtworkProps> = ({
  project,
  className = '',
  variant = 'card',
}) => {
  const [imageError, setImageError] = useState(false);

  // If the user has put a real image in the public folder and it loads, show it!
  const hasRealImage = Boolean(project.image && !imageError);

  if (hasRealImage) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#0E0E0E] relative overflow-hidden select-none">
        {/* Soft ambient blur backdrop */}
        <img
          src={project.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-110 pointer-events-none"
        />
        <img
          src={project.image}
          alt={project.title}
          onError={() => setImageError(true)}
          className={`relative z-10 max-w-full max-h-full object-contain ${className}`}
          loading="lazy"
        />
      </div>
    );
  }

  // Bespoke editorial poster graphics for each project category
  switch (project.id) {
    case 'event-posters':
      return (
        <div className={`w-full h-full bg-[#111111] text-[#F2F0EA] relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display ${className}`}>
          {/* Paper graph grid lines & registration marks */}
          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#FFFFFF_1px,transparent_1px),linear-gradient(to_bottom,#FFFFFF_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
          <div className="absolute top-4 right-4 text-[9px] font-mono text-[#FF1738] tracking-widest uppercase">
            ⊕ A1 PRINT SPEC // 300 DPI
          </div>

          {/* Top header */}
          <div className="relative z-10 flex justify-between items-start border-b border-white/20 pb-3">
            <div>
              <span className="text-[10px] font-mono text-[#FF1738] tracking-widest block uppercase font-bold">
                SONIC HORIZONS // 2026
              </span>
              <span className="text-xs text-[#C9C9C4] font-grotesk">ANNUAL SOUND & VISUAL EXPERIMENT</span>
            </div>
            <span className="text-2xl font-black text-white tracking-tighter">01</span>
          </div>

          {/* Center typography artwork */}
          <div className="relative z-10 my-auto py-4">
            <span className="inline-block bg-[#FF1738] text-white px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest mb-2">
              OCTOBER 28—30 // DELHI ARENA
            </span>
            <h4 className="text-4xl md:text-6xl font-black text-[#F2F0EA] tracking-tighter leading-[0.88] uppercase">
              RESONANCE<br />
              <span className="text-[#FF1738]">FREQUENCY</span>
            </h4>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-xs font-mono text-[#C9C9C4] tracking-wider">
                SWISS ASYMMETRIC GRID • 120 BPM
              </span>
            </div>
          </div>

          {/* Footer barcode & print meta */}
          <div className="relative z-10 flex justify-between items-end pt-3 border-t border-white/20">
            <div className="flex gap-1 items-end h-8 opacity-80">
              <div className="w-1.5 h-full bg-[#FF1738]" />
              <div className="w-0.5 h-full bg-white" />
              <div className="w-2 h-full bg-white" />
              <div className="w-0.5 h-full bg-[#FF1738]" />
              <div className="w-1.5 h-full bg-white" />
              <div className="w-3 h-full bg-white" />
              <div className="w-0.5 h-full bg-[#FF1738]" />
              <div className="w-1.5 h-full bg-white" />
            </div>
            <div className="text-right">
              <span className="text-[9px] font-mono text-[#C9C9C4] block uppercase">ART DIRECTION: R. YADAV</span>
              <span className="text-[9px] font-mono text-[#FF1738] font-bold">POSTER ARCHIVE NO. 01</span>
            </div>
          </div>
        </div>
      );

    case 'robotics-club':
      return (
        <div className={`w-full h-full bg-[#F2F0EA] text-[#111111] bg-graph-grid relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display border border-[#C9C9C4] ${className}`}>
          {/* Blueprint vector telemetry background */}
          <svg className="absolute -right-16 -top-16 w-80 h-80 opacity-20 stroke-[#111111]" fill="none" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="60" strokeWidth="1" />
            <circle cx="100" cy="100" r="30" strokeWidth="1.5" />
            <line x1="10" y1="100" x2="190" y2="100" strokeWidth="0.75" />
            <line x1="100" y1="10" x2="100" y2="190" strokeWidth="0.75" />
          </svg>

          {/* Top telemetry bar */}
          <div className="relative z-10 flex justify-between items-start border-b-2 border-[#111111] pb-2">
            <div>
              <span className="text-[10px] font-mono text-[#FF1738] tracking-widest block font-bold">
                // SYS.ROBOTICS_V4 • CAMPUS CHAPTER
              </span>
              <span className="text-xs text-[#111111] font-grotesk font-semibold">
                TECHNICAL WORKSHOP & COMPETITION PROMOTION
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#FF1738] text-white font-bold uppercase">
              ACTUATOR LAB
            </span>
          </div>

          {/* Center technical typography */}
          <div className="relative z-10 my-auto py-3">
            <span className="text-[10px] font-mono text-[#72726E] tracking-widest uppercase block mb-1">
              KINEMATICS & HARDWARE INTENSIVE
            </span>
            <h4 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tight leading-[0.9] uppercase">
              CYBERNETIC<br />
              <span className="text-[#FF1738]">SYSTEMS '26</span>
            </h4>
            <p className="text-xs text-[#4A4A46] font-mono mt-3 max-w-xs leading-relaxed">
              [TELEMETRY • MOTOR CONTROL • EMBEDDED LOOPS]
              Visual language making engineering feel dynamic and accessible.
            </p>
          </div>

          {/* Circuit footer */}
          <div className="relative z-10 flex justify-between items-center pt-3 border-t-2 border-[#111111] text-[9px] font-mono text-[#111111]">
            <span className="font-bold">SCHEMATIC ID: RB-02</span>
            <span className="text-[#FF1738] font-bold">CAMPUS ROBOTICS CHAPTER</span>
          </div>
        </div>
      );

    case 'hackathon-creatives':
      return (
        <div className={`w-full h-full bg-[#111111] text-white relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display ${className}`}>
          {/* Signal red warning tape strip at corner */}
          <div className="absolute -right-12 top-6 bg-[#FF1738] text-white px-12 py-1 text-[9px] font-mono font-black uppercase tracking-widest rotate-45 shadow-md">
            SPRINT 36H
          </div>

          {/* Top Status */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/20 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1738] animate-pulse" />
              <span className="text-[10px] font-mono text-[#FF1738] tracking-widest uppercase font-bold">
                DEVELOPER HACKATHON 2026
              </span>
            </div>
            <span className="text-xs font-mono text-[#C9C9C4] pr-12">ALL-NIGHTER</span>
          </div>

          {/* Main typography */}
          <div className="relative z-10 my-auto">
            <div className="inline-block bg-white text-[#111111] px-2.5 py-0.5 text-[10px] font-black uppercase tracking-widest mb-2 font-mono">
              CALL FOR DEVELOPERS & DESIGNERS
            </div>
            <h4 className="text-4xl md:text-6xl font-black text-[#F2F0EA] tracking-tighter uppercase leading-[0.88]">
              BUILD.<br />
              BREAK.<br />
              <span className="text-[#FF1738]">DEPLOY.</span>
            </h4>
            <div className="mt-4 flex gap-4 text-[10px] font-mono text-[#C9C9C4]">
              <span>&gt; 500+ HACKERS</span>
              <span className="text-[#FF1738]">&gt; ZERO SLEEP</span>
              <span>&gt; COMMENCE COMMITS</span>
            </div>
          </div>

          {/* Footer banner */}
          <div className="relative z-10 flex justify-between items-center pt-2 border-t border-white/20 text-[9px] font-mono text-[#C9C9C4]">
            <span className="text-[#FF1738] font-bold">// TECH EVENT BRANDING KIT</span>
            <span>RITESH YADAV FOLIO</span>
          </div>
        </div>
      );

    case 'social-media':
      return (
        <div className={`w-full h-full bg-[#F2F0EA] text-[#111111] bg-graph-grid relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display border border-[#C9C9C4] ${className}`}>
          {/* Simulated 9:16 story frame in corner */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-44 bg-white border-2 border-[#111111] p-2.5 shadow-paper rotate-3 hidden sm:flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF1738]" />
              <span className="text-[8px] font-mono text-[#72726E]">POST 01</span>
            </div>
            <div className="space-y-1 my-auto">
              <div className="h-2 w-20 bg-[#111111] rounded-none" />
              <div className="h-2 w-14 bg-[#FF1738] rounded-none" />
            </div>
            <span className="text-[8px] font-mono text-[#111111] font-bold">1080×1350 PX</span>
          </div>

          {/* Top header */}
          <div className="relative z-10 flex justify-between items-center border-b-2 border-[#111111] pb-2">
            <span className="text-[10px] font-mono text-[#FF1738] tracking-widest uppercase font-bold">
              CAMPAIGN SUITE // MULTI-PLATFORM
            </span>
            <span className="text-[10px] font-mono text-[#4A4A46]">INSTAGRAM • X • LINKEDIN</span>
          </div>

          {/* Center punchline */}
          <div className="relative z-10 my-auto py-2">
            <span className="text-xs uppercase tracking-widest text-[#72726E] font-mono block mb-1">
              RETENTION-FOCUSED CONTENT
            </span>
            <h4 className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter leading-[0.92] uppercase">
              STOP THE<br />
              <span className="text-[#FF1738]">SCROLL.</span>
            </h4>
            <p className="text-xs text-[#4A4A46] mt-3 max-w-[240px] leading-relaxed">
              Modular carousel architectures and promotional story assets designed to capture audience attention in crowded social feeds.
            </p>
          </div>

          {/* Bottom row */}
          <div className="relative z-10 flex justify-between items-center pt-2 border-t-2 border-[#111111] text-[9px] font-mono text-[#111111]">
            <span className="font-bold">ENGAGEMENT-FIRST GRID</span>
            <span className="text-[#FF1738] font-bold">TEMPLATED & SCALABLE</span>
          </div>
        </div>
      );

    case 'branding':
      return (
        <div className={`w-full h-full bg-[#111111] text-[#F2F0EA] relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display ${className}`}>
          {/* Identity mark geometry with red construction lines */}
          <div className="absolute top-1/2 right-6 -translate-y-1/2 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center pointer-events-none">
            <div className="w-28 h-28 border border-[#FF1738]/40 rotate-45" />
            <div className="w-14 h-14 bg-[#FF1738]/20 rounded-full absolute" />
          </div>

          {/* Top header */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-[10px] font-mono text-[#FF1738] tracking-widest uppercase font-bold">
              CONCEPT IDENTITY EXPLORATION
            </span>
            <span className="text-[9px] font-mono bg-[#FF1738] px-2 py-0.5 text-white font-bold uppercase">
              SELF-INITIATED
            </span>
          </div>

          {/* Brand mark and typography */}
          <div className="relative z-10 my-auto">
            <div className="w-12 h-12 bg-[#FF1738] text-white flex items-center justify-center font-display font-black text-2xl mb-4 shadow-sm">
              V
            </div>
            <h4 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase leading-[0.9]">
              VERTEX<br />
              <span className="text-[#C9C9C4] font-light">STUDIOS</span>
            </h4>
            <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-[#C9C9C4]">
              <span>LOGOTYPE</span> • <span>GRID 8PX</span> • <span>PANTONE SYSTEM</span>
            </div>
          </div>

          {/* Swatches preview */}
          <div className="relative z-10 flex justify-between items-end pt-2 border-t border-white/20">
            <div className="flex gap-1.5">
              <span className="w-4 h-4 bg-[#F2F0EA] border border-black/20" title="#F2F0EA" />
              <span className="w-4 h-4 bg-[#111111] border border-white/40" title="#111111" />
              <span className="w-4 h-4 bg-[#FF1738]" title="#FF1738" />
              <span className="w-4 h-4 bg-[#C9C9C4]" title="#C9C9C4" />
            </div>
            <span className="text-[9px] font-mono text-[#C9C9C4] uppercase">IDENTITY GUIDELINES V1</span>
          </div>
        </div>
      );

    case 'experimental':
    default:
      return (
        <div className={`w-full h-full bg-[#111111] text-white relative overflow-hidden flex flex-col justify-between p-6 md:p-8 select-none font-display ${className}`}>
          {/* Distorted background waves */}
          <svg className="absolute inset-0 w-full h-full opacity-25 stroke-[#FF1738]" fill="none" viewBox="0 0 400 300">
            <path d="M-50,150 Q100,50 200,150 T450,150" strokeWidth="2" />
            <path d="M-50,170 Q100,70 200,170 T450,170" strokeWidth="1" stroke="#FFFFFF" />
            <path d="M-50,190 Q100,90 200,190 T450,190" strokeWidth="1.5" stroke="#C9C9C4" />
          </svg>

          {/* Top Tag */}
          <div className="relative z-10 flex justify-between items-center border-b border-white/20 pb-2">
            <span className="text-[10px] font-mono text-[#FF1738] tracking-widest uppercase font-bold">
              TYPOGRAPHIC EXPERIMENTATION
            </span>
            <span className="text-[10px] font-mono bg-white text-black px-2 py-0.5 font-bold uppercase">
              NO CLIENT // PURE FORM
            </span>
          </div>

          {/* Central experimental text */}
          <div className="relative z-10 my-auto">
            <p className="text-[11px] font-mono tracking-[0.4em] text-[#C9C9C4] uppercase mb-1">
              DECONSTRUCTED COMPOSITION
            </p>
            <h4 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.88] text-white">
              BEYOND<br />
              <span className="text-[#FF1738]">RULES.</span>
            </h4>
            <p className="text-xs font-mono text-[#C9C9C4] mt-3 max-w-xs">
              Expressive lettering, asymmetric layout tension, and analog print distress explorations.
            </p>
          </div>

          {/* Footer note */}
          <div className="relative z-10 flex justify-between items-center pt-2 border-t border-white/20 text-[9px] font-mono text-[#C9C9C4]">
            <span className="text-[#FF1738] font-bold">EXPERIMENT 06</span>
            <span>PERSONAL ARCHIVE '26</span>
          </div>
        </div>
      );
  }
};
