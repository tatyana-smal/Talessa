import { Fragment, type CSSProperties } from 'react'
import Header from '../components/Header'
import { useLanguage } from '../i18n/useLanguage'
import { home } from '../i18n/strings'
import heroFull from '../assets/img/hero-full.webp'
import heroFullTablet from '../assets/img/hero-full-tablet.webp'
import heroFullMobile from '../assets/img/hero-full-mobile.webp'
import arrow from '../assets/img/arrow.svg'
import arrowSmall from '../assets/img/arrow-small.svg'
import arrowMobile from '../assets/img/arrow-mobile.svg'
import appYarn from '../assets/img/app-yarn.png'
import appHealth from '../assets/img/app-health.png'
import appPlants from '../assets/img/app-plants.png'
import designImg from '../assets/img/design.png'
import blogImg from '../assets/img/blog.png'
import badgeUk from '../assets/img/badge.png'
import badgeEn from '../assets/img/badge-en.webp'
import cardPhones from '../assets/img/card-phones.png'
import cardDevices from '../assets/img/card-devices.png'

const apps = [
  { key: 'yarn', image: appYarn, art: cardPhones, href: '/my-yarn' },
  { key: 'health', image: appHealth, art: cardDevices, href: '/health' },
  { key: 'plants', image: appPlants, art: null, href: '#apps' },
] as const

export default function Home() {
  const { lang } = useLanguage()
  const t = home[lang]
  const badge = lang === 'uk' ? badgeUk : badgeEn

  return (
    <div className="page">
      <Header />

      <section className="hero" id="top">
        {/* One merged image per screen size (background + photo + text fade) that scales as a whole */}
        <picture>
          <source media="(max-width: 600px)" srcSet={heroFullMobile} />
          <source media="(max-width: 1100px)" srcSet={heroFullTablet} />
          <img className="hero__full" src={heroFull} alt="" />
        </picture>
        <div className="hero__content">
          <h1>
            {t.heroTitle.map((line, i) => (
              <Fragment key={line}>
                {i > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
          <p>{t.heroText}</p>
          <div className="hero__actions">
            <a href="#apps" className="btn btn--dark">
              <span className="only-desktop">{t.exploreApps}</span>
              <span className="only-compact">{t.exploreAppsShort}</span>
            </a>
            <a href="#about" className="btn btn--outline">{t.about}</a>
          </div>
        </div>
      </section>

      <div className="apps-block">
      <h2 className="apps__heading">{t.myApps}</h2>
      <section className="apps" id="apps">
        <div className="card card--title">
          <h2>{t.myApps}</h2>
          <img src={arrow} alt="" className="card__arrow" />
        </div>
        {apps.map((app) => (
          <a
            key={app.key}
            href={app.href}
            className={`card card--app card--${app.key}`}
            style={{ '--img': `url(${app.image})` } as CSSProperties}
          >
            <img src={badge} alt={t.inDevelopment} className={`card__badge card__badge--${lang}`} />
            <h2>{t.apps[app.key]}</h2>
            {app.art && <img src={app.art} alt="" className="card__art" />}
          </a>
        ))}
      </section>
      </div>

      <section className="features">
        <article className="feature" id="design">
          <img src={designImg} alt="" className="feature__img" />
          <div className="feature__text">
            <h2>{t.designTitle}</h2>
            <p>{t.designText}</p>
            <a href="#design" aria-label={t.designTitle}>
              <picture>
                <source media="(max-width: 600px)" srcSet={arrowMobile} />
                <img src={arrowSmall} alt="" />
              </picture>
            </a>
          </div>
        </article>
        <article className="feature feature--blog" id="blog">
          <div className="feature__media feature__media--tint">
            <img src={blogImg} alt="" className="feature__img" />
          </div>
          <div className="feature__text">
            <h2>{t.blogTitle}</h2>
            <p>{t.blogText}</p>
            <a href="#blog" aria-label={t.blogTitle}>
              <picture>
                <source media="(max-width: 600px)" srcSet={arrowMobile} />
                <img src={arrowSmall} alt="" />
              </picture>
            </a>
          </div>
        </article>
      </section>

      <span id="about" />
      <span id="contact" />
    </div>
  )
}
