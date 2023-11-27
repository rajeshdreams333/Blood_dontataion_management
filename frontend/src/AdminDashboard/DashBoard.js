import React from "react";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <>
            <div>
              <Link to="/DashBoard/BloodStocks">
              <button
              >
                BloodStock
              </button>
              </Link>
            </div> 
            <div>
              <Link to="/DashBoard/DonarForm">
              <button
              >
                Donar Form
              </button>
              </Link>
            </div>  
            <div>
              <Link to="/DashBoard/Donardetails">
              <button
              >
                Donardetails
              </button>
              </Link>
            </div>  
            <div>
              <Link to="/DashBoard/AddBlood">
              <button
              >
                AddBlood
              </button>
              </Link>
            </div>  
            <div>
              <Link to="/DashBoard/PatientForm">
              <button
              >
                PatientForm
              </button>
              </Link>
            </div>   
    </>
  );
}
export default DashBoard;
