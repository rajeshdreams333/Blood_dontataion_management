import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BloodStocks = () => {
  const [bloods, setBloods] = useState([]);
  useEffect(() => {
    const fetchAlldonars = async () => {
      try {
        const res = await axios.get("http://localhost:5000/blood");
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
          <h1 className="text-center font-bold text-3xl mt-3">Blood Stocks</h1>
        </div>
        <div className="grid gap-x-8 gap-y-4 grid-cols-4 justify-center m-14 mb-0">
            {
                bloods.map((blood,i)=>(
                    <div key={i} className="bg-red-100 text-center p-20 rounded-full">
                       <div><h1 className="font-bold">Group</h1><h2 className="text-xl font-extrabold">{blood.Blood_group}</h2></div>
                       <div><h1 className="font-bold">Units</h1><h2 className="text-xl font-extrabold">{blood.Units}</h2></div>
                    </div>  
                ))
            }
        </div>
      </div>
      <div className="text-center mt-3">
        <Link to='/Dashboard'>
        <button className="bg-red-300 p-2 px-5 rounded-lg">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default BloodStocks;
