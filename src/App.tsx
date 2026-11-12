import './App.css'
import logo from './assets/img/logo.png'
import heroBg from './assets/img/hero-bg.png'
import heroPhoto from './assets/img/hero-photo.png'
import heroOverlay from './assets/img/hero-overlay.svg'
import sendIcon from './assets/img/send.svg'
import arrow from './assets/img/arrow.svg'
import arrowSmall from './assets/img/arrow-small.svg'
import appYarn from './assets/img/app-yarn.png'
import appHealth from './assets/img/app-health.png'
import appPlants from './assets/img/app-plants.png'
import designImg from './assets/img/design.png'
import blogImg from './assets/img/blog.png'
import badge from './assets/img/badge.png'

const apps = [
  { title: 'Моя колекція пряжі', image: appYarn, badge: false, link: true },
  { title: 'Підтримка здоров’я бітьків немовляти', image: appHealth, badge: true, link: false },
  { title: 'Мій календар рослин', image: appPlants, badge: true, link: false },
]

function App() {
  return (
    <div className="page">
      <header className="header">
        <a href="#top" className="logo">
          <img src={logo} alt="Talessa" />
        </a>
        <nav className="nav">
          <a href="#apps">Застосунки</a>
          <a href="#design">Дизайн</a>
          <a href="#blog">Блог</a>
          <a href="#about">Про мене</a>
          <button type="button" className="lang">UA</button>
          <a href="#contact" className="btn btn--dark btn--pill">
            Написати мені
            <img src={sendIcon} alt="" width={24} height={24} />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <img className="hero__bg" src={heroBg} alt="" />
        <img className="hero__photo" src={heroPhoto} alt="" />
        <img className="hero__overlay" src={heroOverlay} alt="" />
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
            <a href="#apps" className="btn btn--dark">Переглянути застосунки</a>
            <a href="#about" className="btn btn--outline">Про мене</a>
          </div>
        </div>
      </section>

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
            key={app.title}
            href="#apps"
            className="card card--app"
            style={{ backgroundImage: `linear-gradient(rgba(252,241,234,.7), rgba(252,241,234,.7)), url(${app.image})` }}
          >
            {app.badge && <img src={badge} alt="У розробці" className="card__badge" />}
            <h2>{app.title}</h2>
            {app.link && <img src={arrow} alt="" className="card__arrow" />}
          </a>
        ))}
      </section>

      <section className="features">
        <article className="feature" id="design">
          <img src={designImg} alt="" className="feature__img" />
          <div className="feature__text">
            <h2>Дизайн</h2>
            <p>Розробка, дизайн, програмуванняння цифрових продуктів та підтримка їх на різних етапах</p>
            <a href="#design" aria-label="Дизайн"><img src={arrowSmall} alt="" /></a>
          </div>
        </article>
        <article className="feature" id="blog">
          <img src={blogImg} alt="" className="feature__img" />
          <div className="feature__text">
            <h2>Блог</h2>
            <p>Про творчість, в’язання, навчання, дизайн, рослини і життя у балансі (наскільки це можливо)))</p>
            <a href="#blog" aria-label="Блог"><img src={arrowSmall} alt="" /></a>
          </div>
        </article>
      </section>

      <span id="about" />
      <span id="contact" />
    </div>
  )
}

export default App
