import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rich from '../components/Rich'
import { useLanguage } from '../i18n/useLanguage'
import { LEGAL_UPDATED } from '../config'
import type { LegalDoc } from '../i18n/legalStrings'

/* Shared layout of the Privacy Policy and Support pages */
export default function LegalPage({ docs, toc = false }: { docs: Record<'uk' | 'en', LegalDoc>; toc?: boolean }) {
  const { lang } = useLanguage()
  const doc = docs[lang]

  // The sections render after the page loads, so jump to /privacy#rise etc. by hand
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [lang])

  return (
    <div className="legal">
      <Header />
      <main className="legal__main">
        <h1>{doc.title}</h1>
        <p className="legal__updated">
          {doc.updatedLabel}: {LEGAL_UPDATED[lang]}
        </p>
        <p className="legal__intro">
          <Rich text={doc.intro} />
        </p>

        {toc && doc.tocLabel && (
          <nav className="legal__toc" aria-label={doc.tocLabel}>
            <h2>{doc.tocLabel}</h2>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {doc.sections.map((s) => (
          <section key={s.id} id={s.id} className="legal__section">
            <h2>{s.title}</h2>
            {s.blocks.map((b, i) =>
              'p' in b ? (
                <p key={i}>
                  <Rich text={b.p} />
                </p>
              ) : (
                <ul key={i}>
                  {b.ul.map((item) => (
                    <li key={item}>
                      <Rich text={item} />
                    </li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}
      </main>
      <Footer />
    </div>
  )
}
