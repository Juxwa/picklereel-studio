// src/components/layout/AppHeader.jsx
import { ChevronLeft } from 'lucide-react'

export default function AppHeader({ title, onBack }) {
  return (
    <header style={styles.header}>
      {onBack && (
        <button onClick={onBack} style={styles.backBtn} aria-label="Go back">
          <ChevronLeft size={24} color="var(--color-foreground)" />
        </button>
      )}
      <h1 style={styles.title}>{title}</h1>
    </header>
  )
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 56,
    paddingTop: 'env(safe-area-inset-top)',
    paddingLeft: 'var(--space-4)',
    paddingRight: 'var(--space-4)',
    background: 'var(--color-surface)',
    borderBottom: '1px solid var(--color-border)',
    gap: 'var(--space-2)',
    flexShrink: 0,
  },
  backBtn: {
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: 'var(--radius-sm)',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: 'var(--color-foreground)',
    fontFamily: 'var(--font-heading)',
  },
}
