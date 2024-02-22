import React from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import projects from "../projects.json";

export default function Projects() {
  const images = require.context("../images/projects", true);
  const imageList = images.keys().map((image) => images(image));

  const allCarouselItens = imageList.map((image, index) => {
    const imageInfo = projects[index];
    return (
      <Carousel.Item>
        <img src={image} alt={imageInfo.title} />
        <Carousel.Caption>
          <h3>{imageInfo.title}</h3>
          <div className="carousel-links">
            <a href={imageInfo.href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
            <a
              href={imageInfo.githref}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>{imageInfo.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  console.log(allCarouselItens);

  return (
    <div className="carousel-container text-center">
      <Carousel data-bs-theme="dark" fade>
        {allCarouselItens}
      </Carousel>
    </div>
  );
}
