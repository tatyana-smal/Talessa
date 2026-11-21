import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import type { Lang } from '../i18n/context'

const OPTIONS: { code: Lang; label: string }[] = [
  { code: 'uk', label: 'UA' },
  { code: 'en', label: 'EN' },
]

/* Pill that shows only the current language; a tap opens it to show all languages,
   choosing one closes it again (closes on outside tap / Escape too). */
export default function LangSwitcher({ label }: { label: string }) {
  const { lang, setLang } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} className="langsw" role="group" aria-label={label}>
      {OPTIONS.map((o) => {
        const active = o.code === lang
        const hidden = !open && !active
        return (
          <button
            key={o.code}
            type="button"
            className={`langsw__opt${active ? ' langsw__opt--active' : ''}${hidden ? ' langsw__opt--hidden' : ''}`}
            aria-pressed={active}
            aria-expanded={active ? open : undefined}
            tabIndex={hidden ? -1 : 0}
            aria-hidden={hidden || undefined}
            onClick={() => {
              if (active) setOpen((v) => !v)
              else {
                setLang(o.code)
                setOpen(false)
              }
            }}
          >
            {o.label}
          </button>
        )
      })}
    </div>
  )
}
