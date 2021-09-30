import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleEmployee = () => {
    let {id}=useParams();
    const [employeesDetails,setEmployessDetails]=useState([]);
   
   useEffect(()=>{
       fetch('./details.json')
       .then(res=>res.json())
       .then(data=>setEmployessDetails(data.employee))
       
   },[])
 
    useEffect(()=>{
      const foundEmployee=  employeesDetails.find(employ=>employ.id===id)
    },[employeesDetails])
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default SingleEmployee;<h1>single employee</h1>