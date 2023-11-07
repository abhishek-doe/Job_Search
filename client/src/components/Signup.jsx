import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../featured/auth";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios
      .post("http://localhost:8000/signup", { name, email, password })
      .then((res) => {
        dispatch(login(res.data));
        toast.success("Registered Successfully")
      })
      .catch((err) => console.log(err));
    navigate("/");
  };

  return (
    <main className="signup flex justify-center items-center">
      <form className="flex flex-col w-[28rem] h-[28rem] mb-[7rem] mt-[3rem] p-[4rem] rounded-[10px] shadow-2xl" onSubmit={handleSubmit}>
        <h1 className="flex justify-center text-[1.7rem] font-semibold mt-[-2rem] mb-[2rem]">Signup</h1>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Enter Username..."
          className="email border border-[#747474] w-[19rem] rounded-[5px] p-[0.5rem]"
        />
        <br />
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Enter Email..."
          className="email border border-[#747474] w-[19rem] rounded-[5px] p-[0.5rem]"
        />
        <br />
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter Password..."
          className="password border border-[#747474] w-[19rem] rounded-[5px] p-[0.6rem]"
        />
        <br />
        <button className="btn bg-gray-800 text-white p-[0.6rem] rounded-[5px] w-[19rem]">Signup</button>
        <br />
        <button className="text-[#7c7c7c] p-[0.6rem] rounded-[5px] w-[19rem]">
          Already have an account?{" "}
          <Link to="/signin" className="text-gray-800">
            Signin
          </Link>
        </button>
      </form>
    </main>
  );
};

export default Signup;
