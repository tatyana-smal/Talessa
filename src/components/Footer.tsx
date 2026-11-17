import logo from '../assets/img/logo.png'
import { useLanguage } from '../i18n/useLanguage'
import { footer, header } from '../i18n/strings'
import { CONTACT_EMAIL, DEVELOPER_NAME } from '../config'

const YEAR = new Date().getFullYear()

/* Site footer: shown on every page. Legal links (privacy, support) live here. */
export default function Footer() {
  const { lang, toggleLang } = useLanguage()
  const t = footer[lang]
  const h = header[lang]

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <a href="/" className="footer__logo" aria-label="Talessa">
            <img src={logo} alt="Talessa" />
          </a>
          <p>{t.tagline}</p>
          <button type="button" className="footer__lang" onClick={toggleLang} aria-label={h.switchTo}>
            {lang === 'uk' ? 'UA' : 'EN'}
          </button>
        </div>

        <nav className="footer__col" aria-label={t.pages}>
          <h3>{t.pages}</h3>
          <ul>
            <li><a href="/#apps">{h.apps}</a></li>
            <li><a href="/#design">{h.design}</a></li>
            <li><a href="/#blog">{h.blog}</a></li>
            <li><a href="/#about">{h.about}</a></li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label={t.apps}>
          <h3>{t.apps}</h3>
          <ul>
            <li><a href="/my-yarn">{t.appsLinks.yarn}</a></li>
            <li><a href="/health">{t.appsLinks.health}</a></li>
            <li>
              <a href="/#apps">{t.appsLinks.plants}</a> <span className="footer__soon">({t.inDevelopment})</span>
            </li>
          </ul>
        </nav>

        <nav className="footer__col" aria-label={t.help}>
          <h3>{t.help}</h3>
          <ul>
            <li><a href="/contact">{t.write}</a></li>
            <li><a href="/support">{t.support}</a></li>
            <li><a href="/privacy">{t.privacy}</a></li>
            <li><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
          </ul>
        </nav>
      </div>

      <p className="footer__copy">
        © {YEAR} {DEVELOPER_NAME}. {t.rights}
      </p>
    </footer>
  )
}
