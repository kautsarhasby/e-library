import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const Graph = () => {
  const chartRef = useRef(null);
  useEffect(() => {
    const sell = [1882, 122, 788, 98, 232];
    const book = [
      "Harry Potter",
      "Jujutsu Kaisen",
      "Angels",
      "Ambaruwo",
      "Omniman",
    ];

    if (chartRef.current) {
      if (chartRef.current.chartInstance) {
        chartRef.current.chartInstance.destroy();
      }
    }
    const myChart = chartRef.current.getContext("2d");
    chartRef.current.chartInstance = new Chart(myChart, {
      type: "line",
      options: {},
      data: {
        labels: book,
        datasets: [
          {
            label: "Data Hasil Penjualan Buku",
            data: sell,
          },
        ],
      },
    });
  }, []);

  return (
    <main className="w-full py-8 ">
      <span className="font-bold self-center">Grafik penjualan buku</span>
      <canvas
        className="bg-white/50 backdrop-blur-sm rounded-md border-[#0855b1] box-border border-2 shadow-lg z-0"
        id="chartcoy"
        width={500}
        height={200}
        ref={chartRef}
      ></canvas>
    </main>
  );
};
