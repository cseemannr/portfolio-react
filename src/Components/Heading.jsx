import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import { Container } from "react-bootstrap";

import { useTheme } from "../ThemeContext";

export default function Heading() {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <input
        className="toggle-btn"
        type="checkbox"
        checked={theme === "dark-theme"}
        onChange={toggleTheme}
      />
      <div className="heading">
        <h1 className="h1">{t("heading")}</h1>
      </div>
    </Container>
  );
}
