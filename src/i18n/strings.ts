import type { Lang } from './context'

/* Demo strings: only the header is translated for now. */
export const header: Record<Lang, { apps: string; design: string; blog: string; about: string; contact: string; switchTo: string }> = {
  uk: {
    apps: 'Застосунки',
    design: 'Дизайн',
    blog: 'Блог',
    about: 'Про мене',
    contact: 'Написати мені',
    switchTo: 'Switch to English',
  },
  en: {
    apps: 'Apps',
    design: 'Design',
    blog: 'Blog',
    about: 'About me',
    contact: 'Contact me',
    switchTo: 'Перемкнути на українську',
  },
}
