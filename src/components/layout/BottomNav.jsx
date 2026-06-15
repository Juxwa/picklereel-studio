// src/components/layout/BottomNav.jsx
import { Plus, BookOpen, LayoutTemplate, User } from 'lucide-react'

const TABS = [
  { id: 'new', label: 'New Reel', Icon: Plus },
  { id: 'lessons', label: 'My Lessons', Icon: BookOpen },
  { id: 'templates', label: 'Templates', Icon: LayoutTemplate },
  { id: 'account', label: 'Account', Icon: User },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav style={styles.nav} aria-label="Main navigation">
      {TABS.map(({ id, label, Icon }) => {
        const active = activeTab === id
        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            style={{ ...styles.tab, ...(active ? styles.tabActive : {}) }}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={22} color={active ? 'var(--color-primary)' : 'var(--color-muted)'} />
            <span style={{ ...styles.label, color: active ? 'var(--color-primary)' : 'var(--color-muted)' }}>
              {label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    height: 'var(--bottom-nav-height)',
    paddingBottom: 'env(safe-area-inset-bottom)',
    background: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    flexShrink: 0,
  },
  tab: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 'var(--space-2) 0',
    minHeight: 'var(--touch-min)',
  },
  tabActive: {},
  label: {
    fontSize: 10,
    fontWeight: 500,
    fontFamily: 'var(--font-body)',
  },
}
