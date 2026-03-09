import React from 'react'
import { motion } from 'framer-motion'
import { ShieldCheck, Award, Search, Users, TabletSmartphone, TrendingUp, CheckCircle2, Linkedin } from 'lucide-react'
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
              <p className="text-sm uppercase tracking-[0.24em] text-gold-100">Cityscape Narrative</p>
              <h3 className="mt-4 text-3xl md:text-4xl leading-tight">
                Exclusive representation, trusted execution
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
          {aboutData.models.map((model) => (
            <RevealCard key={model.title}>
              <div className="section-surface p-6 md:p-8" data-levitate>
                <h4 className="text-xl font-semibold text-gold-100">{model.title}</h4>
                <ul className="mt-5 grid gap-3">
                  {model.points.map((point) => (
                    <li key={point} className="text-sm md:text-base flex items-start gap-3 text-stone/82">
                      <CheckCircle2 size={18} className="mt-0.5 text-gold-100/95 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealCard>
          ))}
        </div>

        <RevealCard>
          <div className="mt-5 section-surface p-6 md:p-8" data-levitate>
            <h4 className="text-2xl md:text-3xl font-semibold">
              {aboutData.leadGeneration.title}
            </h4>
            <p className="mt-3 text-stone/80 leading-relaxed">
              {aboutData.leadGeneration.approach}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {aboutData.leadGeneration.mix.map((item) => (
                <div
                  key={item.channel}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 flex items-center justify-between"
                >
                  <span className="text-sm text-stone/82">{item.channel}</span>
                  <span className="font-semibold text-gold-100">{item.contribution}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p className="font-medium text-gold-100">Digital Marketing Initiatives</p>
                <ul className="mt-3 grid gap-2 text-sm text-stone/82">
                  {aboutData.leadGeneration.digital.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p className="font-medium text-gold-100">Channel & Offline Initiatives</p>
                <ul className="mt-3 grid gap-2 text-sm text-stone/82">
                  {[...aboutData.leadGeneration.partners, ...aboutData.leadGeneration.offline, ...aboutData.leadGeneration.referrals].map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mt-6 text-sm text-stone/72">{aboutData.leadGeneration.objective}</p>
          </div>
        </RevealCard>

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
