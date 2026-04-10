import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C } from '../constants'

const navItems = [
  {
    label: 'TEAMS', path: '/teams',
    children: [
      { label: 'JO Teams (L2–10)',    path: '/teams/jo-teams' },
      { label: 'XCel Team',           path: '/teams/xcel' },
      { label: 'JO Elite',            path: '/teams/elite' },
      { label: 'Power Tumbling',      path: '/teams/power-tumbling' },
      { label: 'Boys Pre-TEAM',       path: '/teams/boys-preteam' },
    ],
  },
  {
    label: 'THE GYM', path: '/the-gym',
    children: [
      { label: 'About TAG USA', path: '/the-gym/about' },
      { label: 'Our Facility',  path: '/the-gym/facility' },
      { label: 'Coaches',       path: '/the-gym/coaches' },
    ],
  },
  {
    label: 'CLASSES', path: '/classes',
    children: [
      { label: 'All Classes',        path: '/classes' },
      { label: 'Sports Camps',       path: '/classes/camps' },
      { label: 'Afterschool / Aftercare', path: '/classes/aftercare' },
    ],
  },
]

const mobileLinks = [
  { label: 'HOME',                   path: '/' },
  { label: 'CLASSES',                path: '/classes' },
  { label: 'SPORTS CAMPS',           path: '/classes/camps' },
  { label: 'AFTERCARE',              path: '/classes/aftercare' },
  { label: 'TEAMS — JO L2–10',       path: '/teams/jo-teams' },
  { label: 'TEAMS — XCel',           path: '/teams/xcel' },
  { label: 'TEAMS — JO Elite',       path: '/teams/elite' },
  { label: 'TEAMS — Power Tumbling', path: '/teams/power-tumbling' },
  { label: 'THE GYM — About',        path: '/the-gym/about' },
  { label: 'THE GYM — Facility',     path: '/the-gym/facility' },
  { label: 'BIRTHDAY PARTIES',       path: '/birthday-parties' },
  { label: 'OPEN GYM',               path: '/open-gym' },
  { label: 'GALLERY',                path: '/gallery' },
  { label: 'BLOG',                   path: '/blog' },
  { label: 'CONTACT',                path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const active = (path: string) =>
    pathname === path || pathname.startsWith(path + '/')

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e0e0e0',
      position: 'sticky',
      top: 0,
      zIndex: 999,
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 72,
      }}>

        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 52, height: 52, background: C.navy, borderRadius: '50%',
            border: `3px solid ${C.red}`, display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <span style={{ color: '#fff', fontSize: 15, fontWeight: 900, fontFamily: "'Barlow Condensed',sans-serif" }}>TAG</span>
          </div>
          <div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 20, color: C.navy, lineHeight: 1 }}>
              TAG <span style={{ color: C.red }}>USA</span>
            </div>
            <div style={{ fontFamily: "'Barlow',sans-serif", fontWeight: 600, fontSize: 9, color: '#888', letterSpacing: 1.5, textTransform: 'uppercase' }}>
              Gymnastics &amp; Trampoline
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 22 }}>

          <Link to="/" style={linkStyle(active('/') && pathname === '/')}>HOME</Link>

          {navItems.map(item => (
            <div key={item.label} className="dropdown">
              <span style={linkStyle(active(item.path))}>
                {item.label} ▾
              </span>
              <div className="dropdown-menu">
                {item.children.map(c => (
                  <Link key={c.path} to={c.path}>{c.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <Link to="/gallery"  style={linkStyle(active('/gallery'))}>GALLERY</Link>
          <Link to="/blog"     style={linkStyle(active('/blog'))}>BLOG</Link>
          <Link to="/contact"  style={linkStyle(active('/contact'))}>CONTACT</Link>

          <select style={{
            border: '1px solid #ddd', padding: '4px 8px',
            fontFamily: "'Barlow',sans-serif", fontSize: 13,
            cursor: 'pointer', background: '#fff',
          }}>
            <option>English</option>
            <option>Español</option>
          </select>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', fontSize: 28, color: C.navy,
            alignItems: 'center',
          }}
        >{open ? '✕' : '☰'}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: '#fff', borderTop: `3px solid ${C.red}`, padding: '12px 24px 20px' }}>
          {mobileLinks.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              style={{
                display: 'block', padding: '10px 0',
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 700, fontSize: 16,
                borderBottom: '1px solid #eee',
                color: active(item.path) ? C.red : C.navy,
              }}
            >{item.label}</Link>
          ))}
        </div>
      )}
    </nav>
  )
}

function linkStyle(isActive: boolean): React.CSSProperties {
  return {
    fontFamily: "'Barlow Condensed',sans-serif",
    fontWeight: 700,
    fontSize: 14,
    letterSpacing: 0.5,
    color: '#1a1a1a',
    padding: '4px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    borderBottom: isActive ? '2px solid #1a1a1a' : '2px solid transparent',
    transition: 'border-color 0.2s',
  }
}
