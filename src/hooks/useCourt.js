// src/hooks/useCourt.js
import { useState, useCallback } from 'react'
import { DEFAULT_PLAYERS, DEFAULT_BALL } from '../lib/courtConstants.js'

function cloneDefaults() {
  return {
    players: DEFAULT_PLAYERS.map(p => ({ ...p })),
    ball: { ...DEFAULT_BALL },
    arrows: [],
    labels: [],
  }
}

export function useCourt() {
  const [state, setState] = useState(cloneDefaults)

  const movePlayer = useCallback((id, x, y) => {
    setState(prev => ({
      ...prev,
      players: prev.players.map(p => p.id === id ? { ...p, x, y } : p),
    }))
  }, [])

  const moveBall = useCallback((x, y) => {
    setState(prev => ({ ...prev, ball: { x, y } }))
  }, [])

  const addArrow = useCallback(({ fromX, fromY, toX, toY }) => {
    setState(prev => ({
      ...prev,
      arrows: [...prev.arrows, { id: crypto.randomUUID(), fromX, fromY, toX, toY }],
    }))
  }, [])

  const removeArrow = useCallback((id) => {
    setState(prev => ({
      ...prev,
      arrows: prev.arrows.filter(a => a.id !== id),
    }))
  }, [])

  const addLabel = useCallback(({ x, y, text }) => {
    setState(prev => ({
      ...prev,
      labels: [...prev.labels, { id: crypto.randomUUID(), x, y, text }],
    }))
  }, [])

  const removeLabel = useCallback((id) => {
    setState(prev => ({
      ...prev,
      labels: prev.labels.filter(l => l.id !== id),
    }))
  }, [])

  const resetCourt = useCallback(() => {
    setState(cloneDefaults())
  }, [])

  return {
    ...state,
    movePlayer,
    moveBall,
    addArrow,
    removeArrow,
    addLabel,
    removeLabel,
    resetCourt,
  }
}
