import React, { useState } from "react";
import { IoTerminalOutline, IoLanguageSharp } from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";
import { GoDatabase } from "react-icons/go";
import { motion } from "framer-motion";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { AiOutlineQrcode } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { IoAccessibilityOutline } from "react-icons/io5";

const skillsData = [
  {
    icon: (
        <IoTerminalOutline className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Développement Web", en: "Web Development" },
    items: ["HTML, CSS, JS", "PHP", "Laravel", "React JS"],
  },
  {
    icon: (
        <RiComputerLine className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Langages", en: "Languages" },
    items: ["Python", "Java", "Flask", "Bash"],
  },
  {
    icon: (
        <GoDatabase className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Base de Données", en: "Database" },
    items: ["MySQL", "PostgreSQL", "SQLite", "Triggers"],
  },
  {
    icon: (
        <RiToolsFill className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Outils", en: "Tools" },
    items: ["Git, GitHub", "Intelij IDEA", "VS Code", "PHPStorm"],
  },
];

const moreSkillsData = [
  {
    icon: (
        <AiOutlineBars className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Méthodologie", en: "Methodology" },
    items: ["SCRUM", "Git"],
  },
  {
    icon: (
        <AiOutlineQrcode className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Frameworks", en: "Frameworks" },
    items: ["Tailwind CSS", "Bootstrap", "Bulma", "Symfony"]
  },
  {
    icon: (
        <IoAccessibilityOutline className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Qualités", en: "Qualities" },
    items: [
      { fr: "Travail en équipe", en: "Teamwork" },
      { fr: "Autonomie", en: "Autonomy" },
      { fr: "Rigueur", en: "Rigorousness" },
      { fr: "Curiosité", en: "Curiosity" }
    ],
  },
  {
    icon: (
        <AiOutlineFundProjectionScreen className="text-teal-400 text-9xl transition-transform transform hover:scale-110 mx-auto" />
    ),
    title: { fr: "Système d'exploitation", en: "Operating Systems" },
    items: ["Windows", "MacOS", "Linux"],
  },
];

const Skills = ({ language }) => {
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const handleShowMoreSkills = () => {
    setShowMoreSkills(!showMoreSkills);
  };

  return (
      <section
          id="competences"
          className="py-10 relative mb-20 px-4 md:px-8 lg:px-12 max-w-screen-2xl mx-auto"
      >
        <div className="absolute inset-0 bg-gray-600 opacity-50 rounded-lg p-4 md:p-8 lg:p-12"></div>
        <div className="relative z-10">
          <h3 className="text-3xl py-1 text-teal-400 text-center mb-10">
            {language === "fr" ? "Mes Compétences" : "My Skills"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {skillsData.map((skill, index) => (
                <motion.div
                    key={index}
                    className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  {skill.icon}
                  <h4 className="text-xl font-medium text-white mt-4">
                    {language === "fr" ? skill.title.fr : skill.title.en}
                  </h4>
                  <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max">
                    {skill.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
            ))}
            {showMoreSkills &&
                moreSkillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                      {skill.icon}
                      <h4 className="text-xl font-medium text-white mt-4">
                        {language === "fr" ? skill.title.fr : skill.title.en}
                      </h4>
                      <ul className="list-disc list-inside text-gray-400 text-left mx-auto w-max">
                        {skill.items.map((item, idx) => (
                            <li key={idx}>
                              {typeof item === "string"
                                  ? item
                                  : language === "fr"
                                      ? item.fr
                                      : item.en}
                            </li>
                        ))}
                      </ul>
                    </motion.div>
                ))}
          </div>
          <motion.button
              onClick={handleShowMoreSkills}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="mt-10 px-6 py-2 bg-teal-400 text-white rounded-lg block text-center max-w-xs mx-auto"
          >
            {language === "fr"
                ? showMoreSkills
                    ? "Voir moins"
                    : "Voir plus"
                : showMoreSkills
                    ? "See less"
                    : "See more"}
          </motion.button>
        </div>
      </section>
  );
};

export default Skills;
