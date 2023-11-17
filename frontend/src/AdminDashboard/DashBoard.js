import React, { useState } from "react";
import DonarForm from "./DonarForm";
import Donardetails from "./Donardetails";
import AddBlood from "./AddBlood";
import BloodDetails from "./BloodDetails";

const DashBoard = () => {
  const [isToggled,setIsToggled]=useState(1);
  return (
    <>
      <div className="flex">
        <div className="w-1/6 h-screen bg-gray-300 text-center">
        <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(1)}
              >
                DashBoard
              </button>
            </div>  
          </div>
          <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(2)}
              >
                Donar
              </button>
            </div>  
          </div>
          <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(3)}
              >
                Donardetails
              </button>
            </div>  
          </div>
          <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(4)}
              >
                AddBlood
              </button>
            </div>  
          </div>
          <div className="mt-16">
            <div>
              <button
                className="bg-red-300 h-10 w-40 rounded-3xl"
                onClick={() =>setIsToggled(5)}
              >
                BloodDetails
              </button>
            </div>  
          </div>
      </div>
      <div className="w-5/6">
      {(() => {
        switch (isToggled) {
          case 1:
            return <DonarForm/>
          case 2:
            return <DonarForm/>
          case 3:
            return <Donardetails/>
          case 4:
            return <AddBlood/>
          case 5:
            return <BloodDetails/>
          default:
            return null
        }
      })()}
        </div>
      </div>
    </>
  );
}
export default DashBoard;
