import { C } from '../constants'

interface Props {
  title: string
  subtitle?: string
}

export default function PageHero({ title, subtitle }: Props) {
  return (
    <div style={{
      background: `linear-gradient(135deg, ${C.navy} 0%, ${C.navyDark} 100%)`,
      padding: '64px 24px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(45deg,rgba(255,255,255,0.025) 0,rgba(255,255,255,0.025) 1px,transparent 1px,transparent 22px)',
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900,
          fontSize: 'clamp(2rem,5vw,3.5rem)', color: '#fff',
          marginBottom: 8, letterSpacing: 1,
        }}>{title}</h1>
        {subtitle && (
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, fontFamily: "'Barlow',sans-serif" }}>
            {subtitle}
          </p>
        )}
        <div style={{ width: 60, height: 3, background: C.red, margin: '16px auto 0' }} />
      </div>
    </div>
  )
}
