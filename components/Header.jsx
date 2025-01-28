// components/Header.jsx
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const Header = ({ language, toggleLanguage }) => {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowHeader(true);
      } else {
        setShowHeader(window.scrollY <= lastScrollY);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "accueil", label: language === "fr" ? "Accueil" : "Home" },
    { to: "parcours", label: language === "fr" ? "Mon Parcours" : "My Background" },
    { to: "competences", label: language === "fr" ? "Mes Compétences" : "My Skills" },
    { to: "projets", label: language === "fr" ? "Mes Projets" : "My Projects" },
  ];

  return (
      <header
          className={`py-7 bg-gray-800 shadow-md fixed w-full z-50 transition-transform duration-300 ${
              showHeader ? "transform translate-y-0" : "transform -translate-y-full"
          }`}
      >
        <nav className="flex justify-between items-center px-6 md:px-12">
          <ScrollLink
              to="accueil"
              smooth={true}
              duration={500}
              className="font-burtons text-2xl text-white cursor-pointer"
          >
            Portfolio
          </ScrollLink>
          <ul className="flex items-center space-x-6 md:space-x-10">
            {navLinks.map((link, index) => (
                <li key={index}>
                  <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={500}
                      className="text-teal-400 text-lg hover:underline cursor-pointer"
                  >
                    {link.label}
                  </ScrollLink>
                </li>
            ))}
            <li>
              <button
                  onClick={toggleLanguage}
                  className="text-teal-400 text-lg hover:underline"
              >
                {language === "fr" ? "EN" : "FR"}
              </button>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default Header;