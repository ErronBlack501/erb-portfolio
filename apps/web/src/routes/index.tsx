import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '#/components/Hero'
import { About } from '#/components/About'
import { TechStack } from '#/components/TechStack'
import { Projects } from '#/components/Projects'
import { Experience } from '#/components/Experience'
import { Education } from '#/components/Education'
import { Achievements } from '#/components/Achievements'
import { Contact } from '#/components/Contact'
import { m } from '#/paraglide/messages'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <footer className="py-8 px-4 border-t border-[var(--line)] bg-[var(--header-bg)]">
        <div className="page-wrap text-center text-sm text-[var(--sea-ink-soft)]">
          <p>{m.footer()}</p>
        </div>
      </footer>
    </>
  )
}
