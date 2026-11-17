import { Fragment, type CSSProperties } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Rich from '../components/Rich'
import { useLanguage } from '../i18n/useLanguage'
import { yarn } from '../i18n/yarnStrings'
import titleBg from '../assets/img/yarn/title-bg.png'
import titleBgEn from '../assets/img/yarn/title-bg-en.webp'
import endBg from '../assets/img/yarn/end-bg.png'
import screen1 from '../assets/img/yarn/screen1.png'
import screen2 from '../assets/img/yarn/screen2.png'
import screen3 from '../assets/img/yarn/screen3.png'
import phoneFrame from '../assets/img/yarn/phone-frame.svg'
import status from '../assets/img/yarn/status.svg'
import notch from '../assets/img/yarn/notch.svg'
import onboarding from '../assets/img/yarn/onboarding.webp'
import registration from '../assets/img/yarn/registration.webp'
import detail from '../assets/img/yarn/detail.webp'
import platforms from '../assets/img/yarn/platforms.webp'
import night from '../assets/img/yarn/night.webp'
import nightEn from '../assets/img/yarn/night-en.webp'

function Phone({ screen, style }: { screen: string; style: CSSProperties }) {
  return (
    <div className="phone" style={style}>
      <div className="phone__screen">
        <img className="phone__content" src={screen} alt="" />
        <div className="phone__bar" />
        <img className="phone__status" src={status} alt="" />
      </div>
      <img className="phone__frame" src={phoneFrame} alt="" />
      <img className="phone__notch" src={notch} alt="" />
    </div>
  )
}

export default function MyYarn() {
  const { lang } = useLanguage()
  const t = yarn[lang]

  return (
    <div className="yarn">
      <Header />

      <section className="yarn-hero">
        <img className="yarn-hero__bg" src={lang === 'uk' ? titleBg : titleBgEn} alt="" />
        <div className="yarn-hero__veil" />
        <div className="yarn-hero__text">
          <h1>
            {t.heroTitle.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p>{t.heroTagline}</p>
        </div>
        <Phone screen={screen1} style={{ left: '63.75%', top: '41.9%' }} />
        <Phone screen={screen2} style={{ left: '80.7%', top: '46%' }} />
        <Phone screen={screen3} style={{ left: '69.8%', top: '57%' }} />
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.aboutTitle}</h2>
        <p className="yarn-quote">{t.aboutQuote}</p>
        <p className="yarn-text">{t.aboutText}</p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">{t.featuresTitle}</h2>
        <div className="yarn-features">
          <div className="yarn-box">
            <h3 className="yarn-box__head">{t.doneHead}</h3>
            <ol className="yarn-list">
              {t.done.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ol>
          </div>
          <div className="yarn-box yarn-box--plan">
            <h3 className="yarn-box__head">{t.planHead}</h3>
            <ol className="yarn-list">
              {t.plan.map((item) => (
                <li key={item}>
                  <Rich text={item} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <img className="yarn-img" src={onboarding} alt={t.alt.onboarding} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.registrationTitle}</h2>
        <p className="yarn-text">
          <Rich text={t.registrationText} />
        </p>
      </section>
      <img className="yarn-img" src={registration} alt={t.alt.registration} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.detailTitle}</h2>
        <p className="yarn-text">
          <Rich text={t.detailText} />
        </p>
      </section>
      <img className="yarn-img" src={detail} alt={t.alt.detail} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.platformsTitle}</h2>
        <p className="yarn-text">
          <Rich text={t.platformsText} />
        </p>
      </section>
      <img className="yarn-img" src={platforms} alt={t.alt.platforms} />

      <section className="yarn-section">
        <h2 className="yarn-title">{t.nightTitle}</h2>
        <p className="yarn-text">
          <Rich text={t.nightText} />
        </p>
      </section>
      <img className="yarn-img" src={lang === 'uk' ? night : nightEn} alt={t.alt.night} />

      <section className="yarn-end">
        <img className="yarn-end__bg" src={endBg} alt="" />
        <p>
          {t.endText.map((line, i) => (
            <Fragment key={line}>
              {i > 0 && <br />}
              {line}
            </Fragment>
          ))}
        </p>
      </section>

      <Footer />
    </div>
  )
}
