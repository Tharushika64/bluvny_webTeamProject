import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function HourlyChart({ labels = [], values = [] }) {
  const data = {
    labels,
    datasets: [
      {
        label: 'Garbage Collection Activity',
        data: values,
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.08)',
        tension: 0.35,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: '#fff',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 450 },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: val => `${val}` },
      },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="hourly-chart" style={{ height: 240 }}>
      <Line data={data} options={options} />
    </div>
  );
}
