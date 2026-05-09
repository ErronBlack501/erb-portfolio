import { motion } from 'motion/react'
import { GraduationCap, BookOpen, Database, Layers } from 'lucide-react'
import { m } from '#/paraglide/messages'

export function Education() {
  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      institution: 'University of Technology',
      period: '2021 - 2025',
      description: 'Specializing in Software Engineering & Database Systems',
      highlights: [
        'GPA: 3.8/4.0',
        'Dean\'s List: 2022, 2023, 2024',
        'Capstone Project: Scholarship Management System',
      ],
    },
  ]

  const coursework = [
    {
      category: m.software_engineering(),
      icon: BookOpen,
      topics: [
        'Software Development Lifecycle (SDLC)',
        'Agile & Scrum Methodologies',
        'Design Patterns (GoF Patterns)',
        'Software Architecture Patterns',
        'Test-Driven Development (TDD)',
        'Code Review & Quality Assurance',
      ],
    },
    {
      category: m.database_systems(),
      icon: Database,
      topics: [
        'Relational Database Design',
        'SQL & Query Optimization',
        'Transaction Management',
        'Database Normalization',
        'Oracle DB Administration',
        'NoSQL Databases',
      ],
    },
    {
      category: m.system_design_category(),
      icon: Layers,
      topics: [
        'UML Modeling & 2TUP',
        'Object-Oriented Analysis & Design',
        'System Architecture Design',
        'API Design (REST, GraphQL)',
        'Microservices Architecture',
        'Distributed Systems',
      ],
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Education
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.education_title()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.education_subtitle()}
          </p>
        </motion.div>

        {/* Degree */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className="feature-card island-shell rounded-xl p-8 max-w-3xl mx-auto"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-[var(--lagoon)] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={28} className="text-[var(--lagoon-deep)]" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-[var(--sea-ink)] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-lg text-[var(--sea-ink-soft)] font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-[var(--sea-ink-soft)]">{edu.period}</p>
                </div>
              </div>

              <p className="text-[var(--sea-ink-soft)] mb-4">{edu.description}</p>

              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 bg-[var(--lagoon)] bg-opacity-10 text-[var(--lagoon-deep)] text-sm font-medium rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Coursework */}
        <div className="grid md:grid-cols-3 gap-8">
          {coursework.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="feature-card island-shell rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[var(--lagoon)] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Icon size={24} className="text-[var(--lagoon-deep)]" />
                  </div>
                  <h4 className="text-xl font-semibold text-[var(--sea-ink)]">
                    {category.category}
                  </h4>
                </div>

                <ul className="space-y-2">
                  {category.topics.map((topic) => (
                    <li
                      key={topic}
                      className="text-sm text-[var(--sea-ink-soft)] flex items-start gap-2"
                    >
                      <span className="text-[var(--lagoon-deep)] mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--lagoon-deep)]" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
