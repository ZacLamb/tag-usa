import { useState } from 'react'
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

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer>
      {/* Review bar */}
      <div style={{
        background: C.darkBg, padding: '32px 24px',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'center', gap: 48,
      }}>
        <div style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontWeight: 900, fontSize: '2.1rem',
          color: '#fff', textAlign: 'center',
        }}>
          LEAVE <span style={{ color: C.red }}>US</span> A<br />REVIEW!
        </div>
        <div style={{ fontSize: 34, letterSpacing: 2 }}>⭐⭐⭐⭐⭐</div>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 12, color: '#aaa', letterSpacing: 2,
            marginBottom: 12, textTransform: 'uppercase',
          }}>We Appreciate Your Feedback</div>
          <a
            href="https://search.google.com/local/writereview"
            target="_blank" rel="noreferrer"
            className="btn-cyan"
          >Leave Review</a>
        </div>
      </div>

      {/* Footer body */}
      <div className="footer-inner" style={{
        background: C.darkerBg, padding: '48px 24px',
        display: 'flex', flexWrap: 'wrap', gap: 48, justifyContent: 'center',
      }}>

        {/* Logo + newsletter */}
        <div style={{ minWidth: 220, maxWidth: 270 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
            <div style={{
              width: 52, height: 52, background: C.navy, borderRadius: '50%',
              border: `3px solid ${C.red}`, display: 'flex',
              alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ color: '#fff', fontSize: 14, fontWeight: 900, fontFamily: "'Barlow Condensed',sans-serif" }}>TAG</span>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: 20, color: '#fff' }}>
                TAG <span style={{ color: C.red }}>USA</span>
              </div>
              <div style={{ fontSize: 9, color: '#888', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: "'Barlow',sans-serif" }}>
                Gymnastics &amp; Trampoline
              </div>
            </div>
          </div>

          <div style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
            fontSize: 15, color: '#ccc', marginBottom: 10,
          }}>Subscribe To Our Newsletter</div>
          <input
            type="email" placeholder="email:"
            value={email} onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%', padding: '10px 12px',
              border: '1px solid #555', background: '#fff',
              fontFamily: "'Barlow',sans-serif", fontSize: 14,
              marginBottom: 8, display: 'block',
            }}
          />
          <button
            className="btn-cyan"
            style={{ width: '100%', padding: 10 }}
            onClick={() => { alert('Thank you for subscribing!'); setEmail('') }}
          >SUBSCRIBE</button>
        </div>

        {/* Phone */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#ccc' }}>
            Call us:{' '}
            <a href="tel:9543849191" style={{ color: C.cyan }}>954-384-9191</a>
          </div>
        </div>

        {/* Hours */}
        <div style={{ minWidth: 260 }}>
          <div style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
            fontSize: '1.05rem', color: '#fff', letterSpacing: 2,
            marginBottom: 16, textTransform: 'uppercase',
          }}>Hours of Operation</div>
          {hours.map(h => (
            <div key={h.day} style={{
              display: 'flex', justifyContent: 'space-between',
              gap: 24, padding: '6px 0', borderBottom: '1px solid #2a2a3a',
            }}>
              <span style={{ color: '#aaa', fontSize: 14 }}>{h.day}</span>
              <span style={{ color: '#ddd', fontSize: 14, fontWeight: 600 }}>{h.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div style={{
        background: C.darkerBg, borderTop: '1px solid #2a2a3a',
        textAlign: 'center', padding: 16,
        color: '#444', fontFamily: "'Barlow',sans-serif", fontSize: 13,
      }}>
        © {new Date().getFullYear()} TAG USA Gymnastics &amp; Trampoline. All rights reserved. | Weston, FL | 954-384-9191
      </div>
    </footer>
  )
}
