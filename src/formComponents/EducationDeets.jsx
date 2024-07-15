import React, { useContext } from 'react';

import DataContext from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

const EducationDeets = () => {

    const {clg,setClg,deg,setDeg,branch,setBranch,fromClg,setFromclg,toClg,setToClg,cgpa,setCgpa,title,setTitle,skills,setSkills,cert1,setCert1,cert2,setCert2,cert3,setCert3,certGiven1,setCertGiven1,certGiven2,setCertGiven2,certGiven3,setCertGiven3} = useContext(DataContext);
    
    const navig  = useNavigate();

    const handleEduc = (e) => {
        e.preventDefault();
        navig('/work');
    }
    return (
        <div className='container'>
            <form onSubmit={(e)=>handleEduc(e)}>

            
                    <div className='card p-3 bg-green2 mt-3 text-white'>
                        <h2>Education Details - 1</h2>
                    </div>

                    <div className="card mt-3 p-3">
                        <div className="row">
                            
                                <div className="row">
                                <div className="col-12 form-group mb-3">
                                    <label htmlFor="">College / University Name: </label>
                                    <input 
                                        type="text" 
                                        value={clg}
                                        onChange={(e)=>setClg(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor="">Degree: </label>
                                    <input 
                                        type="text" 
                                        className='form-control green-focus' 
                                        value={deg}
                                        onChange={(e)=>setDeg(e.target.value)}
                                        required
                                        placeholder='Eg. B.E'/>
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor="">Branch: </label>
                                    <input 
                                        type="text" 
                                        className='form-control green-focus' 
                                        value={branch}
                                        onChange={(e)=>setBranch(e.target.value)}
                                        required
                                        placeholder='Eg. Computer Science'/>
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor="">From: </label>
                                    <input 
                                        type="date" 
                                        value={fromClg}
                                        onChange={(e)=>setFromclg(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor="">To: </label>
                                    <input 
                                        type="date" 
                                        value={toClg}
                                        onChange={(e)=>setToClg(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor="">CGPA: </label>
                                    <input type="number" 
                                        className='form-control green-focus'
                                        value={cgpa}
                                        onChange={(e)=>setCgpa(e.target.value)}
                                        required />
                                </div>

                            
                                </div>

                            
                            
                        </div>
                    </div>

                    <div className='card p-3 bg-green2 mt-3 text-white'>
                        <h2>Education Details - 2</h2>
                    </div>

                    <div className="card mt-3 p-3">
                        <div className="row">
                            
                                <div className="row">
                                    <div className="col-12 form-group mb-3">
                                        <label htmlFor="">Title: </label>
                                        <input 
                                            type='text' 
                                            className='form-control green-focus' 
                                            value={title}
                                            onChange={(e)=>setTitle(e.target.value)}
                                            required
                                            placeholder='Eg: Front-End Developer' rows={5}/>
                                    </div>
                                
                                <div className="col-12 form-group mb-3">
                                    <label htmlFor="">Skills: </label>
                                    <textarea 
                                        className='form-control green-focus' 
                                        placeholder='Enter Skills seperated with a comma.   Eg: JAVA' 
                                        value={skills}
                                            onChange={(e)=>setSkills(e.target.value)}
                                            required
                                        rows={5}/>
                                </div>

                                <div className="col-12 form-group mb-3">
                                    <p className='mb-3 w-100'>Certifications: </p>
                                <div className="row">
                                        <div className="col-6">
                                            <p>Certification 1</p>
                                            <input 
                                                type="text" 
                                                value={cert1}
                                                onChange={(e)=>setCert1(e.target.value)}
                                                required
                                                className='form-control green-focus' />
                                        </div>
                                        <div className="col-6">
                                        <p>Given By</p>
                                            <input 
                                                type="text" 
                                                value={certGiven1}
                                            onChange={(e)=>setCertGiven1(e.target.value)}
                                            required
                                                className='form-control green-focus' />
                                        </div>

                                        <div className="col-6">
                                            <p>Certification 2</p>
                                            <input 
                                                type="text" 
                                                value={cert2}
                                                onChange={(e)=>setCert2(e.target.value)}
                                                
                                                className='form-control green-focus' />
                                        </div>
                                        <div className="col-6">
                                            <p>Given By</p>
                                            <input 
                                                type="text" 
                                                value={certGiven2}
                                            onChange={(e)=>setCertGiven2(e.target.value)}
                                            
                                                className='form-control green-focus' />
                                        </div>

                                        <div className="col-6">
                                            <p>Certification 3</p>
                                            <input 
                                            type="text" 
                                            value={cert3}
                                            onChange={(e)=>setCert3(e.target.value)}
                                            
                                            className='form-control green-focus' />
                                        </div>
                                        <div className="col-6">
                                            <p>Given By</p>
                                            <input 
                                                type="text" 
                                                value={certGiven3}
                                                onChange={(e)=>setCertGiven3(e.target.value)}
                                                
                                                className='form-control green-focus' />
                                        </div>
                                </div>
                                </div>

                                </div>
                            
                        </div>
                    </div>

                    <div className='col d-flex justify-content-end mt-3'>
                        <button className='btn btn-danger px-5'>Next</button>

                    </div>
            </form>
        </div>
  )
}

export default EducationDeets