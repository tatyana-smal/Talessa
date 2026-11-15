import { useEffect, useRef, useState } from 'react'
import logo from '../assets/img/logo.png'
import sendIcon from '../assets/img/send.svg'
import sendSmall from '../assets/img/send-small.svg'
import burger from '../assets/img/burger.svg'

const links = [
  { href: '/#apps', label: 'Застосунки' },
  { href: '/#design', label: 'Дизайн' },
  { href: '/#blog', label: 'Блог' },
  { href: '/#about', label: 'Про мене' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const burgerRef = useRef<HTMLButtonElement>(null)

  // Close the mobile menu when the user taps outside of it, or presses Escape
  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node
      if (navRef.current?.contains(target) || burgerRef.current?.contains(target)) return
      setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Talessa" />
      </a>
      <nav ref={navRef} className={`nav ${open ? 'nav--open' : ''}`}>
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </a>
        ))}
        <button type="button" className="lang">UA</button>
        <a href="/#contact" className="btn btn--dark btn--pill nav__cta">
          Написати мені
          <img className="send send--big" src={sendIcon} alt="" width={24} height={24} />
          <img className="send send--small" src={sendSmall} alt="" width={16} height={16} />
        </a>
      </nav>
      <button
        ref={burgerRef}
        type="button"
        className="burger"
        aria-label="Меню"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <img src={burger} alt="" width={24} height={24} />
      </button>
    </header>
  )
}
