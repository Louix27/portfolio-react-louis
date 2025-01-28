// pages/index.jsx
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Header from "../components/Header.jsx";
import MainSection from "../components/MainSection.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { useState } from "react";
import BackgroundSection from "../components/BackgroundSection.jsx";

import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import Image from "next/image";



export default function Home() {
  const [language, setLanguage] = useState("fr");

  const toggleLanguage = () => {
    setLanguage(language === "fr" ? "en" : "fr");
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <MainSection language={language} />
        <BackgroundSection language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Footer language={language} />
    </div>
  );
}
