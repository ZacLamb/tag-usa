import PageHero from '../components/PageHero'
import { C } from '../constants'

const HERO = 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=1600&q=85'

const schedule = [
  { time: '2:00pm',       label: 'Van pickup from school' },
  { time: '2:30–3:20pm', label: 'Team coached class — beams, trampoline, bars, tumbling' },
  { time: '3:30–4:15pm', label: 'Snack · Homework · Crafts' },
  { time: '4:30–6:00pm', label: 'Open gym — trampolines, bars, beams, foam pit' },
]

export default function Aftercare() {
  return (
    <div>
      <PageHero
        title="Afterschool Shuttle Pickup"
        subtitle="Van pickup from school, expert coaching, homework time, and open gym — 5 days a week."
        image={HERO}
      />

      {/* Pricing bar */}
      <div style={{ background: C.navy, padding: '28px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'center' }}>
          {[
            { label: 'Van Pick-up', val: '$495 / month' },
            { label: 'Parent Drop-Off', val: '$370 / month' },
            { label: 'Program Hours', val: '2:30pm – 6:00pm' },
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.6rem', color: '#fff' }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div className="two-col" style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', color: C.navy,
              marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5,
            }}>After-School Shuttle Pick Up</h2>

            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 14 }}>
              TAG USA offers a structured, active afterschool program with van pickup from local schools. While you're at work, your athlete gets coaching, homework time, and open gym in a safe and supervised environment.
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 32 }}>
              Athletes train on beams, trampoline, bars, and tumbling with a dedicated team coach — then complete homework and crafts before open gym from 4:30 to 6pm.
            </p>

            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800,
              fontSize: '1.1rem', color: C.navy, letterSpacing: 1.5,
              textTransform: 'uppercase', marginBottom: 18,
            }}>Daily Schedule</h3>

            {schedule.map((s, i) => (
              <div key={i} style={{
                display: 'flex', gap: 16, padding: '14px 0',
                borderBottom: `1px solid ${i === schedule.length - 1 ? 'transparent' : '#eee'}`,
                alignItems: 'flex-start',
              }}>
                <div style={{
                  background: C.navy, color: '#fff',
                  padding: '5px 12px',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 12,
                  whiteSpace: 'nowrap', flexShrink: 0, letterSpacing: 0.5,
                }}>{s.time}</div>
                <div style={{ fontSize: 14, color: '#444', paddingTop: 5 }}>{s.label}</div>
              </div>
            ))}

            <div style={{ marginTop: 32 }}>
              <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block' }}>
                Register by Phone: 954-384-9191
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{ flexShrink: 0, width: 320 }}>
            <div className="photo-card" style={{ height: 280, marginBottom: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=600&q=80"
                alt="Aftercare program"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ background: C.red, padding: 24, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.1rem', color: '#fff', marginBottom: 6, letterSpacing: 0.5 }}>
                EARLY REGISTRATION DISCOUNT
              </div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)' }}>
                2025–26 school year — limited spots available. Register now to secure your athlete's place.
              </div>
            </div>

            <div style={{ background: '#f7f8fc', border: '1px solid #eaeaea', padding: 24 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', color: C.navy, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
                What's Included
              </div>
              {[
                'Van pickup from local schools',
                'Team coached gymnastics class',
                'Snack time provided',
                'Supervised homework period',
                'Arts & crafts activities',
                'Open gym 4:30–6:00pm',
                'Trampolines, bars, beams, foam pit',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, fontSize: 13, color: '#555', padding: '6px 0', borderBottom: '1px solid #eee' }}>
                  <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
