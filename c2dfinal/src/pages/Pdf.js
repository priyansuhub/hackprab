import React, { useRef,useState } from 'react';
import html2pdf from 'html2pdf.js';
import ViewData from './ViewData';
import './pdf.css'
const Pdf = () => {
  const pdfRef = useRef(null);

  function generatePDF() {
    const input = pdfRef.current;
    const options = {
      margin: 0,
      filename: 'myReactPage.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf()
      .set(options)
      .from(input)
      .save();
  }
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInputText2(e.target.value);
  };
  const displayText = inputText.split("\n").join(" \u2022 ");
  const formattedText = inputText2
  .split(" ")
  .join(" \u2022 ")
  .split("\n")
  .join(" \n ");
  return (
    <>
    <div className='pdf-component'>
      <button onClick={generatePDF}>Generate PDF</button>
      <textarea value={inputText} onChange={handleInputChange} />
      <textarea value={inputText2} onChange={handleInputChange2} />
      
      <div ref={pdfRef}>
        <div>
            <h1>Model Risk Management document</h1>
            <p>{displayText}</p>
            </div>
        <p style={{pageBreakBefore: 'always'}}></p>
        {/* Overview */}
        
        <h1>Overview</h1>
        <p style={{ whiteSpace: "pre-wrap" }}>{formattedText}</p>
        <ViewData/>
        
        
      </div>
      </div>
    </>
  );
};

export default Pdf;