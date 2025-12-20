
export default function ZoneMarker({ id, status, col, row }) {
  return (
    <div
      className={`zoneMarker zoneMarker--${status}`}
      style={{ gridColumn: col, gridRow: row }}
    >
      {id}
    </div>
  );
}
