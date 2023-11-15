import React, { useState } from "react";
import axios from "axios";
const PatientForm = () => {
  const [values,setValues]=useState({
    Name:"",
    Age:'',
    Gender:'',
    Mobile:"",
    Email:'',
    Purpose:'',
    Blood_group:'',
    Address:''
  })
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:5000/patient',values);
      if (response.data.success === true){
        alert('Patient Added')
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="flex justify-center items-center font-serif">
      <form className="bg-white shadow-md rounded p-10 text-lg" onSubmit={handleSubmit}>
        <h1 className="text-center text-lg font-bold">Patient Form</h1>
        <div className="m-5 ml-0">
          <label>Name</label>
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="name"
            type="text"
            placeholder="Name"
            name="Name"
            onChange={handleInput}
            required
          />
        </div>
        <div className="m-5 ml-0">
          <label>Gender</label>
          <br/>
          <input id="male" type="radio" name="Gender" onChange={handleInput}/>
          Male
          <input id="female" type="radio" name="Gender" onChange={handleInput}/>
          Female 
        </div>
        <div className="m-5 ml-0">
            Age
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="age"
            type="number"
            placeholder="Age"
            name="Age"
            required
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="mr-6">
            Blood Group
          </label>
          <select
            name="Blood_group"
            id="blood"
            className="border border-gray-300 rounded w-20 "
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
        <div className="m-5 ml-0">
          <label>Email</label>
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="email"
            type="email"
            placeholder="Email"
            name="Email"
            onChange={handleInput}
          />
        </div>
        <div className="m-5 ml-0">
          <label className="">Mobile Number</label>
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="mobile"
            type="text"
            placeholder="Mobile"
            name="Mobile"
            onChange={handleInput}
          />
        </div>
        <div className="m-5 ml-0">
          <label>Purpose</label>
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="Purpose"
            type="text"
            placeholder="Purpose"
            name="Purpose"
            onChange={handleInput}
          />
        </div>
        <div className="m-5 ml-0">
          <label className="">Address</label>
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="Address"
            type="text"
            placeholder="Address"
            name="Address"
          onChange={handleInput}
          />
        </div>
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
