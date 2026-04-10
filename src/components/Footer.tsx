import { useState } from 'react'
import { Link } from 'react-router-dom'
import { C } from '../constants'

const hours = [
  { day: 'Monday',    time: '10:00am – 8:30pm' },
  { day: 'Tuesday',   time: '10:00am – 8:30pm' },
  { day: 'Wednesday', time: '9:00am – 8:30pm'  },
  { day: 'Thursday',  time: '9:00am – 8:30pm'  },
  { day: 'Friday',    time: '10:00am – 8:30pm' },
  { day: 'Saturday',  time: '9:00am – 10:00pm' },
  { day: 'Sunday',    time: '10:00am – 7:30pm' },
]

const quickLinks = [
  { label: 'Classes',          path: '/classes' },
  { label: 'Sports Camps',     path: '/classes/camps' },
  { label: 'Aftercare',        path: '/classes/aftercare' },
  { label: 'Birthday Parties', path: '/birthday-parties' },
  { label: 'Competitive Teams',path: '/teams/jo-teams' },
  { label: 'Open Gym',         path: '/open-gym' },
  { label: 'Gallery',          path: '/gallery' },
  { label: 'Contact Us',       path: '/contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      {/* Review bar */}
      <div style={{
        background: '#0f1525',
        padding: '36px 24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 48,
        borderTop: `4px solid ${C.red}`,
      }}>
        <div>
          <div style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: '1.9rem',
            color: '#fff',
            letterSpacing: 1,
          }}>
            LEAVE <span style={{ color: C.red }}>US</span> A REVIEW
          </div>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, letterSpacing: 1, marginTop: 2 }}>
            WE APPRECIATE YOUR FEEDBACK
          </div>
        </div>
        <div style={{ color: '#f4c430', fontSize: 28, letterSpacing: 3 }}>★★★★★</div>
        <a
          href="https://search.google.com/local/writereview"
          target="_blank"
          rel="noreferrer"
          className="btn-outline-white"
        >Leave a Google Review</a>
      </div>

      {/* Footer body */}
      <div style={{ background: C.darkerBg }}>
        <div className="footer-inner" style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '56px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 48,
          justifyContent: 'space-between',
        }}>
          {/* Brand column */}
          <div style={{ minWidth: 220, maxWidth: 260 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 46, height: 46, background: C.navy, borderRadius: '50%',
                border: `2px solid ${C.red}`, display: 'flex',
                alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <span style={{ color: '#fff', fontSize: 12, fontWeight: 900, fontFamily: "'Barlow Condensed', sans-serif" }}>TAG</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: 19, color: '#fff' }}>
                  TAG <span style={{ color: C.red }}>USA</span>
                </div>
                <div style={{ fontSize: 8.5, color: '#666', letterSpacing: 1.8, textTransform: 'uppercase', fontFamily: "'Barlow', sans-serif" }}>
                  Gymnastics &amp; Trampoline
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, color: '#777', lineHeight: 1.7, marginBottom: 20 }}>
              South Florida's premier destination for youth gymnastics, trampoline, and cheer. Serving Weston, FL and surrounding communities.
            </p>

            <a href="tel:9543849191" style={{
              display: 'block',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 22,
              color: C.red,
              marginBottom: 6,
              letterSpacing: 0.5,
            }}>954-384-9191</a>
            <div style={{ fontSize: 12, color: '#666' }}>Weston, FL — South Florida</div>

            <div style={{ marginTop: 24 }}>
              <div style={{ fontSize: 11, color: '#555', letterSpacing: 1.5, marginBottom: 10, textTransform: 'uppercase' }}>Newsletter</div>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  width: '100%', padding: '10px 12px',
                  border: '1px solid #2a2a3a', background: '#1a1e2e',
                  color: '#fff', fontFamily: "'Barlow', sans-serif",
                  fontSize: 13, marginBottom: 8, display: 'block',
                  outline: 'none',
                }}
              />
              <button
                className="btn-cyan"
                style={{ width: '100%', padding: '10px' }}
                onClick={() => { if (email) { alert('Thank you for subscribing!'); setEmail('') } }}
              >Subscribe</button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: '0.85rem',
              color: '#fff', letterSpacing: 2.5,
              marginBottom: 18, textTransform: 'uppercase',
            }}>Quick Links</div>
            {quickLinks.map(link => (
              <Link key={link.path} to={link.path} style={{
                display: 'block', padding: '7px 0',
                borderBottom: '1px solid #1e2235',
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500, fontSize: 13,
                color: '#888',
                transition: 'color 0.15s, padding-left 0.15s',
              }}
                onMouseEnter={e => { (e.target as HTMLElement).style.color = '#fff'; (e.target as HTMLElement).style.paddingLeft = '8px' }}
                onMouseLeave={e => { (e.target as HTMLElement).style.color = '#888'; (e.target as HTMLElement).style.paddingLeft = '0' }}
              >{link.label}</Link>
            ))}
          </div>

          {/* Hours */}
          <div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: '0.85rem',
              color: '#fff', letterSpacing: 2.5,
              marginBottom: 18, textTransform: 'uppercase',
            }}>Hours of Operation</div>
            {hours.map(h => (
              <div key={h.day} style={{
                display: 'flex', justifyContent: 'space-between',
                gap: 32, padding: '7px 0',
                borderBottom: '1px solid #1e2235',
              }}>
                <span style={{ color: '#777', fontSize: 13 }}>{h.day}</span>
                <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        background: '#0a0c14',
        borderTop: '1px solid #1a1e2e',
        textAlign: 'center',
        padding: '16px 24px',
        color: '#444',
        fontFamily: "'Barlow', sans-serif",
        fontSize: 12,
        letterSpacing: 0.3,
      }}>
        © {new Date().getFullYear()} TAG USA Gymnastics &amp; Trampoline. All rights reserved. | Weston, FL
      </div>
    </footer>
  )
}
