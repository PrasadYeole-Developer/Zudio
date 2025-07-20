import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    reset();
    navigate("/login");
  };
  return (
    <>
      <div className="w-full min-h-screen bg-[#111] p-8 select-none font-black text-white flex flex-col justify-between">
        <Navbar />
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(RegisterHandler)}
            className="flex w-fit flex-col items-center justify-center bg-white rounded-2xl p-8"
          >
            <input
              {...register("name", { required: true })}
              type="text"
            className="text-lg outline-none p-2 bg-[#111] rounded placeholder:font-normal"
              placeholder="Enter your name"

            />
            <input
              {...register("email", { required: true })}
              type="email"
              className="text-lg outline-none mt-2 p-2 bg-[#111] rounded placeholder:font-normal"
              placeholder="Enter your email"
            />
            <input
              {...register("password", { required: true })}
              type="password"
              className="text-lg outline-none mt-2 p-2 mb-12 bg-[#111] rounded placeholder:font-normal"
              placeholder="Enter password"
            />
            <button className="bg-blue-950 text-white px-4 py-2 mt-4 rounded-lg hover:bg-[#222] transition duration-300 cursor-pointer">
              Register
            </button>
            <p className="text-gray-800 mt-4 font-semibold">
              Already have an account ?{" "}
              <Link to="/login" className="text-blue-950 hover:underline font-black">
                Login
              </Link>
            </p>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Register;
