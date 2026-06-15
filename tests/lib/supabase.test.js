// tests/lib/supabase.test.js
import { describe, it, expect, vi, beforeEach } from 'vitest'

describe('supabase client', () => {
  beforeEach(() => {
    import.meta.env.VITE_SUPABASE_URL = 'https://test.supabase.co'
    import.meta.env.VITE_SUPABASE_ANON_KEY = 'test-key'
  })

  it('exports a supabase client object', async () => {
    const { supabase } = await import('../../src/lib/supabase.js')
    expect(supabase).toBeDefined()
    expect(typeof supabase.auth.signInWithPassword).toBe('function')
  })
})
