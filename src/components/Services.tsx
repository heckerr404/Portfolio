import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '../data/projects';
import { TornEdge } from './TornEdge';

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="relative px-6 md:px-12 lg:px-16 pt-24 pb-36 bg-[#111111] text-[#F2F0EA] bg-graph-grid-dark overflow-hidden">
      {/* Top Torn Edge transitioning from SelectedWork (#F2F0EA) into Services (#111111) */}
      <TornEdge position="top" fill="#111111" background="#F2F0EA" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-white/20 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1738]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9C9C4] font-bold">
                OFFERINGS // STUDIO CATALOG
              </span>
            </div>
            <h2 className="text-section font-display font-black text-white uppercase tracking-tight">
              SERVICES &amp;
              <br />
              <span className="text-[#FF1738]">COMMISSIONS.</span>
            </h2>
          </div>

          <span className="font-hand text-2xl text-[#FF1738] -rotate-2 select-none">
            ✎ open for freelance &amp; creative contracts
          </span>
        </div>

        {/* Numbered Editorial Job Tickets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-[#1A1A1A] p-6 border border-white/15 shadow-2xl flex flex-col justify-between hover:-translate-y-1 hover:border-[#FF1738]/60 transition-all duration-200 group relative"
            >
              {/* Ticket Corner Badge */}
              <div className="flex justify-between items-start mb-6 pb-3 border-b border-white/10">
                <span className="font-display font-black text-3xl text-white group-hover:text-[#FF1738] transition-colors">
                  0{i + 1}
                </span>
                <span className="text-[10px] font-mono uppercase bg-[#242424] px-2 py-0.5 border border-white/10 text-[#C9C9C4] font-bold">
                  COMMISSION #{i + 1}
                </span>
              </div>

              <div>
                <h3 className="font-grotesk font-bold text-xl text-white mb-3 group-hover:text-[#FF1738] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-sm text-[#C9C9C4] font-body leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom spec bar */}
              <div className="mt-8 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8E8E8A]">
                <span>DELIVERY: PRINT &amp; DIGITAL</span>
                <span className="text-[#FF1738] font-bold">INQUIRE ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Torn Paper Bottom Edge transitioning from Ink Black to Paper White */}
      <div className="absolute -bottom-1 left-0 right-0 z-10 pointer-events-none">
        <TornEdge position="bottom" fill="#111111" background="#F2F0EA" />
      </div>
    </section>
  );
}
