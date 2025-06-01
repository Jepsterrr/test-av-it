import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, BarController, LineController } from 'chart.js';
ChartJS.register(
  BarController,
  LineController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

type TestCase = {
  id: string;
  status: 'pass' | 'fail' | 'fixed' | string;
  title: string;
  chartData?: {
    performance: number;
    accessibility: number;
  };
  thresholds: {
    performance: number;
    accessibility: number;
  };
};

type TestCaseCardProps = {
  test: TestCase;
  onShowAnalysis: () => void;
};

export default function TestCaseCard({ test, onShowAnalysis }: TestCaseCardProps) {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<ChartJS | null>(null); // För att hålla reda på Chart-instansen

  let statusClass, statusText;
  switch (test.status) {
    case 'pass': statusClass = 'status-pass bg-green-100 text-green-700'; statusText = 'Pass'; break;
    case 'fail': statusClass = 'status-fail bg-red-100 text-red-700'; statusText = 'Fail'; break;
    case 'fixed': statusClass = 'status-fixed bg-blue-100 text-blue-700'; statusText = 'Fixed'; break;
    default: statusClass = 'bg-gray-100 text-gray-700'; statusText = 'Okänd';
  }

  useEffect(() => {
    if (test.chartData && chartRef.current) {
      // Förstör föregående diagraminstans om den finns
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;
      chartInstanceRef.current = new ChartJS(ctx, { // Använd ChartJS här
        type: 'bar',
        data: {
          labels: ['Prestanda', 'Tillgänglighet'],
          datasets: [{
            label: 'Poäng',
            data: [test.chartData.performance, test.chartData.accessibility],
            backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)'],
            borderColor: ['rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)'],
            borderWidth: 1
          }, {
            label: 'Tröskelvärde',
            data: [test.thresholds.performance, test.thresholds.accessibility],
            type: 'line',
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            pointRadius: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: { y: { beginAtZero: true, max: 100 } },
          plugins: {
            legend: { display: true },
            tooltip: { enabled: true }
          }
        }
      });
    }
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [test.chartData, test.thresholds]);

  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-2">
          <p className="text-xs font-mono text-gray-500">{test.id}</p>
          <span className={`status-badge py-1 px-3 rounded-full text-xs font-semibold ${statusClass}`}>{statusText}</span>
        </div>
        <h4 className="text-md font-semibold text-[#2c3e50] mb-3">{test.title}</h4>
        {test.chartData && (
          <div className="chart-container my-4 h-64 md:h-80">
            <canvas ref={chartRef}></canvas>
          </div>
        )}
      </div>
      <button
        onClick={onShowAnalysis}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Visa Analys
      </button>
    </div>
  );
}