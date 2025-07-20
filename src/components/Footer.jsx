import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-between items-center  relative z-10 px-8">
    <div className="flex gap-8">
      <a
        href="https://www.instagram.com/myzudio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="h-12 flex items-center"
      >
        <img src="/instagram.svg" alt="Instagram" width={30} height={30} />
      </a>
      <a
        href="https://www.linkedin.com/company/zudio-trent/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="h-12 flex items-center"
      >
        <img src="/linkedin.svg" alt="LinkedIn" width={42} height={42} />
      </a>
      <a
        href="https://x.com/OfficialZudio/with_replies"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="h-12 flex items-center"
      >
          <img src="/twitter.svg" alt="Twitter" width={28} height={28} />
        </a>
      </div>
      <div className="flex gap-8 items-center relative">
        <p className="text-white text-sm">© 2025 Zudio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
