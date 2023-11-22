// ContactForm.js

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your form submission logic here
    console.log("Form submitted:", formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
     <div style={{height:"100vh",width:"100vw", backgroundSize:"cover",position:"fixed",backgroundImage:`url("assets/healthcare-medical-concept-medicine-doctor-with-stethoscope-hand-patients-come_34200-313.avif")`}}>
    <div style={{paddingTop:"70px"}}>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" style={{height:"500px" }}>
    <h1 className=' text-center font-bold text-4xl' style={{fontFamily:"roboto",fontSize:"40px", paddingTop:"10px"}}>Contact Us</h1>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700" style={{fontSize:"20px", marginTop:"40px"}}>
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        style={{borderColor:"black"}}
        required
      />

      <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700"  style={{fontSize:"20px", marginTop:"25px"}}>
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        style={{borderColor:"black"}}
        required
      />

      <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700" style={{fontSize:"20px", marginTop:"25px"}}>
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full "
        style={{borderColor:"black", height:"45px",}}
        
        
        required
      ></textarea>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md " style={{width:"100px", marginLeft:"150px" , marginTop:"30px"}}>
        Submit
      </button>
    </form>
    </div>
    </div>
    </>
  );
};

export default ContactForm;
