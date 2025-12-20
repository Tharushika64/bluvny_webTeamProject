export default function MapLegend() {
  return (
    <footer className="mapLegend">
      <LegendItem label="Robot Position" className="legend--robot" />
      <LegendItem label="Completed Zone" className="legend--completed" />
      <LegendItem label="In Progress" className="legend--progress" />
      <LegendItem label="Pending Zone" className="legend--pending" />
      <LegendItem label="Charging Station" className="legend--charging" />
    </footer>
  );
}

function LegendItem({ label, className }) {
  return (
    <div className="legendItem">
      <span className={`legendDot ${className}`} />
      {label}
    </div>
  );
}
