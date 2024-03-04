import React from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ProjectsDetails from "../ProjectsDetails.json";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const images = require.context("../images/projects", true);
  const imageList = images.keys().map((image) => images(image));

  const { t } = useTranslation();
  const projects = t("projects");

  const allCarouselItens = imageList.map((image, index) => {
    const imageInfo = projects[index];
    const projectDetail = ProjectsDetails[index];

    return (
      <Carousel.Item key={index}>
        <img src={image} alt={imageInfo.title} />
        <Carousel.Caption>
          <h3>{imageInfo.title}</h3>
          <div className="carousel-links">
            <a
              href={projectDetail.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </a>
            <a
              href={projectDetail.githref}
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

  return (
    <div className="carousel-container text-center">
      <Carousel data-bs-theme="dark" fade>
        {allCarouselItens}
      </Carousel>
    </div>
  );
}
