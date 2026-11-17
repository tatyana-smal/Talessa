import { Fragment } from 'react'

/* Tiny text helper: **bold** becomes <b>, a newline becomes <br>. */
export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line.split('**').map((part, j) => (j % 2 === 1 ? <b key={j}>{part}</b> : part))}
        </Fragment>
      ))}
    </>
  )
}
