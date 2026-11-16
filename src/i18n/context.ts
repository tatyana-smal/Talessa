import { createContext } from 'react'

export type Lang = 'uk' | 'en'

export interface LanguageValue {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

export const LanguageContext = createContext<LanguageValue>({
  lang: 'uk',
  setLang: () => {},
  toggleLang: () => {},
})
