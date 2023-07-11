import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {

  const handleSubmit = (e) => {
      e.preventDefault()
  }
  return (
    <main className="signin h-[60vh] mb-[5rem] flex justify-center items-center">
      <form className="flex flex-col w-[28rem] h-[25rem] p-[4rem] rounded-[10px] shadow-lg" onSubmit={handleSubmit}>
        <h1 className="flex justify-center text-[1.7rem] font-semibold mt-[-2rem] mb-[2rem]">Signin</h1>
        <input type="email" placeholder="Enter Email..." className="email border border-[#747474] w-[19rem] rounded-[5px] p-[0.5rem]"/><br />
        <input type="password" placeholder="Enter Password..." className="password border border-[#747474] w-[19rem] rounded-[5px] p-[0.6rem]"/><br />
        <button className="btn bg-blueColor text-white p-[0.6rem] rounded-[5px] w-[19rem]">Signup</button><br />
        <button className="text-[#7c7c7c] p-[0.6rem] rounded-[5px] w-[19rem]">Didn't have an account? <Link to='/signup' className="text-blueColor">Signup</Link></button>
      </form>
    </main>
  );
};

export default Signup;
