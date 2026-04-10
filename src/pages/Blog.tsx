import PageHero from '../components/PageHero'
import { C } from '../constants'

const posts = [
  {
    title: 'Summer Camp 2025 Registration Now Open!',
    date: 'January 15, 2025',
    category: 'Camps',
    excerpt: 'We\'re excited to announce that registration for our Summer 2025 sports camps is now open! This year we have incredible themed weeks planned for every age group. Spots fill up fast — register today!',
  },
  {
    title: 'TAG USA Athletes Qualify for Nationals',
    date: 'December 5, 2024',
    category: 'Competitions',
    excerpt: 'Congratulations to our incredible athletes who qualified for the 2024 USAG National Championships! We are so proud of your hard work, dedication, and incredible performances throughout the season.',
  },
  {
    title: 'New Classes Starting This Fall',
    date: 'August 20, 2024',
    category: 'Classes',
    excerpt: 'Exciting news! We are adding several new class offerings this fall including expanded trampoline sessions, a new power tumbling level, and an expanded beginner cheerleading program.',
  },
  {
    title: 'Tips for Your Child\'s First Gymnastics Class',
    date: 'July 22, 2024',
    category: 'Tips',
    excerpt: 'Is your little one starting gymnastics for the first time? We\'ve put together a helpful guide for parents to make the first class experience as smooth and fun as possible for your child.',
  },
  {
    title: 'Birthday Party Booking Tips',
    date: 'July 10, 2024',
    category: 'Parties',
    excerpt: 'Planning the perfect birthday party at TAG USA? Here are our top tips for booking, preparing, and making the most of your private party experience at our world-class facility.',
  },
  {
    title: 'Aftercare Program — Early Registration Discount',
    date: 'June 1, 2024',
    category: 'Aftercare',
    excerpt: 'Registration for our 2025–26 Afterschool Aftercare program is now open. Register early to lock in your spot and take advantage of our early registration discount. Limited spots available!',
  },
]

const categoryColors: Record<string, string> = {
  Camps: C.red,
  Competitions: C.navy,
  Classes: '#2a7a4a',
  Tips: '#7a5a2a',
  Parties: '#c2185b',
  Aftercare: C.cyan,
}

export default function Blog() {
  return (
    <div>
      <PageHero title="BLOG" subtitle="News & Updates from TAG USA Gymnastics" />
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {posts.map((post, i) => (
            <article key={i} style={{
              border: `1px solid ${C.lightGray}`,
              borderLeft: `5px solid ${categoryColors[post.category] ?? C.navy}`,
              padding: 28,
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 8 }}>
                <div style={{
                  background: categoryColors[post.category] ?? C.navy,
                  color: '#fff', padding: '2px 10px',
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontWeight: 700, fontSize: 11, letterSpacing: 1,
                }}>{post.category.toUpperCase()}</div>
                <div style={{ fontSize: 12, color: C.textGray, fontWeight: 600, letterSpacing: 0.5 }}>
                  {post.date}
                </div>
              </div>
              <h3 style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontWeight: 800, fontSize: '1.4rem', color: C.navy, marginBottom: 10,
              }}>{post.title}</h3>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.75, marginBottom: 16 }}>
                {post.excerpt}
              </p>
              <button className="btn-navy" style={{ fontSize: 13, padding: '8px 20px' }}>
                Read More
              </button>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
