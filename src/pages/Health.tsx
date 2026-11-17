import { Fragment } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLanguage } from '../i18n/useLanguage'
import { health } from '../i18n/healthStrings'
import heroPhoto from '../assets/img/app-health.png'
import hero from '../assets/img/health/hero.webp'
import adaptive from '../assets/img/health/adaptive.webp'
import data from '../assets/img/health/data.webp'
import mobile from '../assets/img/health/mobile.webp'
import errors from '../assets/img/health/errors.webp'
import night from '../assets/img/health/night.webp'

/* Case page of the "RISE" health & wellness app (Ukrainian and English). */
export default function Health() {
  const { lang } = useLanguage()
  const t = health[lang]

  return (
    <div className="yarn yarn--health" lang={lang}>
      <Header />

      <div className="yarn-wrap">
      <section className="yarn-hero yarn-hero--health">
        <img className="yarn-hero__bg" src={hero} alt={t.alt.hero} />
        <div className="yarn-hero__veil" />
        <div className="yarn-hero__text yarn-hero__text--center">
          <h1>
            {t.heroTitle.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
        </div>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.aboutTitle}</h2>
        <p className="yarn-text">{t.aboutText}</p>
      </section>

      <section className="yarn-section">
        <p className="yarn-text">{t.solutionText}</p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.adaptiveTitle}</h2>
        <p className="yarn-text">{t.adaptiveText}</p>
      </section>
      <img className="health-img" src={adaptive} alt={t.alt.adaptive} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.dataTitle}</h2>
        <p className="yarn-text">{t.dataText}</p>
      </section>
      <div className="health-band">
        <img className="health-img health-img--narrow" src={data} alt={t.alt.data} />
      </div>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.mobileTitle}</h2>
      </section>
      <div className="health-band">
        <img className="health-img" src={mobile} alt={t.alt.mobile} />
      </div>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.errorsTitle}</h2>
        <p className="yarn-text">{t.errorsText}</p>
      </section>
      <img className="health-img" src={errors} alt={t.alt.errors} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.nightTitle}</h2>
        <p className="yarn-text">{t.nightText}</p>
      </section>
      <img className="health-img" src={night} alt={t.alt.night} />

      <section className="yarn-end">
        <img className="yarn-end__bg" src={heroPhoto} alt="" />
        <p>
          {t.endText.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </section>
      </div>

      <Footer />
    </div>
  )
}
