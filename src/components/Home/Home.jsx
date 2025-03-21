import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from '../Contact/Contact';
import Resume from '../Resume/ResumeNew';

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> LAMIA EID</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
              <div className="description">
              <h1>I am a passionate and motivated developer eager to bring creative solutions to technical challenges. With a strong enthusiasm for learning and growth, I aim to contribute effectively to team projects and build innovative software.</h1>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px"}}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects/>
      <About />
      <Resume />
      <Contact />
    </section>
  );
}

export default Home;
