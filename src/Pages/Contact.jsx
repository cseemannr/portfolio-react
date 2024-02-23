import React from "react";
import { Container, Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFreeCodeCamp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <Container className="text-center contact-container big-margin">
      <ListGroup>
        <ListGroup.Item>
          <Button variant="dark" size="lg">
            <a
              class="btn mailto"
              href="mailto:camilaseemannramos@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Say Hello:
            </a>
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>camilaseemannramos@gmail.com</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.linkedin.com/in/cseemann/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/cseemannr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.freecodecamp.org/cmlsmnn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFreeCodeCamp} />
          </a>
        </ListGroup.Item>
      </ListGroup>
    </Container>
  );
}
