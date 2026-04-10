import { Link } from 'react-router-dom'
import { C } from '../constants'

// ── Unsplash photo URLs (gymnastics / athletics stock) ────────────────────────
const PHOTOS = {
  hero:       'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=85',
  strip1:     'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=600&q=80',
  strip2:     'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=600&q=80',
  strip3:     'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=600&q=80',
  strip4:     'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
  strip5:     'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80',
  classes:    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80',
  camps:      'https://images.unsplash.com/photo-1594882645126-14ac19a0f2c4?auto=format&fit=crop&w=700&q=80',
  birthday:   'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=700&q=80',
  aftercare:  'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=700&q=80',
  rec:        'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=700&q=80',
  shuttle:    'https://images.unsplash.com/photo-1519340333755-56e9c1d04579?auto=format&fit=crop&w=900&q=80',
}

const stripPhotos = [
  { src: PHOTOS.strip1, label: 'Classes & Training' },
  { src: PHOTOS.strip2, label: 'Competitive Teams' },
  { src: PHOTOS.strip3, label: 'Gymnastics' },
  { src: PHOTOS.strip4, label: 'Fitness & Fun' },
  { src: PHOTOS.strip5, label: 'Aftercare' },
]

const services = [
  {
    title: 'Classes',
    img: PHOTOS.classes,
    to: '/classes',
    desc: 'Recreational classes for all ages — from FREE baby classes to advanced competitive preparation. Weekday mornings, afternoons, and Saturdays.',
    tag: 'All Ages',
  },
  {
    title: 'Sports Camps',
    img: PHOTOS.camps,
    to: '/classes/camps',
    desc: 'Full-day camps for Summer, school days off, Thanksgiving, Winter Break, and Spring Break. Themed weeks your kids will love.',
    tag: 'Ages 4–15',
  },
  {
    title: 'Birthday Parties',
    img: PHOTOS.birthday,
    to: '/birthday-parties',
    desc: 'The entire gym is yours — bars, beams, trampolines, pits, and inflatables. Two private party rooms and two dedicated coaches.',
    tag: 'Sat & Sun',
  },
  {
    title: 'Afterschool Shuttle',
    img: PHOTOS.aftercare,
    to: '/classes/aftercare',
    desc: 'Van pickup from school, team coaching, homework time, and open gym. Van Pick-up $495/mo · Parent Drop-off $370/mo.',
    tag: 'School Year',
  },
]

const stats = [
  { number: '85+',    label: 'Classes Weekly' },
  { number: '3',      label: 'Competitive Team Levels' },
  { number: '20+',    label: 'Years of Excellence' },
  { number: '1000s',  label: 'Athletes Trained' },
]

const recClasses = [
  'FREE Baby Tumblers & Mommy (6 weeks to walking)',
  'Parent & Me (age 1)',
  'Tiny Tots (age 1.5–2 yrs)',
  'Preschool (3–4 yr olds)',
  'Girls Beginner Intro (age 4–5)',
  'Girls Beginner 2 & 3 (ages 5–9)',
  'Boys Beginner Gymnastics (ages 4–5)',
  'Coed Trampoline & Tumbling (ages 6–15)',
  'Girls Intermediate or Advanced',
  'Girls Preteam and Junior Team',
  'Power Tumbling – Intermediate & Advanced (ages 8–16)',
  'Beginner Cheerleading & Stunts',
]

