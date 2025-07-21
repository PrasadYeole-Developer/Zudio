import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageTransition from "../components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover fixed top-0 left-0 z-10"
      >
        <source src="/backgroundVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full min-h-screen p-8 select-none font-black text-white flex flex-col relative z-10">
        <Navbar />
        <div className="top flex flex-col gap-4 px-8 py-16">
          <h1 className="text-white text-7xl font-bold mb-6">
            Style for All. <br /> Walk In. Stand Out.{" "}
          </h1>
          <p className="text-white text-sm tracking-wider leading-6 font-semibold">
            Zudio, a fashion-forward brand by Tata’s Trent Limited, was created
            to serve India’s rising demand for trendy yet affordable clothing.
            Its mission is built around the “AAA” formula – Accessibility,
            Affordability, and an Attractive product line. With this, Zudio aims
            to make style democratic and easy for everyone.
            <br />
            Unlike most brands today, Zudio is proudly offline-first – its
            stores are the core of the brand experience. There’s no e-commerce
            or delivery; instead, each visit to a Zudio store feels like a
            treasure hunt, thanks to daily refreshed collections, vibrant
            designs, and budget-friendly prices (shirts starting at ₹299).
            <br />
            Whether you're updating your wardrobe or looking for something bold
            and new, Zudio makes fashion accessible without compromise.
          </p>
        </div>
      </div>
      <div className="w-full bg-[#111] p-8">
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
