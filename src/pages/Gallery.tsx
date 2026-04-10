import PageHero from '../components/PageHero'
import { C } from '../constants'

const placeholders = Array.from({ length: 12 }, (_, i) => ({
  bg: ['#5c1010','#1c2e6b','#2a4a3a','#4a1a3a','#3a2a4a','#1a3a4a'][i % 6],
  emoji: ['🤸‍♀️','🏆','🎀','🤸‍♂️','🏅','🎗️'][i % 6],
  label: ['Competition','Champions','Cheer','Boys Team','Medals','Ribbon'][i % 6],
}))

export default function Gallery() {
  return (
    <div>
      <PageHero title="GALLERY" subtitle="Moments from TAG USA Gymnastics" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>

        <p style={{ color: C.textGray, marginBottom: 36, fontSize: 15 }}>
          Browse photos from our classes, competitions, camps, and special events. Tag us on Instagram at{' '}
          <strong style={{ color: C.navy }}>#taggymnasticsfl</strong> to be featured!
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 10, marginBottom: 32 }}>
          {placeholders.map((p, i) => (
            <div
              key={i}
              className="photo-placeholder"
              style={{ background: p.bg, minHeight: 180, cursor: 'pointer', transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.8')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <span>{p.emoji}</span>
              <span style={{ fontSize: 12, letterSpacing: 1 }}>{p.label}</span>
            </div>
          ))}
        </div>

        <div style={{ background: C.offWhite, padding: 32, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.6rem', color: C.navy, marginBottom: 10 }}>
            Follow Us on Instagram
          </div>
          <p style={{ color: C.textGray, marginBottom: 16, fontSize: 15 }}>
            Tag <strong>#taggymnasticsfl</strong> in your posts to be featured on our website and social media!
          </p>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-navy"
            style={{ display: 'inline-block' }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </div>
  )
}
