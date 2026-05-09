import { motion } from 'motion/react'
import {
  Layout,
  Server,
  Database,
  Cloud,
  Code2,
} from 'lucide-react'
import { m } from '#/paraglide/messages'

export function TechStack() {
  const categories = [
    {
      title: m.frontend(),
      icon: Layout,
      technologies: [
        { name: 'React', level: 90 },
        { name: 'TanStack Start', level: 85 },
        { name: 'TailwindCSS', level: 95 },
        { name: 'ShadCN UI', level: 90 },
        { name: 'TypeScript', level: 92 },
      ],
    },
    {
      title: m.backend(),
      icon: Server,
      technologies: [
        { name: 'Hono', level: 80 },
        { name: 'FastAPI', level: 85 },
        { name: 'Express', level: 88 },
        { name: 'Laravel', level: 75 },
        { name: 'Node.js', level: 90 },
      ],
    },
    {
      title: m.database(),
      icon: Database,
      technologies: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Drizzle ORM', level: 82 },
        { name: 'MongoDB', level: 78 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: m.devops_cloud(),
      icon: Cloud,
      technologies: [
        { name: 'Docker', level: 82 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Cloudflare', level: 75 },
        { name: 'AWS S3', level: 78 },
        { name: 'Vercel', level: 88 },
      ],
    },
    {
      title: m.languages(),
      icon: Code2,
      technologies: [
        { name: 'TypeScript', level: 92 },
        { name: 'Python', level: 88 },
        { name: 'C++', level: 80 },
        { name: 'PHP', level: 75 },
        { name: 'C#', level: 70 },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20 px-4 bg-[var(--foam)]">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Tech Stack
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.tech_stack_title()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.tech_stack_subtitle()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="feature-card island-shell rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--lagoon)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-[var(--lagoon-deep)]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--sea-ink)]">
                    {category.title}
                  </h4>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={tech.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-[var(--sea-ink)]">
                          {tech.name}
                        </span>
                        <span className="text-xs text-[var(--sea-ink-soft)]">
                          {tech.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--line)] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                          className="h-full bg-gradient-to-r from-[var(--lagoon)] to-[var(--lagoon-deep)] rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h4 className="text-xl font-semibold text-[var(--sea-ink)] mb-6">
            {m.also_familiar_with()}
          </h4>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Git',
              'GraphQL',
              'REST APIs',
              'Microservices',
              'Linux',
              'Nginx',
              'CI/CD',
              'Kubernetes',
              'Terraform',
              'Next.js',
              'Vue.js',
              'Svelte',
              'Prisma',
              'Sequelize',
              'JWT',
              'OAuth',
              'WebSockets',
              'gRPC',
              'RabbitMQ',
              'Kafka',
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.03 }}
                className="px-4 py-2 bg-[var(--surface-strong)] border border-[var(--line)] rounded-full text-sm text-[var(--sea-ink-soft)] hover:border-[var(--lagoon-deep)] transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
