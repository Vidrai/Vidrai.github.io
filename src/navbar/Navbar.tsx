

import './navbar.css';
import { useEffect, useState } from "react";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("home");
      if (homeSection && window.scrollY >= homeSection.offsetHeight - 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`topnav ${show ? "show" : ""}`} id="navbar">
      <a href="#contact">Contact</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#home">Home</a>
    </div>
  );
}

export default Navbar;