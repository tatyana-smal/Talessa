import type { Meta, StoryObj } from '@storybook/react-vite'
import sendIcon from '../assets/img/send.svg'

/* The site buttons are CSS classes (.btn): dark = Figma "volume button prime", outline = "volume button second". */
interface ButtonProps {
  variant: 'dark' | 'outline'
  label: string
  withIcon: boolean
  disabled: boolean
}

function Button({ variant, label, withIcon, disabled }: ButtonProps) {
  return (
    <button type="button" className={`btn btn--${variant}`} disabled={disabled} style={disabled ? { opacity: 0.6 } : undefined}>
      {label}
      {withIcon && <img src={sendIcon} alt="" width={24} height={24} />}
    </button>
  )
}

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { variant: 'dark', label: 'Explore Apps', withIcon: false, disabled: false },
  argTypes: { variant: { control: 'inline-radio', options: ['dark', 'outline'] } },
} satisfies Meta<typeof Button>
export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}
export const Dark: Story = { args: { variant: 'dark' } }
export const Outline: Story = { args: { variant: 'outline', label: 'About me' } }
export const WithIcon: Story = { args: { variant: 'dark', label: 'Contact me', withIcon: true } }
