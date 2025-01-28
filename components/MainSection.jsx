import { FaLaptopCode } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/louis.png";
import Fade from "react-reveal/Fade";

const MainSection = ({ language }) => {
  // Déterminez le nom du fichier PDF en fonction de la langue
  const cvFileName = language === "fr" ? "cv_fr.pdf" : "cv_en.pdf";

  return (
      <section
          id="accueil"
          className="min-h-screen flex items-center justify-center"
      >
        <div className="flex flex-col md:flex-row items-center">
          <Fade left>
            <div className="text-left md:mr-24">
              <h2 className="text-6xl py-3 text-teal-400 font-medium md:text-7xl">
                Palié Louis
              </h2>
              <h3 className="text-3xl py-3 text-white md:text-4xl flex items-center">
                {language === "fr" ? (
                    <>
                      Jeune Développeur{" "}
                      <FaLaptopCode className="text-teal-400 ml-3" />
                    </>
                ) : (
                    <>
                      Young Developer{" "}
                      <FaLaptopCode className="text-teal-400 ml-3" />
                    </>
                )}
              </h3>
              <p className="text-lg py-6 leading-9 text-gray-200 max-w-2xl md:text-2xl">
                {language === "fr" ? (
                    <>
                      Louis, 19 ans, jeune développeur. <br />
                      Étudiant en deuxième année de <strong><i>BUT Informatique</i></strong> à l&apos;IUT de Lens.
                      Passionné par le développement web, je suis toujours à la
                      recherche de nouveaux projets.
                    </>
                ) : (
                    <>
                      Louis, 19 years old, young developer. <br />
                      Second year student in Computer Science at IUT de Lens.
                      Passionate about web development, I am always looking for new
                      projects.
                    </>
                )}
              </p>
              <div className="text-6xl flex gap-10 md:gap-20 py-4 text-gray-400 items-center">
                <a
                    href="https://github.com/Louix27"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillGithub className="text-teal-400" />
                </a>
                <a
                    href="https://www.linkedin.com/in/louis-pali%C3%A9-b50a3631a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="text-teal-400" />
                </a>
                <a href="mailto:louis.palie@gmail.com">
                  <AiFillMail className="text-teal-400" />
                </a>
                <a
                    href={`/${cvFileName}`}
                    download={cvFileName}
                    className="px-6 py-2 border-2 border-teal-400 text-teal-400 rounded-lg text-lg hover:bg-teal-400 hover:text-white transition-colors"
                >
                  {language === "fr" ? "Télécharger mon CV" : "Download my CV"}
                </a>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="mt-12 md:mt-0 bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 md:w-96 md:h-96 lg:w-112 lg:h-112 relative overflow-hidden md:ml-48">
              <Image
                  src={deved}
                  layout="fill"
                  objectFit="cover"
                  alt="Louis Palié"
              />
            </div>
          </Fade>
        </div>
      </section>
  );
};

export default MainSection;
