// ContactForm.js

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
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
    console.log('Form submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
    <div className=' justify-center mt-32'>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
    <h1 className=' text-center font-bold text-4xl'>Contact Us</h1>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />

      <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-700">
        Email:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      />

      <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-700">
        Message:
      </label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="mt-1 p-2 border rounded-md w-full"
        required
      ></textarea>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md text-center">
        Submit
      </button>
    </form>
    </div>
    </>
  );
};

export default ContactForm;
