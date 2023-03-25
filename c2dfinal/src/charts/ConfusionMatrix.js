import React, { useRef,useState } from 'react';

function ConfusionMatrix({ TP, FP, TN, FN }) {
    // Trimming the arrays to a maximum length of 5
    const maxLength = 5;
    TP = TP.slice(0, maxLength);
    FP = FP.slice(0, maxLength);
    TN = TN.slice(0, maxLength);
    FN = FN.slice(0, maxLength);
  
    return (
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Predicted Positive</th>
            <th>Predicted Negative</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Actual Positive</td>
            {TP.map((tp, index) => (
              <td key={index}>{tp}</td>
            ))}
            {FN.map((fn, index) => (
              <td key={index}>{fn}</td>
            ))}
          </tr>
          <tr>
            <td>Actual Negative</td>
            {FP.map((fp, index) => (
              <td key={index}>{fp}</td>
            ))}
            {TN.map((tn, index) => (
              <td key={index}>{tn}</td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }

  export default ConfusionMatrix