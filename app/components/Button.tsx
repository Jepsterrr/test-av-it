import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      data-cy="generic-button"
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        borderRadius: '0.25rem',
        backgroundColor: '#0070f3',
        color: '#fff',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}