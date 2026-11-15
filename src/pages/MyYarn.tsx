import type { CSSProperties } from 'react'
import Header from '../components/Header'
import titleBg from '../assets/img/yarn/title-bg.png'
import endBg from '../assets/img/yarn/end-bg.png'
import screen1 from '../assets/img/yarn/screen1.png'
import screen2 from '../assets/img/yarn/screen2.png'
import screen3 from '../assets/img/yarn/screen3.png'
import phoneFrame from '../assets/img/yarn/phone-frame.svg'
import status from '../assets/img/yarn/status.svg'
import notch from '../assets/img/yarn/notch.svg'

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
  return (
    <div className="yarn">
      <Header />

      <section className="yarn-hero">
        <img className="yarn-hero__bg" src={titleBg} alt="" />
        <div className="yarn-hero__veil" />
        <div className="yarn-hero__text">
          <h1>
            Моя
            <br />
            колекція пряжі
          </h1>
          <p>Для в’язальниць, у яких пряжі стає все більше, а місця для неї — все менше</p>
        </div>
        <Phone screen={screen1} style={{ left: '63.75%', top: '41.9%' }} />
        <Phone screen={screen2} style={{ left: '80.7%', top: '46%' }} />
        <Phone screen={screen3} style={{ left: '69.8%', top: '57%' }} />
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Про проєкт</h2>
        <p className="yarn-quote">
          «В’язання речей та колекціонування пряжі – це два окремих хобі». Цей проєкт допомагає
          в’язальщіцям швидко ореєнтуватися у своїх запасах пряжі, а також надає можливість
          обмінюватися залишками пряжі і мати всі свої проєкти в одному додатку
        </p>
        <p className="yarn-text">
          Платформа створює єдиний цифровий простір для рукодільниць, де можна зберігати та
          впорядковувати колекцію пряжі, працювати з проєктами й знаходити натхнення. Додаток
          допомагає вести детальний облік матеріалів, автоматично розраховувати залишки та
          орієнтовну собівартість виробів, швидко знаходити потрібну пряжу, а в подальшому —
          розширити можливості для обміну матеріалами та взаємодії зі спільнотою.
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Функціонал додатку</h2>
        <div className="yarn-features">
          <div className="yarn-box">
            <h3 className="yarn-box__head">Вже реалізовано:</h3>
            <ol className="yarn-list">
              <li><b>Склад</b>, фільтр по складу пряжі, товщині, відстежування залишків.</li>
              <li><b>Профіль</b> з можливістю зберігання ідей та фото проектів.</li>
            </ol>
          </div>
          <div className="yarn-box yarn-box--plan">
            <h3 className="yarn-box__head">В подальшому планується розробити:</h3>
            <ol className="yarn-list">
              <li>
                <b>Обмін залишків</b> з фото, цінами, описом, фільтру по цінам, назві та складу
                (щось на кшталт маркетплейсу)
              </li>
              <li><b>Чат</b> для спілкування. Галерея робіт з рейтингом або просто «лайками»</li>
              <li>
                <b>Блог</b> з технологіями, прикладами для розрахунків тих чи інших конструкцій
                одягу та інших речей у проектах.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Зручна реєстрація та авторизація</h2>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Детальна картка пряжі та зручні фільтри</h2>
        <p className="yarn-text">
          Уся інформація про пряжу — в одному місці. <b>Пошук</b> потрібного матеріалу —{' '}
          <b>у кілька дотиків.</b>
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Android &amp; iOS</h2>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Адаптація для нічного режиму</h2>
        <p className="yarn-text">
          В’язання часто стає частиною вечірнього ритуалу — часом для спокою, творчості та затишку.
          <br />
          Тому я додала <b>Темний режим</b>, адаптований не лише за кольорами, а й за атмосферою.
          Темний фон <b>робить</b> інтерфейс <b>комфортнішим у вечірній час</b>, а теплі відтінки та
          яскраві акценти зберігають характер застосунку.
          <br />
          Затишне в’язання — у будь-який час доби.
        </p>
      </section>

      <section className="yarn-end">
        <img className="yarn-end__bg" src={endBg} alt="" />
        <p>
          Уся пряжа в одному місці — більше часу
          <br />
          на те, що ти любиш
        </p>
      </section>
    </div>
  )
}
