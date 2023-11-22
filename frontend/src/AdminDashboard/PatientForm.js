import React, { useState } from "react";
import axios from "axios";
const PatientForm = () => {
  const [values, setValues] = useState({
    Name:'',
    Units: '',
    Blood_group: '',
    Purpose:''
  });
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/patients", values);
      if (response.data.success === true) {
        alert("Pateints Details added");
        setValues({
          Name: '',
          Units: '',
          Blood_group: '',
          Purpose: '',
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="h-screen bg-cover"style={{ backgroundImage: `url('assets/human-resources-management-concept-hand-choosing-people-icon-human-resources-recruitment-human-resources-hr-management-recruitment-employment-headhunting-conce.avif')`}}>
      <div className="flex justify-center items-center font-serif ">
        <form
          className="bg-white shadow-md rounded p-10 mt-14 text-lg" style={{height:"600px", width:"500px"}}
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-lg font-bold" style={{fontSize:"35px" }}>PatientForm</h1>
          <div className="m-5 ml-0">
            <div  style={{marginTop:"30px"}}
>
            <label style={{fontSize:"25px"}}>
              Name
              <label/>
              <input
              className="w-full mt-3 h-14 border border-gray-300 rounded"
                type="text"
                placeholder="  Name"
                name="Name"
                required
                value={values.Name}
                onChange={handleInput}
                style={{}}
              />
            </label>
            </div>
            <div  style={{marginTop:"30px"}}
>
            <label   style={{fontSize:"25px",marginTop:"50px"}}>
              Units
            <input
              className="w-full h-14 mt-2 border border-gray-300 rounded"
              type="number"
              placeholder="  Units"
              name="Units"
              required
              value={values.Units}
              onChange={handleInput}
            />
            </label>
            </div>
          </div>
          <div  style={{marginTop:"30px"}}
>
            <label className="mr-6" >Blood Group</label>
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
          <div style={{fontSize:"25px",marginTop:"20px"}}>
          <label >
            Purpose
            <input
              className="border border-gray-300 h-14 rounded w-full"
              type="text"
              placeholder="  Purpose"
              name="Purpose"
              required
              value={values.Purpose}
              onChange={handleInput}
            />
          </label>
          <div className="text-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              style={{fontSize:"25px",marginTop:"40px"}}
             
            >
              Submit
            </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PatientForm;