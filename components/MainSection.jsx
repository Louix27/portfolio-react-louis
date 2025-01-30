import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import { motion } from "framer-motion";

const MainSection = ({ language }) => {
  const cvFileName = language === "fr" ? "cv_fr.pdf" : "cv_en.pdf";

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2">
          <div className="text-left md:mr-16 lg:mr-24">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl py-3 text-teal-400 font-medium">
              Palié Louis
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl py-3 text-white flex items-center">
              {language === "fr" ? (
                <>
                  Jeune Développeur <FaLaptopCode className="text-teal-400 ml-3" />
                </>
              ) : (
                <>
                  Young Developer <FaLaptopCode className="text-teal-400 ml-3" />
                </>
              )}
            </h3>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl py-6 leading-9 text-gray-200 max-w-2xl">
              {language === "fr" ? (
                <>
                  Louis, 19 ans, jeune développeur. <br />
                  Étudiant en deuxième année de <strong><i>BUT Informatique</i></strong> à l&apos;IUT de Lens.
                  Passionné par le développement web, je suis toujours à la recherche de nouveaux projets.
                </>
              ) : (
                <>
                  Louis, 19 years old, young developer. <br />
                  Second year student in Computer Science at IUT de Lens.
                  Passionate about web development, I am always looking for new projects.
                </>
              )}
            </p>
            <div className="text-4xl sm:text-5xl md:text-6xl flex gap-6 sm:gap-10 md:gap-20 py-4 text-gray-400 items-center">
              <a href="https://github.com/Louix27" target="_blank" rel="noopener noreferrer">
                <AiFillGithub className="text-teal-400" />
              </a>
              <a href="https://www.linkedin.com/in/louis-pali%C3%A9-b50a3631a/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin className="text-teal-400" />
              </a>
              <a href="mailto:louis.palie@gmail.com">
                <AiFillMail className="text-teal-400" />
              </a>
              <a href={`/${cvFileName}`} download={cvFileName} className="px-4 sm:px-6 py-2 border-2 border-teal-400 text-teal-400 rounded-lg text-base sm:text-lg hover:bg-teal-400 hover:text-white transition-colors">
                {language === "fr" ? "Télécharger mon CV" : "Download my CV"}
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-112 lg:h-112 relative overflow-hidden mx-auto md:ml-16 lg:ml-24">
            <Image src="/louis.png" layout="fill" objectFit="cover" alt="Louis Palié" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MainSection;