import React, { useContext } from 'react'
import DataContext from '../context/DataContext';
import TempOne from '../ResumeComponents/TempOne';
import TempTwo from '../ResumeComponents/TempTwo';
import TempThree from '../ResumeComponents/TempThree';
import TempFour from '../ResumeComponents/TempFour';
import TempFive from '../ResumeComponents/TempFive';
import TempSix from '../ResumeComponents/TempSix';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const ResultPage = () => {
  const {chosenTemp} = useContext(DataContext);

  const downloadResume = () => {
    const input = document.getElementById('resume-container'); // Get the element to convert to PDF
    html2canvas(input)
      .then((canvas) => {
        console.log('Canvas data:', canvas); 
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'PNG', 0, 0, width, height);
        pdf.save('resume.pdf');
      })
      .catch((error) => {
        console.error('Error rendering canvas:', error);
      });
  };

  return (
    <div className='container'>
          <div className='card p-3 animated-bg mt-3 text-white mb-3'>
              <h2 className='text-center'>Woohoo! Your Resume is Ready</h2>
          </div>

          <div className="res mb-3" id="resume-container">
              {chosenTemp==='Temp1'
              ?
                <TempOne/>
              :
                chosenTemp==='Temp2'
                ?
                  <TempTwo/>
                :
                  chosenTemp==='Temp3'
                  ?
                    <TempThree/>
                  :
                    chosenTemp==='Temp4'
                    ?
                      <TempFour/>
                    :
                      chosenTemp==='Temp5'
                      ?
                        <TempFive/>
                      : <TempSix/>}
          </div>
        

          <div className="row d-flex justify-content-center">
              <button className='btn down py-3' onClick={downloadResume}>Download</button>
          </div>
       
    </div>
  )
}

export default ResultPage