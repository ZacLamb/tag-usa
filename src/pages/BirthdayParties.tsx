import PageHero from '../components/PageHero'
import { C } from '../constants'

const included = [
  'Full use of ALL gymnastics & trampoline equipment',
  'Bars, obstacles, beams, trampolines, pits, inflatables, ropes, and floors',
  'Two large private party rooms to choose from',
  'Two dedicated coaches for the entire party',
  'Full setup, child direction, serving & cleanup',
  'Available Saturday and Sunday',
]

export default function BirthdayParties() {
  return (
    <div>
      <PageHero title="BIRTHDAY PARTIES" subtitle="The Most Fun Birthday Party in South Florida!" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div className="two-col" style={{ display: 'flex', flexWrap: 'wrap', gap: 48 }}>

          {/* Left */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '2rem', color: C.navy, marginBottom: 14 }}>
              Private Birthday Parties
            </h2>
            <div style={{ width: 60, height: 3, background: C.red, marginBottom: 20 }} />

            <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.8, marginBottom: 14 }}>
              The entire gymnastics and trampoline areas are all yours for a <strong style={{ color: C.red }}>PRIVATE</strong> birthday party for your child and your guests.
            </p>
            <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.8, marginBottom: 14 }}>
              Parties use <strong>ALL</strong> of the bars, obstacles, beams, trampolines, pits, inflatables, ropes, and floors.
            </p>
            <p style={{ fontSize: 15, color: C.textGray, lineHeight: 1.8, marginBottom: 24 }}>
              Choose from two large private party rooms. Our two coaches will help set up, direct the children, serve and clean up for an easy and fun birthday celebration.
            </p>

            <div style={{ background: C.offWhite, padding: 24, marginBottom: 24, borderLeft: `5px solid ${C.red}` }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: '1.1rem', color: C.navy, marginBottom: 12 }}>
                What's Included:
              </div>
              {included.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 7, fontSize: 14, color: C.textDark }}>
                  <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                </div>
              ))}
            </div>

            <div style={{ background: C.navy, color: '#fff', padding: 28, textAlign: 'center' }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.4rem', marginBottom: 8 }}>
                Reservations by phone:
              </div>
              <a href="tel:9543849191" style={{
                fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
                fontSize: '2rem', color: C.red, display: 'block',
              }}>954-384-9191</a>
              <p style={{ color: 'rgba(255,255,255,0.55)', marginTop: 8, fontSize: 13 }}>
                Saturday and Sunday options available
              </p>
            </div>
          </div>

          {/* Right */}
          <div style={{ flexShrink: 0, width: 300 }}>
            <div style={{
              background: 'linear-gradient(135deg,#fce4ec,#f8bbd9)',
              padding: 40, textAlign: 'center', marginBottom: 16,
            }}>
              <div style={{ fontSize: 80, marginBottom: 14 }}>🎂</div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.8rem', color: C.navy, marginBottom: 8 }}>
                Book Your Party!
              </div>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.6 }}>
                Make it an unforgettable day at TAG USA's world-class facility.
              </p>
            </div>
            <a href="tel:9543849191" className="btn-red" style={{ display: 'block', textAlign: 'center', padding: 16, fontSize: 16 }}>
              Call to Book: 954-384-9191
            </a>

            <div style={{ marginTop: 24, background: C.offWhite, padding: 20 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, color: C.navy, fontSize: '1rem', marginBottom: 10 }}>
                Party FAQs:
              </div>
              {[
                ['When are parties?', 'Saturday and Sunday options available.'],
                ['How many guests?', 'Call us to discuss capacity for your group.'],
                ['How do I reserve?', 'Call 954-384-9191 to check availability and book.'],
                ['What do we bring?', 'Just your cake and guests — we handle everything else!'],
              ].map(([q, a]) => (
                <div key={q} style={{ marginBottom: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 13, color: C.navy, marginBottom: 2 }}>{q}</div>
                  <div style={{ fontSize: 13, color: C.textGray }}>{a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
