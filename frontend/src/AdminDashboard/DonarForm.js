import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const DonarForm = () => {
  // const navigator=useNavigate()
  const [values, setValues] = useState({
    Name: "",
    Age: "",
    Gender: "",
    Mobile: "",
    Email: "",
    Blood_group: "",
    Address: "",
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
      const response = await axios.post("http://localhost:5000/donar", values);
      if (response.data.success === true) {
        alert("Donar Added");
        setValues({
          Name: "",
          Age: "",
          Gender: "",
          Mobile: "",
          Email: "",
          Blood_group: "",
          Address: "",
        });
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <div className="bg-cover" style={{backgroundImage:`url("assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.avif" )`}}>
    <div className="flex justify-center font-serif p-10">
      <form
        className="bg-white shadow-md rounded-lg text-xl p-4 w-[25rem]"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-3xl font-bold">Donar Form</h1>
        <div className="space-y-4 px-4 pt-4">
        <div className="">
          <label>Name
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            type="text"
            placeholder="Name"
            name="Name"
            value={values.Name}
            onChange={handleInput}
            required
          />
          </label>
        </div>
        <div className="">
          <label>
            Gender
            <div>
              <input
                id="male"
                type="radio"
                name="Gender"
                value="Male"
                onChange={handleInput}
              />
              Male
              <input
                id="female"
                type="radio"
                name="Gender"
                value="Female"
                onChange={handleInput}
              />
              Female
            </div>
          </label>
        </div>
        <div className="">
          <label>
          Age
          <input
            className="w-full border border-gray-300 rounded"
            id="age"
            type="number"
            placeholder="Age"
            name="Age"
            value={values.Age}
            required
            onChange={handleInput}
          />
          </label>
        </div>
        <div>
          <label className="">Blood Group
          <select
            name="Blood_group"
            id="blood"
            className="border border-gray-300 rounded"
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
        <div className="">
          <label>Email
          <input
            className="w-full mt-2 border border-gray-300 rounded"
            id="email"
            type="email"
            placeholder="Email"
            name="Email"
            value={values.Email}
            onChange={handleInput}
          />
          </label>
        </div>
        <div className="">
          <label className="">Mobile
          <input
            className="w-full border border-gray-300 rounded"
            id="mobile"
            type="text"
            placeholder="Mobile"
            name="Mobile"
            value={values.Mobile}
            required
            onChange={handleInput}
          />
          </label>
        </div>
        <div className="">
          <label className="">Address
          <input
            className="w-full border border-gray-300 rounded"
            id="Address"
            type="text"
            placeholder="Address"
            name="Address"
            value={values.Address}
            onChange={handleInput}
          />
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
    <div className="text-center">
        <Link to='/Dashboard'>
        <button className="bg-red-300 p-2 px-5 rounded-lg">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default DonarForm;
