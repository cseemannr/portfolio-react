import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Container>
      <p>{t("notFound.p")}</p>
      <Button variant="secondary" size="sm">
        <Link to="/" className="btn button-dark">
          {t("notFound.link")}
        </Link>
      </Button>
    </Container>
  );
}
