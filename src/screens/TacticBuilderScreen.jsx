// src/screens/TacticBuilderScreen.jsx
import { useCourt } from '../hooks/useCourt.js'
import CourtCanvas from '../components/court/CourtCanvas.jsx'
import AppHeader from '../components/layout/AppHeader.jsx'

export default function TacticBuilderScreen({ onBack }) {
  const {
    players, ball, arrows, labels,
    movePlayer, moveBall, addArrow, addLabel, resetCourt,
  } = useCourt()

  return (
    <div style={styles.container}>
      <AppHeader title="Tactic Builder" onBack={onBack} />

      <div style={styles.canvasWrapper}>
        <CourtCanvas
          players={players}
          ball={ball}
          arrows={arrows}
          labels={labels}
          onMovePlayer={movePlayer}
          onMoveBall={moveBall}
        />
      </div>

      <div style={styles.toolbar}>
        <button
          style={styles.toolBtn}
          onClick={() => addLabel({ x: 80, y: 80, text: 'Label' })}
          aria-label="Add text label"
        >
          T+
        </button>
        <button
          style={styles.toolBtn}
          onClick={resetCourt}
          aria-label="Reset court"
        >
          ↺
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100dvh',
    background: 'var(--color-background)',
    overflow: 'hidden',
  },
  canvasWrapper: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  toolbar: {
    display: 'flex',
    gap: 'var(--space-4)',
    padding: 'var(--space-4)',
    background: 'var(--color-surface)',
    borderTop: '1px solid var(--color-border)',
    justifyContent: 'center',
    paddingBottom: 'calc(var(--space-4) + env(safe-area-inset-bottom))',
  },
  toolBtn: {
    width: 56,
    height: 56,
    borderRadius: 'var(--radius-md)',
    background: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-foreground)',
    fontSize: 20,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
