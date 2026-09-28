import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Lamia Eid</span>, a{" "}
            <span className="purple">Software Engineer</span> and the founder of{" "}
            <span className="purple">Devallow</span>, a software studio where I build
            full-stack products end to end.
            <br />
            <br />
            I'm the creator of <span className="purple">Forsa (فرصة)</span>, an
            internship network connecting students with employers, currently live
            with 90+ users. I work across the{" "}
            <span className="purple">full stack</span> — React, Next.js, Node.js,
            PostgreSQL, and beyond — and I've shipped e-commerce platforms with real
            customers and real revenue, not just side projects.
            <br />
            <br />
            I'm also a <span className="purple">Computer Science</span> student, an{" "}
            <span className="purple">Internshala Student Partner</span>, and I teach
            software engineering through Devallow workshops.
            <br />
            <br />
            Apart from building products, some other things I love to do!
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