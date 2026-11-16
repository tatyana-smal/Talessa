import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { LanguageContext, type Lang } from './context'

const STORAGE_KEY = 'talessa-lang'

function readStoredLang(): Lang {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY)
    if (v === 'en' || v === 'uk') return v
  } catch {
    /* storage can be blocked (private mode) - fall back to Ukrainian */
  }
  return 'uk'
}

/* Demo language switcher: it remembers the choice and sets <html lang>.
   Real page translations will be added later. */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const toggleLang = useCallback(() => setLang(lang === 'uk' ? 'en' : 'uk'), [lang, setLang])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang, setLang, toggleLang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
