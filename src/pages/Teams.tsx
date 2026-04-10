import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { C } from '../constants'

const HERO = 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=85'

const teamData: Record<string, { title: string; subtitle: string; desc: string; details: string[] }> = {
  'jo-teams': {
    title: 'JO Teams — Level 2–10',
    subtitle: 'Junior Olympic Competitive Gymnastics',
    desc: 'Our USAG Junior Olympic program covers Levels 2 through 10 and competes at local, state, and national levels. Athletes are placed in the appropriate level based on skill assessment and age. TAG USA has consistently produced state qualifiers and national qualifiers — our championship banner wall tells the story of years of athlete excellence.',
    details: ['USAG-sanctioned competition', 'Levels 2 through 10', 'Local, state & national meets', 'Structured year-round training', 'Athlete skill assessments', 'Individual development plans'],
  },
  xcel: {
    title: 'XCel Team',
    subtitle: 'Flexible Competitive Gymnastics',
    desc: 'The USAG XCel program is designed for athletes who want a fun, meaningful competitive experience with a more flexible training schedule. Multiple levels from Bronze through Platinum allow athletes to compete at exactly the right skill level without the rigorous time commitment of the Junior Olympic track.',
    details: ['Bronze through Platinum levels', 'USAG-sanctioned competition', 'More flexible training hours', 'Great for multi-sport athletes', 'Skill-appropriate placement', 'Year-round program'],
  },
  elite: {
    title: 'JO Elite',
    subtitle: 'The Pinnacle of Junior Olympic Competition',
    desc: 'Our Elite program is for our most advanced athletes who are competing at the highest levels of USAG Junior Olympic gymnastics. Elite athletes have demonstrated exceptional commitment, talent, and readiness for national-level competition and beyond.',
    details: ['Highest JO competition level', 'National meet eligibility', 'Advanced coaching staff', 'Intensive training program', 'Performance goal planning', 'Pathway to collegiate gymnastics'],
  },
  'power-tumbling': {
    title: 'Power Tumbling Team',
    subtitle: 'Competitive Tumbling Specialists',
    desc: 'Our Power Tumbling team competes on the tumbling strip at USAG-sanctioned events. Athletes develop powerful, precise passes through dedicated technical training focused on speed, height, and execution. A great fit for athletes who love floor work and dynamic movement.',
    details: ['USAG power tumbling competition', 'Tumbling strip specialization', 'Speed and height development', 'Technique-focused coaching', 'Open to boys and girls', 'All competitive levels'],
  },
  'boys-preteam': {
    title: 'Boys Gymnastics Pre-TEAM',
    subtitle: 'Developing the Next Generation',
    desc: 'Our Boys Pre-TEAM identifies and develops talented young male gymnasts and prepares them for full competitive team participation. Athletes in this program receive structured coaching in all men\'s gymnastics events with an eye toward competitive development.',
    details: ['All men\'s gymnastics events', 'Strength & skill development', 'Structured competitive preparation', 'Pathway to full team membership', 'Age-appropriate progressions', 'Expert male gymnastics coaching'],
  },
}

const allTeams = [
  { label: 'JO Level 2–10',         path: '/teams/jo-teams' },
  { label: 'JO Elite',              path: '/teams/elite' },
  { label: 'XCel (Bronze–Platinum)', path: '/teams/xcel' },
  { label: 'Power Tumbling TEAM',   path: '/teams/power-tumbling' },
  { label: 'Boys Gymnastics Pre-TEAM', path: '/teams/boys-preteam' },
]

export default function Teams() {
  const { team } = useParams<{ team?: string }>()
  const data = teamData[team ?? 'jo-teams'] ?? teamData['jo-teams']

  return (
    <div>
      <PageHero title={data.title} subtitle={data.subtitle} image={HERO} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '72px 24px' }}>
        <div className="two-col" style={{ display: 'flex', gap: 56, alignItems: 'flex-start' }}>

          {/* Main content */}
          <div style={{ flex: 1 }}>
            <div style={{ width: 36, height: 2, background: C.red, marginBottom: 16 }} />
            <p style={{ fontSize: 16, color: '#555', lineHeight: 1.85, marginBottom: 36 }}>
              {data.desc}
            </p>

            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: '1.2rem',
              color: C.navy, letterSpacing: 1,
              textTransform: 'uppercase', marginBottom: 16,
            }}>Program Highlights</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 40 }}>
              {data.details.map((d, i) => (
                <div key={i} style={{
                  background: i % 2 === 0 ? '#f7f8fc' : '#fff',
                  border: '1px solid #eaeaea',
                  padding: '14px 18px',
                  display: 'flex', gap: 10, alignItems: 'center',
                  fontSize: 14, color: '#444',
                }}>
                  <div style={{ width: 5, height: 5, background: C.red, borderRadius: '50%', flexShrink: 0 }} />
                  {d}
                </div>
              ))}
            </div>

            <h3 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800, fontSize: '1.2rem',
              color: C.navy, letterSpacing: 1,
              textTransform: 'uppercase', marginBottom: 16,
            }}>All TAG USA Competitive Teams</h3>
            <div style={{ marginBottom: 40 }}>
              {allTeams.map((t, i) => (
                <a key={i} href={t.path} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '13px 0',
                  borderBottom: '1px solid #eee',
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600, fontSize: 14,
                  color: team === t.path.split('/').pop() ? C.red : C.navy,
                  transition: 'color 0.2s',
                }}>
                  {t.label}
                  <span style={{ fontSize: 12, color: '#bbb' }}>→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div style={{ flexShrink: 0, width: 300 }}>
            <div style={{ background: C.navy, padding: 32, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, background: C.red, marginBottom: 14 }} />
              <h3 style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: '1.6rem',
                color: '#fff', marginBottom: 10,
              }}>Schedule a Tryout</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                Call us to discuss your athlete's experience and schedule an evaluation session with one of our coaches.
              </p>
              <a href="tel:9543849191" style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900, fontSize: '1.8rem',
                color: C.red, display: 'block', marginBottom: 16,
              }}>954-384-9191</a>
              <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center' }}>
                Call Now
              </a>
            </div>

            <div style={{ background: '#f7f8fc', padding: 24, border: '1px solid #eaeaea' }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800, fontSize: '0.85rem',
                color: C.navy, letterSpacing: 2,
                textTransform: 'uppercase', marginBottom: 12,
              }}>What to Expect</div>
              {[
                'Skill-level assessment',
                'Coach Q&A session',
                'Class / team placement',
                'Schedule & pricing review',
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 8, fontSize: 13, color: '#555',
                  padding: '7px 0', borderBottom: '1px solid #eee',
                }}>
                  <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
