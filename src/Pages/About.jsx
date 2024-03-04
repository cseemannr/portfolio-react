import React from "react";
import { Container } from "react-bootstrap";
import ProfilePicture from "../images/camila.jpg";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <Container className="about-container big-margin">
      <img className="d-block" src={ProfilePicture} alt={"Camila Ramos"} />

      <div className="about-text">
        <p>{t("about.p1")}</p>
        <p>{t("about.p2")}</p>
        <p>{t("about.p3")}</p>
        <p>{t("about.p4")}</p>
        <p className="about-skills">HTML, CSS, JavaScript, React</p>
      </div>
    </Container>
  );
}
