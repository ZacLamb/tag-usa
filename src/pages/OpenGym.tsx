import PageHero from '../components/PageHero'
import { C } from '../constants'

export default function OpenGym() {
  return (
    <div>
      <PageHero title="OPEN GYM" subtitle="Every Saturday Night — Open to Everyone!" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 80, marginBottom: 16 }}>🌙</div>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.5rem', color: C.navy, marginBottom: 12 }}>
            Open Gym Every Saturday Night
          </h2>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.red, marginBottom: 24 }}>
            6:30pm – 10:00pm
          </div>
          <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.8, maxWidth: 560, margin: '0 auto 36px' }}>
            Come enjoy free time in our amazing facility! Trampolines, gymnastics equipment, foam pits, and more are all available during Open Gym. Perfect for athletes looking for extra practice or just looking for a fun Saturday night activity.
          </p>
          <a href="tel:9543849191" className="btn-navy" style={{ display: 'inline-block', padding: '16px 40px', fontSize: 18 }}>
            Call for Info: 954-384-9191
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 20 }}>
          {[
            { icon: '🤸', label: 'Trampolines' },
            { icon: '🏋️', label: 'Gymnastics Equipment' },
            { icon: '🕳️', label: 'Foam Pits' },
            { icon: '🪢', label: 'Rope Swings' },
            { icon: '🛝', label: 'Inflatables' },
            { icon: '⚡', label: 'Tumble Tracks' },
          ].map((item, i) => (
            <div key={i} style={{
              background: C.offWhite, padding: 24, textAlign: 'center',
              borderTop: `4px solid ${i % 2 === 0 ? C.red : C.navy}`,
            }}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{item.icon}</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: C.navy, fontSize: '1rem' }}>{item.label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: C.navy, color: '#fff', padding: 32, textAlign: 'center', marginTop: 40 }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.5rem', marginBottom: 8 }}>
            Every Saturday Night
          </div>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: C.red }}>
            6:30pm – 10:00pm
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: 10, fontSize: 14 }}>
            Call 954-384-9191 for pricing and details
          </p>
        </div>
      </div>
    </div>
  )
}
