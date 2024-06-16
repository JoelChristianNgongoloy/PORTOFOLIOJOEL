import React, { useEffect } from "react";
import Navbaruser from "../component/Navbaruser";
import HomeTes from "../pages/HomeTes";
import AboutTes from "../pages/AboutTes";
import ProjectTes from "../pages/ProjectTes";
import ContactTes from "../pages/ContactTes";
import SkillsTes from "../pages/SkillsTes";

const AppRouter = () => {
  useEffect(() => {
    // Menambahkan smooth scroll ke elemen html
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-slate-900">
      <div className="lg:flex justify-center md:flex justify-center">
        <Navbaruser scrollToSection={scrollToSection} />
      </div>
      <HomeTes />
      <AboutTes />
      <ProjectTes />
      <SkillsTes />
      <ContactTes />
    </div>
  );
};

export default AppRouter;
