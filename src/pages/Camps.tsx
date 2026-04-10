import PageHero from '../components/PageHero'
import { C } from '../constants'

export default function Camps() {
  return (
    <div>
      <PageHero title="SPORTS CAMPS" subtitle="Keep Kids Active & Happy Year-Round" />
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 30, marginBottom: 48 }}>
          {[
            {
              icon: '☀️', title: 'Summer Sports Camp',
              dates: 'Aug 4–8 + themed weeks all summer',
              desc: 'Girls Gymnastics and Boys Sports Camps! Full day camps with themed activities, sports, crafts, and more. Choose from weekly THEME packages your kids will love.',
              price: 'Members $65/day\nNon-members $70/day',
            },
            {
              icon: '🏫', title: 'School Days Off / Holiday Camps',
              dates: 'Thanksgiving · Winter Break · Spring Break & all school days off',
              desc: 'Keep your athlete active when school is out. Full day program with gymnastics, trampolines, tumbling, dodgeball, inflatables, basketball, color war, soccer, ninja courses, arts & crafts, and more!',
              price: 'Members $65/day or $310/week\nNon-members $70/day or $325/week',
            },
            {
              icon: '🎯', title: 'Camp Activities',
              dates: 'Available at all camp sessions',
              desc: '• Gymnastics & Trampoline\n• Tumbling & Dodgeball\n• Inflatables & Basketball\n• Color War & Soccer\n• Ninja Course & Tumble Tracks\n• Arts & Crafts\n• And much more!',
              price: '',
            },
          ].map((camp, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid ${C.lightGray}`, borderTop: `5px solid ${C.red}`, padding: 28, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{camp.icon}</div>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.4rem', color: C.navy, marginBottom: 6 }}>{camp.title}</h3>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", color: C.red, fontWeight: 700, fontSize: '0.9rem', marginBottom: 14 }}>{camp.dates}</div>
              <p style={{ fontSize: 14, color: C.textGray, lineHeight: 1.75, whiteSpace: 'pre-line', marginBottom: 16 }}>{camp.desc}</p>
              {camp.price && <div style={{ background: C.offWhite, padding: '10px 14px', fontWeight: 700, fontSize: 13, color: C.navy, whiteSpace: 'pre-line' }}>{camp.price}</div>}
            </div>
          ))}
        </div>
        <div style={{ background: C.offWhite, padding: 32, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '1.6rem', color: C.navy, marginBottom: 10 }}>Camp Hours</div>
          <div style={{ fontSize: 15, color: C.textGray, marginBottom: 20 }}>
            <strong>Regular Hours:</strong> 8:30am – 3:45pm &nbsp;|&nbsp; <strong>Late Care until:</strong> 6:00pm
          </div>
          <a href="tel:9543849191" className="btn-red" style={{ display: 'inline-block' }}>Register by phone 954-384-9191</a>
        </div>
      </div>
    </div>
  )
}
