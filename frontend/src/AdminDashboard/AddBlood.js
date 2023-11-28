import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
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
    <div className="bg-cover lg:h-screen"style={{backgroundImage:`url("assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.avif" )`}}>
    <div className="flex justify-center items-center font-serif pt-20">
      <form className="bg-white shadow-md rounded text-lg" onSubmit={handleSubmit}>
        <h1 className="text-center text-2xl font-bold">Blood Form</h1>
        <div className='p-10 space-y-5'>
        <div className="">
            Blood Units
          <input
            className="w-full border border-gray-300 rounded"  
            type="number"
            placeholder="Units"
            name="Units"            
            required
            value={values.Units}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="">
            Blood Group
          
          <select
            type="text"
            name="Blood_group"
            className="border border-gray-300 rounded w-20"
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
          </label>
        </div>
        <div className="text-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        </div>
      </form>
    </div>
    <div className="text-center pt-10">
        <Link to='/Dashboard'>
        <button className="bg-red-300 p-2 px-5 rounded-lg">Back</button>
        </Link>
      </div>
    </div>
  )
};

export default AddBlood;
