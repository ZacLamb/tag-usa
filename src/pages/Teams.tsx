import { useParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { C } from '../constants'

const teamData: Record<string, { title: string; subtitle: string; desc: string }> = {
  'jo-teams': {
    title: 'JO Teams (Level 2–10)',
    subtitle: 'Junior Olympic Competitive Gymnastics',
    desc: 'Our USAG Junior Olympic teams compete at local, state, and national levels. Athletes are placed in appropriate levels based on skill and age. TAG USA has consistently produced state and national qualifiers — our championship banner wall tells the story.',
  },
  xcel: {
    title: 'XCel Team',
    subtitle: 'Flexible Competitive Gymnastics',
    desc: 'The USAG XCel program offers a flexible, fun competitive experience. Multiple levels from Bronze to Platinum allow athletes to compete at the appropriate skill level with a less intensive training commitment than JO.',
  },
  elite: {
    title: 'JO Elite',
    subtitle: 'The Highest Level of Junior Olympic Competition',
    desc: 'Our elite-level program is for our most advanced athletes competing at the highest JO levels, with the potential to reach national and international competition.',
  },
  'power-tumbling': {
    title: 'Power Tumbling Team',
    subtitle: 'Competitive Tumbling Specialists',
    desc: 'Specialized tumbling team competing on the tumbling strip at USAG-sanctioned competitions. Athletes develop powerful, precise tumbling passes through dedicated training.',
  },
  'boys-preteam': {
    title: 'Boys Gymnastics Pre-TEAM',
    subtitle: 'Building the Next Generation of Boys Gymnasts',
    desc: 'Our Boys Pre-TEAM program identifies and develops talented young male gymnasts, preparing them for full competitive team participation.',
  },
}

const allTeams = [
  'JO Level 2–10 (Girls Gymnastics)',
  'JO Elite',
  'XCel (Bronze through Platinum)',
  'Power Tumbling TEAM',
  'Boys Gymnastics Pre-TEAM',
]

export default function Teams() {
  const { team } = useParams<{ team?: string }>()
  const data = teamData[team ?? 'jo-teams'] ?? teamData['jo-teams']

  return (
    <div>
      <PageHero title={data.title} subtitle={data.subtitle} />
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '60px 24px' }}>

        <p style={{ fontSize: 16, color: C.textGray, lineHeight: 1.8, marginBottom: 40 }}>
          {data.desc}
        </p>

        <div style={{ background: C.offWhite, padding: 32, marginBottom: 32 }}>
          <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1.4rem', marginBottom: 16 }}>
            All TAG USA Competitive Teams:
          </h3>
          {allTeams.map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, fontSize: 15, color: C.textDark }}>
              <span style={{ color: C.red, fontWeight: 700 }}>▶</span>{t}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24, marginBottom: 40 }}>
          {[
            { icon: '🏅', title: 'State Qualifiers',     desc: 'TAG USA athletes regularly qualify at the state level across multiple competitive disciplines.' },
            { icon: '🏆', title: 'National Qualifiers',  desc: 'We have produced numerous USA national qualifiers and national team members over the years.' },
            { icon: '⭐', title: 'Year-Round Training',  desc: 'Our competitive teams train year-round with structured periodization for peak competition performance.' },
            { icon: '👨‍🏫', title: 'Expert Coaching',     desc: 'Experienced coaches with decades of competitive gymnastics experience at every level.' },
          ].map((item, i) => (
            <div key={i} style={{ padding: 24, border: `1px solid ${C.lightGray}`, borderTop: `4px solid ${i % 2 === 0 ? C.red : C.navy}`, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{item.icon}</div>
              <h4 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1.1rem', marginBottom: 8 }}>{item.title}</h4>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.65 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: C.navy, color: '#fff', padding: 40, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.8rem', marginBottom: 8 }}>
            Schedule a Team Tryout
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 20, fontSize: 15 }}>
            Call us to discuss your athlete's potential and set up a tryout session!
          </p>
          <a href="tel:9543849191" style={{
            fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
            fontSize: '2.2rem', color: C.red, display: 'block',
          }}>954-384-9191</a>
        </div>
      </div>
    </div>
  )
}
