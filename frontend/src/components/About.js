import React from "react";
import Carousel from 'react-bootstrap/Carousel';
const About = () => {
  return (
<div>
    <div style={{backgroundImage:`url("assets/authentication-standing-physician-stylish-icons_1134-904.jpg")`, width:"100vw",height:"100vh",backgroundSize:"cover",position:"fixed"}}>
      <h1 style={{ fontFamily:"Roboto",  fontSize:"45px",fontWeight:"bold" ,textAlign:"center",marginLeft:"570px",paddingTop:"30px"}}>About Us</h1>
      <p style={{width:"800px",textAlign:"center",marginLeft:"580px",paddingTop:"10px", textAlign: "justify",fontSize:"20px",fontFamily:"roboto"}}><span style={{fontWeight:"bold",fontSize:"26px" ,fontFamily:"roboto"}}>B</span>lood donation and transfusion service is an indispensable part of contemporary medicine and health care. Blood management has been recognized as a challenging task because of life threatening nature of blood products entails the punctilious administration due to its perishable nature & required timely processing and it also saves the life.
Such great challenge has been considerably alleviated with the development of information and computer technology.Blood Bank is an 
integrated blood bank automation system. This web based mechanism inter connects all the Blood Banks of the State into a 
single network. Integrated Blood Bank MIS refers the acquisition, validation, storage and circulation of various live data 
and information electronically regarding blood donation and transfusion service. Such system is able to assemble heterogeneous 
data into legible reports to support decision making from effective donor screening to optimal blood dissemination in the field.
 Those electronic processes will help the public for easy access to the blood availability status of blood banks on finger tips;
  so that he can place a requisition of a particular blood group in nearby blood bank (Especially rare groups) save a valuable life.
  It also provides online status of blood group wise availability of blood units in all the licensed blood banks in the state. It includes online tracking and trailing system of the blood and blood products (components of blood) by the state level administrators. The system manages all the activities from blood collection both from camps & hospitals till the issue of blood units. It includes donor screening, blood collection, mandatory testing, storage and issue of the unit (whole human blood IP, different Blood component and aphaeresis blood products).
  </p>
  <button  style={{backgroundColor:"SlateBlue",borderRadius:"3px",marginLeft:"580px",marginTop:"20px",height:"30px",width:"130px",color:"white"}} >More Details</button>
      </div>
      </div>
  );
};

export default About;
