"use client";

import LogoTxt from "../../public/logo_txt.png";
import LogoImg from "../../public/logo.svg";

export default function Logo() {
  return (
    <a href="/">
      <div className="flex items-center gap-3">
        <img
          src={LogoImg.src}
          className="h-14 w-14 cursor-pointer rotate-animation duration-500"
          alt="logo"
        />
        <style jsx>{`
          @keyframes rotateAnimation {
            0% { transform: rotate(0deg); }
            12.5% { transform: rotate(62deg); }
            25% { transform: rotate(0deg); }
            37.5% { transform: rotate(-48deg); }
            50% { transform: rotate(0deg); }
            62.5% { transform: rotate(34deg); }
            75% { transform: rotate(0deg); }
            87.5% { transform: rotate(-16deg); }
            100% { transform: rotate(0deg); }
          }
          .rotate-animation:hover {
            animation: rotateAnimation 1.5s forwards;
          }
        `}</style>
        <img
          src={LogoTxt.src}
          className="h-20 w-auto"
          alt="UnipiRentals"
        />
      </div>
    </a>
  );
}




