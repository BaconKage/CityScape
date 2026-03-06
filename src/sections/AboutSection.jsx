import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Search, Users, TabletSmartphone, TrendingUp } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { aboutData } from '../data/siteData'
import RevealCard from '../components/ui/RevealCard'

const iconMap = {
  ShieldCheck,
  Award,
  TrendingUp,
  Search,
  Users,
  TabletSmartphone,
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-frame relative py-16 md:py-24 bg-charcoal/95"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Who We Are"
          title="A premium consulting house for real estate mandates"
          description="We help developers transform premium projects into premium outcomes."
        />

        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <RevealCard>
            <div className="section-surface p-6 md:p-8" data-levitate>
              <p className="text-sm uppercase tracking-[0.24em] text-gold-100">Cityscape Narrative</p>
              <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
                Exclusive representation, trusted execution
              </h3>
              <p className="mt-5 text-stone/85 text-lg leading-relaxed">{aboutData.story}</p>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {aboutData.approach.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 p-4 text-sm text-stone/80 bg-white/5"
                    data-levitate
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4"
          >
            {aboutData.highlights.map((item) => {
              const Icon = iconMap[item.icon] || ShieldCheck
              return (
                <div
                  key={item.title}
                  data-interactive
                  data-levitate
                  className="section-surface p-5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl border border-gold-100/30 bg-gold-100/10 grid place-items-center text-gold-100">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{item.title}</p>
                      <p className="mt-1 text-sm text-stone/78 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
