import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Search, Users, TabletSmartphone, TrendingUp, Linkedin } from 'lucide-react'
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
          eyebrow={aboutData.title}
          title={aboutData.title}
          description={aboutData.subtitle}
        />

        <div className="mt-12 grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
          <RevealCard>
            <div className="section-surface p-6 md:p-8" data-levitate>
              <p className="text-sm uppercase tracking-[0.24em] text-gold-100">Cityscape in 40 Seconds</p>
              <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
                Premium execution for residential development sales
              </h3>
              <div className="mt-5 space-y-4 text-stone/85 text-lg leading-relaxed">
                {aboutData.story.map((line, index) => (
                  <p key={line + index}>{line}</p>
                ))}
              </div>

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

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <RevealCard>
            <div className="section-surface p-6 md:p-8" data-levitate>
              <p className="text-sm uppercase tracking-[0.24em] text-gold-100">How We Work</p>
              <h4 className="mt-3 text-2xl md:text-3xl font-semibold">Execution Framework</h4>
              <div className="mt-5 grid gap-3">
                {aboutData.models.map((model) => (
                  <div
                    key={model.title}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm md:text-base text-stone/82"
                  >
                    <p className="font-medium text-white">{model.title}</p>
                    <p className="mt-1">{model.points[0]}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealCard>

          <RevealCard>
            <div className="section-surface p-6 md:p-8" data-levitate>
              <p className="text-sm uppercase tracking-[0.24em] text-gold-100">Lead Engine</p>
              <h4 className="mt-3 text-2xl md:text-3xl font-semibold">{aboutData.leadGeneration.title}</h4>
              <p className="mt-3 text-stone/80 leading-relaxed">
                {aboutData.leadGeneration.approach}
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {aboutData.leadGeneration.mix.map((item) => (
                  <div
                    key={item.channel}
                    className="rounded-lg border border-white/10 px-4 py-3 bg-white/5 flex justify-between text-sm"
                  >
                    <span className="text-stone/82">{item.channel}</span>
                    <span className="font-semibold text-gold-100">{item.contribution}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-stone/72">{aboutData.leadGeneration.objective}</p>
            </div>
          </RevealCard>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {aboutData.leadership.map((person) => (
            <a
              key={person.name}
              href={person.profile}
              target="_blank"
              rel="noreferrer"
              className="section-surface p-6 flex items-start justify-between gap-4 hover:border-gold-100/45 transition-all"
              data-levitate
            >
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-gold-100/90">Founder</p>
                <p className="mt-2 text-2xl md:text-3xl">{person.name}</p>
                <p className="mt-1 text-stone/75">{person.title}</p>
              </div>
              <div className="rounded-full border border-white/15 h-10 w-10 grid place-items-center text-gold-100 mt-1">
                <Linkedin size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

