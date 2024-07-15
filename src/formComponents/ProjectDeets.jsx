import React, { useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const ProjectDeets = () => {
    const {proj1,setproj1,proj1_tech,setproj1_tech,proj1_url,setproj1_url,proj1_desc,setproj1_desc,proj2,setproj2,proj2_tech,setproj2_tech,proj2_url,setproj2_url,proj2_desc,setproj2_desc,proj3,setproj3,proj3_tech,setproj3_tech,proj3_url,setproj3_url,proj3_desc,setproj3_desc} = useContext(DataContext);
    
    const navig  = useNavigate();

    const handleProj = (e) => {
        e.preventDefault();
        navig('/template');
    }
    return (
        <div className='container'>
            <div className='card p-3 bg-green2 mt-3 text-white'>
                <h2>Project Details</h2>
            </div>

            <div className="card mt-3 p-3">
                <div className="row">
                    <form onSubmit={(e)=>handleProj(e)}>
                        <div className="row">

                            <div className="col-12">
                                <h2>Project 1 </h2>
                                <div className="row">
                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Project Title:</label>
                                    <input 
                                        type="text" 
                                        value={proj1}
                                        onChange={(e)=>setproj1(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Tech-stack / Tools Used:</label>
                                    <input 
                                        type="text" 
                                        value={proj1_tech}
                                        onChange={(e)=>setproj1_tech(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Project URL:</label>
                                    <input 
                                        type="text" 
                                        value={proj1_url}
                                        onChange={(e)=>setproj1_url(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Desciption:</label>
                                    <textarea 
                                        className='form-control green-focus' 
                                        value={proj1_desc}
                                        onChange={(e)=>setproj1_desc(e.target.value)}
                                        required
                                        rows={5}/>
                                </div>
                                </div>
                            </div>

                            <div className="col-12 mt-3">
                                <h2>Project 2 </h2>
                                <div className="row">
                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Project Title:</label>
                                    <input 
                                        type="text" 
                                        value={proj2}
                                        onChange={(e)=>setproj2(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Tech-stack / Tools Used:</label>
                                    <input 
                                        type="text" 
                                        value={proj2_tech}
                                        onChange={(e)=>setproj2_tech(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Project URL:</label>
                                    <input 
                                        type="text" 
                                        value={proj2_url}
                                        onChange={(e)=>setproj2_url(e.target.value)}
                                        required
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Desciption:</label>
                                    <textarea 
                                        className='form-control green-focus' 
                                        value={proj2_desc}
                                        onChange={(e)=>setproj2_desc(e.target.value)}
                                        required
                                        rows={5}/>
                                </div>
                                </div>
                            </div>

                            <div className="col-12 mt-3">
                                <h2>Project 3 </h2>
                                <div className="row">
                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Project Title:</label>
                                    <input 
                                        type="text" 
                                        value={proj3}
                                        onChange={(e)=>setproj3(e.target.value)}
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Tech-stack / Tools Used:</label>
                                    <input 
                                        type="text" 
                                        value={proj3_tech}
                                        onChange={(e)=>setproj3_tech(e.target.value)}
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 col-md-6 form-group mb-3">
                                    <label htmlFor=""> Project URL:</label>
                                    <input 
                                        type="text" 
                                        value={proj3_url}
                                        onChange={(e)=>setproj3_url(e.target.value)}
                                        className='form-control green-focus' />
                                </div>

                                <div className="col-12 form-group mb-3">
                                    <label htmlFor=""> Desciption:</label>
                                    <textarea 
                                        className='form-control green-focus' 
                                        value={proj3_desc}
                                        onChange={(e)=>setproj3_desc(e.target.value)}
                                        rows={5}/>
                                </div>
                                </div>
                            </div>

                        </div>

                        <div className='col d-flex justify-content-end'>
                            <button className='btn btn-danger px-5'>Next</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProjectDeets