import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import LanguageSwitcher from "./LanguageSwitcher";

import "../i18n";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/" className="logo">
          Camila Ramos
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">{t("navbar.link1")}</Nav.Link>
            <Nav.Link href="/about">{t("navbar.link2")}</Nav.Link>
            <Nav.Link href="/contact">{t("navbar.link3")}</Nav.Link>
            <LanguageSwitcher />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
