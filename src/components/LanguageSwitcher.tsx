import { getLocale, locales, setLocale } from '#/paraglide/runtime'

export function LanguageSwitcher() {
  const currentLocale = getLocale()

  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => setLocale(locale)}
          className={`px-3 py-1 text-sm font-medium rounded-lg transition-colors ${
            locale === currentLocale
              ? 'bg-[var(--lagoon-deep)] text-white'
              : 'bg-[var(--surface-strong)] text-[var(--sea-ink-soft)] hover:text-[var(--sea-ink)]'
          }`}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
