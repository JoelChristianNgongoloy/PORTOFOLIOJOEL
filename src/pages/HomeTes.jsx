import React from "react";
import { Typewriter } from "react-simple-typewriter";
import JoelFoto from "../assets/img/JoelFOto.jpg";
import { ArrowDownIcon } from "@heroicons/react/24/solid";

const HomeTes = () => {
  return (
    <div
      id="home"
      className="h-screen bg-transparent flex items-center justify-center"
    >
      <div className="mb-20">
        <div className="flex justify-center">
          <p className="font-poppins text-2xl text-white font-medium lg:font-poppins lg:text-white lg:text-5xl lg:font-semibold mb-8">
            Welcome To My Portofolio !
          </p>
        </div>
        <div className="text-center mb-8">
          <p className="font-source-code-pro text-sm text-white md:text-lg lg:text-3xl lg:font-medium">
            <Typewriter
              words={[
                "Web Developer",
                "Frontend Developer",
                "Backend Developer",
                "Fullstack Developer",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>
        <div className="flex justify-center mb-10">
          <div
            className="outline outline-offset-4 outline-slate-600 bg-white h-32 w-32 md:h-64 md:w-64 lg:h-76 lg:w-76 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${JoelFoto})`,
              boxShadow:
                "0 0 10px rgba(74, 85, 104, 0.5), 0 0 20px rgba(74, 85, 104, 0.3), 0 0 30px rgba(74, 85, 104, 0.1)",
            }}
          ></div>
        </div>
        <div className="flex justify-center">
          <a
            href="/CV_Joel_Christian_Ngongoloy.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="outline outline-slate-400 outline-offset-2 bg-slate-800 text-white font-poppins h-8 w-32 rounded-xl flex justify-center items-center animate-bounce cursor-pointer hover:bg-white hover:text-black hover:outline-white">
              Open My CV
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTes;
