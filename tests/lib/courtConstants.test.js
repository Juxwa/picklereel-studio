// tests/lib/courtConstants.test.js
import { describe, it, expect } from 'vitest'
import { COURT, DEFAULT_PLAYERS, DEFAULT_BALL } from '../../src/lib/courtConstants.js'

describe('courtConstants', () => {
  it('COURT has width, height, and key zone dimensions', () => {
    expect(COURT.width).toBe(360)
    expect(COURT.height).toBe(640)
    expect(COURT.kitchenDepth).toBeGreaterThan(0)
    expect(COURT.lineColor).toBeDefined()
  })

  it('DEFAULT_PLAYERS has 4 players with required fields', () => {
    expect(DEFAULT_PLAYERS).toHaveLength(4)
    DEFAULT_PLAYERS.forEach(p => {
      expect(p).toHaveProperty('id')
      expect(p).toHaveProperty('x')
      expect(p).toHaveProperty('y')
      expect(p).toHaveProperty('label')
      expect(p).toHaveProperty('team') // 'home' | 'away'
    })
  })

  it('DEFAULT_BALL has x and y', () => {
    expect(DEFAULT_BALL).toHaveProperty('x')
    expect(DEFAULT_BALL).toHaveProperty('y')
  })
})
