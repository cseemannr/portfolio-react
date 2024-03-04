import React from "react";
import { Container } from "react-bootstrap";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer>
      <Container className="text-center mt-auto">
        <a
          href="https://github.com/cseemannr/portfolio-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("footer")}
        </a>
      </Container>
    </footer>
  );
}
