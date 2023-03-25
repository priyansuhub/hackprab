import React from 'react';
import Plot from 'react-plotly.js';

const Scatterplot = ({ xData, yData }) => {
  const data = [
    {
      x: xData,
      y: yData,
      mode: 'markers',
      marker: {
        color: 'rgb(75, 192, 192)',
        size: 10,
      },
    },
  ];

  const layout = {
    xaxis: {
      title: 'X Data',
    },
    yaxis: {
      title: 'Y Data',
    },
  };

  return <Plot data={data} layout={layout} />;
};

export default Scatterplot;
