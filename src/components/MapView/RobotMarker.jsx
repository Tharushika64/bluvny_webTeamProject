export default function RobotMarker({ col, row }) {
  return (
    <div
      className="robotMarker"
      style={{ 
        gridColumn: col, 
        gridRow: row,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span className="robotLabel">Robot Active</span>
      🤖
    </div>
  );
}