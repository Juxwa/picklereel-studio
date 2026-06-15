// tests/components/court/CourtCanvas.test.jsx
// Konva requires a native 'canvas' package in Node — mock it for unit tests.
// Real canvas rendering is verified manually in the browser/device.
import { describe, it, expect, vi } from 'vitest'

vi.mock('react-konva', () => ({
  Stage: ({ children }) => children,
  Layer: ({ children }) => children,
  Rect: () => null,
  Line: () => null,
  Text: () => null,
  Arrow: () => null,
  Circle: () => null,
  Group: ({ children }) => children,
}))

import { render } from '@testing-library/react'
import CourtCanvas from '../../../src/components/court/CourtCanvas.jsx'
import { DEFAULT_PLAYERS, DEFAULT_BALL } from '../../../src/lib/courtConstants.js'

describe('CourtCanvas', () => {
  it('renders without crashing', () => {
    expect(() => render(
      <CourtCanvas
        players={DEFAULT_PLAYERS}
        ball={DEFAULT_BALL}
        arrows={[]}
        labels={[]}
        onMovePlayer={() => {}}
        onMoveBall={() => {}}
      />
    )).not.toThrow()
  })
})
