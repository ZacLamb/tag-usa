// ── TheGym ────────────────────────────────────────────────────────────────────
import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { C } from '../constants'

const GYM_HERO = 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=85'

export function TheGym() {
  const { sub } = useParams<{ sub?: string }>()
  const subtitles: Record<string, string> = {
    about:    'South Florida\'s Premier Gymnastics & Trampoline Facility',
    facility: 'Our World-Class Training Facility',
    coaches:  'Expert Coaches Dedicated to Your Athlete\'s Success',
  }
  const subtitle = subtitles[sub ?? 'about'] ?? subtitles.about

  return (
    <div>
      <PageHero title="The Gym" subtitle={subtitle} image={GYM_HERO} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>

        {/* About blurb */}
        <div className="two-col" style={{ display: 'flex', gap: 56, alignItems: 'center', marginBottom: 72 }}>
          <div className="photo-card" style={{ flex: '0 0 44%', height: 420, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
            <img
              src="https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=700&q=80"
              alt="TAG USA Facility"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', color: C.navy,
              marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5,
            }}>About TAG USA Gymnastics</h2>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 14 }}>
              TAG USA Gymnastics & Trampoline is South Florida's <strong>premier destination</strong> for youth gymnastics, trampoline, and cheer training. Located in Weston, FL, our facility serves hundreds of athletes across Broward County — from 6-week-old babies to national-level competitors.
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 28 }}>
              We offer recreational classes for all ages, competitive USAG teams, sports camps, birthday parties, afterschool shuttle programs, and Saturday night open gym. Whatever your child's goals — from first cartwheel to national championship — TAG USA has the program and coaching to get them there.
            </p>
            <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block' }}>
              Schedule a Tour — 954-384-9191
            </a>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 2 }}>
          {[
            { img: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=500&q=80', title: 'World-Class Equipment',  desc: 'Full gymnastics apparatus, multiple trampolines, foam pits, rope swings, tumble tracks, and dedicated training areas for every discipline.' },
            { img: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=500&q=80', title: 'Championship History',   desc: 'Dozens of state qualifiers, national qualifiers, and USA National Team members have trained at TAG USA. Our banners tell the story.' },
            { img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=500&q=80', title: 'Expert Coaching Staff', desc: 'Our coaches bring decades of competitive and instructional experience, developing athletes from their very first cartwheel to elite competition.' },
            { img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80', title: 'Family Atmosphere',     desc: 'A welcoming, positive, and supportive gym culture where athletes of all ages and levels thrive, belong, and build lifelong friendships.' },
          ].map((item, i) => (
            <div key={i} className="photo-card" style={{ position: 'relative', height: 300 }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,16,40,0.92) 0%, rgba(10,16,40,0.2) 55%, transparent 100%)' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '24px 22px' }}>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.25rem', color: '#fff', marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.68)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── BirthdayParties ───────────────────────────────────────────────────────────
const BDAY_HERO = 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1600&q=85'

export function BirthdayParties() {
  return (
    <div>
      <PageHero title="Birthday Parties" subtitle="The most fun birthday party in South Florida — the whole gym is yours." image={BDAY_HERO} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div className="two-col" style={{ display: 'flex', gap: 56, flexWrap: 'wrap' }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900,
              fontSize: 'clamp(1.7rem,3vw,2.4rem)', color: C.navy,
              marginBottom: 16, textTransform: 'uppercase', letterSpacing: 0.5,
            }}>Private Birthday Parties</h2>

            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 14 }}>
              The entire gymnastics and trampoline facility is yours for a <strong>private</strong> party. Your child and guests have exclusive access to every piece of equipment in our world-class gym.
            </p>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.85, marginBottom: 28 }}>
              Our two dedicated coaches handle setup, activities, serving, and cleanup — leaving you free to enjoy every moment of your child's special day.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 32 }}>
              {[
                'Full use of ALL gymnastics equipment',
                'Bars, beams & parallel bars',
                'Trampolines & foam pits',
                'Inflatables, ropes & floor',
                'Two large private party rooms',
                'Two coaches — included',
                'Full setup & cleanup',
                'Saturday & Sunday availability',
              ].map((item, i) => (
                <div key={i} style={{
                  background: '#f7f8fc', border: '1px solid #eaeaea',
                  padding: '12px 16px', display: 'flex', gap: 8,
                  alignItems: 'center', fontSize: 13, color: '#444',
                }}>
                  <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>

            <div style={{ background: C.navy, padding: 32 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '1.1rem', color: 'rgba(255,255,255,0.6)', letterSpacing: 1, marginBottom: 6 }}>RESERVATIONS BY PHONE</div>
              <a href="tel:9543849191" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.4rem', color: C.red, display: 'block', marginBottom: 6 }}>954-384-9191</a>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Saturday and Sunday options available</div>
            </div>
          </div>

          {/* Right */}
          <div style={{ flexShrink: 0, width: 320 }}>
            <div className="photo-card" style={{ height: 320, marginBottom: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80" alt="Birthday party" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ background: '#f7f8fc', border: '1px solid #eaeaea', padding: 24 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.85rem', color: C.navy, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
                Party FAQ
              </div>
              {[
                ['When are parties available?', 'Saturdays and Sundays — call for available time slots.'],
                ['How many guests?', 'Call us to discuss capacity for your group size.'],
                ['What should we bring?', 'Just your cake and guests — we handle everything else!'],
                ['How do I book?', 'Call 954-384-9191 to check availability and reserve your date.'],
              ].map(([q, a]) => (
                <div key={q} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #eee' }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: C.navy, marginBottom: 3 }}>{q}</div>
                  <div style={{ fontSize: 13, color: '#777', lineHeight: 1.6 }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── OpenGym ───────────────────────────────────────────────────────────────────
const OPEN_HERO = 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1600&q=85'

export function OpenGym() {
  return (
    <div>
      <PageHero title="Open Gym" subtitle="Every Saturday night — open to athletes, families, and all skill levels." image={OPEN_HERO} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 48, alignItems: 'center', marginBottom: 56 }}>
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.navy, marginBottom: 8, textTransform: 'uppercase' }}>
              Every Saturday Night
            </h2>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.6rem', color: C.red, marginBottom: 20 }}>
              6:30pm – 10:00pm
            </div>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.8, marginBottom: 28 }}>
              Free-play access to our entire facility every Saturday night. Trampolines, gymnastics equipment, foam pits, rope swings, and more. Perfect for athletes wanting extra practice or families looking for a fun evening activity.
            </p>
            <a href="tel:9543849191" className="btn-navy" style={{ display: 'inline-block' }}>
              Call for Pricing: 954-384-9191
            </a>
          </div>
          <div className="photo-card" style={{ flex: '0 0 340px', height: 340, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}>
            <img src="https://images.unsplash.com/photo-1594882645126-14ac19a0f2c4?auto=format&fit=crop&w=600&q=80" alt="Open gym" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 2 }}>
          {['Trampolines', 'Gymnastics Equipment', 'Foam Pits', 'Rope Swings', 'Inflatables', 'Tumble Tracks'].map((item, i) => (
            <div key={i} style={{
              background: i % 2 === 0 ? C.navy : '#f7f8fc',
              color: i % 2 === 0 ? '#fff' : C.navy,
              padding: '28px 20px', textAlign: 'center',
              fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700,
              fontSize: '1.05rem', letterSpacing: 1,
              border: i % 2 !== 0 ? '1px solid #eaeaea' : 'none',
            }}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Gallery ───────────────────────────────────────────────────────────────────
const galleryPhotos = [
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80', label: 'Training' },
  { src: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=500&q=80', label: 'Beam Work' },
  { src: 'https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=500&q=80', label: 'Competition' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=500&q=80', label: 'Flexibility' },
  { src: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=500&q=80', label: 'Trampoline' },
  { src: 'https://images.unsplash.com/photo-1571019613576-2b22c76fd955?auto=format&fit=crop&w=500&q=80', label: 'Floor' },
  { src: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=500&q=80', label: 'Team' },
  { src: 'https://images.unsplash.com/photo-1594882645126-14ac19a0f2c4?auto=format&fit=crop&w=500&q=80', label: 'Tumbling' },
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500&q=80', label: 'Performance' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=500&q=80', label: 'Skills' },
  { src: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80', label: 'Classes' },
  { src: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=500&q=80', label: 'Athletics' },
]

export function Gallery() {
  return (
    <div>
      <PageHero title="Gallery" subtitle="Photos from our classes, teams, camps, and events." image={galleryPhotos[0].src} />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <p style={{ color: '#777', marginBottom: 36, fontSize: 14, textAlign: 'center' }}>
          Tag us on Instagram at <strong style={{ color: C.navy }}>#taggymnasticsfl</strong> to be featured!
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 6 }}>
          {galleryPhotos.map((p, i) => (
            <div key={i} className="photo-card" style={{ position: 'relative', height: 240 }}>
              <img src={p.src} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)', opacity: 0, transition: 'opacity 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0')}
              >
                <div style={{ position: 'absolute', bottom: 14, left: 0, right: 0, textAlign: 'center', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: 13, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase' }}>{p.label}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="btn-navy" style={{ display: 'inline-block' }}>
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────
import { useState } from 'react'

const CONTACT_HERO = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=85'

const interests = ['Recreational Classes','Competitive Teams / Tryouts','Sports Camps','Afterschool / Aftercare','Birthday Parties','Open Gym','General Inquiry']

type FormState = { name: string; email: string; phone: string; subject: string; interest: string; message: string }

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', subject: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.email.trim())   e.email   = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }))

  const inputStyle = (err?: string): React.CSSProperties => ({
    width: '100%', padding: '12px 14px',
    border: `1px solid ${err ? C.red : '#ddd'}`,
    fontFamily: "'Barlow', sans-serif", fontSize: 14,
    outline: 'none', marginTop: 5,
    background: '#fff', color: '#222',
    transition: 'border-color 0.2s',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block', fontFamily: "'Barlow', sans-serif",
    fontWeight: 600, fontSize: 12,
    color: '#555', letterSpacing: 0.8, textTransform: 'uppercase',
  }

  return (
    <div>
      <PageHero title="Contact Us" subtitle="Get in touch — we're happy to help with classes, camps, parties, and more." image={CONTACT_HERO} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div className="two-col" style={{ display: 'flex', flexWrap: 'wrap', gap: 56 }}>

          {/* Form */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: C.navy, marginBottom: 28, letterSpacing: 0.5 }}>
              Send a Message
            </h2>

            {sent ? (
              <div style={{ background: '#f1f8f1', border: '1px solid #b2d8b2', padding: 32 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#2e7d32', marginBottom: 8 }}>Message Sent!</div>
                <p style={{ color: '#3a7d3a', fontSize: 14, lineHeight: 1.7 }}>Thank you for reaching out. We'll be in touch shortly!</p>
              </div>
            ) : (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {([['name','Your Name *','text'],['email','Email Address *','email']] as const).map(([k,l,t]) => (
                    <div key={k}>
                      <label style={labelStyle}>{l}</label>
                      <input type={t} value={form[k]} onChange={set(k)} style={inputStyle(errors[k])} />
                      {errors[k] && <div style={{ color: C.red, fontSize: 11, marginTop: 2 }}>{errors[k]}</div>}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {([['phone','Phone Number','tel'],['subject','Subject','text']] as const).map(([k,l,t]) => (
                    <div key={k}>
                      <label style={labelStyle}>{l}</label>
                      <input type={t} value={form[k]} onChange={set(k)} style={inputStyle()} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>I'm Interested In</label>
                  <select value={form.interest} onChange={set('interest')} style={{ ...inputStyle(), cursor: 'pointer' }}>
                    <option value="">— Select one —</option>
                    {interests.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea rows={5} value={form.message} onChange={set('message')} style={{ ...inputStyle(errors.message), resize: 'vertical' }} />
                  {errors.message && <div style={{ color: C.red, fontSize: 11, marginTop: 2 }}>{errors.message}</div>}
                </div>
                <button className="btn-red" onClick={handleSubmit} style={{ padding: '14px 44px', fontSize: 13 }}>
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* Info */}
          <div style={{ flexShrink: 0, width: 300 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: C.navy, marginBottom: 28, letterSpacing: 0.5 }}>
              Get in Touch
            </h2>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.78rem', color: '#aaa', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 }}>Phone</div>
              <a href="tel:9543849191" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2rem', color: C.red, display: 'block' }}>954-384-9191</a>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.78rem', color: '#aaa', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 }}>Location</div>
              <div style={{ fontSize: 14, color: '#444', lineHeight: 1.7 }}>Weston, FL — South Florida</div>
            </div>

            <div style={{ marginBottom: 32 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: '0.78rem', color: '#aaa', letterSpacing: 2.5, textTransform: 'uppercase', marginBottom: 6 }}>Instagram</div>
              <div style={{ fontSize: 14, color: C.navy, fontWeight: 700 }}>#taggymnasticsfl</div>
            </div>

            <div style={{ background: C.navy, padding: 28 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '1.4rem', color: '#fff', marginBottom: 8 }}>Register Today</div>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                The fastest way to enroll is to call us directly. We'll find the right program for your athlete.
              </p>
              <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center' }}>Call 954-384-9191</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── NotFound ──────────────────────────────────────────────────────────────────
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '120px 24px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '6rem', color: '#eee', lineHeight: 1 }}>404</div>
      <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.navy, marginBottom: 10, letterSpacing: 0.5 }}>
        Page Not Found
      </h1>
      <p style={{ color: '#888', marginBottom: 36, fontSize: 15, maxWidth: 380 }}>
        The page you're looking for doesn't exist. Let's get you back on the mat.
      </p>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/"        className="btn-red"   style={{ display: 'inline-block' }}>Back to Home</Link>
        <Link to="/classes" className="btn-navy"  style={{ display: 'inline-block' }}>View Classes</Link>
        <Link to="/contact" className="btn-navy"  style={{ display: 'inline-block' }}>Contact Us</Link>
      </div>
    </div>
  )
}
