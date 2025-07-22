import React, { createContext } from "react";
import gsap from "gsap";

export const GSAPContext = createContext(null);

const GSAPProvider = ({ children }) => {
  const tl = gsap.timeline();
  return <GSAPContext.Provider value={{ tl }}>{children}</GSAPContext.Provider>;
};

export default GSAPProvider;
