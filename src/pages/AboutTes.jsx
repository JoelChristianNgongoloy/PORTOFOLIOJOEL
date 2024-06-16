import React from "react";
import { Typewriter } from "react-simple-typewriter";
import JoelFoto from "../assets/img/JoelFOto.jpg";

const AboutTes = () => {
  return (
    <div
      id="about Me"
      className="h-screen bg-slate-800 flex justify-center lg:justify-between items-center"
    >
      <div className="hidden lg:flex lg:w-96"></div>
      <div className="lg:w-1/2">
        <div className="flex justify-center">
          <div
            className="h-96 brightness-50 lg:hidden w-72 bg-cover bg-center rounded-3xl mb-5"
            style={{
              backgroundImage: `url(${JoelFoto})`,
            }}
          ></div>
        </div>
        <div className="flex justify-center text-justify">
          <div className="flex">
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">&lt;</p>
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">
              <Typewriter
                words={["div", "p", "a", "h1", "li", "ul"]}
                loop={Infinity}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">&gt;</p>
          </div>
          <p className="font-poppins lg:text-5xl text-xl text-white animate-pulse box-decoration-clone bg-black text-white font-source-code-pro">
            Hello World👋
          </p>

          <div className="flex">
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">&lt;/</p>
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">
              <Typewriter
                words={["div", "p", "a", "h1", "li", "ul"]}
                loop={Infinity}
                cursor
                cursorStyle=""
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="lg:text-5xl text-xl text-white font-source-code-pro">&gt;</p>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="lg:text-3xl text-lg text-white font-source-code-pro lg:mt-3">
            I'm Joel Christian Ngongoloy
          </p>
        </div>
        <div className="flex justify-center mt-5 lg:mt-10 px-10">
          <p className="lg:text-2xl text-justify text-sm text-white font-poppins">
            I am a Informatics student at Atma Jaya Yogyakarta University,
            passionate about website development. My expertise lies in creating
            responsive frontend designs and robust backend solutions. I enjoy
            exploring new technologies and strive to deliver compelling user
            experiences through the code I craft.
          </p>
        </div>
      </div>

      <div
        className="h-4/6 brightness-50 hidden lg:flex bg-cover bg-center w-96 rounded-l-3xl"
        style={{
          backgroundImage: `url(${JoelFoto})`,
        }}
      ></div>
    </div>
  );
};

export default AboutTes;
