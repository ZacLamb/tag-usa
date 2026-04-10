import { useState } from 'react'
import PageHero from '../components/PageHero'
import { C } from '../constants'

type FormState = {
  name: string
  email: string
  phone: string
  subject: string
  interest: string
  message: string
}

const interests = [
  'Recreational Classes',
  'Competitive Teams / Tryouts',
  'Sports Camps',
  'Afterschool / Aftercare',
  'Birthday Parties',
  'Open Gym',
  'General Inquiry',
]

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', email: '', phone: '', subject: '', interest: '', message: '',
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = () => {
    const e: Partial<FormState> = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    setSent(true)
  }

  const set = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [key]: e.target.value }))

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '11px 12px',
    border: `1px solid ${C.lightGray}`,
    fontFamily: "'Barlow',sans-serif", fontSize: 14,
    outline: 'none', marginTop: 4,
  }
  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Barlow Condensed',sans-serif",
    fontWeight: 700, fontSize: '0.9rem', color: C.navy,
  }

  return (
    <div>
      <PageHero title="CONTACT US" subtitle="We'd Love to Hear from You!" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div className="two-col" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>

          {/* FORM */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.8rem', color: C.navy, marginBottom: 24 }}>
              Send Us a Message
            </h2>

            {sent ? (
              <div style={{ background: '#e8f5e9', border: '1px solid #a5d6a7', padding: 28 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#2e7d32', marginBottom: 8 }}>
                  Message Sent! ✓
                </div>
                <p style={{ color: '#2e7d32', fontSize: 15 }}>
                  Thank you for contacting TAG USA Gymnastics. We'll be in touch shortly at the number or email you provided!
                </p>
              </div>
            ) : (
              <div>
                {/* Name + Email row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Your Name *</label>
                    <input type="text" value={form.name} onChange={set('name')} style={{ ...inputStyle, borderColor: errors.name ? C.red : C.lightGray }} />
                    {errors.name && <div style={{ color: C.red, fontSize: 12, marginTop: 3 }}>{errors.name}</div>}
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input type="email" value={form.email} onChange={set('email')} style={{ ...inputStyle, borderColor: errors.email ? C.red : C.lightGray }} />
                    {errors.email && <div style={{ color: C.red, fontSize: 12, marginTop: 3 }}>{errors.email}</div>}
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input type="tel" value={form.phone} onChange={set('phone')} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Subject</label>
                    <input type="text" value={form.subject} onChange={set('subject')} style={inputStyle} />
                  </div>
                </div>

                {/* Interest dropdown */}
                <div style={{ marginBottom: 16 }}>
                  <label style={labelStyle}>I'm Interested In</label>
                  <select value={form.interest} onChange={set('interest')} style={{ ...inputStyle, background: '#fff', cursor: 'pointer' }}>
                    <option value="">— Select one —</option>
                    {interests.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>

                {/* Message */}
                <div style={{ marginBottom: 24 }}>
                  <label style={labelStyle}>Message *</label>
                  <textarea
                    rows={5} value={form.message} onChange={set('message')}
                    style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? C.red : C.lightGray }}
                  />
                  {errors.message && <div style={{ color: C.red, fontSize: 12, marginTop: 3 }}>{errors.message}</div>}
                </div>

                <button className="btn-red" onClick={handleSubmit} style={{ padding: '14px 44px', fontSize: 16 }}>
                  Send Message
                </button>
              </div>
            )}
          </div>

          {/* INFO COLUMN */}
          <div style={{ flexShrink: 0, width: 300 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.8rem', color: C.navy, marginBottom: 24 }}>
              Contact Information
            </h2>

            {[
              { icon: '📞', label: 'Phone',    content: <a href="tel:9543849191" style={{ color: C.red, fontWeight: 700, fontSize: 20, fontFamily: "'Barlow Condensed',sans-serif" }}>954-384-9191</a> },
              { icon: '📍', label: 'Location', content: <span style={{ color: C.textGray, fontSize: 14 }}>Weston, FL (South Florida)</span> },
              { icon: '🕐', label: 'Hours',    content: <span style={{ color: C.textGray, fontSize: 14 }}>See footer for full schedule</span> },
              { icon: '📸', label: 'Instagram', content: <span style={{ color: C.navy, fontSize: 14, fontWeight: 700 }}>#taggymnasticsfl</span> },
            ].map((info, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 22, alignItems: 'flex-start' }}>
                <div style={{
                  background: C.navy, color: '#fff',
                  width: 44, height: 44, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>{info.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: C.navy, fontSize: '0.9rem', marginBottom: 2 }}>
                    {info.label}
                  </div>
                  {info.content}
                </div>
              </div>
            ))}

            <div style={{ background: C.navy, color: '#fff', padding: 24, marginTop: 8 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.3rem', marginBottom: 8 }}>
                Register Today!
              </div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, marginBottom: 16, lineHeight: 1.6 }}>
                The quickest way to register for classes, camps, or birthday parties is to call us directly!
              </p>
              <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center' }}>
                Call 954-384-9191
              </a>
            </div>

            {/* Quick links */}
            <div style={{ marginTop: 20 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1rem', marginBottom: 10 }}>
                Quick Links:
              </div>
              {[
                { label: 'View All Classes →', href: '/classes' },
                { label: 'Sports Camps →',     href: '/classes/camps' },
                { label: 'Birthday Parties →', href: '/birthday-parties' },
                { label: 'Aftercare Program →',href: '/classes/aftercare' },
              ].map(link => (
                <a key={link.href} href={link.href} style={{
                  display: 'block', padding: '8px 0',
                  borderBottom: `1px solid ${C.lightGray}`,
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700, fontSize: 14, color: C.navy,
                }}>{link.label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
