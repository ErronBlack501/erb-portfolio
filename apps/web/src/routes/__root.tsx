import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Menu, X, Github } from 'lucide-react'
import { m } from '#/paraglide/messages'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import { getLocale } from '#/paraglide/runtime'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import { LanguageSwitcher } from '#/components/LanguageSwitcher'
import { ThemeProvider } from '#/components/theme-provider'
import { ThemeToggle } from '#/components/ThemeToggle'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TOBE Heritiana Luca - Fullstack Developer',
      },
      {
        name: 'description',
        content:
          'Portfolio professionnel de TOBE Heritiana Luca, developpeur Fullstack TypeScript specialise en backend engineering, system design et DevOps.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <div className="page-wrap px-4 py-20 text-center text-[var(--sea-ink-soft)]">
      <p>Page not found.</p>
    </div>
  ),
  shellComponent: RootDocument,
})

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Tech Stack', href: '#tech-stack' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: m.contact(), href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--header-bg)] border-b border-[var(--line)]">
      <div className="page-wrap px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-[var(--sea-ink)]">
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link text-sm font-medium text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]"
            >
              {link.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="ml-4">
            <LanguageSwitcher />
          </div>

          {/* Theme Toggle */}
          <div className="ml-2">
            <ThemeToggle />
          </div>

          {/* GitHub */}
          <div className="ml-2">
            <a
              href="https://github.com/yourusername/erb-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-md border border-gray-200 bg-transparent p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[var(--sea-ink)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--header-bg)] border-b border-[var(--line)]">
          <div className="page-wrap px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)] py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Language Switcher & Theme Toggle */}
            <div className="pt-2 border-t border-[var(--line)] flex items-center gap-4">
              <LanguageSwitcher />
              <ThemeToggle />
              <a
                href="https://github.com/yourusername/erb-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 flex items-center justify-center rounded-md border border-gray-200 bg-transparent p-2 hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()} suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="pt-16">{children}</main>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  )
}
