import React, { useEffect, useRef } from "react";
import Plotly from "plotly.js-dist";

function Histogram({ data }) {
  const plotRef = useRef(null);

  useEffect(() => {
    if (data) {
      const trace = {
        x: data,
        type: "histogram",
      };
      const layout = {
        title: "Histogram",
        xaxis: {
          title: "Values",
        },
        yaxis: {
          title: "Count",
        },
        // set the desired width and height of the plot
        width: 600,
        height: 400,
      };
      Plotly.newPlot(plotRef.current, [trace], layout);
    }
  }, [data]);

  return (
    <div className="hist">
      <div ref={plotRef} />
    </div>
  );
}

export default Histogram;