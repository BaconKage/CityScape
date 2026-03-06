import React from 'react'
import { impactMetrics } from '../data/siteData'
import SectionHeader from '../components/ui/SectionHeader'
import AnimatedCounter from '../components/ui/AnimatedCounter'

export default function ImpactSection() {
  return (
    <section className="section-frame py-16 md:py-24 bg-onyx/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Numbers"
          title="Impact by the Numbers"
          description="A snapshot of execution outcomes designed to build momentum and trust."
          light
        />

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {impactMetrics.map((item) => (
            <div
              key={item.label}
              data-levitate
              className="section-surface text-center border border-white/15"
            >
              <AnimatedCounter value={item.value} label={item.label} suffix="+" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
