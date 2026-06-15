import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('scaffold', () => {
  it('renders text', () => {
    render(<div>PickleReel Studio</div>)
    expect(screen.getByText('PickleReel Studio')).toBeDefined()
  })
})
