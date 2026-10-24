import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { Project } from '../data/projects';
import { ArrowUpRight } from 'lucide-react';
import { ProjectArtwork } from './ProjectArtwork';

interface Props {
  project: Project;
  index: number;
  onOpenCaseStudy: (project: Project) => void;
}

export default function ProjectCard({ project, index, onOpenCaseStudy }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isReversed = index % 2 !== 0;

  // Handwritten notes for authentic designer feel
  const handwrittenNotes: Record<string, string> = {
    'event-posters': '✎ bold hierarchy & custom gig layout',
    'robotics-club': '✎ technical schematics + dynamic typography',
    'hackathon-creatives': '✎ high-intensity social campaign assets',
    'social-media': '✎ 1080x1350 retention-driven templates',
    'branding': '✎ self-initiated concept & identity kit',
    'experimental': '✎ personal typographic laboratory',
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
      className="py-14 lg:py-20 border-b border-[#C9C9C4] relative"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center ${isReversed ? 'lg:[direction:rtl]' : ''}`}>
        {/* Project Artwork & Mounted Poster Frame */}
        <div className={`lg:col-span-7 ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
          <div
            onClick={() => onOpenCaseStudy(project)}
            data-cursor="pointer"
            className="relative bg-white border-2 border-[#111111] p-3 md:p-4 shadow-paper-lg group cursor-pointer"
          >
            {/* Masking tape on top-left and bottom-right corners */}
            <div className="absolute -top-3 left-8 w-16 h-4 masking-tape -rotate-2 z-20 shadow-sm pointer-events-none" />
            <div className="absolute -bottom-3 right-8 w-14 h-4 masking-tape-red rotate-3 z-20 shadow-sm pointer-events-none" />

            {/* Artwork Container */}
            <div className="relative aspect-[4/3] bg-[#111111] overflow-hidden border border-[#C9C9C4]">
              <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <ProjectArtwork project={project} variant="card" />
              </div>

              {/* Hover stamp overlay */}
              <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <span className="bg-[#FF1738] text-white font-grotesk font-black text-xs uppercase tracking-widest px-5 py-2.5 shadow-lg flex items-center gap-2">
                  INSPECT CASE STUDY ↗
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Text & Case Study Overview */}
        <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:[direction:ltr]' : ''}`}>
          {/* Top meta with handwritten note */}
          <div className="flex items-center gap-3 mb-2">
            <span className="bg-[#FF1738] text-white text-[11px] font-mono font-black px-2 py-0.5 uppercase">
              NO. {project.number}
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#72726E]">
              {project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onOpenCaseStudy(project)}
            className="font-display text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight mb-3 hover:text-[#FF1738] transition-colors duration-200 cursor-pointer"
          >
            {project.title}
          </h3>

          {/* Handwritten Annotation */}
          <p className="font-hand text-xl text-[#FF1738] mb-3 -rotate-1 select-none">
            {handwrittenNotes[project.id] || '✎ key case study'}
          </p>

          {/* Subtitle & Description */}
          <p className="text-base font-grotesk font-semibold text-[#111111] mb-2 leading-snug">
            {project.subtitle}
          </p>

          <p className="text-sm text-[#4A4A46] font-body leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Tags as Editorial Stamps */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider text-[#111111] bg-white border border-[#C9C9C4] px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </div>


          {/* Concept note if present */}
          {project.conceptNote && (
            <div className="text-xs italic text-[#72726E] mb-6 p-3 bg-white border-l-2 border-[#FF1738]">
              <span className="font-semibold text-[#FF1738] not-italic">Self-Initiated: </span>
              {project.conceptNote}
            </div>
          )}

          {/* Action CTA */}
          <div>
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="bg-[#111111] text-white hover:bg-[#FF1738] font-grotesk font-bold text-xs uppercase tracking-wider px-6 py-3.5 transition-colors duration-200 inline-flex items-center gap-2 shadow-paper cursor-pointer"
            >
              <span>View Full Case Study</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
