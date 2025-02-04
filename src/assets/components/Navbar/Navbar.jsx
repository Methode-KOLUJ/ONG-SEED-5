import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  FaHome,
  FaHistory,
  FaBullseye,
  FaServicestack,
  FaHandshake,
  FaDonate,
  FaFilm,
  FaRobot,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [openSection, setOpenSection] = useState(null); // Gère l'ouverture des sous-menus
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Gère l'ouverture du menu mobile
  const menuRef = useRef(null);

  const handleSectionToggle = (section) => {
    setOpenSection(openSection === section ? null : section); // Ouvre/ferme une section spécifique
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpenSection(null); // Ferme tous les sous-menus si clic à l'extérieur
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={menuRef} className="bg-white dark:bg-black shadow-md-white fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-blue-500 dark:text-teal-500 font-bebas">
          ONG SEED
        </div>
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="xl:hidden text-3xl text-blue-500 z-50"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden xl:flex space-x-6`}>
          <li className="text-center">
            <Link to="/" className="hover:text-blue-500 dark:text-white transition">
              <FaHome className="mx-auto text-2xl text-green-500" />
              <span>Accueil</span>
            </Link>
          </li>
          {/* Insérez ici tous les autres éléments comme dans votre version initiale */}
          <li className="relative text-center">
            <Link to="/notre-histoire" className="text-blue-950 dark:text-white transition">
              <FaHistory className="mx-auto text-2xl text-orange-700" />
              <span>Découvrez l’histoire de nos 5 ans !</span>
            </Link>
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("objectifs")}
              className="text-blue-950 dark:text-white transition">
              <FaBullseye className="mx-auto text-2xl text-red-600" />
              <span>Objectifs</span>
            </button>
            {openSection === "objectifs" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link
                    to="/nos-objectifs"
                    className="hover:text-blue-500 whitespace-nowrap">
                    Nos objectifs
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/notre-vision" className="hover:text-blue-500">
                    Notre vision
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/nos-projets" className="hover:text-blue-500">
                    Nos projets
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("services")}
              className="text-blue-950 dark:text-white transition">
              <FaServicestack className="mx-auto text-2xl text-blue-400" />
              <span>Services</span>
            </button>
            {openSection === "services" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link to="/aide-educative" className="hover:text-blue-500">
                    Service d’aide éducative
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/aide-soutien" className="hover:text-blue-500">
                    Service d’aide de soutien
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/sante-mentale"
                    className="hover:text-blue-500 whitespace-nowrap">
                    Service d’aide en santé mentale
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/medias" className="hover:text-blue-500">
                    Service des médias
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/seniors" className="hover:text-blue-500">
                    Service aux aînés
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/formation-gratuite" className="hover:text-blue-500">
                    Formation gratuite (en ligne !)
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/boutique" className="hover:text-blue-500">
                    Boutique officielle
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="text-center">
            <Link to="/partenaire" className="text-blue-950 dark:text-white transition">
              <FaHandshake className="mx-auto text-2xl text-green-500" />
              <span>Partenariat</span>
            </Link>
          </li>
          <li className="relative text-center">
            <button
              onClick={() => handleSectionToggle("emploi")}
              className="text-blue-950 dark:text-white transition">
              <FaBriefcase className="mx-auto text-2xl text-yellow-600" />
              <span>Opportunités</span>
            </button>
            {openSection === "emploi" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link to="/emplois" className="hover:text-blue-500">
                    Possibilités d’emploi
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/Benevole"
                    className="hover:text-blue-500 whitespace-nowrap">
                    Postuler en tant que Bénévole
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="text-center"
            title="Aidez les Enfants en faisant un Don">
            <Link to="/don" className="text-blue-950 dark:text-white transition">
              <FaDonate className="mx-auto text-2xl text-yellow-400" />{" "}
              {/* Custom color for donate icon */}
              <span>Faire un don</span>
            </Link>
          </li>
          <li className="relative text-center" title="Nos Médias">
            <button
              onClick={() => handleSectionToggle("medias")}
              className="text-blue-950 dark:text-white transition">
              <FaFilm className="mx-auto text-2xl text-teal-500" />
              <span>Médias</span>
            </button>
            {openSection === "medias" && (
              <ul className="absolute bg-white shadow-md mt-2 p-3 rounded">
                <li>
                  <Link to="/YouTube" className="hover:text-blue-500">
                    Films
                  </Link>
                </li>
                <li className="mt-2">
                  <Link
                    to="/magazine"
                    className="hover:text-blue-500 whitespace-nowrap">
                    SEED Magazine
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="text-center" title="Assistant virtuel">
            <Link to="/Chatbot" className="text-blue-950 dark:text-white transition">
              <FaRobot className="mx-auto text-2xl text-gray-400" />
              <span>Chatbot</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
  <ul className="xl:hidden bg-gray-100 dark:bg-gray-900 absolute top-0 left-0 w-full shadow-md p-4 space-y-4">
    <li>
      <Link
        to="/"
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Accueil</span>
      </Link>
    </li>
    <li>
      <Link
        to="/notre-histoire"
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Découvrez l’histoire de nos 5 ans !</span>
      </Link>
    </li>
    <li>
      <button
        onClick={() => handleSectionToggle("objectifs")}
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Objectifs</span>
      </button>
      {openSection === "objectifs" && (
        <ul className="mt-2 pl-4">
          <li>
            <Link
              to="/nos-objectifs"
              className="block text-blue-600 dark:text-white">
              Nos objectifs
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/notre-vision"
              className="block text-blue-600 dark:text-white">
              Notre vision
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/nos-projets"
              className="block text-blue-600 dark:text-white">
              Nos projets
            </Link>
          </li>
        </ul>
      )}
    </li>
    {/* Continuez ici avec les autres menus et sous-menus */}
    <li>
      <button
        onClick={() => handleSectionToggle("services")}
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Services</span>
      </button>
      {openSection === "services" && (
        <ul className="mt-2 pl-4">
          <li>
            <Link
              to="/aide-educative"
              className="block text-blue-600 dark:text-white">
              Service d’aide éducative
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/aide-soutien"
              className="block text-blue-600 dark:text-white">
              Service d’aide de soutien
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/sante-mentale"
              className="block text-blue-600 dark:text-white">
              Service d’aide en santé mentale
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/medias"
              className="block text-blue-600 dark:text-white">
              Service des médias
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/seniors"
              className="block text-blue-600 dark:text-white">
              Service aux aînés
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/formation-gratuite"
              className="block text-blue-600 dark:text-white">
              Formation gratuite (en ligne !)
            </Link>
          </li>
          <li className="mt-2">
            <Link
              to="/boutique"
              className="block text-blue-600 dark:text-white">
              Boutique officielle
            </Link>
          </li>
        </ul>
      )}
    </li>
    <li>
      <Link
        to="/partenaire"
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Partenariat</span>
      </Link>
    </li>
    <li>
      <button
        onClick={() => handleSectionToggle("emploi")}
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Opportunités</span>
      </button>
      {openSection === "emploi" && (
        <ul className="mt-2 pl-4">
          <li>
            <Link to="/emplois" className="block text-blue-600 dark:text-white">
              Possibilités d’emploi
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/Benevole" className="block text-blue-600 dark:text-white">
              Postuler en tant que Bénévole
            </Link>
          </li>
        </ul>
      )}
    </li>
    <li>
      <Link
        to="/don"
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Faire un don</span>
      </Link>
    </li>
    <li>
      <button
        onClick={() => handleSectionToggle("medias")}
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Médias</span>
      </button>
      {openSection === "medias" && (
        <ul className="mt-2 pl-4">
          <li>
            <Link to="/YouTube" className="block text-blue-600 dark:text-white">
              Films
            </Link>
          </li>
          <li className="mt-2">
            <Link to="/magazine" className="block text-blue-600 dark:text-white">
              SEED Magazine
            </Link>
          </li>
        </ul>
      )}
    </li>
    <li className="text-center">
      <Link
        to="/Chatbot"
        className="flex items-center space-x-2 text-blue-500 dark:text-white font-bold text-xl md:text-2xl lg:text-2xl">
        <span>Chatbot</span>
      </Link>
    </li>
  </ul>
)}

      </div>
    </nav>
  );
};

export default Navbar;
