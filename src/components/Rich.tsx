import { Fragment } from 'react'

/* Tiny text helper: **bold** becomes <b>, [text](url) becomes a link, a newline becomes <br>. */
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g

function renderLine(line: string) {
  return line.split(TOKEN).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
      return <b key={i}>{part.slice(2, -2)}</b>
    }
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part)
    if (link) return <a key={i} href={link[2]}>{link[1]}</a>
    return part
  })
}

export default function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {renderLine(line)}
        </Fragment>
      ))}
    </>
  )
}
