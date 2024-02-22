import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
      <p>Sorry, the page you were looking for was not found.</p>
      <Button variant="secondary" size="sm">
        <Link to="/" className="button-dark">
          Return to home
        </Link>
      </Button>
    </Container>
  );
}
