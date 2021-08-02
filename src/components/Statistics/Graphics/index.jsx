import React from "react";
import { Pie } from "react-chartjs-2";

const Graphics = ({
  colors,
  inProcessing,
  underConsideration,
  ready,
  renouncement,
}) => {
  const data = {
    datasets: [
      {
        data: [inProcessing, underConsideration, ready, renouncement],
        backgroundColor: colors,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return <Pie data={data} width={400} height={400} options={options} />;
};

export default Graphics;
