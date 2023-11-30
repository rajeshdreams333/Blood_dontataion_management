import React from "react";
const About = () => {
  return (
    <div>
      <div className="d-flex flex-row pt-16 pl-10">
        <div>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "40px",
              fontFamily: "robot",
            }}
          >
            About Us
          </h1>
          <p style={{ fontSize: "20px", width: "650px", textAlign: "justify" }}>
            Blood donation and transfusion service is an indispensable part of
            contemporary medicine and health care. Blood management has been
            recognized as a challenging task because of life threatening nature
            of blood products entails the punctilious administration due to its
            perishable nature & required timely processing and it also saves the
            life. Such great challenge has been considerably alleviated with the
            development of information and computer technology.Blood Bank is an
            integrated blood bank automation system. This web based mechanism
            inter connects all the Blood Banks of the State into a single
            network. Integrated Blood Bank MIS refers the acquisition,
            validation, storage and circulation of various live data and
            information electronically regarding blood donation and transfusion
            service. Such system is able to assemble heterogeneous data into
            legible reports to support decision making from effective donor
            screening to optimal blood dissemination in the field. Those
            electronic processes will help the public for easy access to the
            blood availability status of blood banks on finger tips; so that he
            can place a requisition of a particular blood group in nearby blood
            bank (Especially rare groups) save a valuable life. It also provides
            online status of blood group wise availability of blood units in all
            the licensed blood banks in the state. It includes online tracking
            and trailing system of the blood and blood products (components of
            blood) by the state level administrators. The system manages all the
            activities from blood collection both from camps & hospitals till
            the issue of blood units . It includes donor screening, blood
            collection, mandatory testing, storage and issue of the unit (whole
            human blood IP, different Blood component and aphaeresis blood
            products).
          </p>
          <a href="#features">
            <button
              style={{
                fontWeight: "bold",
                color: "white",
                fontSize: "25px",
                marginTop: "30px",
                backgroundColor: "#347C98",
                height: "40px",
                width: "130px",
                borderRadius: "10px",
              }}
            >
              More
            </button>
          </a>
          <button
            style={{
              fontWeight:"bold",
              color: "white",
              fontSize: "25px",
              marginTop: "30px",
              backgroundColor: "#347C98",
              height: "40px",
              width: "130px",
              borderRadius: "10px",
              marginLeft: "36px",
            }}
          >
            Next
          </button>
        </div>
        <div>
          <img
          className=""
            style={{height: "750px", padding: "50px", paddingTop: "30px" }}
            src="assets\a02068e4-156b-46ad-b55d-93d9a134957a.jpg"
            alt="image_not_found"
          />
        </div>
      </div>

      <div className="d-flex flex-row pl-20">
        <div className="pt-16 pl-10" style={{width: "300px"}}>
          <h1
            id="features"
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              fontFamily: "roboto",
            }}
          >
            Features:
          </h1>
          <p className="pt-3">
            <li> Blood Collection Management </li>
            <li> Blood Issue Management </li>
            <li> Inventory Management </li>
            <li> Stock Management</li>
            <li> Camp Management </li>
            <li>User and System Management </li>
          </p>
        </div>

        <div className="pt-16 pl-60">
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "35px",
              fontFamily: "roboto",
            }}
          >
            Advantages:
          </h1>
          <p className="pt-3">
            <li>
              {" "}
              State & Blood Bank dashboard to provide the group wise blood
              stocks status for all stakeholders.{" "}
            </li>
            <li>
              {" "}
              Dashboards for Blood Bank Officers (Tested/ Untested/ Buffer stock
              of blood units)
            </li>
            <li>
              {" "}
              Distribution of blood from mother blood banks to blood storage
              centers.
            </li>
            <li>
              Recruitment and retention of the regular blood donors in the
              state.
            </li>
            <li>
              {" "}
              Maintain all the registers according to Drugs & Cosmetic Act of
              1940.{" "}
            </li>
            <li>
              Inventory of kits and consumables with alert for short expiry.{" "}
            </li>
            <li>
              Alert mechanism for License, regular donors, organization to do
              VBD Camps.
            </li>
            <li>Provides a paperless donor room </li>
            <li>
              Real time information form collection to testing and use of blood
              and blood products.{" "}
            </li>
            <li>Unique bar coding for each blood packets. </li>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
