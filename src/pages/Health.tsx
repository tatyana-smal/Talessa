import Header from '../components/Header'
import heroPhoto from '../assets/img/app-health.png'
import devices from '../assets/img/card-devices.png'

/* Case page of the "RISE" health & wellness app. The copy is in English for now;
   it will be linked from the English version of the site later. */
export default function Health() {
  return (
    <div className="yarn yarn--health" lang="en">
      <Header />

      <section className="yarn-hero yarn-hero--health">
        <img className="yarn-hero__bg" src={heroPhoto} alt="" />
        <div className="yarn-hero__veil" />
        <div className="yarn-hero__text yarn-hero__text--center">
          <h1>
            Health &amp; Wellness Tracker
            <br />
            for Young Parents
          </h1>
        </div>
        <img className="yarn-hero__devices" src={devices} alt="RISE on laptop, tablet and phone" />
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">About the project</h2>
        <p className="yarn-text">
          Many health apps focus on metrics. During my research, I discovered that young parents
          often need something different: clear guidance, emotional support, and confidence that
          they’re taking care of themselves as well as their children. This idea became the
          foundation of RISE
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Solution</h2>
        <p className="yarn-text">
          RISE transforms health data into clear, personalized guidance so young parents can
          understand themselves, recover faster and care for their families with more energy
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Adaptive setting</h2>
        <p className="yarn-text">
          The user can select only the parameters they wish to track. There is also a separate tab
          where you can set up custom trackers and make notes
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Clear data and accessible analysis</h2>
        <p className="yarn-text">Clear data with result analysis and actionable AI-driven advice</p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Mobile-friendly, easy-to-read adaptation</h2>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Friendly and humorous error messages</h2>
        <p className="yarn-text">
          For a person already experiencing chronic stress, encountering a notification about
          issues with their app creates additional stress. To mitigate this, the messages are
          lighthearted and humorous, and they resonate empathetically with the target user.
        </p>
      </section>

      <section className="yarn-section">
        <h2 className="yarn-title">Adaptation for night mode</h2>
        <p className="yarn-text">
          Parents often find time for themselves only late at night, so it is important to adjust
          the screen to a comfortable night mode.
        </p>
      </section>

      <section className="yarn-end">
        <img className="yarn-end__bg" src={heroPhoto} alt="" />
        <p>
          Because healthy parents
          <br />
          raise happier families
        </p>
      </section>
    </div>
  )
}
