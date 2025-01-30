import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = ({ language, toggleLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const controlHeader = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY === 0) {
        // if at the top of the page, show the header
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        // if scroll down hide the header
        setIsVisible(false);
      } else {
        // if scroll up show the header
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlHeader);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlHeader);
      };
    }
  }, [lastScrollY]);

  return (
    <header className={`bg-gray-800 text-teal-400 py-6 px-8 fixed w-full z-10 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl text-gray-200">Portfolio</div>
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#accueil" className="hover:text-white">
            {language === "fr" ? "Accueil" : "Home"}
          </a>
          <a href="#parcours" className="hover:text-white">
            {language === "fr" ? "Parcours" : "Background"}
          </a>
          <a href="#projets" className="hover:text-white">
            {language === "fr" ? "Projets" : "Projects"}
          </a>
          <button onClick={toggleLanguage} className="hover:text-white">
            {language === "fr" ? "EN" : "FR"}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-teal-400 py-6 px-8">
          <a href="#accueil" className="block py-2 hover:text-white">
            {language === "fr" ? "Accueil" : "Home"}
          </a>
          <a href="#parcours" className="block py-2 hover:text-white">
            {language === "fr" ? "Parcours" : "Background"}
          </a>
          <a href="#projets" className="block py-2 hover:text-white">
            {language === "fr" ? "Projets" : "Projects"}
          </a>
          <button onClick={toggleLanguage} className="block py-2 hover:text-white">
            {language === "fr" ? "EN" : "FR"}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;