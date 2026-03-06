import React from 'react'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroData, contactInfo } from '../data/siteData'
import PrimaryButton from '../components/ui/PrimaryButton'
import AdaptiveImage from '../components/ui/AdaptiveImage'

export default function HeroSection() {
  const { scrollYProgress } = useScroll()
  const parallax = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section id="home" className="relative min-h-[92vh] md:min-h-screen">
      <motion.div
        style={{ y: parallax }}
        className="absolute inset-0"
        aria-hidden
      >
        <AdaptiveImage
          src={heroData.backgroundImage}
          alt="Architectural skyline"
          className="h-full w-full object-cover"
          fallback="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal" />
      </motion.div>

      <div className="relative isolate pt-28 md:pt-36 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-2xl"
            >
              <p className="inline-flex items-center gap-2 text-sm md:text-[0.9rem] tracking-[0.22em] uppercase text-gold-100 font-semibold mb-6">
                Cityscape Consulting
              </p>
              <h1 className="text-5xl sm:text-6xl xl:text-7xl leading-[0.95] text-ivory font-semibold">
                {heroData.title}
              </h1>
              <p className="mt-5 text-lg md:text-xl text-stone/90 leading-relaxed">
                {heroData.subtitle}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <PrimaryButton
                  href="#projects"
                  iconRight={<ArrowRight size={18} />}
                  className="w-full sm:w-auto justify-center"
                >
                  Explore Projects
                </PrimaryButton>
                <PrimaryButton href="#contact" variant="secondary" className="w-full sm:w-auto justify-center">
                  Contact Us
                </PrimaryButton>
              </div>
              <a
                href="#about"
                className="mt-10 inline-flex items-center gap-2 text-sm text-gold-100 hover:text-gold-50 transition-colors"
              >
                Discover how we work <ChevronDown size={16} />
              </a>
            </motion.div>

            <div className="relative mt-6 md:mt-0">
                <div className="grid sm:grid-cols-2 gap-4">
                <div className="section-surface glass p-5" data-levitate>
                  <p className="text-sm uppercase text-gold-100 tracking-[0.2em]">Focus</p>
                  <ul className="mt-4 space-y-2 text-sm text-stone/85">
                    {heroData.badges.map((badge) => (
                      <li key={badge} className="flex items-start gap-3">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span>{badge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {heroData.statCards.map((card) => (
                  <div
                    key={card.label}
                    data-levitate
                    className="section-surface glass p-5 relative overflow-hidden"
                  >
                    <p className="text-sm text-stone/80">{card.label}</p>
                    <p className="mt-2 text-3xl font-display text-gold-100">{card.value}</p>
                    <p className="mt-1 text-xs text-stone/65">{card.note}</p>
                    <div className="absolute -bottom-8 -right-8 h-20 w-20 rounded-full blur-3xl bg-gold-600/25" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed left-4 sm:left-10 bottom-5 sm:bottom-6 z-30"
        aria-label="Chat on WhatsApp"
        data-interactive
        data-levitate
      >
        <button
          type="button"
          className="h-12 px-4 sm:px-5 rounded-full bg-green-600/95 text-white text-sm sm:text-sm font-semibold backdrop-blur-md shadow-luxe transition-transform hover:scale-105"
        >
          Chat on WhatsApp
        </button>
      </a>
    </section>
  )
}
