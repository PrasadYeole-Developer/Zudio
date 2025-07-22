import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Footer = () => {
  useGSAP(() => {
    gsap.from(".footer-link", {
      opacity: 0,
      yPercent: 200,
      duration: 0.7,
      delay: 1.5,
      ease: "sine.inOut",
      stagger: 0.2,
    });
    gsap.from(".footer-text", {
      opacity: 0,
      yPercent: 100,
      duration: 0.3,
      delay: 2.7,
      ease: "sine.inOut",
    });
  }, []);
  return (
    <footer className="w-full flex justify-between items-center  relative z-10 px-8 select-none">
      <div className="flex gap-8 overflow-hidden">
        <a
          href="https://www.instagram.com/myzudio"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="h-12 flex items-center footer-link"
        >
          <img src="/instagram.svg" alt="Instagram" width={30} height={30} />
        </a>
        <a
          href="https://www.linkedin.com/company/zudio-trent/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="h-12 flex items-center footer-link"
        >
          <img src="/linkedin.svg" alt="LinkedIn" width={42} height={42} />
        </a>
        <a
          href="https://x.com/OfficialZudio/with_replies"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="h-12 flex items-center footer-link"
        >
          <img src="/twitter.svg" alt="Twitter" width={28} height={28} />
        </a>
      </div>
      <div className="overflow-hidden flex gap-8 items-center relative">
        <p className="footer-text text-white text-sm tracking-wider font-semibold">
          © 2025 Zudio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
