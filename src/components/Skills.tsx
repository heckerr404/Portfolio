import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills, tools } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="px-6 md:px-12 lg:px-16 py-section bg-[#F2F0EA] bg-graph-grid border-b border-[#C9C9C4]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#111111] pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1738]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#72726E] font-bold">
                SPECIFICATION SHEET // 2026
              </span>
            </div>
            <h2 className="text-section font-display font-black text-[#111111] uppercase tracking-tight">
              SKILLS &amp;
              <br />
              <span className="text-[#FF1738]">CREATIVE TOOLKIT.</span>
            </h2>
          </div>

          <span className="font-hand text-2xl text-[#FF1738] -rotate-2 select-none">
            ✎ design discipline &amp; software fluency
          </span>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Design Capabilities (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#C9C9C4]">
              <span className="text-xs font-mono uppercase tracking-wider text-[#FF1738] font-bold">
                [ 01 // CORE DESIGN CAPABILITIES ]
              </span>
              <span className="text-[10px] font-mono text-[#72726E]">
                10 SPECIALIZED DISCIPLINES
              </span>
            </div>

            <div className="divide-y divide-[#C9C9C4] border-y border-[#C9C9C4]">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                  className="py-3.5 flex items-center justify-between group hover:bg-white px-2 transition-colors cursor-default"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#72726E] group-hover:text-[#FF1738] font-bold">
                      {String(i + 1).padStart(2, '0')}.
                    </span>
                    <span className="font-grotesk font-bold text-lg md:text-xl text-[#111111] group-hover:text-[#FF1738] transition-colors">
                      {skill}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#C9C9C4] group-hover:text-[#FF1738] transition-colors">
                    VERIFIED • ⊕
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Software Tools & Typographic Specimen (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Software Toolkit Box */}
            <div className="bg-white p-6 border-2 border-[#111111] shadow-paper">
              <div className="flex items-center justify-between pb-3 border-b border-[#C9C9C4] mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#FF1738] font-bold">
                  [ 02 // SOFTWARE FLUENCY ]
                </span>
                <span className="text-[10px] font-mono text-[#72726E]">
                  INDUSTRY STANDARDS
                </span>
              </div>

              <div className="space-y-3">
                {tools.map((tool, i) => (
                  <div
                    key={tool}
                    className="p-3 bg-[#F2F0EA] border border-[#C9C9C4] flex items-center justify-between group"
                  >
                    <span className="font-grotesk font-bold text-base text-[#111111]">
                      {tool}
                    </span>
                    <span className="text-[10px] font-mono text-[#FF1738] font-bold">
                      ACTIVE TOOL
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
