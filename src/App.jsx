import React from "react";
import Mainroutes from "./routes/Mainroutes";
import Lenis from "lenis";

const App = () => {
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  return (
    <>
      <Mainroutes />
    </>
  );
};

export default App;
