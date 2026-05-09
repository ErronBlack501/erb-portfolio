import { Github, Mail, Download, ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { m } from '#/paraglide/messages'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--lagoon)] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--palm)] opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="page-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h2 className="island-kicker text-sm tracking-widest uppercase">
              Fullstack Developer
            </h2>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="display-title text-5xl md:text-7xl font-bold text-[var(--sea-ink)] mb-6 leading-tight"
          >
            TOBE Heritiana Luca
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-[var(--sea-ink-soft)] mb-4 font-medium"
          >
            {m.hero_title()}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-[var(--sea-ink-soft)] mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {m.hero_intro()}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--lagoon-deep)] text-white rounded-lg font-medium hover:bg-[var(--lagoon)] transition-colors shadow-lg hover:shadow-xl"
            >
              {m.view_projects()}
              <ArrowRight size={18} />
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[var(--surface-strong)] border border-[var(--line)] text-[var(--sea-ink)] rounded-lg font-medium hover:border-[var(--lagoon-deep)] transition-colors"
            >
              <Github size={18} />
              {m.github()}
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 px-6 py-3 bg-[var(--surface-strong)] border border-[var(--line)] text-[var(--sea-ink)] rounded-lg font-medium hover:border-[var(--lagoon-deep)] transition-colors"
            >
              <Mail size={18} />
              {m.contact()}
            </button>

            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-[var(--surface-strong)] border border-[var(--line)] text-[var(--sea-ink)] rounded-lg font-medium hover:border-[var(--lagoon-deep)] transition-colors"
            >
              <Download size={18} />
              {m.download_cv()}
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-[var(--sea-ink-soft)] rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-[var(--lagoon-deep)] rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
