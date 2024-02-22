import React from "react";
import { Container } from "react-bootstrap";
import ProfilePicture from "../images/camila.jpg";

export default function About() {
  return (
    <Container className="about-container">
      <img className="d-block" src={ProfilePicture} alt={"Camila Ramos"} />

      <div className="about-text">
        <p>
          Hello, my name is Camila, I'm a front-end developer with a background
          in fashion design and a passion for creating beautiful, functional
          designs. My extensive experience in the fashion industry has provided
          me with a solid foundation in creativity, attention to detail, and
          problem-solving.
        </p>
        <p>
          I'm a self-taught web developer, with a love for coding and true
          satisfaction of building things from scratch and reaching their best
          version. Whether it's a silk bride's dress or a startup website, I
          take pride in creating solutions that meet my clients' needs and
          exceed their expectations.
        </p>
        <p>
          When I'm not coding, you can find me at the beach, out on a hike or
          behind the lens of my camera.
        </p>
        <p>
          With good knowledge in HTML, CSS, JavaScript, React and a unique
          perspective, I am eager to tackle challenges and bring my skills and
          passion to the world of web development.
        </p>
        <p className="about-skills">HTML, CSS, JavaScript, React</p>
      </div>
    </Container>
  );
}
