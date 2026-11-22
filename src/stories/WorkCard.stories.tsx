import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import appYarn from '../assets/img/app-yarn.png'
import appHealth from '../assets/img/app-health.png'
import appPlants from '../assets/img/app-plants.png'
import badgeUk from '../assets/img/badge.png'
import badgeEn from '../assets/img/badge-en.webp'
import cardPhones from '../assets/img/card-phones.png'
import cardDevices from '../assets/img/card-devices.png'

/* App card from the "My apps" section of the home page. */
const apps = {
  yarn: { image: appYarn, art: cardPhones, title: 'My yarn collection' },
  health: { image: appHealth, art: cardDevices, title: 'New Parent Wellness' },
  plants: { image: appPlants, art: null, title: 'My Plant Calendar' },
} as const

interface WorkCardProps {
  app: keyof typeof apps
  language: 'uk' | 'en'
  inDevelopment: boolean
}

function WorkCard({ app, language, inDevelopment }: WorkCardProps) {
  const a = apps[app]
  return (
    <div style={{ width: 350, paddingTop: 56 }}>
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        className={`card card--app card--${app}`}
        style={{ '--img': `url(${a.image})` } as CSSProperties}
      >
        {inDevelopment && (
          <img src={language === 'uk' ? badgeUk : badgeEn} alt="In development" className={`card__badge card__badge--${language}`} />
        )}
        <h2>{a.title}</h2>
        {a.art && <img src={a.art} alt="" className="card__art" />}
      </a>
    </div>
  )
}

const meta = {
  title: 'Components/WorkCard',
  component: WorkCard,
  tags: ['autodocs'],
  args: { app: 'yarn', language: 'en', inDevelopment: true },
  argTypes: {
    app: { control: 'inline-radio', options: ['yarn', 'health', 'plants'] },
    language: { control: 'inline-radio', options: ['uk', 'en'] },
  },
} satisfies Meta<typeof WorkCard>
export default meta
type Story = StoryObj<typeof meta>

export const Yarn: Story = {}
export const Health: Story = { args: { app: 'health' } }
export const Plants: Story = { args: { app: 'plants' } }
