import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/*End of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/*End of WEB DEVELOPEMNT */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Lorem, ipsum dolor sit amet consectetur adipiscing elite.</p>
            </li>
          </ul>
        </article>
        {/*End of CONTENT CREATION*/}
      </div>
    </section>
  );
};

export default Services;
