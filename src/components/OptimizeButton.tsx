'use client'
import { FC } from 'react'

interface OptimizeButtonProps {
  onClick: () => void
  loading: boolean
}

export default function OptimizeButton({ onClick, loading }: OptimizeButtonProps) {
  return (
    <button onClick={onClick} disabled={loading}>
      {loading ? 'Optimizing…' : 'Run Optimization'}
    </button>
  )
}