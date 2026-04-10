import { Link } from 'react-router-dom'
import { C } from '../constants'

// ── data ──────────────────────────────────────────────────────────────────────
const quickLinks1 = [
  { label: 'Classes',   emoji: '🤸', to: '/classes' },
  { label: 'Camps',     emoji: '⛺', to: '/classes/camps' },
  { label: 'Birthdays', emoji: '🎂', to: '/birthday-parties' },
]
const quickLinks2 = [
  { label: 'Afterschool\nShuttle Pick Up', emoji: '🚐', to: '/classes/aftercare' },
  { label: 'Competitive\nTeams',           emoji: '🏆', to: '/teams/jo-teams' },
  { label: 'Open Gym',                     emoji: '🏅', to: '/open-gym' },
]
const strip = [
  { bg: '#2a4a3a', emoji: '🤸‍♀️', label: 'Classes' },
  { bg: '#1a3a4a', emoji: '🏅',  label: 'Competitions' },
  { bg: '#c2185b', emoji: '🎀',  label: 'Cheer' },
  { bg: '#1a3a5a', emoji: '🏟️', label: 'Facility' },
  { bg: '#2a2a4a', emoji: '🚐',  label: 'Aftercare Van' },
]
const recClasses = [
  'FREE Baby Tumblers & Mommy (6 weeks to walking)',
  'Parent & Me (age 1) and Tiny Tots (age 1.5–2 yrs)',
  'Preschool (3–4 yr olds)',
  'Girls Beginner Intro (age 4–5)',
  'Girls Beginner 2 (5–6 yr olds) and Girls Beginner 3 (ages 7–9)',
  'Boys Beginner Gymnastics (ages 4–5)',
  'Coed Trampoline & Tumbling (ages 6–15)',
  'Girls Intermediate or Advanced',
  'Girls Preteam and Junior Team',
  'Power Tumbling for Intermediate & Advanced (ages 8–16)',
  'Beginner Cheerleading & Stunts',
]
const socialCards = [
  { bg: '#111', emoji: '🏆', title: 'START LEARNING TODAY', sub: '10 Week Sessions — Newborns & up' },
  { bg: C.red,  emoji: '📋', title: 'TRYOUTS — Aug 13th',   sub: 'Open to all who missed summer tryouts!' },
  { bg: '#e91e8c', emoji: '👑', title: 'WEDNESDAY — Once upon a glam!', sub: 'Princesses sparkle with hair & nails' },
  { bg: '#111', emoji: '🍝', title: 'WEDNESDAY — Spaghetti & Meatballs', sub: 'Hands-on Italian cooking experience' },
  { bg: '#7b1fa2', emoji: '🎀', title: 'WEDNESDAY — Dreamhouse Pajama Party!', sub: 'Pillows, popcorn & PJs all day!' },
]

