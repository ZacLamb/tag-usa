import PageHero from '../components/PageHero'
import { C } from '../constants'

const HERO = 'https://images.unsplash.com/photo-1594882645126-14ac19a0f2c4?auto=format&fit=crop&w=1600&q=85'

const camps = [
  {
    title: 'Summer Sports Camp',
    sub: 'Aug 4–8 + themed weeks all summer',
    img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80',
    desc: 'Girls Gymnastics and Boys Sports Camps with full-day activities including gymnastics, trampolines, tumbling, arts & crafts, and more. Weekly themed experiences your kids will talk about all year.',
    pricing: [
      { label: 'Members',      val: '$65/day  ·  $310/week' },
      { label: 'Non-Members',  val: '$70/day  ·  $325/week' },
      { label: 'Late Care',    val: 'Available until 6:00pm' },
    ],
  },
  {
    title: 'School Days Off & Holiday Camps',
    sub: 'Thanksgiving · Winter Break · Spring Break',
    img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=700&q=80',
    desc: 'When school is out, TAG USA keeps your athlete active and engaged. Full-day program packed with gymnastics, dodgeball, inflatables, basketball, color war, soccer, ninja courses, and more.',
    pricing: [
      { label: 'Members',     val: '$65/day  ·  $310/week' },
      { label: 'Non-Members', val: '$70/day  ·  $325/week' },
      { label: 'Hours',       val: '8:30am – 3:45pm' },
    ],
  },
]

const activities = [
  'Gymnastics & Bars', 'Trampolines', 'Power Tumbling', 'Dodgeball',
  'Inflatables', 'Basketball', 'Color War', 'Soccer',
  'Ninja Course', 'Tumble Tracks', 'Arts & Crafts', 'Themed Days',
]

export default function Camps() {
  return (
    <div>
      <PageHero title="Sports Camps" subtitle="Full-day camps for Summer, school breaks, and holidays." image={HERO} />

      {/* Intro strip */}
      <div style={{ background: C.navy, padding: '32px 24px', textAlign: 'center' }}>
        <p style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700, fontSize: '1.35rem',
          color: 'rgba(255,255,255,0.85)', maxWidth: 700, margin: '0 auto',
          letterSpacing: 0.5,
        }}>
          Hours: <strong style={{ color: '#fff' }}>8:30am – 3:45pm</strong> &nbsp;·&nbsp;
          Late Care until <strong style={{ color: '#fff' }}>6:00pm</strong> &nbsp;·&nbsp;
          Register by calling <a href="tel:9543849191" style={{ color: C.red, fontWeight: 800 }}>954-384-9191</a>
        </p>
      </div>

      {/* Camp cards */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          {camps.map((camp, i) => (
            <div key={i} className="two-col" style={{
              display: 'flex',
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              gap: 0,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              overflow: 'hidden',
            }}>
              {/* Photo */}
              <div className="photo-card" style={{ flex: '0 0 45%', minHeight: 320 }}>
                <img src={camp.img} alt={camp.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              {/* Content */}
              <div style={{
                flex: 1,
                padding: '40px 40px',
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600, fontSize: '0.75rem',
                  color: C.red, letterSpacing: 2.5,
                  textTransform: 'uppercase', marginBottom: 10,
                }}>{camp.sub}</div>
                <div style={{ width: 36, height: 2, background: C.red, marginBottom: 14 }} />
                <h2 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900, fontSize: '1.9rem',
                  color: C.navy, marginBottom: 16, letterSpacing: 0.5,
                }}>{camp.title}</h2>
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginBottom: 24 }}>{camp.desc}</p>
                <div style={{ borderTop: '1px solid #eee', paddingTop: 20, marginBottom: 24 }}>
                  {camp.pricing.map(p => (
                    <div key={p.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f4f4f4', fontSize: 14 }}>
                      <span style={{ color: '#888', fontWeight: 600 }}>{p.label}</span>
                      <span style={{ color: C.navy, fontWeight: 700 }}>{p.val}</span>
                    </div>
                  ))}
                </div>
                <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block', alignSelf: 'flex-start' }}>
                  Register by Phone
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Activities grid */}
        <div style={{ marginTop: 72 }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <div style={{ width: 36, height: 2, background: C.red, margin: '0 auto 14px' }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: '2rem',
              color: C.navy, letterSpacing: 1, textTransform: 'uppercase',
            }}>Camp Activities</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 2 }}>
            {activities.map((act, i) => (
              <div key={i} style={{
                background: i % 4 === 0 ? C.navy : i % 4 === 1 ? '#f7f8fc' : i % 4 === 2 ? C.red : '#fff',
                color: i % 4 === 1 ? C.navy : i % 4 === 3 ? C.navy : '#fff',
                padding: '28px 20px',
                textAlign: 'center',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: '1rem',
                letterSpacing: 1,
                border: (i % 4 === 1 || i % 4 === 3) ? '1px solid #e8e8e8' : 'none',
              }}>{act}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
