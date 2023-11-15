import React, { useEffect, useState } from "react";
import axios from "axios";

const Patientdetails = () => {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchAllpatient = async () => {
      try {
        const res = await axios.get("http://localhost:5000/patient");
        setPatients(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllpatient();
  }, []);

  return (
    <>
      <div className="w-full flex shadow-lg mb-6 mt-4">
        <div>
          <h3 className="text-xl font-bold">Patient Details</h3>
        </div>
        <div>
          <div className="block bg-transparent m-4 p-4 w-full overfolw-x-auto"></div>
          <table className="w-full">
            <thead>
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-3 py-6">Name</th>
                <th className="text-md px-3 py-6">Gender</th>
                <th className="text-md px-3 py-6">Age</th>
                <th className="text-md px-3 py-6">Mobile</th>
                <th className="text-md px-3 py-6">Email</th>
                <th className="text-md px-3 py-6">Blood_Group</th>
                <th className="text-md px-3 py-6">Purpose</th>
                <th className="text-md px-3 py-6">Addresss</th>
                <th className="text-md px-3 py-6">Update</th>
                <th className="text-md px-3 py-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient,i) => (
                <tr key={i}>
                  <td className="text-md px-4 py-1">{patient.Name}</td>
                  <td className="text-md px-4 py-1">{patient.Gender}</td>
                  <td className="text-md px-4 py-1">{patient.Age}</td>
                  <td className="text-md px-4 py-1">{patient.Mobile}</td>
                  <td className="text-md px-4 py-1">{patient.Email}</td>
                  <td className="text-md px-4 py-1">{patient.Blood_group}</td>
                  <td className="text-md px-4 py-1">{patient.Purpose}</td>
                  <td className="text-md px-4 py-1">{patient.Address}</td>
                  <td className="text-md px-3 py-1">
                    <img
                      src=".\assets\edit.png"
                      alt="editimages"
                      className="h-5 cursor-pointer"
                    />
                  </td>
                  <td className="text-md px-3 py-1">
                    <img
                      src=".\assets\delete.png"
                      alt="editimages"
                      className="h-5 cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Patientdetails;
