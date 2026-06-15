// src/screens/HomeScreen.jsx
import { useState } from 'react'
import BottomNav from '../components/layout/BottomNav.jsx'
import TacticBuilderScreen from './TacticBuilderScreen.jsx'

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('new')
  const [building, setBuilding] = useState(false)

  if (building) {
    return <TacticBuilderScreen onBack={() => setBuilding(false)} />
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.appName}>PickleReel Studio</h1>
      </header>

      <main style={styles.main}>
        {activeTab === 'new' && (
          <div style={styles.content}>
            <h2 style={styles.sectionTitle}>Start a New Reel</h2>
            <button style={styles.primaryCta} onClick={() => setBuilding(true)}>
              + New Tactic
            </button>
          </div>
        )}
        {activeTab === 'lessons' && (
          <div style={styles.content}>
            <p style={styles.empty}>No lessons saved yet. Create your first tactic.</p>
          </div>
        )}
        {activeTab === 'templates' && (
          <div style={styles.content}>
            <p style={styles.empty}>Templates coming soon.</p>
          </div>
        )}
        {activeTab === 'account' && (
          <div style={styles.content}>
            <p style={styles.empty}>Account settings coming soon.</p>
          </div>
        )}
      </main>

      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    background: 'var(--color-background)',
  },
  header: {
    paddingTop: 'env(safe-area-inset-top)',
    padding: 'var(--space-4)',
    background: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
    flexShrink: 0,
  },
  appName: {
    fontSize: 22,
    color: 'var(--color-primary)',
    fontFamily: 'var(--font-heading)',
  },
  main: {
    flex: 1,
    overflow: 'auto',
  },
  content: {
    padding: 'var(--space-8) var(--space-4)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-6)',
  },
  sectionTitle: {
    fontSize: 24,
    color: 'var(--color-foreground)',
    fontFamily: 'var(--font-heading)',
  },
  primaryCta: {
    height: 56,
    background: 'var(--color-primary)',
    color: '#0F172A',
    border: 'none',
    borderRadius: 'var(--radius-md)',
    fontSize: 18,
    fontWeight: 700,
    fontFamily: 'var(--font-heading)',
    cursor: 'pointer',
  },
  empty: {
    color: 'var(--color-muted)',
    textAlign: 'center',
    marginTop: 'var(--space-8)',
  },
}
