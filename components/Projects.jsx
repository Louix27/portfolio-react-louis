import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ language }) => {
  const projects = [
    {
      title: language === "fr" ? "Billetterie JO" : "Ticketing JO",
      main:
        language === "fr"
          ? "Premier site web créé en HTML, CSS et JS."
          : "First website created in HTML, CSS, and JS.",
      image: "/Billet.jpeg",
      demoLink: "https://www.youtube.com/watch?v=nWaoxYkROQc",
    },
    {
      title: "Memory",
      main:
        language === "fr"
          ? "Memory créé en JavaFX."
          : "Memory created in JavaFX.",
      image: "/Memory.jpeg",
      demoLink: "https://www.youtube.com/shorts/rXygzep91ws",
    },
    {
      title: "Juste Prix",
      main:
        language === "fr"
          ? "Juste Prix créé en Flask, connecté à une API."
          : "Juste Prix created in Flask, connected to an API.",
      image: "/JustePrix.jpeg",
      demoLink: "https://youtu.be/9Fj2l6frk7I", 
    },
    {
      title: "Portfolio",
      main:
        language === "fr"
          ? "Portfolio créé en React JS."
          : "Portfolio created in React JS.",
      image: "/Portfolio.jpeg",
      demoLink: "https://youtu.be/0KG6v2oFfus", 
    },
    {
      title: "Flappy Bird",
      main:
        language === "fr"
          ? "Flappy Bird créé en java."
          : "Flappy Bird created in java.",
      image: "/FlappyBird.jpeg",
      demoLink: "https://youtube.com/shorts/743PXh-pcGo", 
    },
    {
      title: "Les recettes de MamyLens",
      main:
        language === "fr"
          ? "Site réalisé en PHP et Laravel."
          : "Site made in PHP and Laravel.",
      image: "/Mamy.png",
      demoLink: "https://youtu.be/wAxAk_WIYWQ", 
    },
  ];

  return (
    <div
      id="projets"
      className="min-h-screen flex flex-col bg-gray-900 items-center justify-center"
    >
      <div className="flex-grow">
        <h1 className="text-2xl md:text-4xl text-teal-400 font-bold text-center py-10">
          {language === "fr" ? "Mes projets" : "My Projects"}
        </h1>
        <div className="py-12 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              main={project.main}
              image={project.image}
              demoLink={project.demoLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
