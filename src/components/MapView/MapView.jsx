import "./mapView.css";
import MapGrid from "./MapGrid";
import ZoneStatus from "./ZoneStatus";
import MapLegend from "./MapLegend";

export default function MapView() {
  return (
   <section className="mapviewall">
    
  {/* TOP FIELD */}

    <section className="mapViewWrapper">
      {/* LEFT */}
        <div className="mapViewLeft">
        <div className="mapSectionHeader">
            <h2>Facility Map</h2>
        </div>
        <div></div>
        <MapGrid />
        </div>
        
      

      {/* RIGHT */}
      <div className="mapViewRight">
        <ZoneStatus />
      </div>
  
    </section>
    <MapLegend />
    </section>
  );
}
