import { useState } from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa";
import Logo from "./Logo";
import Nav from "./Nav";
import Social from "./Social";
import HamburgerMenu from "./HamburgerMenu";
const social = [
  { social: <FaLinkedinIn />, link: "https://wwww.linkedin.com" },
  { social: <FaGithub />, link: "https://github.com" },
  { social: <FaEnvelope />, link: "mailto:jefreyzavala@gmail.com" },
  { social: <FaFilePdf />, link: "https://wwww.linkedin.com" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuTrigger = () => {
    setMenuOpen(!menuOpen);
    console.log("Yu want options when click");
  };

  const closeMenuTrigger = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-blue-900 text-white py-4 px-6 lg:flex lg:justify-between items-center">
      <Logo />
      <Nav />
      <Social social={social} />
      <HamburgerMenu
        menuTrigger={menuTrigger}
        menuOpen={menuOpen}
        closeMenuTrigger={closeMenuTrigger}
      />
    </header>
  );
}
