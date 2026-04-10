import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { C } from '../constants'

const navItems = [
  {
    label: 'TEAMS', path: '/teams',
    children: [
      { label: 'JO Teams (Level 2–10)', path: '/teams/jo-teams' },
      { label: 'XCel Team',             path: '/teams/xcel' },
      { label: 'JO Elite',              path: '/teams/elite' },
      { label: 'Power Tumbling',        path: '/teams/power-tumbling' },
      { label: 'Boys Pre-TEAM',         path: '/teams/boys-preteam' },
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
      { label: 'All Classes',             path: '/classes' },
      { label: 'Sports Camps',            path: '/classes/camps' },
      { label: 'Afterschool / Aftercare', path: '/classes/aftercare' },
    ],
  },
]

const mobileLinks = [
  { label: 'Home',                      path: '/' },
  { label: 'Classes',                   path: '/classes' },
  { label: 'Sports Camps',              path: '/classes/camps' },
  { label: 'Aftercare',                 path: '/classes/aftercare' },
  { label: 'Teams — JO L2–10',          path: '/teams/jo-teams' },
  { label: 'Teams — XCel',              path: '/teams/xcel' },
  { label: 'Teams — JO Elite',          path: '/teams/elite' },
  { label: 'Teams — Power Tumbling',    path: '/teams/power-tumbling' },
  { label: 'The Gym — About',           path: '/the-gym/about' },
  { label: 'The Gym — Facility',        path: '/the-gym/facility' },
  { label: 'Birthday Parties',          path: '/birthday-parties' },
  { label: 'Open Gym',                  path: '/open-gym' },
  { label: 'Gallery',                   path: '/gallery' },
  { label: 'Blog',                      path: '/blog' },
  { label: 'Contact',                   path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  const isActive = (path: string) =>
    pathname === path || (path !== '/' && pathname.startsWith(path + '/'))

  return (
    <nav style={{
      background: '#fff',
      borderBottom: '1px solid #e8e8e8',
      position: 'sticky',
      top: 0,
      zIndex: 999,
      boxShadow: '0 1px 12px rgba(0,0,0,0.07)',
    }}>
      {/* Top bar: phone */}
      <div style={{
        background: C.navy,
        padding: '6px 24px',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: 24,
      }}>
        <a href="tel:9543849191" style={{
          color: 'rgba(255,255,255,0.9)',
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: 13,
          letterSpacing: 0.5,
        }}>
          📞 954-384-9191
        </a>
        <select style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'rgba(255,255,255,0.85)',
          fontFamily: "'Barlow', sans-serif",
          fontSize: 12,
          cursor: 'pointer',
          padding: '1px 4px',
        }}>
          <option style={{ color: '#000' }}>English</option>
          <option style={{ color: '#000' }}>Español</option>
        </select>
      </div>

      {/* Main nav row */}
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 68,
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 48,
            height: 48,
            background: C.navy,
            borderRadius: '50%',
            border: `2.5px solid ${C.red}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{
              color: '#fff',
              fontSize: 13,
              fontWeight: 900,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: 0.5,
            }}>TAG</span>
          </div>
          <div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 21,
              color: C.navy,
              lineHeight: 1.05,
              letterSpacing: 0.5,
            }}>
              TAG <span style={{ color: C.red }}>USA</span>
            </div>
            <div style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 500,
              fontSize: 9.5,
              color: '#888',
              letterSpacing: 2,
              textTransform: 'uppercase',
            }}>
              Gymnastics &amp; Trampoline
            </div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <Link to="/" style={linkStyle(isActive('/') && pathname === '/')}>Home</Link>

          {navItems.map(item => (
            <div key={item.label} className="dropdown">
              <span style={linkStyle(isActive(item.path))}>
                {item.label} <span style={{ fontSize: 9, opacity: 0.6 }}>▾</span>
              </span>
              <div className="dropdown-menu">
                {item.children.map(c => (
                  <Link key={c.path} to={c.path}>{c.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <Link to="/gallery" style={linkStyle(isActive('/gallery'))}>Gallery</Link>
          <Link to="/blog"    style={linkStyle(isActive('/blog'))}>Blog</Link>
          <Link to="/contact" style={linkStyle(isActive('/contact'))}>Contact</Link>

          <a href="tel:9543849191" className="btn-red" style={{ fontSize: 12, padding: '9px 20px' }}>
            Register Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: 26,
            color: C.navy,
            alignItems: 'center',
          }}
        >{open ? '✕' : '☰'}</button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#fff',
          borderTop: `2px solid ${C.red}`,
          padding: '8px 24px 20px',
        }}>
          {mobileLinks.map(item => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '11px 0',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: isActive(item.path) ? 700 : 500,
                fontSize: 14,
                borderBottom: '1px solid #f0f0f0',
                color: isActive(item.path) ? C.red : '#333',
                letterSpacing: 0.2,
              }}
            >{item.label}</Link>
          ))}
          <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center', marginTop: 16 }}>
            Call to Register: 954-384-9191
          </a>
        </div>
      )}
    </nav>
  )
}

function linkStyle(active: boolean): React.CSSProperties {
  return {
    fontFamily: "'Barlow', sans-serif",
    fontWeight: 600,
    fontSize: 13,
    letterSpacing: 0.8,
    color: active ? C.navy : '#444',
    padding: '4px 0',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    borderBottom: active ? `2px solid ${C.navy}` : '2px solid transparent',
    transition: 'color 0.2s, border-color 0.2s',
    textTransform: 'uppercase',
  }
}
