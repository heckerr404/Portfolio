import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { profile } from '../data/profile';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-16 py-24 md:py-32 bg-[#F2F0EA] bg-graph-grid relative border-b-2 border-[#111111]">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-section font-display font-black text-[#111111] uppercase tracking-tight leading-[0.88] mb-6">
          HAVE AN IDEA?
          <br />
          <span className="text-[#FF1738]">LET'S MAKE IT VISUAL.</span>
        </h2>

        {/* Handwritten note */}
        <p className="font-hand text-2xl md:text-3xl text-[#FF1738] mb-8 -rotate-1 select-none">
          ✎ posters, branding, social assets, or creative collaborations
        </p>

        {/* Supporting text */}
        <p className="text-lg md:text-xl font-grotesk text-[#4A4A46] max-w-xl mx-auto mb-10 leading-relaxed">
          Looking for a designer for your next project, campaign, or creative team? Let's connect and build something memorable.
        </p>

        {/* Large Prominent Email CTA */}
        <div className="mb-12">
          <a
            href={`mailto:${profile.email}`}
            className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#111111] hover:text-[#FF1738] transition-colors tracking-tight link-underline-red inline-block break-all"
          >
            {profile.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
