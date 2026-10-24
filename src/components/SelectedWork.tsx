import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects, Project } from '../data/projects';
import ProjectCard from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export default function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="work" className="px-6 md:px-12 lg:px-16 py-section bg-[#F2F0EA] bg-graph-grid relative">
      {/* Section Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#111111] pb-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 bg-[#FF1738]" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#72726E] font-bold">
                INDEX: SELECTED WORK • 2026 ARCHIVE
              </span>
            </div>
            <h2 className="text-section font-display font-black text-[#111111] uppercase tracking-tight">
              WORK THAT
              <br />
              <span className="text-[#FF1738]">DEMANDS ATTENTION.</span>
            </h2>
          </div>

          <div className="text-right">
            <span className="font-hand text-2xl text-[#FF1738] block -rotate-3 select-none">
              click any project to inspect ↴
            </span>
            <span className="text-xs font-mono text-[#72726E] uppercase">
              [ 06 CURATED CASE STUDIES ]
            </span>
          </div>
        </div>

        <p className="text-lg font-grotesk text-[#4A4A46] max-w-2xl leading-relaxed">
          From screen-printed gig posters and cybernetic club graphics to comprehensive brand identities and expressive kinetic typography — each project explores visual hierarchy, distinctive composition, and personality.
        </p>
      </motion.div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto space-y-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onOpenCaseStudy={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Deep-dive Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        allProjects={projects}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />
    </section>
  );
}
