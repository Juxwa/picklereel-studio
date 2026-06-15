// tests/hooks/useCourt.test.js
import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCourt } from '../../src/hooks/useCourt.js'

describe('useCourt', () => {
  it('initializes with 4 players and a ball', () => {
    const { result } = renderHook(() => useCourt())
    expect(result.current.players).toHaveLength(4)
    expect(result.current.ball).toHaveProperty('x')
    expect(result.current.ball).toHaveProperty('y')
  })

  it('movePlayer updates the correct player position', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.movePlayer('p1', 100, 200) })
    const p1 = result.current.players.find(p => p.id === 'p1')
    expect(p1.x).toBe(100)
    expect(p1.y).toBe(200)
  })

  it('moveBall updates ball position', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.moveBall(150, 300) })
    expect(result.current.ball.x).toBe(150)
    expect(result.current.ball.y).toBe(300)
  })

  it('addArrow appends a new arrow', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.addArrow({ fromX: 0, fromY: 0, toX: 100, toY: 100 }) })
    expect(result.current.arrows).toHaveLength(1)
    expect(result.current.arrows[0]).toHaveProperty('id')
  })

  it('removeArrow removes the arrow by id', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.addArrow({ fromX: 0, fromY: 0, toX: 100, toY: 100 }) })
    const id = result.current.arrows[0].id
    act(() => { result.current.removeArrow(id) })
    expect(result.current.arrows).toHaveLength(0)
  })

  it('addLabel appends a text label', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.addLabel({ x: 50, y: 50, text: 'Dink here' }) })
    expect(result.current.labels).toHaveLength(1)
    expect(result.current.labels[0].text).toBe('Dink here')
  })

  it('resetCourt restores defaults', () => {
    const { result } = renderHook(() => useCourt())
    act(() => { result.current.movePlayer('p1', 999, 999) })
    act(() => { result.current.resetCourt() })
    const p1 = result.current.players.find(p => p.id === 'p1')
    expect(p1.x).not.toBe(999)
  })
})
