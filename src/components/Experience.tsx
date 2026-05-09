import { motion } from 'motion/react'
import { Briefcase, GraduationCap, Code, Calendar } from 'lucide-react'
import { m } from '#/paraglide/messages'

export function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Backend Developer Intern',
      company: 'Tech Company Inc.',
      period: 'Jun 2024 - Sep 2024',
      description: [
        'Developed RESTful APIs using FastAPI and PostgreSQL',
        'Implemented caching strategies with Redis, reducing response times by 40%',
        'Collaborated with frontend team to integrate APIs and optimize data flow',
        'Participated in code reviews and architectural discussions',
      ],
    },
    {
      type: 'work',
      title: 'Fullstack Developer',
      company: 'Startup XYZ',
      period: 'Jan 2024 - May 2024',
      description: [
        'Built a full-stack application using React and Laravel',
        'Designed and implemented database schemas with MySQL',
        'Integrated third-party APIs for payment processing and authentication',
        'Deployed applications using Docker and CI/CD pipelines',
      ],
    },
    {
      type: 'project',
      title: 'Scholarship Management System',
      company: 'Academic Project',
      period: 'Sep 2023 - Dec 2023',
      description: [
        'Led a team of 4 developers to build a comprehensive scholarship management system',
        'Implemented complex workflow automation for application processing',
        'Designed secure payment integration with multiple providers',
        'Achieved 95% user satisfaction rate in beta testing',
      ],
    },
    {
      type: 'project',
      title: 'Blog Platform with Real-time Collaboration',
      company: 'Personal Project',
      period: 'Mar 2023 - Aug 2023',
      description: [
        'Built a Medium-like blogging platform with real-time collaborative editing',
        'Implemented WebSocket-based synchronization for multi-user editing',
        'Optimized database queries with proper indexing strategies',
        'Deployed on Vercel with PostgreSQL and Redis on Railway',
      ],
    },
    {
      type: 'work',
      title: 'Junior Developer',
      company: 'Digital Agency',
      period: 'Jun 2023 - Aug 2023',
      description: [
        'Developed responsive web applications using React and TailwindCSS',
        'Created reusable UI components following design system guidelines',
        'Integrated APIs and managed state with React Query',
        'Collaborated with designers to implement pixel-perfect interfaces',
      ],
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'project':
        return Code
      case 'education':
        return GraduationCap
      default:
        return Briefcase
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'work':
        return m.work_experience()
      case 'project':
        return m.project()
      case 'education':
        return 'Education'
      default:
        return 'Experience'
    }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-[var(--foam)]">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Experience
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.experience_title()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.experience_subtitle()}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[var(--line)]" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = getIcon(experience.type)
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={`${experience.type}-${index}`}
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--lagoon-deep)] rounded-full border-4 border-[var(--foam)] z-10" />

                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} md:pl-0 pl-8`}>
                    <div className="feature-card island-shell rounded-xl p-6">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="w-10 h-10 bg-[var(--lagoon)] bg-opacity-10 rounded-lg flex items-center justify-center">
                          <Icon size={20} className="text-[var(--lagoon-deep)]" />
                        </div>
                        <div>
                          <span className="text-xs font-medium text-[var(--lagoon-deep)] uppercase tracking-wider">
                            {getTypeLabel(experience.type)}
                          </span>
                        </div>
                      </div>

                      <h4 className="text-xl font-bold text-[var(--sea-ink)] mb-1">
                        {experience.title}
                      </h4>
                      <p className="text-[var(--sea-ink-soft)] font-medium mb-3">
                        {experience.company}
                      </p>

                      <div className={`flex items-center gap-2 text-sm text-[var(--sea-ink-soft)] mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Calendar size={14} />
                        {experience.period}
                      </div>

                      <ul className={`space-y-2 text-sm text-[var(--sea-ink-soft)] ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                        {experience.description.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[var(--lagoon-deep)] mt-1 flex-shrink-0">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
