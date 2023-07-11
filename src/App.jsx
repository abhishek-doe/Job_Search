import React from "react";
import HomePage from "./components/HomePage";
import JobDetail from "./components/JobDetail";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="w-[85%] m-auto bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/jobDetail" element={<JobDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
