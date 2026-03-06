import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { projects, projectFilters } from '../data/siteData'
import SectionHeader from '../components/ui/SectionHeader'
import AdaptiveImage from '../components/ui/AdaptiveImage'

function ProjectCard({ project }) {
  return (
    <motion.article
      data-interactive
      data-levitate
      whileTap={{ scale: 0.995 }}
      transition={{ type: 'spring', stiffness: 250, damping: 22 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal/60"
    >
      <div className="relative overflow-hidden h-64">
        <AdaptiveImage
          src={project.image}
          alt={project.title}
          fallback="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-gold-600 text-charcoal text-xs px-3 py-1 font-semibold">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <p className="text-xs uppercase text-gold-100 tracking-[0.2em]">{project.category}</p>
        <h3 className="mt-2 text-2xl">{project.title}</h3>
        <p className="text-sm text-stone/80 mt-1">{project.location}</p>
        <p className="mt-3 text-sm text-stone/80 leading-relaxed">{project.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <p className="inline-flex items-center gap-2 text-xs px-3 py-1.5 border border-white/15 rounded-full text-ivory/85">
            {project.type}
          </p>
          <button className="inline-flex items-center gap-2 text-sm text-gold-100 group-hover:text-gold-200">
            View Project <ExternalLink size={15} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects
    return projects.filter(
      (project) =>
        project.category === activeFilter ||
        project.type === activeFilter ||
        project.status === activeFilter,
    )
  }, [activeFilter])

  return (
    <section id="projects" className="section-frame py-16 md:py-24 bg-charcoal/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured Developments"
          description="Premium project experiences built for premium buyers, investors, and developers."
        />

        <div className="mt-8 flex flex-wrap gap-3">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              data-interactive
              data-levitate
              className={`rounded-full border px-4 py-2.5 text-sm transition-all ${
                activeFilter === filter
                  ? 'bg-gold-600 text-charcoal border-gold-600'
                  : 'border-white/20 text-stone hover:border-gold-100 hover:text-gold-100'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-14 text-center section-surface p-8">
            <p className="text-stone/85">No projects for this filter. Select another category.</p>
          </div>
        ) : (
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
