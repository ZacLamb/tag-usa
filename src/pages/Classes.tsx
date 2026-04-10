// src/pages/Classes.tsx
import PageHero from '../components/PageHero'
import { C } from '../constants'

const classList = [
  { name: 'Baby Tumblers & Mommy',       age: '6 weeks to walking',  color: C.red,  desc: 'FREE! Gentle introduction to movement for babies and their mommies. Parent-assisted class on soft mats.' },
  { name: 'Parent & Me',                 age: 'Age 1',               color: C.navy, desc: 'Parent-assisted class building fundamental movement skills in a fun, safe environment.' },
  { name: 'Tiny Tots',                   age: 'Ages 1.5–2 yrs',      color: C.red,  desc: 'Beginning gymnastics movements with parent assistance. Fun, age-appropriate activities.' },
  { name: 'Preschool Gymnastics',        age: 'Ages 3–4 yrs',        color: C.navy, desc: 'Basic gymnastics skills on floor, beam, bars, and trampoline in a structured class.' },
  { name: 'Girls Beginner Intro',        age: 'Age 4–5',             color: C.red,  desc: 'Introduction to all gymnastics events: vault, bars, beam, and floor.' },
  { name: 'Girls Beginner 2',            age: 'Ages 5–6',            color: C.navy, desc: 'Building on intro skills with more complex movements and routines.' },
  { name: 'Girls Beginner 3',            age: 'Ages 7–9',            color: C.red,  desc: 'Advanced beginner skills preparing athletes for intermediate training.' },
  { name: 'Boys Beginner Gymnastics',    age: 'Ages 4–5',            color: C.navy, desc: 'Boys-specific gymnastics: floor, vault, parallel bars, and rings.' },
  { name: 'Coed Trampoline & Tumbling',  age: 'Ages 6–15',           color: C.red,  desc: 'Exciting trampoline and tumbling skills for boys and girls of all levels.' },
  { name: 'Girls Intermediate',          age: 'Various ages',        color: C.navy, desc: 'Intermediate level skills on all four events for competitive-level preparation.' },
  { name: 'Girls Advanced',              age: 'Various ages',        color: C.red,  desc: 'Advanced gymnastics training for high-level skills and competition preparation.' },
  { name: 'Girls Preteam & Junior Team', age: 'Selected athletes',   color: C.navy, desc: 'Structured team training for athletes showing exceptional potential.' },
  { name: 'Power Tumbling',              age: 'Ages 8–16',           color: C.red,  desc: 'Intermediate & Advanced tumbling for power and precision on the tumbling strip.' },
  { name: 'Beginner Cheerleading & Stunts', age: 'Various ages',    color: C.navy, desc: 'Cheer routines, jumps, and beginning stunts in a fun team environment.' },
]

export default function Classes() {
  return (
    <div>
      <PageHero title="CLASSES" subtitle="A Program for Every Age and Experience" />
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px' }}>
        <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.75, marginBottom: 40, maxWidth: 680 }}>
          TAG USA Gymnastics / Trampoline / Cheer offers classes on weekday mornings, afternoons, and Saturdays.
          Register by calling <a href="tel:9543849191" style={{ color: C.navy, fontWeight: 700 }}>954-384-9191</a>.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 22 }}>
          {classList.map((cls, i) => (
            <div key={i} style={{ border: `1px solid ${C.lightGray}`, borderTop: `4px solid ${cls.color}`, padding: 22, boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.2rem', color: cls.color, marginBottom: 4 }}>{cls.name}</h3>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: '0.82rem', color: C.textGray, background: C.offWhite, padding: '2px 8px', display: 'inline-block', marginBottom: 10 }}>{cls.age}</div>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.65 }}>{cls.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block', padding: '16px 48px', fontSize: 18 }}>
            CALL 954-384-9191 TO REGISTER
          </a>
        </div>
      </div>
    </div>
  )
}
