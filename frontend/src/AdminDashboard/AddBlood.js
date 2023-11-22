import React, { useState } from 'react'
import axios from 'axios'
const AddBlood = () => {
  const [values,setValues]=useState({
    Units:'',
    Blood_group:''
  })
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]:event.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/blood',values);
      if (response.data.success === true){
        alert('Blood Added Successfull')
        setValues({
          Units:'',
          Blood_group:''
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="bg-cover h-screen"style={{backgroundImage:`url("assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.avif" )`}}>
    <div className="flex justify-center items-center font-serif pt-10">
      <form className="bg-white shadow-md rounded p-10 text-lg" onSubmit={handleSubmit} style={{height:"500px", marginTop:"30px"}}>
        <h1 className="text-center text-lg font-bold" style={{fontSize:"33px"}}>Blood Form</h1>
        <div className="m-5 ml-0" style={{fontSize:"20px",paddingTop:"30px"}}>
            Blood Units
          <input
            className="w-full mt-2 border border-gray-300 rounded"  style={{marginTop:"10px",height:"40px",borderColor:"black"}}
            type="number"
            placeholder="Units"
            name="Units"            
            required
            value={values.Units}
            onChange={handleInput}
           
          />
        </div>
        <div style={{fontSize:"20px",marginTop:"30px"}}>
          <label className="mr-6"  >
            Blood Group
          </label>
          <select
            type="text"
            name="Blood_group"
            className="border border-gray-300 rounded w-20 "
            value={values.Blood_group}
            required
            onChange={handleInput}

          >
            <option value="none" defaultValue>
              Select
            </option>
            <option value="O+ve">O+ve</option>
            <option value="O-ve">O-ve</option>
            <option value="A+ve">A+ve</option>
            <option value="A-ve">A-ve</option>
            <option value="B+ve">B+ve</option>
            <option value="B-ve">B-ve</option>
            <option value="AB+ve">AB+ve</option>
            <option value="AB-ve">AB-ve</option>
          </select>
        </div>
        <div className="" style={{fontSize:"20px",marginTop:"20px"}}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  )
};

export default AddBlood;
