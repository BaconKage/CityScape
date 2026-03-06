import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../components/ui/SectionHeader'
import { processSteps } from '../data/siteData'

export default function ProcessSection() {
  return (
    <section className="section-frame py-16 md:py-24 bg-charcoal/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Process"
          title="How We Work"
          description="A sequence designed for premium execution, not ad-hoc campaign drops."
        />

        <div className="mt-12 relative">
          <div className="absolute inset-x-6 top-10 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent hidden md:block" />
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                data-interactive
                data-levitate
                whileTap={{ scale: 0.985 }}
                className="section-surface p-5 md:p-6 relative"
              >
                <div className="absolute -top-5 left-5 text-6xl font-display text-gold-100/20 select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="pt-6">
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-3 text-sm text-stone/80 leading-relaxed">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
