import React from "react";
import { motion } from "framer-motion";
import PhoneImage from "../assets/img/phone.png";

const ProjectTes = () => {
  return (
    <div id="My project" className="h-auto bg-transparent py-20 px-80">
      <div className="flex py-20">
        <div className="bg-black w-1/2">
          <p className="font-poppins text-9xl text-white font-semibold mb-5">
            My Projects
          </p>
          <div>
            <p className="font-poppins text-xl text-white text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="bg-slate-800 w-1/2 flex justify-center items-center">
          <motion.div
            className="w-72"
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.img
              src={PhoneImage}
              alt="Phone"
              style={{ width: "100%" }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTes;
