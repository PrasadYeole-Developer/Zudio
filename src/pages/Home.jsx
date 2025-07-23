import React, { useContext, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useGSAP } from "@gsap/react";
import { GSAPContext } from "../context/GSAPProvider";

const Home = () => {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const { tl } = useContext(GSAPContext);

  useGSAP(() => {
    tl.from(
      titleRef.current,
      {
        opacity: 0,
        yPercent: 100,
        duration: 1,
        ease: "power2.inOut",
      },
      "title"
    );
    tl.from(
      textRef.current,
      {
        opacity: 0,
        yPercent: 800,
        duration: 1,
        ease: "power2.inOut",
      },
      "title"
    );
    tl.from(buttonRef.current, {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <PageTransition>
      <div className="w-full h-screen bg-black fixed opacity-70 z-0 select-none"></div>
      <div className="w-full min-h-screen bg-[url('https://images.pexels.com/photos/1488467/pexels-photo-1488467.jpeg')] bg-cover bg-center p-4 sm:p-6 md:p-8 select-none flex flex-col">
        <div className="relative z-20">
          <Navbar />
        </div>
        <main className="w-full flex-1 flex flex-col gap-8 h-full justify-center items-center md:items-start py-12 md:py-18 lg:py-24 px-2 sm:px-8 md:px-16 lg:px-32 relative z-10">
          <div className="top flex flex-col gap-4 overflow-hidden w-full max-w-3xl">
            <h1
              ref={titleRef}
              className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-1 leading-tight"
            >
              Fresh Drops. <br /> Real Looks.{" "}
            </h1>
            <p
              ref={textRef}
              className="text-white text-xs sm:text-sm tracking-wider leading-6 md:leading-7"
            >
              Step into effortless style with Zudio — where everyday fashion
              meets affordable luxury. <br className="hidden sm:block" /> Discover bold fits & timeless
              pieces designed for those who dress to express.
            </p>
          </div>
          <div
            ref={buttonRef}
            className="bottom flex justify-start mt-6 sm:mt-8 md:mt-12 w-full max-w-3xl"
          >
            <button
              className="btn bg-white text-black text-base sm:text-lg font-semibold px-4 sm:px-6 py-2 rounded cursor-pointer hover:bg-[#111] hover:text-gray-200 transition-all duration-300 active:scale-95 flex items-center"
              onClick={() => navigate("/login")}
            >
              Shop Now
              <i className="ri-store-3-line pl-2 text-lg"></i>
            </button>
          </div>
        </main>
        <div className="w-full mt-auto">
          <Footer />
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
