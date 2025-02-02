import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Lamia Eid </span>
            from <span className="purple"> Tripoli, Lebanon.</span>
            <br />I am a passionate Full Stack Web Developer  with a strong foundation in both <span className="purple">front-end </span> and<span className="purple"> back-end </span>technologies, and I am a <span className="purple">Computer Science </span>student.
            <br /> I specialize in building seamless web applications using React, Next.js, MongoDB, and various modern tools. My goal is to create efficient, scalable, and user-friendly solutions that solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Lamia</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
