import React from 'react';
import { createContext,useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({children}) => {
      //personal
    const [name,setName] = useState('');
    const [mail,setMail] = useState('');
    const [phone,setPhone] = useState('');
    const [abt,setAbt] = useState('');
    const [loc,setLoc] = useState('');
    const [web,setWeb] = useState('');
    const [git,setGit] = useState('');
    const [linkedin,setLinkedin] = useState('');

    
    //edu-1
    const [clg,setClg] = useState('');
    const [deg,setDeg] = useState('');
    const [branch,setBranch] = useState('');
    const [fromClg,setFromclg] = useState('');
    const [toClg,setToClg] = useState('');
    const [cgpa,setCgpa] = useState('');

    
    //edu-2
    const [title,setTitle] = useState('');
    const [skills,setSkills] = useState('');
    const [cert1,setCert1] = useState('');
    const [cert2,setCert2] = useState('');
    const [cert3,setCert3] = useState('');
    const [certGiven1,setCertGiven1] = useState('');
    const [certGiven2,setCertGiven2] = useState('');
    const [certGiven3,setCertGiven3] = useState('');

    
    //edu-3
    const [exp_comp1,setExp_comp1] = useState('');
    const [exp_pos1,setExp_pos1] = useState('');
    const [exp_from1,seEexp_from1] = useState('');
    const [exp_to1,setEexp_to1] = useState('');
    const [exp_comp2,setExp_comp2] = useState('');
    const [exp_pos2,setExp_pos2] = useState('');
    const [exp_from2,setExp_from2] = useState('');
    const [exp_to2,setExp_to2] = useState('');

    
    //proj
    const [proj1,setproj1] = useState('');
    const [proj1_tech,setproj1_tech] = useState('');
    const [proj1_url,setproj1_url] = useState('');
    const [proj1_desc,setproj1_desc] = useState('');
    const [proj2,setproj2] = useState('');
    const [proj2_tech,setproj2_tech] = useState('');
    const [proj2_url,setproj2_url] = useState('');
    const [proj2_desc,setproj2_desc] = useState('');
    const [proj3,setproj3] = useState('');
    const [proj3_tech,setproj3_tech] = useState('');
    const [proj3_url,setproj3_url] = useState('');
    const [proj3_desc,setproj3_desc] = useState('');

    
    //template
    const [chosenTemp,setChosenTemp] = useState('');
    return (
        <DataContext.Provider value={{
            name,setName,mail,setMail,phone,setPhone,abt,setAbt,loc,setLoc,web,setWeb,git,setGit,linkedin,setLinkedin,clg,setClg,deg,setDeg,branch,setBranch,fromClg,setFromclg,toClg,setToClg,cgpa,setCgpa,title,setTitle,skills,setSkills,cert1,setCert1,cert2,setCert2,cert3,setCert3,certGiven1,setCertGiven1,certGiven2,setCertGiven2,certGiven3,setCertGiven3,exp_comp1,setExp_comp1,exp_pos1,setExp_pos1,exp_from1,seEexp_from1,exp_to1,setEexp_to1,exp_comp2,setExp_comp2,exp_pos2,setExp_pos2,exp_from2,setExp_from2,exp_to2,setExp_to2,proj1,setproj1,proj1_tech,setproj1_tech,proj1_url,setproj1_url,proj1_desc,setproj1_desc,proj2,setproj2,proj2_tech,setproj2_tech,proj2_url,setproj2_url,proj2_desc,setproj2_desc,proj3,setproj3,proj3_tech,setproj3_tech,proj3_url,setproj3_url,proj3_desc,setproj3_desc,chosenTemp,setChosenTemp



        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;