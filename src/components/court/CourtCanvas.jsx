// src/components/court/CourtCanvas.jsx
import { Stage, Layer, Rect, Line, Text, Arrow } from 'react-konva'
import { COURT } from '../../lib/courtConstants.js'
import PlayerMarker from './PlayerMarker.jsx'
import BallMarker from './BallMarker.jsx'

function drawCourtLines(court) {
  const { paddingX, paddingY, courtWidth, courtHeight, netY, kitchenDepth, lineColor } = court
  const right = paddingX + courtWidth
  const bottom = paddingY + courtHeight

  return [
    // Outer boundary
    { points: [paddingX, paddingY, right, paddingY, right, bottom, paddingX, bottom, paddingX, paddingY], key: 'boundary' },
    // Net
    { points: [paddingX, netY, right, netY], key: 'net', stroke: '#F8FAFC', strokeWidth: 2 },
    // Home kitchen (below net)
    { points: [paddingX, netY + kitchenDepth, right, netY + kitchenDepth], key: 'kitchen-home' },
    // Away kitchen (above net)
    { points: [paddingX, netY - kitchenDepth, right, netY - kitchenDepth], key: 'kitchen-away' },
    // Center line home side
    { points: [paddingX + courtWidth / 2, netY, paddingX + courtWidth / 2, bottom], key: 'center-home' },
    // Center line away side
    { points: [paddingX + courtWidth / 2, paddingY, paddingX + courtWidth / 2, netY], key: 'center-away' },
  ]
}

export default function CourtCanvas({ players, ball, arrows, labels, onMovePlayer, onMoveBall }) {
  const lines = drawCourtLines(COURT)

  return (
    <Stage width={COURT.width} height={COURT.height} style={{ background: COURT.backgroundColor }}>
      <Layer>
        {/* Court background */}
        <Rect
          x={COURT.paddingX}
          y={COURT.paddingY}
          width={COURT.courtWidth}
          height={COURT.courtHeight}
          fill={COURT.backgroundColor}
        />

        {/* Kitchen zones */}
        <Rect
          x={COURT.paddingX}
          y={COURT.netY}
          width={COURT.courtWidth}
          height={COURT.kitchenDepth}
          fill={COURT.kitchenColor}
          opacity={0.3}
        />
        <Rect
          x={COURT.paddingX}
          y={COURT.netY - COURT.kitchenDepth}
          width={COURT.courtWidth}
          height={COURT.kitchenDepth}
          fill={COURT.kitchenColor}
          opacity={0.3}
        />

        {/* Court lines */}
        {lines.map(line => (
          <Line
            key={line.key}
            points={line.points}
            stroke={line.stroke || COURT.lineColor}
            strokeWidth={line.strokeWidth || 1.5}
          />
        ))}

        {/* Net label */}
        <Text
          x={COURT.paddingX + COURT.courtWidth + 4}
          y={COURT.netY - 8}
          text="NET"
          fontSize={10}
          fill={COURT.lineColor}
        />

        {/* Arrows */}
        {arrows.map(arrow => (
          <Arrow
            key={arrow.id}
            points={[arrow.fromX, arrow.fromY, arrow.toX, arrow.toY]}
            stroke={COURT.arrowColor}
            strokeWidth={COURT.arrowStrokeWidth}
            fill={COURT.arrowColor}
            pointerLength={10}
            pointerWidth={8}
          />
        ))}

        {/* Labels */}
        {labels.map(label => (
          <Text
            key={label.id}
            x={label.x}
            y={label.y}
            text={label.text}
            fontSize={12}
            fill="#F8FAFC"
            fontStyle="bold"
          />
        ))}

        {/* Players */}
        {players.map(player => (
          <PlayerMarker
            key={player.id}
            player={player}
            onDragEnd={onMovePlayer}
          />
        ))}

        {/* Ball */}
        <BallMarker ball={ball} onDragEnd={onMoveBall} />
      </Layer>
    </Stage>
  )
}