// ── component ─────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div>

      {/* HERO */}
      <section style={{
        background: `linear-gradient(135deg,${C.maroon} 0%,#3d0808 58%,#1a1a1a 100%)`,
        minHeight: '88vh', display: 'flex', alignItems: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* bg banner texture */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: '36%', height: '100%',
          display: 'flex', flexWrap: 'wrap', gap: 4, padding: 8,
          overflow: 'hidden', pointerEvents: 'none',
        }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.05)', borderRadius: 3,
              padding: '5px 9px', fontSize: 8,
              color: 'rgba(255,255,255,0.2)', fontWeight: 700,
              whiteSpace: 'nowrap', fontFamily: "'Barlow Condensed',sans-serif",
            }}>
              {['ALL STAR TEAM 2017','NATIONAL FLORIDA 2016','TEAM ALL STAR 2016','National Qualifier 2016','NATIONAL QUALIFIER 2015','2014-15 USA National Team','USA National Qualifier 2014'][i % 7]}
            </div>
          ))}
        </div>

        <div style={{
          maxWidth: 1200, margin: '0 auto', padding: '56px 24px',
          display: 'flex', flexWrap: 'wrap', gap: 40, alignItems: 'center',
          position: 'relative', zIndex: 2, width: '100%',
        }}>

          {/* LEFT */}
          <div style={{ flex: '1 1 460px' }}>
            <h1 style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
              fontSize: 'clamp(2.4rem,6vw,4.4rem)', color: '#fff', lineHeight: 1, marginBottom: 14,
            }}>TAG <span style={{ color: C.red }}>USA</span> GYMNASTICS</h1>
            <div style={{ width: 80, height: 3, background: C.red, marginBottom: 20 }} />

            <p style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700,
              fontSize: '1.3rem', color: '#fff', marginBottom: 8,
            }}>Welcome to TAG USA Gymnastics Cheer and Trampoline</p>

            <p style={{ color: '#ccc', fontSize: 15, lineHeight: 1.65, marginBottom: 26 }}>
              We are South Florida's <strong style={{ color: '#fff' }}>POPULAR</strong> and{' '}
              <strong style={{ color: '#fff' }}>FAMOUS</strong> destination for youth classes and
              competitive team gymnastics training!
            </p>

            {[
              { label: 'next SPORTS CAMP:',  val: 'Sept 23, Oct 2, Oct 13, Oct 20',                                                                                                                     valC: '#ddd' },
              { label: 'CLASSES:',           val: 'Baby Tumblers, Tiny Tots, Preschool, Girls Beginner, Boys Beginner, Coed Trampoline, Girls Intermediate, Girls Advanced, Pre-Team, Acro Power Tumbling, Beginner Cheer', valC: C.cyan },
              { label: 'COMPETITIVE TEAMS:', val: 'JO L2-10, JO Elite, and XCel',                                                                                                                        valC: '#ddd' },
              { label: 'BIRTHDAY PARTIES:',  val: 'Saturday and Sunday options',                                                                                                                          valC: '#ddd' },
              { label: 'OPEN GYM:',          val: 'every Saturday Night 6:30–10pm',                                                                                                                       valC: '#ddd' },
              { label: 'SCHOOL AFTERCARE:',  val: 'Van pickup or Parent drop off',                                                                                                                         valC: '#ddd' },
            ].map(row => (
              <div key={row.label} style={{ marginBottom: 9 }}>
                <span style={{
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
                  fontSize: '0.95rem', color: '#fff',
                }}>{row.label} </span>
                <span style={{ color: row.valC, fontSize: 14 }}>{row.val}</span>
              </div>
            ))}

            <div style={{ marginTop: 20, marginBottom: 4, fontSize: 15, color: '#fff' }}>
              <strong>Visit and tour</strong>{' '}
              <span style={{ color: '#ccc' }}>to see what makes our gym so <strong style={{ color: '#fff' }}>SPECTACULAR</strong>!</span>
            </div>
            <div style={{ color: '#ccc', fontSize: 15, marginBottom: 28 }}>
              Please call us for information:{' '}
              <a href="tel:9543849191" style={{ color: C.cyan, fontWeight: 700 }}>954-384-9191</a>
            </div>

            {/* Quick-link icon buttons row 1 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 10 }}>
              {quickLinks1.map(item => (
                <Link key={item.label} to={item.to} style={{
                  background: C.red, color: '#fff', padding: '10px 18px',
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 15,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: 4, minWidth: 88, textAlign: 'center',
                }}>
                  <span style={{ fontSize: 22 }}>{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Quick-link icon buttons row 2 */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {quickLinks2.map(item => (
                <Link key={item.label} to={item.to} style={{
                  background: C.red, color: '#fff', padding: '10px 14px',
                  fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 12,
                  display: 'flex', flexDirection: 'column', alignItems: 'center',
                  gap: 4, maxWidth: 110, textAlign: 'center', whiteSpace: 'pre-line',
                }}>
                  <span style={{ fontSize: 22 }}>{item.emoji}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Card */}
          <div className="hero-cta-card" style={{
            flex: '0 0 294px', background: '#fff',
            border: `3px solid ${C.red}`, padding: '32px 24px',
            textAlign: 'center', boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
          }}>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.05rem', color: C.red, marginBottom: 8 }}>
              Call for information
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '0.95rem', color: C.navy, marginBottom: 14 }}>
              new CLASSES runnig now!
            </div>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.5rem', color: C.red, lineHeight: 1.05, marginBottom: 4 }}>
              REGISTER TODAY!
            </div>
            <a href="tel:9543849191" style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
              fontSize: '2.2rem', color: C.red, display: 'block', marginBottom: 10,
            }}>954-384-9191</a>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.1rem', color: C.navy, marginBottom: 20 }}>
              IT'S QUICK AND EASY
            </div>
            <a href="tel:9543849191" className="btn-navy" style={{ display: 'block', padding: 14 }}>
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <div className="photo-strip" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', height: 180 }}>
        {strip.map((p, i) => (
          <div key={i} className="photo-placeholder" style={{ background: p.bg }}>
            <span>{p.emoji}</span>
            <span style={{ fontSize: 12, letterSpacing: 1 }}>{p.label}</span>
          </div>
        ))}
      </div>

      {/* SERVICES GRID */}
      <section style={{ padding: '64px 24px', maxWidth: 1200, margin: '0 auto' }}>
        <div className="service-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(255px,1fr))', gap: 40 }}>
          <ServiceCard title="CLASSES" to="/classes" body={`Learn tumbling, gymnastics bars & beam, trampoline, and cheer at TAG USA.\n\nFREE baby classes\n• Tiny Tots (2 yrs old)\n• Preschool (3 yrs old)\n• Beginner Boys · Acro-Tumble\n• Trampoline · Beginner Girls\n• Intro Cheer · Intermediate\n• Advanced · PreTeam · Team\n\nCALL 954-384-9191 to join`} />
          <ServiceCard title="SPORTS CAMP 2025–26" to="/classes/camps" body={`YES, TAG USA has camp during Aug 4–8.\n\nKeep the kids active and happy with our Girls Gymnastics and Boys Sports Camp!\n\nFull day camps for SUMMER, School Days Off, Thanksgiving, Winter, and Spring Break weeks.\n\nRegister NOW for your favorite Summer Camp THEME weeks.`} />
          <ServiceCard title="BIRTHDAY PARTIES" to="/birthday-parties" body={`The entire gymnastics and trampoline areas are all yours for a PRIVATE bday party for your child and guests.\n\nParties use ALL bars, obstacles, beams, trampolines, pits, inflatables, ropes, and floors. Two large private party rooms. Two coaches included.\n\nReservations by phone: 954-384-9191`} />
          <ServiceCard title="AFTERSCHOOL SHUTTLE PICKUP" to="/classes/aftercare" body={`Make your life easier by using our van pickup from school with an afternoon full of sports activities.\n\nYour athlete trains with a team coach on beams, trampoline, bars, and tumbling. Then open play on trampolines, rope swing, foam pit, and more.\n\nLIMITED — Register NOW for 2025–26.`} />
        </div>
      </section>

      {/* RECREATIONAL CLASSES */}
      <section style={{ background: C.offWhite, padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
          <div style={{
            flexShrink: 0, width: 256, height: 320, background: C.navy,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontFamily: "'Barlow Condensed',sans-serif",
            fontWeight: 900, fontSize: '2.8rem', textAlign: 'center', lineHeight: 1.1,
          }}>
            <div>🏆<br />TAG USA<br /><span style={{ color: C.red }}>CHAMPION</span></div>
          </div>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.navy, marginBottom: 8 }}>
              Recreational Classes and Competitive Teams
            </h2>
            <div style={{ width: 60, height: 3, background: C.red, marginBottom: 18 }} />
            <p style={{ fontWeight: 600, marginBottom: 14 }}>
              TAG USA Gymnastics / Trampoline / Cheer has a program for every age and experience…..
            </p>
            <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, color: C.navy, fontSize: '1.05rem', marginBottom: 10, textDecoration: 'underline' }}>
              Morning, weekday afternoon and saturday classes:
            </p>
            <div style={{ columns: 2, gap: 24, marginBottom: 20 }}>
              {recClasses.map((cls, i) => (
                <div key={i} style={{ color: C.navy, fontSize: 13, marginBottom: 5, breakInside: 'avoid', fontWeight: 600 }}>{cls}</div>
              ))}
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: 18, fontSize: 15 }}>
              Register by phone at <a href="tel:9543849191" style={{ color: C.navy, fontWeight: 700 }}>954-384-9191</a>
            </p>
            <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.05rem', color: C.red, marginBottom: 6 }}>
              Competitive Teams:
            </div>
            {['Power Tumbling TEAM', 'Boys Gymnastics Pre-TEAM'].map(t => (
              <div key={t} style={{ color: C.navy, fontWeight: 600, fontSize: 14, marginBottom: 4 }}>{t}</div>
            ))}
            <p style={{ fontStyle: 'italic', fontSize: 14, color: C.textGray, margin: '10px 0 20px' }}>
              Schedule a team tryout by calling <a href="tel:9543849191" style={{ color: C.navy, fontWeight: 700 }}>954-384-9191</a>
            </p>
            <Link to="/classes" className="btn-navy" style={{ display: 'inline-block' }}>CLASSES</Link>
          </div>
        </div>
      </section>

      {/* CAMP / AFTERCARE PRICING */}
      <section style={{ padding: '64px 24px', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: C.red, marginBottom: 4 }}>Need more activities?</h2>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: C.red, marginBottom: 6 }}>Sports? Trampolines? Tumbling? Gymnastics?</p>
        <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: C.red, marginBottom: 22 }}>Do Camp or Aftercare!</h3>
        <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.8, marginBottom: 28 }}>
          Our day <strong style={{ color: C.navy }}>camps</strong> and <strong style={{ color: C.navy }}>Aftercare programs</strong> allow you to stay at work or have some quiet time while your children enjoy their day at our gym with trampolines, gymnastics, Tumbling, Dodgeball, Inflatables, Basketball, Color War, Soccer, Ninja, Tumble Tracks, Arts/Crafts, and more.
        </p>
        <PricingBlock title="SCHOOL DAYS OFF / HOLIDAY SPORTS CAMPS" rows={[
          ['Hours', '8:30am – 3:45pm'],
          ['Late care available until', '6:00pm'],
          ['Members', '$65/day  or  $310 for a week'],
          ['Non-members', '$70/day  or  $325 for a week'],
        ]} />
        <div style={{ height: 24 }} />
        <PricingBlock title="AFTERCARE PROGRAM:" rows={[
          ['Hours', '2:30pm – 6:00pm'],
          ['Van Pick-up', '$495/month'],
          ['Parent Drop Off', '$370/month'],
        ]} />
        <div style={{ marginTop: 28 }}>
          <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block' }}>Register by phone 954-384-9191</a>
        </div>
      </section>

      {/* AFTERSCHOOL SHUTTLE BANNER */}
      <section style={{ background: '#1e2235', padding: '64px 24px' }}>
        <div className="two-col" style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 48, alignItems: 'center' }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.cyan, marginBottom: 8 }}>
              After-School Shuttle Pick Up
            </h2>
            <div style={{ width: 60, height: 3, background: C.cyan, marginBottom: 18 }} />
            <p style={{ color: '#ccc', fontSize: 14, lineHeight: 1.8, marginBottom: 18 }}>
              TAG USA Gymnastics offers after school programs with Van Pick-up or Parent Drop-off option. Please review our schedule.
            </p>
            {[
              ['Pick-up from school:', '2:00pm'],
              ['Team Coached Class', 'at 2:30pm – 3:20pm'],
              ['Snack – Homework – Crafts from', '3:30 – 4:15pm'],
              ['Open Gym', 'for Trampolines, Bars, Beams from 4:30 – 6:00pm'],
            ].map(([k, v]) => (
              <div key={k} style={{ fontSize: 14, color: '#fff', marginBottom: 7 }}>
                <strong style={{ color: C.cyan }}>{k}</strong> {v}
              </div>
            ))}
            <div style={{
              fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
              color: C.red, fontSize: '0.95rem', margin: '16px 0 22px',
            }}>EARLY REGISTRATION DISCOUNT for the 2025–26 school year</div>
            <Link to="/classes/aftercare" className="btn-cyan" style={{ display: 'inline-block' }}>Learn more</Link>
          </div>
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: 180, height: 180, background: '#f5a623',
              borderRadius: '50%', display: 'flex',
              alignItems: 'center', justifyContent: 'center', fontSize: 84,
            }}>🤸‍♀️</div>
          </div>
        </div>
      </section>

      {/* STAY SOCIAL */}
      <section style={{ padding: '56px 24px', textAlign: 'center', background: '#fff' }}>
        <h2 style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontStyle: 'italic',
          fontWeight: 900, fontSize: '2.4rem', color: C.textDark, marginBottom: 8,
        }}>Stay Social</h2>
        <p style={{ color: C.textGray, marginBottom: 32 }}>
          Tag <strong>#taggymnasticsfl</strong> to be featured on Instagram
        </p>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))',
          gap: 8, maxWidth: 1000, margin: '0 auto',
        }}>
          {socialCards.map((c, i) => (
            <div key={i} style={{
              background: c.bg, padding: '20px 12px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              minHeight: 148, gap: 6,
            }}>
              <span style={{ fontSize: 28 }}>{c.emoji}</span>
              <div style={{
                fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
                fontSize: '0.82rem', color: '#fff', textAlign: 'center', lineHeight: 1.25,
              }}>{c.title}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', textAlign: 'center', lineHeight: 1.3 }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

// ── small shared sub-components ───────────────────────────────────────────────
function ServiceCard({ title, body, to }: { title: string; body: string; to: string }) {
  return (
    <div style={{ borderTop: `4px solid ${C.navy}`, paddingTop: 18 }}>
      <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.5rem', color: C.navy, marginBottom: 10 }}>
        {title}
      </h3>
      <div style={{ fontSize: 14, color: C.textGray, lineHeight: 1.85, whiteSpace: 'pre-line', marginBottom: 18 }}>
        {body}
      </div>
      <Link to={to} className="btn-navy" style={{ display: 'inline-block' }}>More Details</Link>
    </div>
  )
}

function PricingBlock({ title, rows }: { title: string; rows: string[][] }) {
  return (
    <div>
      <div style={{
        fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800,
        fontSize: '0.95rem', color: C.navy, letterSpacing: 1, marginBottom: 10,
      }}>{title}</div>
      {rows.map(([k, v]) => (
        <div key={k} style={{ fontSize: 14, color: C.textDark, marginBottom: 5 }}>
          <strong>{k}</strong>{'  '}{v}
        </div>
      ))}
    </div>
  )
}
