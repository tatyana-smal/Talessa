import type { CSSProperties } from 'react'
import Header from '../components/Header'
import heroBg from '../assets/img/hero-bg.png'
import heroPhoto from '../assets/img/hero-photo.png'
import heroPhotoTablet from '../assets/img/hero-photo-tablet.png'
import heroPhotoMobile from '../assets/img/hero-photo-mobile.png'
import heroOverlay from '../assets/img/hero-overlay.svg'
import heroFade from '../assets/img/hero-fade-mobile.svg'
import arrow from '../assets/img/arrow.svg'
import arrowSmall from '../assets/img/arrow-small.svg'
import arrowMobile from '../assets/img/arrow-mobile.svg'
import appYarn from '../assets/img/app-yarn.png'
import appHealth from '../assets/img/app-health.png'
import appPlants from '../assets/img/app-plants.png'
import designImg from '../assets/img/design.png'
import blogImg from '../assets/img/blog.png'
import badge from '../assets/img/badge.png'
import cardPhones from '../assets/img/card-phones.png'
import cardDevices from '../assets/img/card-devices.png'

const apps = [
  {
    key: 'yarn',
    title: 'Моя колекція пряжі',
    image: appYarn,
    art: cardPhones,
    href: '/my-yarn',
  },
  {
    key: 'health',
    title: 'Підтримка здоров’я бітьків немовляти',
    image: appHealth,
    art: cardDevices,
    href: '#apps',
  },
  {
    key: 'plants',
    title: 'Мій календар рослин',
    image: appPlants,
    art: null,
    href: '#apps',
  },
]

export default function Home() {
  return (
    <div className="page">
      <Header />

      <section className="hero" id="top">
        <img className="hero__bg" src={heroBg} alt="" />
        <picture>
          <source media="(max-width: 600px)" srcSet={heroPhotoMobile} />
          <source media="(max-width: 1100px)" srcSet={heroPhotoTablet} />
          <img className="hero__photo" src={heroPhoto} alt="" />
        </picture>
        <img className="hero__overlay" src={heroOverlay} alt="" />
        <img className="hero__fade" src={heroFade} alt="" />
        <div className="hero__content">
          <h1>
            Застосунки,
            <br />
            що турбуються про те, що для нас важливе
          </h1>
          <p>
            Люблю перетворювати ідеї на щось корисне і цікаве: створюю власні
            застосунки, проєктую інтерфейси та ділюся тим, чим живу, що мене
            захоплює і надихає
          </p>
          <div className="hero__actions">
            <a href="#apps" className="btn btn--dark">
              <span className="only-desktop">Переглянути застосунки</span>
              <span className="only-compact">Застосунки</span>
            </a>
            <a href="#about" className="btn btn--outline">Про мене</a>
          </div>
        </div>
      </section>

      <h2 className="apps__heading">Мої застосунки</h2>
      <section className="apps" id="apps">
        <div className="card card--title">
          <h2>
            Мої
            <br />
            застосунки
          </h2>
          <img src={arrow} alt="" className="card__arrow" />
        </div>
        {apps.map((app) => (
          <a
            key={app.key}
            href={app.href}
            className={`card card--app card--${app.key}`}
            style={{ '--img': `url(${app.image})` } as CSSProperties}
          >
            <img src={badge} alt="У розробці" className="card__badge" />
            <h2>{app.title}</h2>
            {app.art && <img src={app.art} alt="" className="card__art" />}
          </a>
        ))}
      </section>

      <section className="features">
        <article className="feature" id="design">
          <img src={designImg} alt="" className="feature__img" />
          <div className="feature__text">
            <h2>Дизайн</h2>
            <p>Розробка, дизайн, програмуванняння цифрових продуктів та підтримка їх на різних етапах</p>
            <a href="#design" aria-label="Дизайн">
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
            <h2>Блог</h2>
            <p>Про творчість, в’язання, навчання, дизайн, рослини і життя у балансі (наскільки це можливо)))</p>
            <a href="#blog" aria-label="Блог">
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
