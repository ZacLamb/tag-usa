import PageHero from '../components/PageHero'
import { C } from '../constants'

const HERO = '/Screenshot_2026-05-11_at_2.13.17_PM.png'

const classList = [
  {
    name: 'Baby Tumblers & Mommy',
    age: '6 weeks to walking',
    tag: 'FREE',
    color: C.red,
    desc: 'A gentle, FREE introduction to movement for babies and their moms. Soft mats, sensory play, and early movement development in a nurturing environment.',
  },
  {
    name: 'Parent & Me',
    age: 'Age 1',
    tag: 'Beginner',
    color: C.navy,
    desc: 'Parent-assisted class focused on fundamental movement skills through games, stretching, and basic gymnastics activities in a fun, social setting.',
  },
  {
    name: 'Tiny Tots',
    age: 'Ages 1.5–2 yrs',
    tag: 'Beginner',
    color: C.red,
desc: 'Beginning gymnastics movements with parent assistance. Age-appropriate activities that build coordination, balance, and confidence.',
  },
  {
    name: 'Preschool Gymnastics',
    age: 'Ages 3–4 yrs',
    tag: 'Beginner',
    color: C.navy,
desc: 'Basic gymnastics skills on floor, beam, bars, and trampoline. A structured class designed specifically for preschool development and coordination.',
  },
  {
    name: 'Girls Beginner Intro',
    age: 'Age 4–5',
    tag: 'Beginner',
    color: C.red,
desc: 'Introduction to all four gymnastics events: vault, bars, beam, and floor. The perfect starting point for young athletes discovering the sport.',
  },
  {
    name: 'Girls Beginner 2',
    age: 'Ages 5–6',
    tag: 'Beginner',
    color: C.navy,
desc: 'Building on intro skills with more complex movements, routines, and event-specific technique. Confidence and skill grow together.',
  },
  {
    name: 'Girls Beginner 3',
    age: 'Ages 7–9',
    tag: 'Intermediate',
    color: C.red,
desc: 'Advanced beginner-level skills preparing athletes for intermediate training. Great for kids who have prior gymnastics experience.',
  },
  {
    name: 'Boys Beginner Gymnastics',
    age: 'Ages 4–5',
    tag: 'Beginner',
    color: C.navy,
desc: 'Boys-specific gymnastics covering floor, vault, parallel bars, and rings. Strength, coordination, and fun in every class.',
  },
  {
    name: 'Coed Trampoline & Tumbling',
    age: 'Ages 6–15',
    tag: 'All Levels',
    color: C.red,
desc: 'Exciting trampoline and tumbling skills for boys and girls. One of our most popular programs — kids love the energy and progression.',
  },
  {
    name: 'Girls Intermediate',
    age: 'Various ages',
    tag: 'Intermediate',
    color: C.navy,
desc: 'Intermediate level skills across all four events. Athletes develop more refined technique and begin building competitive-quality skills.',
  },
  {
    name: 'Girls Advanced',
    age: 'Various ages',
    tag: 'Advanced',
    color: C.red,
desc: 'Advanced gymnastics training for high-level skill development and competition preparation. For athletes ready for the next challenge.',
  },
  {
    name: 'Girls Preteam & Junior Team',
    age: 'Selected athletes',
    tag: 'Team Track',
    color: C.navy,
desc: 'Structured team training for athletes showing exceptional potential. Focused development toward competitive team membership.',
  },
  {
    name: 'Power Tumbling',
    age: 'Ages 8–16',
    tag: 'Intermediate / Advanced',
    color: C.red,
desc: 'Specialized tumbling on the power tumbling strip. Intermediate and Advanced athletes develop powerful, precise passes for recreation or competition.',
  },
  {
    name: 'Beginner Cheerleading & Stunts',
    age: 'Various ages',
    tag: 'Beginner',
    color: C.navy,
desc: 'Learn cheer fundamentals — routines, jumps, and beginning stunts — in an energetic, team-focused environment. Great for aspiring cheerleaders.',
  },
]

const tagColors: Record<string, string> = {
  'FREE':                 '#2e7d32',
  'Beginner':             C.navy,
  'Intermediate':         '#6a1b9a',
  'Advanced':             C.red,
  'All Levels':           '#00838f',
  'Team Track':           '#e65100',
  'Intermediate / Advanced': '#4a148c',
}

export default function Classes() {
  return (
    <div>
      <PageHero
        title="Classes"
        subtitle="A program for every age and experience level — from 6 weeks to elite."
        image={HERO}
      />

      {/* Intro */}
      <div style={{ background: '#f7f8fc', padding: '48px 24px', borderBottom: '1px solid #eaeaea' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 16, color: '#555', lineHeight: 1.8, marginBottom: 12 }}>
            TAG USA offers recreational and competitive classes on <strong>weekday mornings, afternoons, and Saturdays.</strong> All levels welcome — our coaches meet every athlete where they are and build from there.
          </p>
          <p style={{ fontSize: 15, color: '#777', lineHeight: 1.7 }}>
            Registration is by phone. Call <a href="tel:9543849191" style={{ color: C.navy, fontWeight: 700 }}>954-384-9191</a> to speak with our team and find the right class for your child.
          </p>
        </div>
      </div>

      {/* Class grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px' }}>
        <div className="class-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}>
          {classList.map((cls, i) => (
            <div key={i} style={{
              background: '#fff',
              boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
              overflow: 'hidden',
              transition: 'transform 0.25s, box-shadow 0.25s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.07)'
              }}
            >
              {/* Color header */}
              <div style={{ background: cls.color, height: 8 }} />
              <div style={{ padding: '14px 22px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                  background: tagColors[cls.tag] ?? C.navy,
                  padding: '3px 10px',
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: 10,
                  color: '#fff', letterSpacing: 1.5,
                  textTransform: 'uppercase',
                }}>{cls.tag}</div>
                <div style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600, fontSize: 11,
                  color: '#999', letterSpacing: 0.5,
                }}>{cls.age}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ width: 28, height: 2, background: cls.color, marginBottom: 10 }} />
                <h3 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800, fontSize: '1.25rem',
                  color: C.navy, marginBottom: 10,
                  letterSpacing: 0.3,
                }}>{cls.name}</h3>
                <p style={{ fontSize: 13.5, color: '#666', lineHeight: 1.7 }}>{cls.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 64,
          background: C.navy,
          padding: '48px 40px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: '2rem',
              color: '#fff', marginBottom: 6, letterSpacing: 0.5,
            }}>Ready to Enroll?</h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Call us to find the right class, check availability, and get your athlete started.
            </p>
          </div>
          <a href="tel:9543849191" className="btn-red" style={{ fontSize: 16, padding: '15px 40px', whiteSpace: 'nowrap' }}>
            Call 954-384-9191
          </a>
        </div>
      </div>
    </div>
  )
}
