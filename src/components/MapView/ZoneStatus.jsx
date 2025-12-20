import useRobotData from "./useRobotData";

export default function ZoneStatus() {
  const { zones } = useRobotData();

  return (
    <section className="zoneStatus">
        <section className="mapright">
         <div className="mapSectionHeader">
      <h2 className="zoneStatusTitle">Zone Status</h2>
      </div>
        </section>
    <section className="zoneDivider">
      <div className="zoneStatusList">
        {zones.map((zone) => (
          <div key={zone.id} className="zoneRow">
            <span>Zone {zone.id}</span>
            <span className={`zoneBadge zoneBadge--${zone.status}`}>
              {formatStatus(zone.status)}
            </span>
          </div>
        ))}
      </div>
      </section>
    </section>
  );
}

function formatStatus(status) {
  if (status === "completed") return "Completed";
  if (status === "in-progress") return "In Progress";
  return "Pending";
}
