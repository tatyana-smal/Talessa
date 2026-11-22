import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import '../src/App.css'
import '../src/pages/MyYarn.css'
import { LanguageProvider } from '../src/i18n/LanguageProvider'

const preview: Preview = {
  decorators: [
    // the site components read the current language from this provider
    (Story) => (
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    ),
  ],
  parameters: {
    layout: 'padded',
    backgrounds: { disabled: true },
  },
}
export default preview
