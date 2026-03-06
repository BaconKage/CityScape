import React from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  LineChart,
  BadgeCheck,
  MousePointerClick,
  Handshake,
  Wallet,
  Search,
  ArrowRight,
  Users,
} from 'lucide-react'
import { serviceCards } from '../data/siteData'
import SectionHeader from '../components/ui/SectionHeader'

const serviceIcons = {
  Award,
  LineChart,
  BadgeCheck,
  MousePointerClick,
  Users,
  Handshake,
  Wallet,
  Search,
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-frame py-16 md:py-24 bg-onyx/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="High-impact services, designed for premium mandates"
          description="Every engagement is built around measurable campaigns, disciplined sales execution, and brand-level clarity."
        />

        <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {serviceCards.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || Award
            return (
              <motion.div
                key={service.title}
                data-interactive
                data-levitate
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 250, damping: 22 }}
                className="group section-surface p-5 md:p-6 transition-all duration-300 hover:border-gold-100/40"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-xl border border-gold-100/30 bg-gold-100/10 grid place-items-center text-gold-100">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs text-gold-100 uppercase tracking-wide">Service</span>
                </div>
                <h3 className="mt-4 text-2xl leading-snug">{service.title}</h3>
                <p className="mt-3 text-sm text-stone/80 leading-relaxed">{service.description}</p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center text-sm text-gold-100 hover:text-gold-50 transition-colors"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
