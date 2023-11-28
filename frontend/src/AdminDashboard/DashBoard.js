import React from "react";
import { Link } from "react-router-dom";
const DashBoard = () => {
  return (
    <div
      className="bg-cover lg:h-screen"
      style={{
        backgroundImage:`url("assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.avif" )`,
      }}
    >
      <div className="d-flex flex-row justify-center pt-16">
        <div
          style={{
            backgroundColor: "	#008080",
            height: "250px",
            width: "300px",
            borderRadius: "10px",
            margin: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
           <Link to="/DashBoard/BloodStocks">
          <button>
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
            BloodStock
          </h1>
          </button>
          </Link>
        </div>
        <div
          style={{
            backgroundColor: "	#008080",
            height: "250px",
            width: "300px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
           <button>
            <Link to="/DashBoard/DonarForm">
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
          DonarForm
          </h1>
          </Link>
          </button>
        </div>
        <div
          style={{
            backgroundColor: "	#008080",
            height: "250px",
            width: "300px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
          <button>
            <Link to="/DashBoard/Donardetails">
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
          Donardetails
          </h1>
          </Link>
          </button>
        </div>
      </div>

      <div className="d-flex flex-row justify-center  ">
        <div
          style={{
            backgroundColor: "	#008080",
            height: "250px",
            width: "300px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
           <button>
            <Link to="/DashBoard/AddBlood">
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
          AddBlood
          </h1>
          </Link>
          </button>
        </div>
        <div
          style={{
            backgroundColor: "#008080",
            height: "250px",
            width: "300px",
            textAlign: "center",
            borderRadius: "10px",
            margin: "40px",
            display: "grid",
            placeItems: "center",
          }}
        >
           <button>
            <Link to="/DashBoard/PatientForm">
          <h1 style={{ color: "white", fontWeight: "bold", fontSize: "30px" }}>
          PatientForm
          </h1>
          </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;
