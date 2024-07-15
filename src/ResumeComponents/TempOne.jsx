import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const TempOne = () => {
  const {name,abt,mail,web,phone,loc,git,linkedin,skills,deg,branch,clg,cgpa,fromClg,toClg,exp_pos1,exp_comp1,exp_from1,exp_to1,exp_comp2,exp_pos2,exp_from2,exp_to2,cert1,cert2,cert3,certGiven1,certGiven2,certGiven3,proj1,proj2,proj3,proj1_tech,proj1_url,proj1_desc,proj2_tech,proj2_url,proj2_desc,proj3_tech,proj3_url,proj3_desc} = useContext(DataContext);
  
  return (
    <div className="resume-container">
      <div className="row p-3 temp1">
        
        {
          name.split(" ").map((nm,index)=>(
            <div key={index} className="col-12 fw-bold text-green ms-4 name-size">{nm.toUpperCase()}</div>
          ))
        }
        
        <br />
        <div className="col-5 bg-mildgreen p-1">
          <h6 className='p-text fw-bold mb-1'>OBJECTIVE</h6>
         
          <p className='p-text'>{abt}</p>

          <br />

          <h6 className='p-text fw-bold mb-1'>PERSONAL DETAILS</h6>
          <p className='p-text'>Address: {loc}</p>
          <p className='p-text'>Mail: {mail}</p>
          <p className='p-text'>Phone: {phone}</p>
          {web?<p className='p-text'>Website: {web}</p>:''}
          {git?<p className='p-text'>GitHub: {git}</p>:''}
          <p className='p-text'>Linkedin : {linkedin}</p>

          <br />

          <h6 className='p-text fw-bold mb-1'>EDUCATION</h6>
          <p className='p-text'>{deg} - {branch}</p>
          <p className='p-text'>{clg}</p>
          <p className='p-text'>CGPA: {cgpa}</p>
          <p className='p-text'> {fromClg} - {toClg}</p>

          <br />
          <h6 className='p-text fw-bold mb-1'>SKILLS</h6>
          <ul>
            {skills.split(',').map((skill,index)=>(
              <li key={index} className='p-text'>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="col-7">
            <h6 className='p-text fw-bold mb-1'>EXPERIENCE</h6>
            <p className='p-text'>{exp_pos1}</p>
            <p className='p-text'>{exp_comp1}</p>
            <p className='p-text'>{exp_from1} - {exp_to1}</p>
            <br />

            {
              exp_pos2?
              <>
              <p className='p-text'>{exp_pos2}</p>
              <p className='p-text'>{exp_comp2}</p>
              <p className='p-text'>{exp_from2} - {exp_to2}</p>
              </>:''
            }

            <h6 className='p-text fw-bold mb-2 mt-2'>CERTIFICATIONS</h6>
            <p className='p-text'>Course: {cert1}</p>
            <p className='p-text'>Given By: {certGiven1}</p>
            

            {
              cert2?
              <>
              <p className='p-text'>Course: {cert2}</p>
              <p className='p-text'>Given By: {certGiven2}</p>
              
              </>:''
            }

            {
              cert3?
              <>
                <p className='p-text'>Course: {cert3}</p>
                <p className='p-text'>Given By: {certGiven3}</p>
                
              </>:''
            }

            <h6 className='p-text fw-bold mb-2 mt-2'>PROJECTS</h6>
            <p className='p-text'>{proj1}</p>
            <p className='p-text'>Tools Used: {proj1_tech}</p>
            <p className='p-text'>{proj1_desc}</p>
            <a className='p-text' href={proj1_url}>Visit Project</a>

            {
              proj2?
              <>
                <p className='p-text'>{proj2}</p>
                <p className='p-text'>Tools Used: {proj2_tech}</p>
                <p className='p-text'>{proj2_desc}</p>
                <a className='p-text' href={proj2_url}>Visit Project</a>
              </>:''
            }

            {
              proj3?
              <>
                <p className='p-text'>{proj3}</p>
                <p className='p-text'>Tools Used: {proj3_tech}</p>
                <p className='p-text'>{proj3_desc}</p>
                <a className='p-text' href={proj3_url}>Visit Project</a>
              </>:''
            }
            
        </div>
      </div>
      

    </div>
  )
}

export default TempOne;