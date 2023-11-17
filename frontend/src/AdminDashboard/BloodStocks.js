import React, { useEffect, useState } from "react";
import axios from "axios";
const BloodStocks = () => {
  const [bloods, setBloods] = useState([]);
  useEffect(() => {
    const fetchAlldonars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blood");
        console.log(res.json());
        setBloods(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlldonars();
  }, []);
  return (
    <div>
      <div>
        <div>
          <h1 className="text-center font-bold text-3xl">Blood Stocks</h1>
        </div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 m-20 ml-40">
        {bloods.map((blood, i) => (
            <div className="bg-red-500 text-center p-20 rounded-full">
              Blood Group : {blood.Blood_group}
              <br />
              Units :{blood.unit}
            </div>
          
        ))}
        </div>
      </div>
    </div>
  );
};

export default BloodStocks;
