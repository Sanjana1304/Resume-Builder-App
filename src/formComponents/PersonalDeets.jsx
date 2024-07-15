import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import {useNavigate} from 'react-router-dom';

const PersonalDeets = () => {
    const {name,setName,mail,setMail,phone,setPhone,abt,setAbt,loc,setLoc,web,setWeb,git,setGit,linkedin,setLinkedin} = useContext(DataContext);
    
    const navig = useNavigate();

    const handlePersonal = (e) => {
        e.preventDefault();
        console.log(name+" "+loc+" "+web);
        navig('/edu');
    }
    
  return (
    <div className='container'>
        <div className='card p-3 bg-green2 mt-3 text-white'>
            <h2>Personal Details</h2>
        </div>

        <div className="card mt-3 p-3">
            <div className="row">
                <form onSubmit={(e)=>handlePersonal(e)}>
                    <div className="row">
                    
                    <div className="col-12 form-group mb-3">
                        <label htmlFor="">Full Name: </label>
                        <input 
                            type="text" 
                            className='form-control green-focus' 
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required/>
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">Email: </label>
                        <input 
                            type="email" 
                            className='form-control green-focus' 
                            value={mail}
                            onChange={(e)=>setMail(e.target.value)}
                            required/>
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">Phone: </label>
                        <input 
                            type="number" 
                            className='form-control green-focus'
                            value={phone}
                            required
                            onChange={(e)=>setPhone(e.target.value)} />
                    </div>

                    <div className="col-12 form-group mb-3">
                        <label htmlFor="">About Me (Within 50 words): </label>
                        <textarea 
                            className='form-control green-focus' 
                            rows={5}
                            value={abt}
                            onChange={(e)=>setAbt(e.target.value)}
                            required
                            />
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">Location: </label>
                        <input 
                            type="text" 
                            className='form-control green-focus'
                            value={loc}
                            onChange={(e)=>setLoc(e.target.value)}
                            required />
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">Your Website: </label>
                        <input 
                            type="text" 
                            className='form-control green-focus'
                            value={web}
                            onChange={(e)=>setWeb(e.target.value)} />
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">GitHub Profile: </label>
                        <input 
                            type="text" 
                            value={git}
                            onChange={(e)=>setGit(e.target.value)}
                            className='form-control green-focus' />
                    </div>

                    <div className="col-12 col-md-6 form-group mb-3">
                        <label htmlFor="">LinkedIn Profile: </label>
                        <input 
                            type="text" 
                            value={linkedin}
                            onChange={(e)=>setLinkedin(e.target.value)}
                            className='form-control green-focus'
                            required />
                    </div>
                    </div>

                    <div className='col d-flex justify-content-end'>
                        <button type="submit" className='btn btn-danger px-5'>Next</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

export default PersonalDeets