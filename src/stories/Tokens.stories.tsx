import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'

/* Foundations: the design tokens from index.css, shown with the real values (see docs/design-tokens.md). */
const colours = [
  ['--canvas', 'Page background, form fields, label on dark buttons'],
  ['--surface', 'Raised areas: first card, contents box, footer'],
  ['--line', 'Decorative dividers only'],
  ['--accent', 'Labels, links, focus, checkbox'],
  ['--text', 'Main text, filled buttons'],
  ['--text-muted', 'Captions, placeholders, borders (3:1)'],
  ['--danger', 'Errors'],
] as const

const typeScale = [
  ['--fs-display', '--lh-display', 'Display', 'Main heading'],
  ['--fs-heading', '--lh-heading', 'Heading', 'Card and section titles'],
  ['--fs-title-s', '--lh-title-s', 'Small title', 'Footer column title'],
  ['--fs-lead', '--lh-lead', 'Lead', 'Hero paragraph, descriptions'],
  ['--fs-body', '--lh-body', 'Body', 'Forms, legal text, footer'],
  ['--fs-caption', '--lh-caption', 'Caption', 'Dates, copyright'],
  ['--fs-intro', '--lh-intro', 'Intro (Вступ)', 'Intro of case pages, Inter Bold Italic'],
] as const

const spaces = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-5'] as const
const radii = ['--radius-control', '--radius-card'] as const

const h: CSSProperties = { fontFamily: 'var(--font-heading)', fontWeight: 500, fontSize: 28, margin: '32px 0 12px' }
const mono: CSSProperties = { fontFamily: 'ui-monospace, monospace', fontSize: 13, color: 'var(--text-muted)' }

function sampleStyle(fs: string): CSSProperties {
  const body = fs === '--fs-body' || fs === '--fs-caption'
  const intro = fs === '--fs-intro'
  return {
    fontSize: `var(${fs})`,
    fontFamily: body || intro ? 'var(--font-body)' : 'var(--font-heading)',
    fontStyle: intro ? 'italic' : undefined,
    fontWeight: intro ? 700 : undefined,
  }
}

function Tokens() {
  return (
    <div style={{ background: 'var(--canvas)', color: 'var(--text)', padding: 24, fontFamily: 'var(--font-body)' }}>
      <h2 style={{ ...h, marginTop: 0 }}>Colour roles</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
        {colours.map(([name, use]) => (
          <div key={name} style={{ border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ height: 72, background: `var(${name})` }} />
            <div style={{ padding: 12 }}>
              <div style={mono}>{name}</div>
              <div style={{ fontSize: 14, marginTop: 4 }}>{use}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 style={h}>Fonts</h2>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 28 }}>Lora Medium — headings</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 20 }}>
        Inter Regular — body text, <b>bold only for b</b>
      </p>

      <h2 style={h}>Type scale</h2>
      {typeScale.map(([fs, lh, name, use]) => (
        <div key={fs} style={{ display: 'flex', alignItems: 'baseline', gap: 24, borderBottom: '1px solid var(--line)', padding: '8px 0' }}>
          <div style={{ width: 150, ...mono }}>{fs}</div>
          <div style={{ lineHeight: `var(${lh})`, ...sampleStyle(fs) }}>{name}</div>
          <div style={{ fontSize: 14, color: 'var(--text-muted)' }}>{use}</div>
        </div>
      ))}

      <h2 style={h}>Spacing</h2>
      {spaces.map((s) => (
        <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '6px 0' }}>
          <div style={{ width: 100, ...mono }}>{s}</div>
          <div style={{ height: 16, width: `var(${s})`, background: 'var(--accent)' }} />
        </div>
      ))}

      <h2 style={h}>Radii</h2>
      <div style={{ display: 'flex', gap: 24 }}>
        {radii.map((r) => (
          <div key={r} style={{ textAlign: 'center' }}>
            <div style={{ width: 140, height: 90, background: 'var(--surface)', border: '1px solid var(--text-muted)', borderRadius: `var(${r})` }} />
            <div style={{ ...mono, marginTop: 8 }}>{r}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta = { title: 'Foundations/Tokens', component: Tokens, parameters: { layout: 'fullscreen' } } satisfies Meta<typeof Tokens>
export default meta
export const Overview: StoryObj<typeof meta> = {}
