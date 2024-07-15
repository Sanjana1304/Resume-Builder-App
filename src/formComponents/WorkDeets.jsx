import React, { useContext, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import DataContext from '../context/DataContext';

const WorkDeets = () => {
    const {exp_comp1,setExp_comp1,exp_pos1,setExp_pos1,exp_from1,seEexp_from1,exp_to1,setEexp_to1,exp_comp2,setExp_comp2,exp_pos2,setExp_pos2,exp_from2,setExp_from2,exp_to2,setExp_to2} = useContext(DataContext);
    
    const navig  = useNavigate();
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    
    const handleWork = (e) => {
        e.preventDefault();
        if (isChecked1===true) {
            setEexp_to1('Present');
        }
        if (isChecked2===true){
            setExp_to2('Present');
        }
        navig('/proj');
    }
  return (
    <div className='container'>
        <div className='card p-3 bg-green2 mt-3 text-white'>
            <h2>Experience Details</h2>
        </div>

        <div className="card mt-3 p-3">
            <div className="row">
                <form onSubmit={(e)=>handleWork(e)}>
                    <div className="row">

                        <div className="col-12">
                            <h2>Experience 1 </h2>
                            <div className="row">
                            <div className="col-12 form-group mb-3">
                                <label htmlFor=""> Company:</label>
                                <input 
                                    type="text" 
                                    value={exp_comp1}
                                    onChange={(e)=>setExp_comp1(e.target.value)}
                                    required
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 form-group mb-3">
                                <label htmlFor=""> Position:</label>
                                <input 
                                    type="text" 
                                    value={exp_pos1}
                                    onChange={(e)=>setExp_pos1(e.target.value)}
                                    required
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 col-md-6 form-group mb-3">
                                <label htmlFor=""> From:</label>
                                <input 
                                    type="date" 
                                    value={exp_from1}
                                    onChange={(e)=>seEexp_from1(e.target.value)}
                                    required
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 col-md-6 form-group mb-3">
                                <label htmlFor=""> To:</label>
                                <input 
                                    type="date" 
                                    value={exp_to1}
                                    onChange={(e)=>setEexp_to1(e.target.value)}
                                    disabled={isChecked1}
                                    required
                                    className='form-control green-focus' />
                                <label>
                                    <input
                                    type="checkbox"
                                    checked={isChecked1}
                                    onChange={(e)=>setIsChecked1(e.target.checked)}
                                    />
                                    I currently work here
                                </label>
                                
                            </div>
                            </div>
                        </div>

                        <div className="col-12 mt-5">
                            <h2>Experience 2 </h2>
                            <div className="row">
                            <div className="col-12 form-group mb-3">
                                <label htmlFor=""> Company:</label>
                                <input 
                                    type="text" 
                                    value={exp_comp2}
                                    onChange={(e)=>setExp_comp2(e.target.value)}
                                    
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 form-group mb-3">
                                <label htmlFor=""> Position:</label>
                                <input 
                                    type="text" 
                                    value={exp_pos2}
                                    onChange={(e)=>setExp_pos2(e.target.value)}
                                    
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 col-md-6 form-group mb-3">
                                <label htmlFor=""> From:</label>
                                <input 
                                    type="date" 
                                    value={exp_from2}
                                    onChange={(e)=>setExp_from2(e.target.value)}
                                    
                                    className='form-control green-focus' />
                            </div>

                            <div className="col-12 col-md-6 form-group mb-3">
                                <label htmlFor=""> To:</label>
                                <input 
                                    type="date" 
                                    value={exp_to2}
                                    onChange={(e)=>setExp_to2(e.target.value)}
                                    disabled={isChecked2}
                                    className='form-control green-focus' />

                                <label>
                                    <input
                                    type="checkbox"
                                    checked={isChecked2}
                                    onChange={(e)=>setIsChecked2(e.target.checked)}
                                    />
                                    I currently work here
                                </label>
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

export default WorkDeets