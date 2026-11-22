import type { Meta, StoryObj } from '@storybook/react-vite'

/* Form fields of the contact page: they take their look from the .contact wrapper. */
interface TextFieldProps {
  label: string
  kind: 'text' | 'email' | 'textarea' | 'select'
  placeholder: string
  required: boolean
}

function TextField({ label, kind, placeholder, required }: TextFieldProps) {
  return (
    <form className="contact" style={{ maxWidth: 480 }} onSubmit={(e) => e.preventDefault()}>
      <label className="contact__field">
        <span>
          {label}
          {required ? ' *' : ''}
        </span>
        {kind === 'textarea' ? (
          <textarea rows={5} placeholder={placeholder} required={required} />
        ) : kind === 'select' ? (
          <select defaultValue="a">
            <option value="a">Project</option>
            <option value="b">Cooperation</option>
            <option value="c">Other</option>
          </select>
        ) : (
          <input type={kind} placeholder={placeholder} required={required} />
        )}
      </label>
    </form>
  )
}

const meta = {
  title: 'Components/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: { label: 'Name', kind: 'text', placeholder: 'Your name', required: false },
  argTypes: { kind: { control: 'inline-radio', options: ['text', 'email', 'textarea', 'select'] } },
} satisfies Meta<typeof TextField>
export default meta
type Story = StoryObj<typeof meta>

export const Text: Story = {}
export const Email: Story = { args: { label: 'Email', kind: 'email', placeholder: 'you@example.com', required: true } }
export const Message: Story = { args: { label: 'Message', kind: 'textarea', placeholder: 'Tell me about your idea', required: true } }
export const Topic: Story = { args: { label: 'Topic', kind: 'select' } }
