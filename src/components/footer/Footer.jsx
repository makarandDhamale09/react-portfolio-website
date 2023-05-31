import React from "react";
import "./footer.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Makarand
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Service</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a
          href="https://www.linkedin.com/in/makarand-dhamale-210a8090/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://github.com/makarandDhamale09" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Makarand Dhamale. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
