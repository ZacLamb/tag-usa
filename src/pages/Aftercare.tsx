import PageHero from '../components/PageHero'
import { C } from '../constants'

const schedule = [
  { time: '2:00pm',       label: 'Pick-up from school' },
  { time: '2:30–3:20pm', label: 'Team Coached Class on beams, trampoline, bars, tumbling' },
  { time: '3:30–4:15pm', label: 'Snack – Homework – Crafts' },
  { time: '4:30–6:00pm', label: 'Open Gym: Trampolines, Bars, Beams' },
]

export default function Aftercare() {
  return (
    <div>
      <PageHero title="AFTERSCHOOL SHUTTLE PICKUP" subtitle="After-School Program with Van Pick-Up or Parent Drop-Off" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div className="two-col" style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.8rem', color: C.navy, marginBottom: 14 }}>
              After-School Shuttle Pick Up
            </h2>
            <div style={{ width: 60, height: 3, background: C.cyan, marginBottom: 20 }} />
            <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.8, marginBottom: 14 }}>
              TAG USA Gymnastics offers after school programs with Van Pick-up or Parent Drop-off option. Make your life easier by using our van pickup from school with an afternoon full of sports activities.
            </p>
            <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.8, marginBottom: 24 }}>
              Your athlete will work with a 'team coach' Aftercare Class and train on beams, trampoline, bars, and tumbling. After completing school work, athletes enjoy open play on trampolines, rope swing, foam pit, and other indoor sports.
            </p>

            <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.25rem', color: C.navy, marginBottom: 14 }}>
              Daily Schedule:
            </h3>
            {schedule.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '12px 0', borderBottom: `1px solid ${C.lightGray}`, alignItems: 'flex-start' }}>
                <div style={{
                  background: C.navy, color: '#fff', padding: '4px 10px',
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
                  fontSize: 13, whiteSpace: 'nowrap', flexShrink: 0,
                }}>{s.time}</div>
                <div style={{ fontSize: 14, color: C.textDark }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Right */}
          <div style={{ flexShrink: 0, width: 300 }}>
            <div style={{ background: C.navy, color: '#fff', padding: 28, marginBottom: 16 }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.35rem', marginBottom: 16 }}>
                AFTERCARE PRICING
              </h3>
              <div style={{ fontSize: 15, lineHeight: 2.2 }}>
                <div style={{ borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 8, marginBottom: 8 }}>
                  <strong>Van Pick-up:</strong> $495/month
                </div>
                <div><strong>Parent Drop Off:</strong> $370/month</div>
              </div>
              <div style={{
                background: C.red, color: '#fff', padding: '10px 12px', marginTop: 20,
                fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '0.9rem',
              }}>
                EARLY REGISTRATION DISCOUNT<br />for the 2025–26 school year
              </div>
            </div>

            <div style={{ background: C.offWhite, padding: 20, marginBottom: 16 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1.05rem', marginBottom: 8 }}>
                Program Hours:
              </div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>2:30pm – 6:00pm</div>
              <p style={{ fontSize: 13, color: C.textGray, marginTop: 6 }}>Monday – Friday during the school year.</p>
            </div>

            <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center', padding: 14 }}>
              Register by phone 954-384-9191
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
