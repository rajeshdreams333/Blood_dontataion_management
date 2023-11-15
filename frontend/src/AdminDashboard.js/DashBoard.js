import React from "react";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <>
        <div className="flex">
        <div className="w-1/6 h-screen bg-pink-600 text-center">
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Dashboard">Dashboard</Link>
          </button>
        </div>
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Donarform" className="">
              Donar Form
            </Link>
          </button>
        </div>
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Donar" className="">
              Donar Details
            </Link>
          </button>
        </div>
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Patientform" className="">
              Pateint Form
            </Link>
          </button>
        </div>
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Patient">Pateint Details</Link>
          </button>
        </div>
        <div>
          <button className="mt-10 bg-red-300 h-10 w-40 rounded-xl">
            <Link to="/Stock">Stock</Link>
          </button>
        </div>
      </div>
      <div className="w-5/6">
      <div/>
      </div>
      </div>
    </>
  );
};

export default DashBoard;
