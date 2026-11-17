import { useState, type FormEvent } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rich from '../components/Rich'
import { useLanguage } from '../i18n/useLanguage'
import { contact } from '../i18n/contactStrings'
import { CONTACT_EMAIL } from '../config'

/* Contact form.
   - With VITE_WEB3FORMS_KEY set (Vercel -> Settings -> Environment Variables) the message is delivered
     to the mailbox of that key by the Web3Forms service.
   - Without a key the page still works: it opens the visitor's email app with the message filled in. */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

type Status = 'idle' | 'sending' | 'sent' | 'sentMailto' | 'error'

export default function Contact() {
  const { lang } = useLanguage()
  const t = contact[lang]
  const [status, setStatus] = useState<Status>('idle')
  const [problem, setProblem] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const topic = String(form.get('topic') ?? t.topics[0].value)
    const message = String(form.get('message') ?? '').trim()
    const consent = form.get('consent') === 'on'
    const trap = String(form.get('botcheck') ?? '')

    if (trap) return // a bot filled the hidden field: silently ignore
    if (!/^\S+@\S+\.\S+$/.test(email)) return setProblem(t.invalidEmail)
    if (message.length < 10) return setProblem(t.tooShort)
    if (!consent) return setProblem(t.needConsent)
    setProblem('')

    if (!WEB3FORMS_KEY) {
      const body = `${message}\n\n— ${name || email}\n${email}`
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`[Talessa] ${topic}`)}&body=${encodeURIComponent(body)}`
      setStatus('sentMailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Talessa] ${topic}`,
          from_name: name || 'Talessa website',
          name,
          email,
          message,
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.message || 'failed')
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const done = status === 'sent' || status === 'sentMailto'

  return (
    <div className="legal">
      <Header />
      <main className="legal__main">
        <h1>{t.title}</h1>
        <p className="legal__intro">{t.intro}</p>

        {done ? (
          <p className="contact__done" role="status">
            {status === 'sent' ? t.success : t.successMailto}
          </p>
        ) : (
          <form className="contact" onSubmit={onSubmit} noValidate>
            <label className="contact__field">
              <span>{t.name}</span>
              <input name="name" type="text" autoComplete="name" maxLength={100} />
            </label>

            <label className="contact__field">
              <span>{t.email} *</span>
              <input name="email" type="email" autoComplete="email" required maxLength={200} />
            </label>

            <label className="contact__field">
              <span>{t.topic}</span>
              <select name="topic" defaultValue={t.topics[0].value}>
                {t.topics.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="contact__field">
              <span>{t.message} *</span>
              <textarea name="message" rows={7} required maxLength={4000} placeholder={t.messagePlaceholder} />
            </label>

            {/* honeypot: hidden from people, bots tend to fill it */}
            <input className="contact__trap" name="botcheck" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            <label className="contact__consent">
              <input name="consent" type="checkbox" />
              <span>
                <Rich text={t.consent} />
              </span>
            </label>

            {problem && (
              <p className="contact__problem" role="alert">
                {problem}
              </p>
            )}
            {status === 'error' && (
              <p className="contact__problem" role="alert">
                {t.error} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            )}

            <button type="submit" className="btn btn--dark contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? t.sending : t.submit}
            </button>
          </form>
        )}

        <p className="contact__direct">
          {t.or} <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </main>
      <Footer />
    </div>
  )
}
