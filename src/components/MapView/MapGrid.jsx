import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import ZoneMarker from "./ZoneMarker";
import RobotMarker from "./RobotMarker";
import ChargingStation from "./ChargingStation";
import useRobotData from "./useRobotData";
export default function MapGrid() {
  const { robot, zones } = useRobotData();

  return (
    <div className="mapGridWrapper">
      {/* Leaflet Map (hidden style, used for real map logic) */}
      <MapContainer
        center={[7.8731, 80.7718]} // Sri Lanka (example)
        zoom={18}
        className="leafletMap"
        zoomControl={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>

      {/* Grid Overlay (YOUR DESIGN) */}
      <div className="mapGrid">
        {zones.map((zone) => (
          <ZoneMarker key={zone.id} {...zone} />
        ))}

        <RobotMarker col={robot.col} row={robot.row} />
        <ChargingStation col={4} row={2} />
      </div>
    </div>
  );
}
