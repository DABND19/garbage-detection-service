import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import faker from "faker";
import styled from "styled-components";
import { Progress } from "antd";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const labels = [
  "БД; Казань; Симонова 15 двор парковка",
  "БД; Казань; Химиков 19 ТБО",
  "БД; Казань; Кариева 4а к2 Парковка (2)",
  "БД; Казань; ул. Побежимова 36 парковка",
  "БД; Казань; ул. Чапаева 16 дворовая проезжая часть парковка дет. площадка",
];

const StatBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Stats = () => {
  return (
    <Container>
      <StatBar>
        <h1>Заполненность баков в городе</h1>
        <Progress type="circle" percent={67} />
      </StatBar>
      <Bar
        options={{
          indexAxis: "y",
          elements: {
            bar: {
              borderWidth: 2,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: "right",
            },
            title: {
              display: true,
              text: "Топ загрязненных мест",
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              label: "Мусор вне бака",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 15 })
              ),
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "Мусор в баке",
              data: labels.map(() =>
                faker.datatype.number({ min: 0, max: 15 })
              ),
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
      />
    </Container>
  );
};

export default Stats;
