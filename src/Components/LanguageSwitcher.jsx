import React from "react";
import { NavDropdown, ToggleButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";

import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English" },
  { code: "pt", name: "Portuguese" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const title = <FontAwesomeIcon icon={faEarthAmericas} />;

  return (
    <NavDropdown title={title} id="basic-nav-dropdown">
      <NavDropdown.Item>
        <ToggleButton
          variant="light"
          id="en"
          type="radio"
          checked={languages[0].code === i18n.language}
          onClick={() => changeLanguage(languages[0].code)}
        >
          {languages[0].name}
        </ToggleButton>
      </NavDropdown.Item>

      <NavDropdown.Item>
        <ToggleButton
          variant="light"
          id="pt"
          type="radio"
          checked={languages[1].code === i18n.language}
          onClick={() => changeLanguage(languages[1].code)}
        >
          {languages[1].name}
        </ToggleButton>
      </NavDropdown.Item>
    </NavDropdown>
  );
}
