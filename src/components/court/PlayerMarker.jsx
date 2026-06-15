// src/components/court/PlayerMarker.jsx
import { Circle, Text, Group } from 'react-konva'
import { COURT } from '../../lib/courtConstants.js'

export default function PlayerMarker({ player, onDragEnd }) {
  const color = player.team === 'home' ? COURT.arrowColor : '#60A5FA'

  return (
    <Group
      x={player.x}
      y={player.y}
      draggable
      onDragEnd={e => onDragEnd(player.id, e.target.x(), e.target.y())}
    >
      <Circle
        radius={COURT.playerRadius}
        fill={color}
        shadowBlur={6}
        shadowColor={color}
        shadowOpacity={0.4}
      />
      <Text
        text={player.label}
        fontSize={COURT.playerFontSize}
        fill="#0F172A"
        fontStyle="bold"
        align="center"
        verticalAlign="middle"
        width={COURT.playerRadius * 2}
        height={COURT.playerRadius * 2}
        offsetX={COURT.playerRadius}
        offsetY={COURT.playerRadius}
      />
    </Group>
  )
}
