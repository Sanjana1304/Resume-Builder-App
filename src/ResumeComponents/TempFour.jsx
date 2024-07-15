import React, { useContext } from 'react';
import DataContext from '../context/DataContext';

const TempFour = () => {
  const {name,title,abt,mail,web,phone,loc,git,linkedin,skills,deg,branch,clg,cgpa,fromClg,toClg,exp_pos1,exp_comp1,exp_from1,exp_to1,exp_comp2,exp_pos2,exp_from2,exp_to2,cert1,cert2,cert3,certGiven1,certGiven2,certGiven3,proj1,proj2,proj3,proj1_tech,proj1_url,proj1_desc,proj2_tech,proj2_url,proj2_desc,proj3_tech,proj3_url,proj3_desc} = useContext(DataContext);
  
  return (
    <div className="resume-container temp4">
      <div className="container">
        <h2 className='bg-pink mb-1 text-center'>{name}</h2>
        <p className="p-text text-center">{loc} {phone} {mail} </p>
        <p className="p-text text-center">{web} {linkedin} {git}</p>

        
        <p className="p-text mb-3 mt-1">{title} : {abt}</p>
        
        <h6 className="col-12 bg-pink text-black fw-bold px-2 d-inline">Experience</h6>
        <p className="p-text mt-2">{exp_from1} - {exp_to1}</p>
        <p className="p-text-2 fw-bold">{exp_pos1}</p>
        <p className="p-text">{exp_comp1}</p>

        {
          exp_pos2?
          <>
              <p className="p-text-2 fw-bold mt-2">{exp_pos2}</p>
              <p className="p-text-2">{exp_comp2}</p>
              <p className="p-text-2 mb-2">{exp_from2} - {exp_to2}</p>

          </>:''
          }
        <h6 className="col-12 bg-pink text-black fw-bold px-2 d-inline">Skills</h6>
        <br />
        
        {
          
          skills.split(',').map((skill,index) => (
            <li key={index} className='p-text d-inline me-2'>{index+1}. {skill}</li>
          ))
        }
        <br/>
        
        <h6 className="col-12 bg-pink text-black fw-bold px-2 d-inline">Education</h6>
        <br />
        <p className="p-text">{fromClg} - {toClg}</p>
        <p className="p-text">{deg} | {branch} | {clg}</p>
        <p className="p-text mb-2">CGPA: {cgpa}</p>

        <h6 className="col-12 bg-pink text-black fw-bold px-2 d-inline">Certifications</h6>
        <p className="p-text-2 mt-1 mb-1">{cert1} | {certGiven1}</p>
        {cert2?<p className="p-text-2 mt-1 mb-1">{cert2} | {certGiven2}</p>:''}
        {cert3?<p className="p-text-2 mt-1 mb-1">{cert3} | {certGiven3}</p>:''}

        <h6 className="col-12 bg-pink text-black fw-bold px-2 d-inline">Projects</h6>
        <p className="p-text fw-bold mt-2">{proj1} | <a className="p-text-2" href={proj1_url}>Visit Project</a></p>
        <p className="p-text">Tools Used: {proj1_tech}</p>
        <p className="p-text">{proj1_desc}</p>

        {
          proj2?
          <>
          <p className="p-text fw-bold mt-2">{proj2} | <a className="p-text-2" href={proj2_url}>Visit Project</a> </p>
          <p className="p-text">Tools Used: {proj2_tech}</p>
          <p className="p-text">{proj2_desc}</p>
          </>:''
        }

        {
          proj3?
          <>
          <p className="p-text fw-bold mt-2">{proj3} | <a className="p-text" href={proj3_url}>Visit Project</a></p>
          <p className="p-text">Tools Used: {proj3_tech}</p>
          <p className="p-text">{proj3_desc}</p>
          </>:''
        }
                  

      </div>
      



    </div>
  )
}

export default TempFour