export default function Home() {
  return (
    <div>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section style={{
        background: `linear-gradient(105deg, rgba(10,16,40,0.93) 0%, rgba(10,16,40,0.78) 55%, rgba(10,16,40,0.55) 100%), url(${PHOTOS.hero}) center 30%/cover no-repeat`,
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '80px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 48,
          alignItems: 'center',
          width: '100%',
        }}>

          {/* Left copy */}
          <div style={{ flex: '1 1 480px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: C.red,
              padding: '5px 14px 5px 10px',
              marginBottom: 20,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
              <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 11,
                color: '#fff', letterSpacing: 2.5,
                textTransform: 'uppercase',
              }}>New Classes Now Enrolling</span>
            </div>

            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 7vw, 5rem)',
              color: '#fff',
              lineHeight: 0.95,
              marginBottom: 20,
              letterSpacing: 1,
            }}>
              TAG <span style={{ color: C.red }}>USA</span><br />
              GYMNASTICS
            </h1>

            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              marginBottom: 12,
              maxWidth: 500,
            }}>
              South Florida's premier destination for youth gymnastics, trampoline, and cheer. Recreational classes for all ages — from 6 weeks to competitive elite.
            </p>

            <div style={{ marginBottom: 32 }}>
              {[
                { label: 'Classes', val: 'Baby Tumblers through Advanced — all levels welcome' },
                { label: 'Competitive Teams', val: 'JO Level 2–10, JO Elite, XCel, Power Tumbling' },
                { label: 'Open Gym', val: 'Every Saturday Night 6:30–10:00pm' },
              ].map(row => (
                <div key={row.label} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'baseline' }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.red, flexShrink: 0, marginTop: 6 }} />
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>
                    <strong style={{ color: '#fff', fontWeight: 700 }}>{row.label}:</strong>{' '}{row.val}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="tel:9543849191" className="btn-red" style={{ fontSize: 13, padding: '14px 32px' }}>
                Call to Register
              </a>
              <Link to="/classes" className="btn-outline-white" style={{ fontSize: 13, padding: '14px 32px' }}>
                View All Classes
              </Link>
            </div>
          </div>

          {/* CTA card */}
          <div className="hero-cta-card" style={{
            flex: '0 0 300px',
            background: '#fff',
            padding: '36px 28px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
            borderTop: `4px solid ${C.red}`,
          }}>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600, fontSize: '0.8rem',
              color: C.red, letterSpacing: 2.5,
              textTransform: 'uppercase', marginBottom: 10,
            }}>Register Today</div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: '2.6rem',
              color: C.navy, lineHeight: 1.05, marginBottom: 6,
            }}>IT'S QUICK<br />&amp; EASY</div>
            <a href="tel:9543849191" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: '1.9rem',
              color: C.red, display: 'block', marginBottom: 4,
              letterSpacing: 0.5,
            }}>954-384-9191</a>
            <div style={{ fontSize: 12, color: '#999', marginBottom: 24, letterSpacing: 0.5 }}>
              Call us — new classes starting now
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: 20, marginBottom: 20 }}>
              {[
                { label: 'Next Sports Camp', val: 'Sept 23 · Oct 2 · Oct 13 · Oct 20' },
                { label: 'Birthday Parties', val: 'Sat & Sun — call to book' },
                { label: 'Open Gym',         val: 'Sat nights 6:30–10pm' },
                { label: 'Aftercare',        val: 'Van or Drop-off options' },
              ].map(item => (
                <div key={item.label} style={{ marginBottom: 10, fontSize: 13 }}>
                  <div style={{ fontWeight: 700, color: C.navy, marginBottom: 1 }}>{item.label}</div>
                  <div style={{ color: '#777' }}>{item.val}</div>
                </div>
              ))}
            </div>

            <a href="tel:9543849191" className="btn-navy" style={{ display: 'block', padding: 14, textAlign: 'center' }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────────────────── */}
      <div style={{
        background: C.red,
        padding: '28px 24px',
      }}>
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 24,
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: '2.4rem',
                color: '#fff', lineHeight: 1,
              }}>{s.number}</div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 500, fontSize: 12,
                color: 'rgba(255,255,255,0.75)',
                letterSpacing: 1, textTransform: 'uppercase', marginTop: 4,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PHOTO STRIP ──────────────────────────────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        height: 220,
        overflow: 'hidden',
      }}>
        {stripPhotos.map((p, i) => (
          <div key={i} className="photo-card" style={{ position: 'relative' }}>
            <img src={p.src} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
            }} />
            <div style={{
              position: 'absolute', bottom: 12, left: 0, right: 0,
              textAlign: 'center',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 12,
              color: '#fff', letterSpacing: 1.5,
              textTransform: 'uppercase',
            }}>{p.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES GRID ────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ width: 40, height: 2, background: C.red, margin: '0 auto 16px' }} />
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: C.navy, letterSpacing: 1, textTransform: 'uppercase',
          }}>Everything We Offer</h2>
          <p style={{ color: '#777', marginTop: 10, fontSize: 15, maxWidth: 500, margin: '10px auto 0' }}>
            Programs for every age, goal, and schedule
          </p>
        </div>

        <div className="service-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 2,
        }}>
          {services.map((s, i) => (
            <Link key={i} to={s.to} className="photo-card" style={{
              display: 'block',
              position: 'relative',
              height: 380,
            }}>
              <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(10,16,40,0.95) 0%, rgba(10,16,40,0.3) 55%, transparent 100%)',
              }} />
              {/* Tag pill */}
              <div style={{
                position: 'absolute', top: 16, left: 16,
                background: C.red,
                padding: '3px 10px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 11,
                color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase',
              }}>{s.tag}</div>
              {/* Bottom content */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 24px 28px',
              }}>
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900, fontSize: '1.6rem',
                  color: '#fff', marginBottom: 8, letterSpacing: 0.5,
                }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', lineHeight: 1.6, marginBottom: 14 }}>
                  {s.desc}
                </p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 12,
                  color: C.red, letterSpacing: 1.5, textTransform: 'uppercase',
                }}>
                  Learn More <span style={{ fontSize: 14 }}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── RECREATIONAL CLASSES ─────────────────────────────────────── */}
      <section style={{ background: '#f7f8fc', padding: '80px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 64, alignItems: 'center' }}>

          {/* Photo side */}
          <div className="photo-card" style={{ flex: '0 0 420px', height: 520, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}>
            <img src={PHOTOS.rec} alt="Gymnastics classes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          {/* Content side */}
          <div style={{ flex: 1 }}>
            <div style={{ width: 40, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              color: C.navy, marginBottom: 8, letterSpacing: 0.5,
              textTransform: 'uppercase', lineHeight: 1.05,
            }}>Recreational Classes &amp;<br />Competitive Teams</h2>

            <p style={{ fontSize: 14, color: '#666', lineHeight: 1.75, marginBottom: 24, maxWidth: 480 }}>
              TAG USA has a program for every age and experience level. Morning, afternoon, and Saturday classes available year-round.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6px 24px',
              marginBottom: 28,
            }}>
              {recClasses.map((cls, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 8, alignItems: 'baseline',
                  padding: '6px 0',
                  borderBottom: '1px solid #ebebeb',
                  fontSize: 13, color: '#444',
                }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: C.red, flexShrink: 0, marginTop: 5 }} />
                  {cls}
                </div>
              ))}
            </div>

            <p style={{ fontStyle: 'italic', fontSize: 14, color: '#888', marginBottom: 24 }}>
              Register by phone at{' '}
              <a href="tel:9543849191" style={{ color: C.navy, fontWeight: 700, fontStyle: 'normal' }}>954-384-9191</a>
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/classes" className="btn-navy">View All Classes</Link>
              <Link to="/teams/jo-teams" className="btn-red">Competitive Teams</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAMP & AFTERCARE PRICING ─────────────────────────────────── */}
      <section style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ width: 40, height: 2, background: C.red, margin: '0 auto 16px' }} />
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
            color: C.navy, letterSpacing: 1, textTransform: 'uppercase',
          }}>Camps &amp; Aftercare Programs</h2>
          <p style={{ color: '#777', marginTop: 10, fontSize: 15 }}>
            Keep your athlete active — during the school year and all breaks
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 2 }}>
          {[
            {
              title: 'Sports Camps',
              sub: 'School Days Off & Summer',
              lines: [
                'Hours: 8:30am – 3:45pm',
                'Late care available until 6:00pm',
                'Members: $65/day or $310/week',
                'Non-members: $70/day or $325/week',
              ],
              bg: C.navy,
              to: '/classes/camps',
            },
            {
              title: 'Aftercare Program',
              sub: 'Mon – Fri · School Year',
              lines: [
                'Hours: 2:30pm – 6:00pm',
                'Van Pick-up: $495/month',
                'Parent Drop-Off: $370/month',
                'Early registration discount available',
              ],
              bg: '#1a1a2e',
              to: '/classes/aftercare',
            },
            {
              title: 'Open Gym',
              sub: 'Every Saturday Night',
              lines: [
                'Open to all athletes & families',
                'Hours: 6:30pm – 10:00pm',
                'Trampolines, foam pits & more',
                'Call for pricing details',
              ],
              bg: C.red,
              to: '/open-gym',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: item.bg, padding: '40px 32px', position: 'relative' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600, fontSize: '0.72rem',
                color: 'rgba(255,255,255,0.5)',
                letterSpacing: 2.5, textTransform: 'uppercase',
                marginBottom: 8,
              }}>{item.sub}</div>
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: '2rem',
                color: '#fff', marginBottom: 20,
                letterSpacing: 0.5,
              }}>{item.title}</h3>
              {item.lines.map((line, j) => (
                <div key={j} style={{
                  fontSize: 14, color: 'rgba(255,255,255,0.75)',
                  padding: '8px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.1)',
                }}>{line}</div>
              ))}
              <Link to={item.to} style={{
                display: 'inline-block', marginTop: 24,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: 12,
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: 2, textTransform: 'uppercase',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: 2,
                transition: 'color 0.2s',
              }}>Learn More →</Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 40 }}>
          <a href="tel:9543849191" className="btn-red" style={{ padding: '15px 48px', fontSize: 13 }}>
            Register by Phone: 954-384-9191
          </a>
        </div>
      </section>

      {/* ── AFTERSCHOOL SHUTTLE ──────────────────────────────────────── */}
      <section style={{ background: '#0a1020', padding: 0, overflow: 'hidden' }}>
        <div className="two-col" style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', minHeight: 460 }}>

          {/* Image */}
          <div className="photo-card" style={{ flex: '0 0 50%', minHeight: 420 }}>
            <img src={PHOTOS.shuttle} alt="Afterschool program" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,16,32,0.35)' }} />
          </div>

          {/* Content */}
          <div style={{ flex: 1, padding: '56px 48px 56px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ width: 36, height: 2, background: C.cyan, marginBottom: 16 }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: 'clamp(1.7rem, 3vw, 2.5rem)',
              color: '#fff', marginBottom: 8,
              textTransform: 'uppercase', letterSpacing: 0.5,
            }}>After-School<br />Shuttle Pick Up</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
              Van pickup from local schools, team coaching, homework help, and open gym. A safe, structured, and active afternoon for your athlete.
            </p>

            {[
              ['2:00pm',       'Pick-up from school'],
              ['2:30–3:20pm', 'Team coached gymnastics class'],
              ['3:30–4:15pm', 'Snack · Homework · Crafts'],
              ['4:30–6:00pm', 'Open gym — trampolines, bars, beams'],
            ].map(([time, label]) => (
              <div key={time} style={{ display: 'flex', gap: 16, marginBottom: 12, alignItems: 'flex-start' }}>
                <div style={{
                  background: C.navy, color: '#fff',
                  padding: '3px 10px',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 11,
                  whiteSpace: 'nowrap', flexShrink: 0, letterSpacing: 0.5,
                }}>{time}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)', paddingTop: 3 }}>{label}</div>
              </div>
            ))}

            <div style={{
              display: 'inline-block',
              background: 'rgba(192,57,43,0.15)',
              border: '1px solid rgba(192,57,43,0.4)',
              padding: '8px 14px',
              marginTop: 4, marginBottom: 24,
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: 12,
              color: '#ff8a80', letterSpacing: 1, textTransform: 'uppercase',
            }}>
              Early Registration Discount — 2025–26 School Year
            </div>

            <div>
              <Link to="/classes/aftercare" className="btn-cyan" style={{ display: 'inline-block' }}>
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ────────────────────────────────────── */}
      <section style={{
        background: C.red,
        padding: '56px 24px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#fff', letterSpacing: 1,
          textTransform: 'uppercase', marginBottom: 8,
        }}>Ready to Get Started?</h2>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 16, marginBottom: 28 }}>
          Call us today — classes, camps, and parties are filling up fast.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:9543849191" className="btn-outline-white" style={{ fontSize: 16, padding: '15px 40px', fontWeight: 900 }}>
            954-384-9191
          </a>
          <Link to="/contact" className="btn-outline-white" style={{ fontSize: 13, padding: '15px 32px' }}>
            Send a Message
          </Link>
        </div>
      </section>

    </div>
  )
}
