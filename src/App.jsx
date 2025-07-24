import React, { useEffect } from "react";
import Mainroutes from "./routes/Mainroutes";
import Lenis from "lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Mainroutes />
    </>
  );
};

export default App;
