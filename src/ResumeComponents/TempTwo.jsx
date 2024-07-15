import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const TempTwo = () => {
  const {name,title,abt,mail,web,phone,loc,git,linkedin,skills,deg,branch,clg,cgpa,fromClg,toClg,exp_pos1,exp_comp1,exp_from1,exp_to1,exp_comp2,exp_pos2,exp_from2,exp_to2,cert1,cert2,cert3,certGiven1,certGiven2,certGiven3,proj1,proj2,proj3,proj1_tech,proj1_url,proj1_desc,proj2_tech,proj2_url,proj2_desc,proj3_tech,proj3_url,proj3_desc} = useContext(DataContext);
  
  return (
    <div className="resume-container">
      <div className="row p-3 temp2 ">
        <h1 className="col-12 fw-bold text-black underline text-center">{name.toUpperCase()}</h1>
        
        <h6 className="col-12 text-black underline text-center py-1">{title.toUpperCase()}</h6>

        <div className="col-5">
          <div className="row">

            <div className="col-12">
            <p className='p-text-2 fw-bold underline mb-2'>CONTACT</p>
            <p className="p-text-2">Phone: {phone}</p>
            <p className="p-text-2">Email: {mail}</p>
            <p className="p-text-2">Address: {loc}</p>
            <p className="p-text-2">Website: {web}</p>
            <p className="p-text-2">GitHub: {git}</p>
            <p className="p-text-2">LinkedIn: {linkedin}</p>
            </div>

            <div className="col-12">
              <p className='p-text-2 fw-bold underline mb-2 mt-3'>SKILLS</p>
              {
                skills.split(',').map((skill,index) => (
                  <li key={index} className='p-text-2'>{skill}</li>
                ))
              }
            </div>

            <div className="col-12">
              <p className='p-text-2 fw-bold underline mb-2 mt-3'>EDUCATION</p>
              <p className="p-text-2">{clg}</p>
              <p className="p-text-2">{deg} - {branch}</p>
              <p className="p-text-2">{fromClg} - {toClg}</p>
              <p className="p-text-2">CGPA: {cgpa}</p>
            </div>

            <div className="col-12">
              <p className='p-text-2 fw-bold underline mb-2 mt-3'>CERTIFICATIONS</p>
              <p className="p-text-2">{cert1}</p>
              <p className="p-text-2">{certGiven1}</p>

              <p className="p-text-2">{cert2}</p>
              <p className="p-text-2">{certGiven2}</p>

              <p className="p-text-2">{cert3}</p>
              <p className="p-text-2">{certGiven3}</p>
            </div>
            
          </div>
        </div>

        <div className="col-7">
              <div className="row">

                <div className="col-12">
                <p className='p-text-2 fw-bold underline mb-2 mt-3'>PROFILE</p>
                <p className="p-text-2">{abt}</p>
                </div>

                <div className="col-12">
                  <p className='p-text-2 fw-bold underline mb-2 mt-3'>EXPERIENCE</p>
                  <p className="p-text-2 fw-bold">{exp_pos1}</p>
                  <p className="p-text-2">{exp_comp1}</p>
                  <p className="p-text-2">{exp_from1} - {exp_to1}</p>

                  {
                    exp_pos2?
                    <>
                        <p className="p-text-2 fw-bold mt-2">{exp_pos2}</p>
                        <p className="p-text-2">{exp_comp2}</p>
                        <p className="p-text-2">{exp_from2} - {exp_to2}</p>

                    </>:''
                  }
                  
                </div>
                <div className="col-12">
                  <p className='p-text-2 fw-bold underline mb-2 mt-3'>PROJECTS</p>
                  <p className="p-text-2 fw-bold">{proj1}</p>
                  <p className="p-text-2">Tools Used: {proj1_tech}</p>
                  <p className="p-text-2">{proj1_desc}</p>
                  <a className="p-text-2" href={proj1_url}>Visit Project</a>

                  {
                    proj2?
                    <>
                    <p className="p-text-2 fw-bold">{proj2}</p>
                    <p className="p-text-2">Tools Used: {proj2_tech}</p>
                    <p className="p-text-2">{proj2_desc}</p>
                    <a className="p-text-2" href={proj2_url}>Visit Project</a>

                    </>:''
                  }

{
                    proj3?
                    <>
                    <p className="p-text-2 fw-bold">{proj3}</p>
                    <p className="p-text-2">Tools Used: {proj3_tech}</p>
                    <p className="p-text-2">{proj3_desc}</p>
                    <a className="p-text-2" href={proj3_url}>Visit Project</a>

                    </>:''
                  }

                </div>
              </div>
        </div>
      </div>

    </div>
  )
}

export default TempTwo;