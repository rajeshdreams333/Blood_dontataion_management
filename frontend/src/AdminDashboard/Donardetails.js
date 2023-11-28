import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Donardetails = () => {
  const [donars, setDonars] = useState([]);
  useEffect(() => {
    const fetchAlldonars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/donar");
        setDonars(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlldonars();
  }, []);
  const handleDelete = async(id) => {
    try {
      const res= await axios.delete(`http://localhost:5000/remove/${id}`);
      console.log(res.data);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };
  return (
    <>
     <div>
          <h3 className="text-xl text-center font-bold pt-5">Donar Details</h3>
        </div>
      <div className="w-full flex shadow-lg justify-center pt-10">
        <div>
          <div className="block bg-transparent overfolw-x-auto"></div>
          <table className="">
            <thead>
              <tr className="border border-solid border-l-0 border-r-0">
                <th className="text-md px-3 py-6">Name</th>
                <th className="text-md px-3 py-6">Gender</th>
                <th className="text-md px-3 py-6">Age</th>
                <th className="text-md px-3 py-6">Mobile</th>
                <th className="text-md px-3 py-6">Email</th>
                <th className="text-md px-3 py-6">Blood_Group</th>
                <th className="text-md px-3 py-6">Addresss</th>
                <th className="text-md px-3 py-6">Delete</th>
              </tr>
            </thead>
            <tbody>
              {donars.map((donar, id) => (
                <tr key={id}>
                  <td className="text-md px-4 py-1">{donar.Name}</td>
                  <td className="text-md px-4 py-1">{donar.Gender}</td>
                  <td className="text-md px-4 py-1">{donar.Age}</td>
                  <td className="text-md px-4 py-1">{donar.Mobile}</td>
                  <td className="text-md px-4 py-1">{donar.Email}</td>
                  <td className="text-md px-4 py-1">{donar.Blood_group}</td>
                  <td className="text-md px-4 py-1">{donar.Address}</td>
                  <td className="text-md px-3 py-1">
                  <button onClick={e=>handleDelete(donar.iddonar)}>
                    <img
                      src=".\assets\delete.png"
                      alt="editimages"
                      className="h-5 cursor-pointer"
                    />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-center mt-3 flex flex-col">
        <Link to='/Dashboard'>
        <button className="bg-red-300 p-2 px-5 rounded-lg">Back</button>
        </Link>
      </div>
        </div>
        
      </div>
    </>
  );
};

export default Donardetails;
