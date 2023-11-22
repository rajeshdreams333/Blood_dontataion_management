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
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url('/assets/Adminbg.png')`, position:"fixed", height:"100vh",width:"100vw",backgroundSize:"cover"}}>
    <div >
      <div className="bg-white p-8 rounded-lg shadow-2xl" style={{height:"450px",width:"450px"}}>
        <h2 className="font-bold text-center text-3xl"  style={{fontSize:"40px"}}>Admin Login</h2>
        <form action="" onSubmit={submitHandler}>
          <div className="mb-3 mt-10">
            <label className="text-xl mb-5" style={{fontSize:"25px"}}>Username</label>
            <input
              type="text"

              placeholder="Username"
              name="username"
              value={username}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
              style={{height:"50px",borderColor:"black"}}
           />
          </div>
          <div className="mb-3 mt-6">
            <label className="text-xl"  style={{fontSize:"25px"}}>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={changeHandler}
              className="w-full p-1 mt-1 border border-gray-300 rounded focus:ring focus:ring-red-200 focus:outline-none"
              style={{height:"50px",borderColor:"black"}}
           />
          </div>
          <div className="text-center">
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
    </div>
  );
};

export default Admin;
