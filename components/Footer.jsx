import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const socialLinks = [
  {
    href: "https://github.com",
    icon: <AiFillGithub className="text-teal-400 text-4xl" />,
  },
  {
    href: "https://linkedin.com",
    icon: <AiFillLinkedin className="text-teal-400 text-4xl" />,
  },
  {
    href: "mailto:email@example.com",
    icon: <AiFillMail className="text-teal-400 text-4xl" />,
  },
];

const Footer = ({ language }) => {
  return (
    <footer className="w-full bg-gray-800 text-gray-200 mt-20">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-center md:text-left text-xl font-semibold">
            &copy; {new Date().getFullYear()}{" "}
            {language === "fr"
              ? "Mon Portfolio. Tous droits réservés."
              : "My Portfolio. All rights reserved."}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-teal-400 hover:text-teal-600 transition duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
