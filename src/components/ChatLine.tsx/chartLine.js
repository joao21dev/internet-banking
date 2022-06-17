import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Text } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartLine = () => {
  return (
    <div>
      <Line
        data={{
          labels: [
            "Jul-21",
            "Ago-21",
            "Set-21",
            "Out-21",
            "Nov-21",
            "Dez-21",
            "Jan-22",
            "Fev-22",
            "Mar-22",
            "Abr-22",
            "Mai-22",
            "Jun-22",
          ],
          datasets: [
            {
              label: "Entrada",
              borderWidth: 1,
              data: [28, 30, 20, 18, 20, 22, 12, 19, 12, 10, 9, 8],
              borderColor: "green",
              backgroundColor: "green",
            },
            {
              label: "Saída",
              data: [12, 19, 12, 10, 9, 8, 28, 30, 20, 18, 20, 22],

              borderColor: "orange",
              backgroundColor: "orange",

              borderWidth: 1,
            },
          ],
        }}
        height="250px"
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            // x: {
            //   grid: {
            //     display: false,
            //   },
            // },
            y: {
              grid: {
                display: false,
              },
            },
          },
          // plugins: {
          //   legend: {
          //     display: false,
          //   },
          // },
        }}
      />
    </div>
  );
};

export default ChartLine;
