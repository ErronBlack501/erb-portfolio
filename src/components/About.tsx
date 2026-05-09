import { motion } from 'motion/react'
import { Code, Database, Cloud, Terminal, Shield, Network } from 'lucide-react'
import { m } from '#/paraglide/messages'

export function About() {
  const stats = [
    { label: m.projects_completed(), value: '15+' },
    { label: m.technologies(), value: '20+' },
    { label: m.years_learning(), value: '4+' },
    { label: m.open_source_contributions(), value: '50+' },
  ]

  const interests = [
    { icon: Code, label: m.backend_engineering(), description: m.backend_desc() },
    { icon: Database, label: m.fullstack_development(), description: m.fullstack_desc() },
    { icon: Cloud, label: m.system_design(), description: m.system_design_desc() },
    { icon: Terminal, label: m.devops(), description: m.devops_desc() },
    { icon: Network, label: m.dsa_algorithms(), description: m.dsa_desc() },
    { icon: Shield, label: m.ctf_security(), description: m.ctf_desc() },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            About Me
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.about_title()}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden island-shell">
                <div className="w-full h-full bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] flex items-center justify-center">
                  <span className="text-8xl text-white font-bold">JD</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[var(--lagoon-deep)] rounded-xl flex items-center justify-center shadow-lg">
                <Terminal size={40} className="text-white" />
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-[var(--sea-ink-soft)] leading-relaxed">
              {m.about_description()}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="island-shell rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-bold text-[var(--lagoon-deep)] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[var(--sea-ink-soft)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Interests Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-bold text-[var(--sea-ink)] mb-8 text-center">
            {m.areas_of_expertise()}
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interests.map((interest, index) => {
              const Icon = interest.icon
              return (
                <motion.div
                  key={interest.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="feature-card island-shell rounded-xl p-6 hover:shadow-xl transition-all"
                >
                  <div className="w-12 h-12 bg-[var(--lagoon)] bg-opacity-10 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={24} className="text-[var(--lagoon-deep)]" />
                  </div>
                  <h5 className="text-lg font-semibold text-[var(--sea-ink)] mb-2">
                    {interest.label}
                  </h5>
                  <p className="text-sm text-[var(--sea-ink-soft)]">
                    {interest.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
