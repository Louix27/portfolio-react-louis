import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceLink }) => {
  return (
    <div className="p-5 bg-[#2e3745] shadow-xl shadow-slate-900 rounded-xl transform hover:scale-105 transition-transform duration-300 w-96">
      <img
        className="rounded-t-xl w-full h-48 object-cover"
        src={image}
        alt={`${title} Banner`}
      />
      <h3 className="mt-4 text-xl font-bold text-teal-400 text-center">
        {title}
      </h3>
      <p className="mt-2 text-gray-300 text-sm text-center">{main}</p>
      <div className="mt-4 flex gap-4 justify-center">
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noopener noreferrer">
            <button className="py-2 px-4 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition">
              Demo
            </button>
          </a>
        )}
        {sourceLink && (
          <a href={sourceLink} target="_blank" rel="noopener noreferrer">
            <button className="py-2 px-4 text-sm font-semibold text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition">
              Source Code
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
