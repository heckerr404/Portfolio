import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Avatar360 } from './Avatar360';

const skillTools = [
  { name: 'Adobe Photoshop', icon: '/tools/photoshop.png' },
  { name: 'Krea AI', icon: '/tools/krea.png' },
  { name: 'Google Labs', icon: '/tools/google-labs.png' },
  { name: 'ChatGPT', icon: '/tools/chatgpt.png' },
  { name: 'Claude', icon: '/tools/claude.png' },
  { name: 'FontBase', icon: '/tools/fontbase.png' },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center bg-[#F2F0EA] text-[#111111] bg-graph-grid overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-20 lg:pb-24 border-b-2 border-[#111111]">
      {/* Main 3-Column Editorial Monograph Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full my-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Column 1 (Left): Designer Portrait with 360 Interactive Avatar in Photoshop Transform Bounding Box */}
          <div className="md:col-span-4 lg:col-span-3 flex justify-center">
            <div className="relative group w-full max-w-[280px]">
              {/* Top Masking Tape */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-4 masking-tape -rotate-1 z-20 shadow-xs pointer-events-none" />

              {/* Transform Bounding Box */}
              <div className="relative border border-[#9E9E9E] p-1 bg-[#F2F0EA] shadow-paper">
                {/* 8 Anchor Handle Squares (Free Transform Box) */}
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />

                <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />

                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-[#111111] z-20 shadow-xs pointer-events-none" />

                {/* Interactive 360-degree Avatar Viewer */}
                <Avatar360 />
              </div>
            </div>
          </div>

          {/* Column 2 (Center): HELLO Headline, Bio & Education */}
          <div className="md:col-span-8 lg:col-span-5 space-y-8">
            {/* HELLO Headline */}
            <div>
              <h2 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black text-[#111111] tracking-tighter uppercase leading-[0.88] mb-4">
                HELLO
              </h2>

              <p className="font-grotesk font-black text-base md:text-lg text-[#111111] mb-4">
                Hi, Im Ritesh Yadav.
              </p>

              {/* Bio Narrative */}
              <div className="space-y-4 text-sm md:text-[15px] font-body text-[#333333] leading-relaxed">
                <p>
                  Creating has never felt like a hobby to me. Its just how I process the world.
                </p>
                <p>
                  Ive always been drawn to ideas that are a little different- things that make you pause for a second, look twice, or think a little deeper. Thats probably why I enjoy everything from branding and photography to music, drawing, filmmaking, and reading . They all tell stories in their own way.
                </p>
                <p>
                  Right now Im studying at Physics Wallah Institute of Innovation while working with people and brands that trust me to bring their ideas to life.
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="pt-6 border-t border-[#C9C9C4] space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#111111] uppercase tracking-tight">
                EDUCATION
              </h3>
              <div>
                <p className="font-grotesk font-bold text-base text-[#111111]">
                  B.Tech CSE (AI/ML)
                </p>
                <p className="font-mono text-xs text-[#72726E] mt-0.5">
                  Physics Wallah Institute of Innovation | 2025 – 2029
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 (Right): Skills Icons & Experience */}
          <div className="md:col-span-12 lg:col-span-4 space-y-8">
            {/* Skills Section */}
            <div id="skills" className="scroll-mt-24 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-[#111111] uppercase tracking-tight">
                SKILLS
              </h3>

              {/* 6 Squircle Tool Icons (3x2 Grid) */}
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5 max-w-[340px]">
                {skillTools.map((tool) => (
                  <motion.div
                    key={tool.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                    className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white border border-[#C9C9C4] p-1 flex items-center justify-center cursor-pointer"
                    title={tool.name}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-full h-full object-contain rounded-xl select-none"
                    />
                    {/* Tooltip on hover */}
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#111111] text-white text-[9px] font-mono uppercase px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-30 shadow-md">
                      {tool.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
