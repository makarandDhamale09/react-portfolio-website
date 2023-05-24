import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me1.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Makarand Dhamale</h1>
        <h5 className="text-light">Java Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="img" src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
