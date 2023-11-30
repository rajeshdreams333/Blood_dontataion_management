import React,{ useState } from "react";
import{ useNavigate } from "react-router-dom";
const Admin = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const {username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
    // set value directly.. not array of 
  };
  const submitHandler = (e) => {
    e.preventDefault()
    if(data.username==='admin' && data.password==="1234")
    navigate('/DashBoard')
    else return alert('Invalid Username or Password')
  };
  return (
    <>
    <div className="p-4">
      <div className="bg-white mx-auto rounded-lg shadow-2xl h-[350px] w-[400px]">
        <h2 className="font-bold text-3xl p-8" style={{fontSize:"40px"}}>Admin Login</h2>
        <form action="" onSubmit={submitHandler} className="px-5">
            <label className="text-xl">Username
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
              style={{height:"50px",borderColor:"black"}}
           />
          </label>
            <label className="text-xl">Password
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
              style={{height:"50px",borderColor:"black"}}
           />
           </label>
           <div className="items-center">
          <button
            type="submit"
            className="py-1 px-3 mt-3 bg-red-500 text-white rounded hover:bg-red-600 focus:ring focus:ring-indigo-400 focus:outline-none"
         style={{height:"50px",width:"130px",marginTop:"30px", fontSize:"25px", fontWeight:"bold"}} >
            Login
          </button>
          </div>
        </form>
      </div>
      </div>
      </>
  );
};

export default Admin;
