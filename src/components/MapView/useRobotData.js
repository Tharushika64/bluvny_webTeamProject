import { useEffect, useState } from "react";

export default function useRobotData() {
  const [robot, setRobot] = useState({ col: 5, row: 4 });
  const [zones, setZones] = useState([
    { id: "A", status: "completed", col: 3, row: 3 },
    { id: "B", status: "in-progress", col: 4, row: 5 },
    { id: "C", status: "pending", col: 2, row: 7 },
    { id: "D", status: "pending", col: 7, row: 3 },
    { id: "E", status: "pending", col: 5, row: 8 },
  ]);

  // Robot movement simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setRobot((prev) => ({
        col: prev.col === 9 ? 1 : prev.col + 1,
        row: prev.row === 9 ? 1 : prev.row + 1,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return { robot, zones };
}
