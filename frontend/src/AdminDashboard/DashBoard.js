import React, { useState } from "react";
// import PatientForm from "./PatientForm";
import DonarForm from "./DonarForm";
// import Donardetails from "./Donardetails";
// import Patientdetails from "./Patientdetails"
// import AddBlood from "./AddBlood"
// import BloodDetails from "./BloodDetails"
const DashBoard = () => {
  const [isToggled,setIsToggled]=useState(false);
  console.log(isToggled);
  return (
    <>
      <div className="flex">
        <div className="w-1/6 h-screen bg-gray-300 text-center">
          
          <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(!isToggled)}
              >
                Donar
              </button>
            </div>
          </div>
          
      </div>
      <div className="w-5/6">
          <DonarForm isToggled={isToggled}/>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
