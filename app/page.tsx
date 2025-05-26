import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Välkommen till Test-app!</h1>
      <p className='button'><Link href="/login">Logga in</Link></p>
    </main>
  )
}