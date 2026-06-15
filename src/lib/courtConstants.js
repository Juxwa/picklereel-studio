// src/lib/courtConstants.js
// All dimensions in px, designed for 360x640 9:16 canvas

export const COURT = {
  width: 360,
  height: 640,

  // Court padding from canvas edges
  paddingX: 20,
  paddingY: 60,

  // Derived court dimensions
  get courtWidth() { return this.width - this.paddingX * 2 },
  get courtHeight() { return this.height - this.paddingY * 2 },

  // Kitchen (non-volley zone) depth from net — 7ft of 44ft = ~16% of court
  get kitchenDepth() { return this.courtHeight * 0.16 },

  // Net position (center of court)
  get netY() { return this.paddingY + this.courtHeight / 2 },

  // Colors
  lineColor: '#334155',
  kitchenColor: '#1E3A5F',
  backgroundColor: '#0F172A',

  // Player
  playerRadius: 16,
  playerFontSize: 11,

  // Ball
  ballRadius: 8,

  // Arrow
  arrowStrokeWidth: 2.5,
  arrowColor: '#F97316',
}

export const DEFAULT_PLAYERS = [
  { id: 'p1', x: COURT.paddingX + COURT.courtWidth * 0.3, y: COURT.netY + 40, label: 'You', team: 'home' },
  { id: 'p2', x: COURT.paddingX + COURT.courtWidth * 0.7, y: COURT.netY + 40, label: 'Partner', team: 'home' },
  { id: 'p3', x: COURT.paddingX + COURT.courtWidth * 0.3, y: COURT.netY - 40, label: 'Opp 1', team: 'away' },
  { id: 'p4', x: COURT.paddingX + COURT.courtWidth * 0.7, y: COURT.netY - 40, label: 'Opp 2', team: 'away' },
]

export const DEFAULT_BALL = {
  x: COURT.width / 2,
  y: COURT.netY,
}
