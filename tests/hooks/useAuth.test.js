// tests/hooks/useAuth.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { renderHook, act } from '@testing-library/react'

// Mock Supabase
vi.mock('../../src/lib/supabase.js', () => ({
  supabase: {
    auth: {
      getSession: vi.fn().mockResolvedValue({ data: { session: null } }),
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } }
      }),
    }
  }
}))

describe('useAuth', () => {
  it('starts with loading true and user null', async () => {
    const { useAuth } = await import('../../src/hooks/useAuth.js')
    const { result } = renderHook(() => useAuth())
    expect(result.current.loading).toBe(true)
    expect(result.current.user).toBeNull()
  })

  it('sets loading false after session check', async () => {
    const { useAuth } = await import('../../src/hooks/useAuth.js')
    const { result } = renderHook(() => useAuth())
    await act(async () => {})
    expect(result.current.loading).toBe(false)
  })

  it('exposes login, signup, logout functions', async () => {
    const { useAuth } = await import('../../src/hooks/useAuth.js')
    const { result } = renderHook(() => useAuth())
    expect(typeof result.current.login).toBe('function')
    expect(typeof result.current.signup).toBe('function')
    expect(typeof result.current.logout).toBe('function')
  })
})
