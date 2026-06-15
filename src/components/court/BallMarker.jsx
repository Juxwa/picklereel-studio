// src/components/court/BallMarker.jsx
import { Circle, Group } from 'react-konva'
import { COURT } from '../../lib/courtConstants.js'

export default function BallMarker({ ball, onDragEnd }) {
  return (
    <Group
      x={ball.x}
      y={ball.y}
      draggable
      onDragEnd={e => onDragEnd(e.target.x(), e.target.y())}
    >
      <Circle
        radius={COURT.ballRadius}
        fill={COURT.arrowColor}
        stroke="#F8FAFC"
        strokeWidth={1.5}
        shadowBlur={4}
        shadowColor="#F97316"
        shadowOpacity={0.5}
      />
    </Group>
  )
}
