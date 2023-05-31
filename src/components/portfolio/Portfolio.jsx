import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Microservices.png";
import IMG2 from "../../assets/Employee-management.jpeg";
import IMG3 from "../../assets/spring-webflux1.jpeg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Employee Service Microservices",
      github: "https://github.com/makarandDhamale09/Microservices",
      demo: "#",
    },
    {
      id: 2,
      image: IMG2,
      title: "Employee Management Service",
      github: "https://github.com/makarandDhamale09/FullStack",
      demo: "#",
    },
    {
      id: 3,
      image: IMG3,
      title: "Project Reactor - SpringBoot WebFlux",
      github: "https://github.com/makarandDhamale09/SpringBoot-WebFlux",
      demo: "#",
    },
  ];
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} class="btn btn-primary" target="'_blank">
                  Github
                </a>
                {/* <a href={demo} class="btn btn-primary" target="_blank">
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
