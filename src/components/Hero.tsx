import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const } },
};

export default function Hero() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="manifesto" className="relative min-h-[90vh] flex flex-col justify-between py-20 lg:py-24 px-6 md:px-12 lg:px-16 bg-[#F2F0EA] bg-graph-grid overflow-hidden border-b border-[#C9C9C4]">
      {/* Main Content Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto w-full my-auto"
      >
        {/* Issue Number & Handwritten Note */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-4">
          <div className="inline-flex items-center gap-2 bg-[#111111] text-[#F2F0EA] px-3 py-1 text-[11px] font-mono tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FF1738]" />
            <span>PORTFOLIO 2026 // {profile.title}</span>
          </div>

          <span className="font-hand text-xl md:text-2xl text-[#FF1738] -rotate-2 select-none">
            ✎ design that communicates with impact →
          </span>
        </motion.div>

        {/* Massive Editorial Headline */}
        <motion.div variants={item} className="relative">
          <h1 className="font-display text-hero uppercase text-[#111111] tracking-tight leading-[0.88] select-none">
            DESIGN THAT
            <br />
            <span className="text-[#FF1738] inline-block relative">
              MAKES YOU
              {/* Handwritten underline decoration */}
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FF1738] pointer-events-none"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M2,8 C70,2 180,12 298,4"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <br />
            LOOK TWICE.
          </h1>
        </motion.div>

        {/* Editorial Sub-grid: Intro paragraph + Technical Metadata Box */}
        <motion.div
          variants={item}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 pt-8 border-t-2 border-[#111111]"
        >
          {/* Left: Designer Introduction Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-xl md:text-2xl font-grotesk font-semibold text-[#111111] leading-tight">
              Transforming ideas into striking graphics, bold compositions, and memorable visual experiences.
            </p>
            <p className="text-sm md:text-base text-[#4A4A46] font-body leading-relaxed max-w-xl">
              {profile.intro}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#work"
                onClick={(e) => handleClick(e, '#work')}
                className="bg-[#FF1738] text-white hover:bg-[#111111] font-grotesk font-bold px-8 py-4 text-xs md:text-sm uppercase tracking-wider transition-all duration-200 shadow-paper flex items-center gap-2 group"
              >
                <span>Explore Selected Works</span>
                <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleClick(e, '#contact')}
                className="bg-white border-2 border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white font-grotesk font-bold px-8 py-4 text-xs md:text-sm uppercase tracking-wider transition-all duration-200 shadow-paper"
              >
                Let's Collaborate ↗
              </a>
            </div>
          </div>

          {/* Right: Technical Specs / Print Card with Tape */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative bg-white p-6 border border-[#C9C9C4] shadow-paper">
              {/* Masking tape on top-right corner */}
              <div className="absolute -top-3 -right-3 w-16 h-4 masking-tape rotate-6 shadow-sm pointer-events-none" />

              <div className="flex justify-between items-start border-b border-[#C9C9C4] pb-3 mb-4">
                <div>
                  <span className="text-[10px] font-mono text-[#72726E] uppercase tracking-widest block">
                    DESIGN SPECIFICATION
                  </span>
                  <span className="text-xs font-bold font-grotesk text-[#111111]">
                    RITESH YADAV // 2026 EDITION
                  </span>
                </div>
                <span className="text-xs font-mono text-[#FF1738] font-bold">
                  VOL. 26
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono text-[#4A4A46]">
                <div className="flex justify-between">
                  <span className="text-[#72726E]">CORE MEDIUM:</span>
                  <span className="font-semibold text-[#111111]">POSTERS • BRANDING • CAMPAIGNS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#72726E]">LOCATION:</span>
                  <span className="font-semibold text-[#111111]">INDIA // GLOBAL COLLABS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#72726E]">AVAILABILITY:</span>
                  <span className="text-[#FF1738] font-bold">OPEN TO COMMISSIONS</span>
                </div>
              </div>

            </div>

            {/* Handwritten callout */}
            <div className="mt-4 flex items-center gap-2 text-xs font-hand text-[#FF1738] text-base">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>curated case studies below — click any project to view complete process breakdown</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Bottom Bar: Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="relative z-10 pt-6 mt-8 border-t border-[#C9C9C4] flex items-center justify-end text-xs font-mono text-[#72726E] uppercase tracking-wider"
      >
        <a
          href="#work"
          onClick={(e) => handleClick(e, '#work')}
          className="flex items-center gap-2 text-[#111111] hover:text-[#FF1738] transition-colors"
        >
          <span>Scroll to Inspect Projects</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
