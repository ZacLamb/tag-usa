import { C } from '../constants'

interface Props {
  title: string
  subtitle?: string
  image?: string
}

export default function PageHero({ title, subtitle, image }: Props) {
  return (
    <div style={{
      background: image
        ? `linear-gradient(rgba(15,21,37,0.72), rgba(15,21,37,0.72)), url(${image}) center/cover no-repeat`
        : `linear-gradient(135deg, ${C.navy} 0%, #0f1a42 100%)`,
      padding: '80px 24px',
      textAlign: 'center',
      position: 'relative',
    }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ width: 40, height: 2, background: C.red, margin: '0 auto 18px' }} />
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2rem, 5vw, 3.2rem)',
          color: '#fff',
          marginBottom: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
        }}>{title}</h1>
        {subtitle && (
          <p style={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: 15,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 400,
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>{subtitle}</p>
        )}
      </div>
    </div>
  )
}
