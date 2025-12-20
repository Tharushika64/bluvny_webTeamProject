export default function ChargingStation({ col, row }) {
  return (
    <div 
      className="chargingStation"
      style={{ gridColumn: col, gridRow: row }}
    ><img src="C:\Users\DELL\OneDrive\Documents\GitHub\bluvny_webTeamProject\src\assets\Vector.png" alt="vector" className="imagevector"></img>
      <div className="charging-card">Charging</div>
    </div>
  );
}

