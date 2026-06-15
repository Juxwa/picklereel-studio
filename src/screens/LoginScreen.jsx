// src/screens/LoginScreen.jsx
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth.js'

export default function LoginScreen() {
  const { login, signup, error, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('login') // 'login' | 'signup'
  const [submitting, setSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setMessage('')

    if (mode === 'login') {
      const { error } = await login(email, password)
      if (error) setMessage(error)
    } else {
      const { error } = await signup(email, password)
      if (!error) setMessage('Check your email to confirm your account.')
      else setMessage(error)
    }
    setSubmitting(false)
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>PickleReel Studio</h1>
      <p style={styles.subtitle}>Create coaching videos in minutes</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={styles.input}
          placeholder="coach@example.com"
        />

        <label style={styles.label} htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          minLength={6}
          style={styles.input}
          placeholder="••••••"
        />

        {message && (
          <p style={error ? styles.errorText : styles.successText}>{message}</p>
        )}

        <button type="submit" disabled={submitting} style={styles.button}>
          {submitting ? 'Please wait...' : mode === 'login' ? 'Log In' : 'Create Account'}
        </button>
      </form>

      <button
        onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setMessage('') }}
        style={styles.toggleButton}
      >
        {mode === 'login' ? "Don't have an account? Sign up" : 'Already have an account? Log in'}
      </button>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100dvh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'var(--space-8)',
    background: 'var(--color-background)',
  },
  title: {
    fontSize: 32,
    color: 'var(--color-primary)',
    marginBottom: 'var(--space-2)',
    textAlign: 'center',
  },
  subtitle: {
    color: 'var(--color-muted)',
    marginBottom: 'var(--space-8)',
    textAlign: 'center',
  },
  form: {
    width: '100%',
    maxWidth: 360,
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-3)',
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    color: 'var(--color-foreground)',
  },
  input: {
    width: '100%',
    height: 'var(--touch-min)',
    padding: '0 var(--space-4)',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--color-foreground)',
    fontSize: 16,
    outline: 'none',
  },
  button: {
    height: 'var(--touch-min)',
    background: 'var(--color-primary)',
    color: '#0F172A',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
    marginTop: 'var(--space-2)',
  },
  toggleButton: {
    marginTop: 'var(--space-4)',
    background: 'none',
    border: 'none',
    color: 'var(--color-muted)',
    fontSize: 14,
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  errorText: {
    color: 'var(--color-destructive)',
    fontSize: 14,
  },
  successText: {
    color: 'var(--color-accent)',
    fontSize: 14,
  },
}
