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
    <div>
      <div className="flex justify-center items-center font-serif mt-10">
        <form
          className="bg-white shadow-md rounded p-10 text-lg"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center text-lg font-bold">PatientForm</h1>
          <div className="m-5 ml-0">
            <div>
            <label>
              Name
              <input
              className="w-full mt-2 border border-gray-300 rounded"
                type="text"
                placeholder="Name"
                name="Name"
                required
                value={values.Name}
                onChange={handleInput}
              />
            </label>
            </div>
            <div>
            <label>
              Units
            <input
              className="w-full mt-2 border border-gray-300 rounded"
              type="number"
              placeholder="Units"
              name="Units"
              required
              value={values.Units}
              onChange={handleInput}
            />
            </label>
            </div>
          </div>
          <div>
            <label className="mr-6">Blood Group</label>
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
          <label>
            Purpose
            <input
              className="border border-gray-300 rounded w-full"
              type="text"
              placeholder="Purpose"
              name="Purpose"
              required
              value={values.Purpose}
              onChange={handleInput}
            />
          </label>
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
  );
};

export default PatientForm;