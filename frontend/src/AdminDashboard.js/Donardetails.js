import React, { useEffect, useState } from 'react'
import axios from "axios";

const Donardashboard = () => {
    const [donars,setDonars]=useState([]);
    useEffect(()=>{
        const fetchAlldonars =async ()=>{
            try{
                const res= await axios.get('http://localhost:5000/donar')
                setDonars(res.data);
            }catch(err){
                console.log(err);
            }
        }
        fetchAlldonars()
    },[])

  return (
    <div>
        <h1>Donar Details.....</h1>
        <div>
            {donars.map(donar=>(
                <div className='flex' key={donar.idDonar}>
                <p>{donar.Donar_Name}</p>
                <p>{donar.Blood_Group}</p>
                <p>{donar.Contact_Number}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Donardashboard
