import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer>
      <Container className="text-center mt-auto">
        Design and{" "}
        <a
          href="https://github.com/cseemannr/portfolio-react"
          target="_blank"
          rel="noopener noreferrer"
        >
          code
        </a>{" "}
        by Camila Ramos
      </Container>
    </footer>
  );
}
