import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import JoelFoto from "../assets/img/JoelFOto.jpg";

const Navbaruser = ({ scrollToSection }) => {
  const [openNav, setOpenNav] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const location = useLocation();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handleScrollLinkClick = (id) => {
    setActiveSection(id);
    if (location.pathname !== "/") {
      window.history.pushState({}, "", "/");
      setTimeout(() => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar className="fixed py-2 z-50 mx-auto max-w-screen-md p-2 lg:top-5 md:max-w-screen-md lg:rounded-full lg:pl-6 w-full">
        <div className="flex items-center justify-between lg:justify-center text-blue-gray-900">
          <div className="flex gap-4 lg:hidden">
            <Avatar src={JoelFoto} alt="avatar" size="sm" />
            <Typography className="py-1.5 font-bold">
              Joel Christian Ngongoloy
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {[
                  "home",
                  "about Me",
                  "My project",
                  "My skill",
                  "contact Me",
                ].map((section) => (
                  <Typography
                    key={section}
                    as="li"
                    variant="h6"
                    color="black"
                    className={`font-poppins cursor-pointer rounded-full px-5 py-1 ${
                      activeSection === section
                        ? "bg-black text-white"
                        : "hover:shadow-lg hover:bg-gray-200"
                    }`}
                    onClick={() => handleScrollLinkClick(section)}
                  >
                    {section.charAt(0).toUpperCase() +
                      section
                        .slice(1)
                        .replace("home", "Home")
                        .replace("about", "About Me")
                        .replace("project", "Projects")
                        .replace("skill", "Skill")
                        .replace("contact", "Contact Me")}
                  </Typography>
                ))}
              </ul>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            {["home", "about Me", "My project", "My skill", "contact Me"].map(
              (section) => (
                <Typography
                  key={section}
                  as="li"
                  variant="small"
                  color="black"
                  className={`p-1 font-normal cursor-pointer rounded-full px-5 py-1 ${
                    activeSection === section
                      ? "bg-black text-white"
                      : "hover:shadow-lg hover:bg-gray-200"
                  }`}
                  onClick={() => handleScrollLinkClick(section)}
                >
                  {section.charAt(0).toUpperCase() +
                    section
                      .slice(1)
                      .replace("home", "Home")
                      .replace("about", "About Me")
                      .replace("project", "Projects")
                      .replace("skill", "Skill")
                      .replace("contact", "Contact Me")}
                </Typography>
              )
            )}
          </ul>
        </Collapse>
      </Navbar>
    </>
  );
};

export default Navbaruser;
