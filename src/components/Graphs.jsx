import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const Graphs = ({ data }) => {
  const categoryTotals = data.reduce((acc, expense) => {
    const { category, amount } = expense;

    if (acc[category]) {
      acc[category] += amount;
    } else {
      acc[category] = amount;
    }
    return acc;
  }, {});

  const chartData = {
    labels: ["Food", "Transport", "Entertainment", "Other"],

    datasets: [
      {
        label: "Amount spent of activity",
        data: [
          categoryTotals["Food"] || 0,
          categoryTotals["Transport"] || 0,
          categoryTotals["Entertainment"] || 0,
          categoryTotals["Other"] || 0,
        ],
        backgroundColor: "rgba(75,192,192,0.6)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Your monthly expenses",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};
export default Graphs;
