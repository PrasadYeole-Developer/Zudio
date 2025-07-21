import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    reset();
    toast.success("Registered Successfully!");
    navigate("/login");
  };
  return (
    <>
      <div className="w-full min-h-screen bg-[#111] p-8 select-none font-black text-white flex flex-col justify-between">
        <Navbar />
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(RegisterHandler)}
            className="flex w-fit flex-col items-center justify-center bg-white rounded-xl p-8"
          >
            <input
              {...register("name", { required: true })}
              type="text"
              className="text-lg outline-none p-2 bg-[#111] rounded placeholder:font-bold"
              placeholder="Enter your name"
            />
            <input
              {...register("email", { required: true })}
              type="email"
              className="text-lg outline-none mt-2 p-2 bg-[#111] rounded placeholder:font-bold"
              placeholder="Enter your email"
            />
            <input
              {...register("password", {
                required: true,
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\]{};':"\\|,.<>/?]).{8,}$/,
                  message: "Min 8 chars, 1 uppercase, 1 number, 1 symbol.",
                },
              })}
              type="password"
              className="text-lg outline-none mt-2 p-2 mb-2 bg-[#111] rounded placeholder:font-bold"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-700 font-medium text-sm text-center">
                {errors.password.message}
              </p>
            )}
            <button className="bg-blue-950 text-white px-4 py-2 mt-4 rounded-lg hover:bg-[#111] transition duration-300 cursor-pointer active:scale-98">
              Register
            </button>
            <p className="text-gray-800 mt-4 font-semibold">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="text-blue-950 hover:underline font-black"
              >
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
