import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, ExternalLink, Sparkles, Layers } from 'lucide-react';
import type { Project } from '../data/projects';
import { ProjectArtwork } from './ProjectArtwork';

interface ProjectModalProps {
  project: Project | null;
  allProjects: Project[];
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  allProjects,
  isOpen,
  onClose,
  onSelectProject,
}) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard navigation: Esc to close, ArrowLeft / ArrowRight to switch projects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const nextIndex = (currentIndex + 1) % allProjects.length;
        onSelectProject(allProjects[nextIndex]);
      }
      if (e.key === 'ArrowLeft') {
        const currentIndex = allProjects.findIndex((p) => p.id === project.id);
        const prevIndex = (currentIndex - 1 + allProjects.length) % allProjects.length;
        onSelectProject(allProjects[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, project, allProjects, onClose, onSelectProject]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-6 lg:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/85 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container — Paper Styling */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-5xl bg-[#F2F0EA] bg-graph-grid border-2 border-[#111111] text-[#111111] z-10 my-auto shadow-2xl max-h-[94vh] overflow-y-auto rounded-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Navigation Bar inside Modal */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-[#F2F0EA]/95 backdrop-blur-md border-b-2 border-[#111111]">
              <div className="flex items-center gap-3">
                <span className="bg-[#FF1738] text-white font-mono text-[11px] font-black px-2 py-0.5 uppercase">
                  CASE STUDY {project.number}
                </span>
                <span className="text-[#C9C9C4] text-xs">/</span>
                <span className="text-xs font-mono text-[#72726E] tracking-wider uppercase hidden sm:inline font-bold">
                  {project.category}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Prev / Next buttons */}
                <button
                  onClick={() => onSelectProject(prevProject)}
                  className="p-2 text-[#111111] hover:bg-white hover:text-[#FF1738] border border-transparent hover:border-[#C9C9C4] transition-colors"
                  title={`Previous: ${prevProject.title}`}
                  aria-label="Previous project"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="p-2 text-[#111111] hover:bg-white hover:text-[#FF1738] border border-transparent hover:border-[#C9C9C4] transition-colors"
                  title={`Next: ${nextProject.title}`}
                  aria-label="Next project"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="w-px h-5 bg-[#C9C9C4] mx-1" />
                <button
                  onClick={onClose}
                  className="p-2 text-[#111111] hover:bg-[#FF1738] hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-10 lg:p-12 space-y-10">
              {/* Header Title & Subtitle */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-[#FF1738] tracking-[0.25em] uppercase font-bold">
                    SPECIFICATION // {project.type}
                  </span>
                  <span className="font-hand text-lg text-[#FF1738] select-none">
                    ✎ deep dive analysis
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-[#111111] tracking-tight uppercase leading-[0.9] mb-4">
                  {project.title}
                </h1>
                <p className="text-lg md:text-xl text-[#4A4A46] max-w-2xl font-grotesk font-semibold">
                  {project.subtitle}
                </p>

                {project.conceptNote && (
                  <div className="mt-4 p-3.5 bg-white border-l-4 border-[#FF1738] text-xs text-[#4A4A46] shadow-xs">
                    <span className="font-bold text-[#FF1738] uppercase">Self-Initiated Concept: </span>
                    {project.conceptNote}
                  </div>
                )}
              </div>

              {/* Large Artwork Hero Preview (Mounted on Paper with Tape) */}
              <div className="relative bg-white p-3 md:p-4 border-2 border-[#111111] shadow-paper-lg">
                <div className="absolute -top-3 left-12 w-20 h-4 masking-tape -rotate-1 z-20 shadow-sm pointer-events-none" />

                <div className="relative aspect-[4/3] md:aspect-[16/10] max-h-[75vh] w-full bg-[#111111] overflow-hidden border border-[#C9C9C4]">
                  <ProjectArtwork project={project} variant="hero" />
                </div>
              </div>

              {/* Quick Specs / Meta Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-white border border-[#C9C9C4] shadow-xs">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#72726E] block mb-1">
                    YEAR / ARCHIVE
                  </span>
                  <span className="text-sm font-grotesk font-bold text-[#111111]">{project.year}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#72726E] block mb-1">
                    DISCIPLINE
                  </span>
                  <span className="text-sm font-grotesk font-bold text-[#111111]">{project.type}</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#72726E] block mb-1">
                    FORMAT
                  </span>
                  <span className="text-sm font-grotesk font-bold text-[#111111]">Print & Digital</span>
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#72726E] block mb-1">
                    PRIMARY TYPEFACE
                  </span>
                  <span className="text-sm font-grotesk font-bold text-[#FF1738]">{project.typography}</span>
                </div>
              </div>

              {/* Case Study Core: Overview, Objective & Approach */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t-2 border-[#111111]">
                <div className="bg-white p-5 border border-[#C9C9C4] shadow-xs">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#C9C9C4]">
                    <Layers className="w-4 h-4 text-[#FF1738]" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                      Project Overview
                    </h3>
                  </div>
                  <p className="text-sm text-[#4A4A46] font-body leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="bg-white p-5 border border-[#C9C9C4] shadow-xs">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#C9C9C4]">
                    <Sparkles className="w-4 h-4 text-[#FF1738]" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                      Creative Objective
                    </h3>
                  </div>
                  <p className="text-sm text-[#4A4A46] font-body leading-relaxed">
                    {project.objective}
                  </p>
                </div>

                <div className="bg-white p-5 border border-[#C9C9C4] shadow-xs">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-[#C9C9C4]">
                    <ExternalLink className="w-4 h-4 text-[#FF1738]" />
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#111111] font-bold">
                      Design Approach
                    </h3>
                  </div>
                  <p className="text-sm text-[#4A4A46] font-body leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              </div>


              {/* Tags Cloud & Bottom Action */}
              <div className="pt-6 border-t-2 border-[#111111] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono uppercase tracking-wider text-[#111111] bg-white border border-[#C9C9C4] px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    const el = document.querySelector('#contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FF1738] text-white font-grotesk font-bold text-xs uppercase tracking-wider px-7 py-3.5 hover:bg-[#111111] transition-colors shadow-paper"
                >
                  Commission Similar Project →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
