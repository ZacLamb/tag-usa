import { Link } from 'react-router-dom'
import { C } from '../constants'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 24px', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ fontSize: 72, marginBottom: 16 }}>🤸</div>
      <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: '3rem', color: C.navy, marginBottom: 8 }}>
        404 — Page Not Found
      </h1>
      <p style={{ color: C.textGray, marginBottom: 32, fontSize: 16 }}>
        Looks like this page stuck the landing somewhere else!
      </p>
      <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link to="/" className="btn-red" style={{ display: 'inline-block' }}>Back to Home</Link>
        <Link to="/classes" className="btn-navy" style={{ display: 'inline-block' }}>View Classes</Link>
        <Link to="/contact" className="btn-navy" style={{ display: 'inline-block' }}>Contact Us</Link>
      </div>
    </div>
  )
}
