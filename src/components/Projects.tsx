import { motion } from 'motion/react'
import { Github, ExternalLink, Zap, Network } from 'lucide-react'
import { m } from '#/paraglide/messages'

export function Projects() {
  const projects = [
    {
      title: 'Blog Platform',
      description: 'A Medium-like blogging platform with real-time collaboration, markdown support, and advanced content management features.',
      image: '📝',
      stack: ['React', 'TanStack Start', 'PostgreSQL', 'Drizzle ORM', 'Redis'],
      features: [
        'Real-time collaborative editing with WebSocket',
        'Markdown editor with live preview',
        'Advanced search with full-text indexing',
        'Image optimization and CDN integration',
        'User authentication with OAuth',
      ],
      challenges: [
        'Implemented optimistic UI updates for seamless collaboration',
        'Optimized database queries with proper indexing strategies',
        'Built a custom caching layer with Redis for performance',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Scholarship Management System',
      description: 'Comprehensive system for managing scholarship applications, payments, and student records with automated workflows.',
      image: '💰',
      stack: ['Laravel', 'MySQL', 'Redis', 'Docker', 'GitHub Actions'],
      features: [
        'Multi-role user management (admin, student, reviewer)',
        'Automated application workflow with status tracking',
        'Secure payment integration with multiple providers',
        'Document management with digital signatures',
        'Analytics dashboard for administrators',
      ],
      challenges: [
        'Designed complex workflow state machine for application processing',
        'Implemented secure file handling with encryption',
        'Built scalable notification system for multi-channel alerts',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Pokédex API',
      description: 'A comprehensive Pokédex application with advanced filtering, evolution chains, and battle statistics.',
      image: '🎮',
      stack: ['React', 'TypeScript', 'TailwindCSS', 'PokéAPI', 'Vercel'],
      features: [
        'Search and filter by type, generation, and stats',
        'Evolution chain visualization',
        'Compare Pokémon statistics',
        'Favorite Pokémon collection',
        'Responsive design with dark mode',
      ],
      challenges: [
        'Implemented efficient data caching to minimize API calls',
        'Built complex filtering system with multiple criteria',
        'Optimized rendering for large datasets with virtualization',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Graph Algorithm Visualizer',
      description: 'Interactive visualization tool for graph algorithms including Dijkstra, BFS, DFS, and MST algorithms.',
      image: '🔀',
      stack: ['React', 'TypeScript', 'Canvas API', 'Algorithms', 'Motion'],
      features: [
        'Interactive graph creation and manipulation',
        'Step-by-step algorithm visualization',
        'Multiple algorithm implementations',
        'Performance metrics and comparisons',
        'Export graphs as images',
      ],
      challenges: [
        'Implemented efficient rendering for large graphs with Canvas',
        'Built smooth animations for algorithm steps',
        'Designed intuitive UI for complex graph operations',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Fullstack Auth System',
      description: 'Production-ready authentication system with JWT, OAuth, 2FA, and session management.',
      image: '🔐',
      stack: ['Hono', 'PostgreSQL', 'Redis', 'JWT', 'TOTP'],
      features: [
        'JWT-based authentication with refresh tokens',
        'OAuth 2.0 integration (Google, GitHub)',
        'Two-factor authentication with TOTP',
        'Session management with Redis',
        'Rate limiting and security headers',
      ],
      challenges: [
        'Implemented secure token rotation and blacklisting',
        'Built robust session management with Redis',
        'Designed comprehensive security middleware',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
    {
      title: 'Real-time Chat Application',
      description: 'Scalable chat application with rooms, private messaging, file sharing, and typing indicators.',
      image: '💬',
      stack: ['FastAPI', 'WebSocket', 'PostgreSQL', 'Redis', 'Docker'],
      features: [
        'Real-time messaging with WebSocket',
        'Room-based and private conversations',
        'File upload and sharing',
        'Message persistence and search',
        'Typing indicators and read receipts',
      ],
      challenges: [
        'Implemented horizontal scaling with Redis pub/sub',
        'Built efficient message indexing for search',
        'Designed robust connection handling for mobile clients',
      ],
      github: 'https://github.com',
      demo: 'https://demo.com',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Featured Projects
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.featured_projects_title()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.featured_projects_subtitle()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="feature-card island-shell rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Project Image/Banner */}
              <div className="h-48 bg-gradient-to-br from-[var(--lagoon)] to-[var(--palm)] flex items-center justify-center">
                <span className="text-7xl">{project.image}</span>
              </div>

              <div className="p-6">
                <h4 className="text-2xl font-bold text-[var(--sea-ink)] mb-2">
                  {project.title}
                </h4>
                <p className="text-[var(--sea-ink-soft)] mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[var(--lagoon)] bg-opacity-10 text-[var(--lagoon-deep)] text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-[var(--sea-ink)] mb-2 flex items-center gap-2">
                    <Zap size={16} className="text-[var(--lagoon-deep)]" />
                    {m.key_features()}
                  </h5>
                  <ul className="text-sm text-[var(--sea-ink-soft)] space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[var(--lagoon-deep)] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technical Challenges */}
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-[var(--sea-ink)] mb-2 flex items-center gap-2">
                    <Network size={16} className="text-[var(--lagoon-deep)]" />
                    {m.technical_challenges()}
                  </h5>
                  <ul className="text-sm text-[var(--sea-ink-soft)] space-y-1">
                    {project.challenges.slice(0, 2).map((challenge) => (
                      <li key={challenge} className="flex items-start gap-2">
                        <span className="text-[var(--lagoon-deep)] mt-1">•</span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--sea-ink)] text-white rounded-lg text-sm font-medium hover:bg-[var(--lagoon-deep)] transition-colors"
                  >
                    <Github size={16} />
                    {m.github()}
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[var(--surface-strong)] border border-[var(--line)] text-[var(--sea-ink)] rounded-lg text-sm font-medium hover:border-[var(--lagoon-deep)] transition-colors"
                  >
                    <ExternalLink size={16} />
                    {m.live_demo()}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
