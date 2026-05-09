import { motion } from 'motion/react'
import { Github, Linkedin, Mail, Send, MessageSquare } from 'lucide-react'
import { useState } from 'react'
import { m } from '#/paraglide/messages'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const socialLinks = [
    { icon: Github, label: m.github(), href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Mail, label: 'Email', href: 'mailto:john@example.com' },
    { icon: MessageSquare, label: 'Discord', href: '#' },
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="page-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="island-kicker text-sm tracking-widest uppercase mb-4">
            Contact
          </h2>
          <h3 className="display-title text-4xl md:text-5xl font-bold text-[var(--sea-ink)]">
            {m.contact_title()}
          </h3>
          <p className="text-lg text-[var(--sea-ink-soft)] mt-4 max-w-2xl mx-auto">
            {m.contact_subtitle()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="feature-card island-shell rounded-xl p-8"
          >
            <h4 className="text-2xl font-bold text-[var(--sea-ink)] mb-6">
              {m.send_message()}
            </h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--sea-ink)] mb-2">
                  {m.name()}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--surface-strong)] border border-[var(--line)] rounded-lg text-[var(--sea-ink)] placeholder:text-[var(--sea-ink-soft)] focus:outline-none focus:border-[var(--lagoon-deep)] transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--sea-ink)] mb-2">
                  {m.email()}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[var(--surface-strong)] border border-[var(--line)] rounded-lg text-[var(--sea-ink)] placeholder:text-[var(--sea-ink-soft)] focus:outline-none focus:border-[var(--lagoon-deep)] transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--sea-ink)] mb-2">
                  {m.message()}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[var(--surface-strong)] border border-[var(--line)] rounded-lg text-[var(--sea-ink)] placeholder:text-[var(--sea-ink-soft)] focus:outline-none focus:border-[var(--lagoon-deep)] transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--lagoon-deep)] text-white rounded-lg font-medium hover:bg-[var(--lagoon)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  m.sending()
                ) : (
                  <>
                    <Send size={18} />
                    {m.send_message()}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm text-center"
                >
                  {m.message_sent_success()}
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <h4 className="text-2xl font-bold text-[var(--sea-ink)] mb-6">
              {m.lets_connect()}
            </h4>

            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-[var(--surface-strong)] border border-[var(--line)] rounded-lg hover:border-[var(--lagoon-deep)] transition-all group"
                  >
                    <div className="w-12 h-12 bg-[var(--lagoon)] bg-opacity-10 rounded-lg flex items-center justify-center group-hover:bg-[var(--lagoon)] group-hover:bg-opacity-20 transition-colors">
                      <Icon size={24} className="text-[var(--lagoon-deep)]" />
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--sea-ink)]">
                        {link.label}
                      </div>
                      <div className="text-sm text-[var(--sea-ink-soft)]">
                        {link.label === 'Email' ? 'john@example.com' : `@${link.label.toLowerCase()}`}
                      </div>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-[var(--surface-strong)] border border-[var(--line)] rounded-lg">
              <h5 className="font-semibold text-[var(--sea-ink)] mb-3">
                {m.response_time()}
              </h5>
              <p className="text-sm text-[var(--sea-ink-soft)] leading-relaxed">
                {m.response_time_desc()}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
