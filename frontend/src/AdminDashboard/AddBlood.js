import React, { useState } from 'react'
import axios from 'axios'
const AddBlood = () => {
  const [values,setValues]=useState({
    units:'',
    Blood_group:''
  })
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:5000/blood',values);
      if (response.data.success === true){
        alert('Blood Added Successfull')
        setValues({
          units:'',
          Blood_group:''
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div>
    <div className="flex justify-center items-center font-serif mt-10">
      <form className="bg-white shadow-md rounded p-10 text-lg" onSubmit={handleSubmit}>
        <h1 className="text-center text-lg font-bold">Blood Form</h1>
        <div className="m-5 ml-0">
            Blood Units
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            type="number"
            placeholder="Units"
            name="units"
            required
            value={values.units}
            onChange={handleInput}
          />
        </div>
        <div>
          <label className="mr-6">
            Blood Group
          </label>
          <select
            name="Blood_group"
            id="Blood_group"
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
    </div>
  )
};

export default AddBlood;
