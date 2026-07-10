import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '1rem' }}>
        Page not found
      </h1>
      <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>
        The page you’re looking for does not exist.
      </p>
      <Link href="/">Back to home</Link>
    </div>
  )
}