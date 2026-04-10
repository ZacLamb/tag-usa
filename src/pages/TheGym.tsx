import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { C } from '../constants'

const subTitles: Record<string, string> = {
  about:    'About TAG USA Gymnastics',
  facility: 'Our World-Class Facility',
  coaches:  'Meet Our Coaches',
}

export default function TheGym() {
  const { sub } = useParams<{ sub?: string }>()
  const subtitle = subTitles[sub ?? 'about'] ?? subTitles.about

  return (
    <div>
      <PageHero title="THE GYM" subtitle={subtitle} />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(255px,1fr))', gap: 30, marginBottom: 48 }}>
          {[
            { icon: '🏟️', title: 'World-Class Facility',  color: C.red,  desc: 'Our state-of-the-art gym features full gymnastics apparatus, multiple trampolines, foam pits, rope swings, and dedicated training areas for every discipline.' },
            { icon: '🏆', title: 'Championship Pedigree', color: C.navy, desc: 'TAG USA has produced countless state qualifiers, national qualifiers, and USA National Team members. Our trophy and banner wall tells the story of our athletes\' incredible achievements.' },
            { icon: '👨‍🏫', title: 'Expert Coaching',      color: C.red,  desc: 'Our experienced coaching staff brings decades of competitive and instructional experience to every class and training session, from beginner to elite.' },
            { icon: '❤️', title: 'Family Atmosphere',     color: C.navy, desc: 'We pride ourselves on creating a welcoming, supportive environment where athletes of all ages and skill levels can thrive and build lifelong friendships.' },
            { icon: '🎯', title: 'Structured Programs',   color: C.red,  desc: 'From FREE baby classes to elite-level competitive teams, every program is thoughtfully designed with age-appropriate progressions and goals.' },
            { icon: '🚐', title: 'Afterschool Shuttle',   color: C.navy, desc: 'Our unique van pickup service from local schools makes it easy for families to get their athletes to the gym for aftercare and training.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: 26, border: `1px solid ${C.lightGray}`, borderTop: `5px solid ${item.color}`, textAlign: 'center' }}>
              <div style={{ fontSize: 46, marginBottom: 14 }}>{item.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1.25rem', marginBottom: 10 }}>{item.title}</h3>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* About blurb */}
        <div style={{ background: C.offWhite, padding: 40, marginBottom: 32, borderLeft: `6px solid ${C.red}` }}>
          <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: C.navy, marginBottom: 14 }}>
            About TAG USA Gymnastics
          </h2>
          <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.85, marginBottom: 14 }}>
            TAG USA Gymnastics & Trampoline is South Florida's <strong>POPULAR</strong> and <strong>FAMOUS</strong> destination for youth classes and competitive team gymnastics training. Located in Weston, FL, our facility serves hundreds of athletes across Broward County.
          </p>
          <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.85 }}>
            We offer recreational classes for all ages starting from 6 weeks old, competitive USAG teams, sports camps, birthday parties, afterschool programs, and open gym nights. Whatever your child's goals — from first cartwheel to national competition — TAG USA has a program for them.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block', padding: '16px 40px', fontSize: 17 }}>
            Schedule a Tour — Call 954-384-9191
          </a>
        </div>
      </div>
    </div>
  )
}
