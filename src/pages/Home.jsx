import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const navigate = useNavigate();
  return (
    <PageTransition>
      <div className="w-full h-screen bg-black fixed opacity-70 z-0 select-none"></div>
      <div className="w-full min-h-screen bg-[url('https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg')] bg-cover bg-center p-8 select-none">
        <Navbar />
        <main className="w-full py-30 px-64 relative z-10 flex flex-col gap-8 h-full">
          <div className="top flex flex-col gap-4">
            <h1 className="text-white text-7xl font-bold mb-1">
              Fresh Drops. <br /> Real Looks.{" "}
            </h1>
            <p className="text-white text-xs tracking-wider leading-6">
              Step into effortless style with Zudio — where everyday fashion
              meets affordable luxury. <br /> Discover bold fits & timeless
              pieces designed for those who dress to express.
            </p>
          </div>
          <div className="bottom flex justify-start mt-16">
            <button
              className="bg-white text-black text-lg font-semibold px-6 py-2 rounded cursor-pointer hover:bg-[#111] hover:text-gray-200 transition-all duration-300 active:scale-95"
              onClick={() => navigate("/login")}
            >
              Shop Now
              <i className="ri-store-3-line pl-2"></i>
            </button>
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Home;
