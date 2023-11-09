import React, { useState } from "react";
const Admin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const {username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value]});
  };
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex items-center justify-center mt-32">
      <div className="bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="font-bold text-center text-3xl">Admin Login</h2>
        <form action="" onSubmit={submitHandler}>
          <div className="mb-3 mt-6">
            <label className="text-xl mb-5">Username</label>
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
            />
          </div>
          <div className="mb-3">
            <label className="text-xl">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="py-1 px-3 mt-3 bg-red-500 text-white rounded hover:bg-red-600 focus:ring focus:ring-indigo-400 focus:outline-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
