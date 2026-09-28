import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineCamera,
  AiOutlineRocket,
  AiOutlineShopping,
  AiOutlineMobile,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// Object-storage URLs for the two photos below.
const DETAIL_SHOT_URL =
  "https://pub-b34742cec78049aeb167f50a73b85adc.r2.dev/detail-shot.jpg";
const TEAM_AT_WORK_URL =
  "https://pub-b34742cec78049aeb167f50a73b85adc.r2.dev/team-at-work.jpg";

const experience = [
  {
    icon: <AiOutlineRocket />,
    role: "Full-Stack Developer",
    company: "Forsa",
    period: "2026 — Present",
    location: "Tripoli, Lebanon",
    description:
      "Building Forsa, a Tripoli-based internship network connecting students with employers. Architected the core Prisma data model and led the end-to-end brand identity.",
  },
  {
    icon: <AiOutlineShopping />,
    role: "Full-Stack Developer",
    company: "Glamora",
    period: "2025 — Present",
    location: "Remote · Freetown, Sierra Leone",
    description:
      "Built a full e-commerce platform end to end — admin dashboard, JWT auth, and REST APIs — deployed on Railway and Vercel.",
  },
  {
    icon: <AiOutlineMobile />,
    role: "Android Developer",
    company: "Telepaty",
    period: "2026",
    location: "Tripoli, Lebanon · On-site",
    description:
      "Built an Android tax-payment app in Kotlin & Jetpack Compose, integrating POS payment terminals and QR-code payment flows.",
  },
  {
    icon: <AiOutlineVideoCamera />,
    role: "Full-Stack Developer",
    company: "Nexrush Agency",
    period: "2025",
    location: "Tripoli, Lebanon · On-site",
    description:
      "Spearheaded MADs, an AI-driven video marketing SaaS built with Next.js 15 and React 19, boosting user engagement by 50%.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={7} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♀️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Java, Javascript and C++. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">AI.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing
              products with <b className="purple">Flutter</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Mobile Development technologies.
                </b>
              </i>
            </p>
            <div className="home-about-tags">
              <span className="about-tag">💻 Full-Stack Developer</span>
              <span className="about-tag">🚀 Founder @ Devallow</span>
              <span className="about-tag">🎓 Teaching Software Engineering</span>
            </div>
          </Col>
          <Col md={5} className="home-photo-collage">
            <Tilt className="home-photo-tilt-main">
              {DETAIL_SHOT_URL ? (
                <img
                  src={DETAIL_SHOT_URL}
                  alt="Lamia — detail shot"
                  loading="lazy"
                  decoding="async"
                  className="home-photo-frame home-photo-frame-main home-photo-img"
                />
              ) : (
                <div className="home-photo-frame home-photo-frame-main">
                  <AiOutlineCamera className="home-photo-placeholder-icon" />
                  <p>Photo of me working</p>
                </div>
              )}
            </Tilt>
            <Tilt className="home-photo-tilt-sub">
              {TEAM_AT_WORK_URL ? (
                <img
                  src={TEAM_AT_WORK_URL}
                  alt="Lamia with the team at work"
                  loading="lazy"
                  decoding="async"
                  className="home-photo-frame home-photo-frame-sub home-photo-img"
                />
              ) : (
                <div className="home-photo-frame home-photo-frame-sub">
                  <AiOutlineCamera className="home-photo-placeholder-icon" />
                  <p>Photo of me teaching</p>
                </div>
              )}
            </Tilt>
          </Col>
        </Row>

        <Row className="experience-row">
          <Col md={12}>
            <h1 className="experience-heading">
              WHERE I'VE <span className="purple">WORKED</span>
            </h1>
          </Col>
          <Col md={12}>
            <div className="experience-timeline">
              {experience.map((job) => (
                <div className="experience-item" key={job.company}>
                  <div className="experience-icon">{job.icon}</div>
                  <div className="experience-content">
                    <div className="experience-top">
                      <h3>
                        {job.role} · <span className="purple">{job.company}</span>
                      </h3>
                      <span className="experience-period">{job.period}</span>
                    </div>
                    <p className="experience-location">{job.location}</p>
                    <p className="experience-desc">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/LamiaEid1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/lamia-eid-249b3431a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/lamiaeiid/?next=%2F"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
