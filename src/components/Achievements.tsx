import { motion } from 'motion/react'
import { Trophy, Code, Shield, Cloud, Brain, GitBranch } from 'lucide-react'
import { m } from '#/paraglide/messages'

export function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      title: m.competitive_programming(),
      description: m.competitive_desc(),
      highlights: ['Codeforces: Expert (1600+ rating)', 'LeetCode: Top 15%', 'HackerRank: 5-star in Problem Solving'],
    },
    {
      icon: Code,
      title: m.dsa_expertise(),
      description: m.dsa_expertise_desc(),
      highlights: ['Graph Algorithms', 'Dynamic Programming', 'Tree Data Structures', 'String Algorithms'],
    },
    {
      icon: Shield,
      title: m.ctf_security_expertise(),
      description: m.ctf_security_expertise_desc(),
      highlights: ['Web Security', 'Cryptography', 'Reverse Engineering', 'Network Security'],
    },
    {
      icon: GitBranch,
      title: m.open_source_expertise(),
      description: m.open_source_expertise_desc(),
      highlights: ['50+ contributions on GitHub', 'Maintainer of 2 npm packages', 'Active in React and TypeScript communities'],
    },
    {
      icon: Cloud,
      title: m.devops_backend_expertise(),
      description: m.devops_backend_expertise_desc(),
      highlights: ['Docker & Kubernetes', 'AWS & Cloudflare', 'GitHub Actions', 'Microservices Architecture'],
    },
    {
      icon: Brain,
      title: m.system_design_expertise(),
      description: m.system_design_expertise_desc(),
      highlights: ['Load Balancing', 'Caching Strategies', 'Database Sharding', 'Message Queues'],
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-[var(--foam)]">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Achievements & Interests
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.beyond_coding()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.achievements_subtitle()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card island-shell rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[var(--lagoon)] bg-opacity-10 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-[var(--lagoon-deep)]" />
                </div>

                <h4 className="text-xl font-semibold text-[var(--sea-ink)] mb-3">
                  {achievement.title}
                </h4>

                <p className="text-sm text-[var(--sea-ink-soft)] mb-4 leading-relaxed">
                  {achievement.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {achievement.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-[var(--surface-strong)] border border-[var(--line)] text-xs text-[var(--sea-ink-soft)] rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: m.coding_problems_solved(), value: '500+' },
            { label: m.github_contributions(), value: '1000+' },
            { label: m.ctf_competitions(), value: '15+' },
            { label: m.open_source_projects(), value: '10+' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="island-shell rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-[var(--lagoon-deep)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--sea-ink-soft)]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
