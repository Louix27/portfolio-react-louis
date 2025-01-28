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
      sourceLink: "https://github.com/Louix27/Billetterie-JO-PremierSiteWeb",
    },
    {
      title: "Memory",
      main:
        language === "fr"
          ? "Memory créé en JavaFX."
          : "Memory created in JavaFX.",
      image: "/Memory.jpeg",
      demoLink: "https://www.youtube.com/shorts/rXygzep91ws",
      sourceLink: "https://github.com/Louix27/Memory",
    },
    {
      title: "Juste Prix",
      main:
        language === "fr"
          ? "Juste Prix créé en Flask"
          : "Juste Prix created in Flask.",
      image: "/JustePrix.jpeg",
      demoLink: "https://youtu.be/9Fj2l6frk7I", // Exemple
      sourceLink: "https://github.com/Louix27/JustePrix",
    },
    {
      title: "Portfolio",
      main:
        language === "fr"
          ? "Portfolio créé en React JS."
          : "Portfolio created in React JS.",
      image: "/Portfolio.jpeg",
      demoLink: "https://louix27.github.io/Portfolio", // Exemple
      sourceLink: "https://github.com/Louix27/Portfolio",
    },
    {
      title: "Flappy Bird",
      main:
        language === "fr"
          ? "Flappy Bird créé en java"
          : "Flappy Bird created in java.",
      image: "/FlappyBird.jpeg",
      demoLink: "https://louix27.github.io/Portfolio", // Exemple
      sourceLink: "https://github.com/Louix27/Portfolio",
    },
    {
      title: "Les recettes de MamyLens",
      main:
        language === "fr"
          ? "Site réalisé en PHP et Laravel"
          : "Site made in PHP and Laravel.",
      image: "/Mamy.png",
      demoLink: "https://louix27.github.io/Portfolio", // Exemple
      sourceLink: "https://github.com/Louix27/Portfolio",
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
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
