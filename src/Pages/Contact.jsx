import React from "react";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Container>
      <Button>
        <a
          class="btn mailto"
          href="mailto:camilaseemannramos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Say Hello
        </a>
      </Button>

      <ul class="list-icons">
        <li>
          <a
            href="https://www.linkedin.com/in/cseemann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/cseemannr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.freecodecamp.org/cmlsmnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>
        </li>
      </ul>
    </Container>
  );
}
