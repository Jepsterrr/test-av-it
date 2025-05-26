'use client'

import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (user === 'test' && pass === 'password') {
      router.push('/dashboard')
    } else {
      setError('Fel användarnamn eller lösenord')
    }
  }

  return (
    <div className="login-container">
      <h1>Logga in</h1>
      <form onSubmit={handleSubmit} data-cy="login-form">
        <div>
          <label htmlFor="username">Användare</label>
          <input id="username" data-cy="input-username" value={user} onChange={e => setUser(e.target.value)} />
        </div>
        <div>
          <label htmlFor="password">Lösenord</label>
          <input id="password" data-cy="input-password" type="password" value={pass} onChange={e => setPass(e.target.value)} />
        </div>
        <button className="button" type="submit" data-cy="btn-submit">Submit</button>
      </form>
      {error && <p role="alert" data-cy="login-error">{error}</p>}
    </div>
  )
}