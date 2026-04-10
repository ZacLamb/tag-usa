import PageHero from '../components/PageHero'
import { C } from '../constants'

const HERO = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=85'

const posts = [
  {
    title: 'Summer Camp 2025 Registration Now Open',
    date: 'January 15, 2025',
    category: 'Camps',
    img: 'https://images.unsplash.com/photo-1594882645126-14ac19a0f2c4?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Registration for our Summer 2025 sports camps is now open. Themed weeks are filling fast — from Disney-inspired sessions to cooking and pajama parties. Reserve your spot today.',
    categoryColor: C.red,
  },
  {
    title: 'TAG USA Athletes Qualify for Nationals',
    date: 'December 5, 2024',
    category: 'Competition',
    img: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Congratulations to our incredible athletes who qualified for the 2024 USAG National Championships. We are immensely proud of your dedication, hard work, and outstanding performances throughout the season.',
    categoryColor: C.navy,
  },
  {
    title: 'New Classes Added This Fall',
    date: 'August 20, 2024',
    category: 'Classes',
    img: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=500&q=80',
    excerpt: 'We\'re expanding our fall class schedule with new trampoline sessions, an additional power tumbling level, and a beginner cheerleading program for ages 5 and up. Limited spots remain.',
    categoryColor: '#2e7d32',
  },
  {
    title: 'Tips for Your Child\'s First Gymnastics Class',
    date: 'July 22, 2024',
    category: 'Tips',
    img: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Is your little one starting gymnastics for the first time? Here\'s how to prepare them — what to wear, what to expect, and how to make the experience positive and confidence-building from day one.',
    categoryColor: '#7a5a2a',
  },
  {
    title: 'Birthday Party Season — Book Early',
    date: 'July 10, 2024',
    category: 'Parties',
    img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Weekend party slots are booking up for the fall. Reserve your date early for the most fun birthday party in South Florida — the whole gym is yours, plus two coaches, two private rooms, and full cleanup.',
    categoryColor: '#c2185b',
  },
  {
    title: 'Aftercare 2025–26 — Register Now for Discount',
    date: 'June 1, 2024',
    category: 'Aftercare',
    img: 'https://images.unsplash.com/photo-1546483875-ad9014c88eba?auto=format&fit=crop&w=500&q=80',
    excerpt: 'Early registration for our 2025–26 Afterschool Shuttle Pickup program is open. Spots are limited and our early registration discount won\'t last long — call today to secure your athlete\'s spot.',
    categoryColor: '#00838f',
  },
]

export default function Blog() {
  return (
    <div>
      <PageHero title="Blog" subtitle="News, tips, and updates from TAG USA Gymnastics." image={HERO} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 32 }}>
          {posts.map((post, i) => (
            <article key={i} style={{
              background: '#fff',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
              cursor: 'pointer',
            }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
              }}
            >
              {/* Photo */}
              <div className="photo-card" style={{ height: 200 }}>
                <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              {/* Content */}
              <div style={{ padding: '22px 24px 28px' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 12 }}>
                  <div style={{
                    background: post.categoryColor,
                    padding: '3px 10px',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: 10,
                    color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase',
                  }}>{post.category}</div>
                  <div style={{ fontSize: 12, color: '#aaa', fontWeight: 600, letterSpacing: 0.3 }}>{post.date}</div>
                </div>

                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800, fontSize: '1.3rem',
                  color: C.navy, marginBottom: 10, letterSpacing: 0.3, lineHeight: 1.2,
                }}>{post.title}</h3>

                <p style={{ fontSize: 13.5, color: '#666', lineHeight: 1.72, marginBottom: 18 }}>
                  {post.excerpt}
                </p>

                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 12, color: C.red,
                  letterSpacing: 1.5, textTransform: 'uppercase',
                }}>
                  Read More <span style={{ fontSize: 14 }}>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
