import type { Meta, StoryObj } from '@storybook/react-vite'
import Header from '../components/Header'
import LangSwitcher from '../components/LangSwitcher'
import ThemeSwitch from '../components/ThemeSwitch'

const meta = {
  title: 'Components/Nav',
  component: Header,
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>
export default meta
type Story = StoryObj<typeof meta>

/** The real site header: logo, menu, language pill, theme switch and the contact button. */
export const SiteHeader: Story = {}

/** Pill that shows the current language and opens to show all of them. */
export const LanguageSwitcher: Story = {
  render: () => <LangSwitcher label="Language" />,
}

/** Light / dark switch (only sets data-theme for now). */
export const ThemeToggle: Story = {
  render: () => <ThemeSwitch label="Light / dark theme" />,
}
