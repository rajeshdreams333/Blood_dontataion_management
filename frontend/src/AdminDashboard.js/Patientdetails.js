import React, { useEffect, useState } from 'react'
import axios from "axios";

const Patientdetails = () => {
    const [patients,setPatients]=useState([]);
    useEffect(()=>{
        const fetchAlldonars =async ()=>{
            try{
                const res= await axios.get('http://localhost:5000/patient')
                setPatients(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAlldonars()
    },[])

  return (
    <div>
        <h1>Patient Details.....</h1>
        <div>
            {patients.map(patient=>(
                <div className='flex'key={patient.idPatient}>
                <p>{patient.Name}</p>
                <p>{patient.Purpose}</p>
                <p>{patient.Contact_number}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Patientdetails;
