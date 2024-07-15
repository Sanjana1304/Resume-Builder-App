import React, { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const TemplateChoice = () => {
    const {chosenTemp,setChosenTemp} = useContext(DataContext);

    const navig  = useNavigate();
    const handleTemp = (e) => {
        e.preventDefault();
        if (!chosenTemp) {
            alert('Please select an option!');
            return;
          }
          console.log('Selected Option:', chosenTemp);
        navig('/result');
    }

    return (
        <div>
            <form onSubmit={(e)=>handleTemp(e)}>
                <div className="container mt-5">
                    <h2 className='text-center mb-4 text-green'>Choose a Template</h2>
                    
                    <div className="row row-centre">
                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp1" 
                                name="fav_temp" 
                                value="Temp1"
                                checked = {chosenTemp==='Temp1'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>
                                
                            <label htmlFor="temp1"><img src={`${process.env.PUBLIC_URL}/templates/temp1.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>

                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp2" 
                                name="fav_temp" 
                                value="Temp2"
                                checked = {chosenTemp==='Temp2'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>

                            <label htmlFor="temp2"><img src={`${process.env.PUBLIC_URL}/templates/temp2.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>

                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp3" 
                                name="fav_temp" 
                                value="Temp3"
                                checked = {chosenTemp==='Temp3'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>

                            <label htmlFor="temp3"><img src={`${process.env.PUBLIC_URL}/templates/temp3.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>

                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp4" 
                                name="fav_temp" 
                                value="Temp4"
                                checked = {chosenTemp==='Temp4'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>
                            <label htmlFor="temp4"><img src={`${process.env.PUBLIC_URL}/templates/temp4.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>

                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp5"
                                name="fav_temp" 
                                value="Temp5"
                                checked = {chosenTemp==='Temp5'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>
                            <label htmlFor="temp5"><img src={`${process.env.PUBLIC_URL}/templates/temp5.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>

                        <div className="col-12 mb-5">
                            <input 
                                type="radio" 
                                id="temp6" 
                                name="fav_temp" 
                                value="Temp6"
                                checked = {chosenTemp==='Temp6'}
                                onChange={(e)=>setChosenTemp(e.target.value)}/>
                            <label htmlFor="temp6"><img src={`${process.env.PUBLIC_URL}/templates/temp6.png`} alt="1" className="img-fluid template-img" /></label>
                        </div>
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <button className='btn btn-danger px-5 py-3'>Create Resume</button>
                </div>
            </form>
        </div>
    )
}

export default TemplateChoice