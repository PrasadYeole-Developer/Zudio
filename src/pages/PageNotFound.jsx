import React from "react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const PageNotFound = () => {
  return (
    <PageTransition>
      <div className="w-full h-screen bg-[#111] p-32 select-none font-black text-white flex flex-col items-center justify-start gap-4">
        <Link
          className="text-3xl absolute top-8 left-10 hover:text-gray-500 transition duration-300 cursor-pointer"
          to="/"
        >
          ➥
        </Link>
        <h1 className="text-7xl font-bold">404</h1>
        <h1 className="text-4xl font-bold">Page Not Found</h1>
      </div>
    </PageTransition>
  );
};

export default PageNotFound;
