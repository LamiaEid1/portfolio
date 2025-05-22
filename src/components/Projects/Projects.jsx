import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Product Showcase"
              description="A full-stack web application that allows users to post products with details like price and image URLs. Built using React for the frontend and Node.js with MongoDB for the backend, the project showcases a smooth integration between design and functionality."
              ghLink="https://github.com/LamiaEid1/Product-Showcase"
              demoLink="https://product-showcase-nd4w.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Netflix-Clone"
              description="A full-stack web app replicating core Netflix features, including user authentication, movie and TV show browsing, and watchlist management. Built with Nodejs, Reactjs ,javaScript and MongoDB, this project demonstrates my ability to create dynamic and responsive web applications."
              ghLink="https://github.com/LamiaEid1/Netflix-clone"
              demoLink="https://netflix-clone-3km7.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Brainwave AI Chat App"
              description="Modern AI chat interface built with React.js and Tailwind CSS. Features sleek parallax animations, bento box layouts, and a comprehensive UI design. Includes sections for features, pricing, roadmap, and interactive AI chat simulation."
              ghLink="https://github.com/LamiaEid1/Brainwave"    
              demoLink="https://lamiaeid1.github.io/Brainwave/"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Bookstore Management System"
              description="Developed an ASP.NET Core MVC application for a local bookstore. The app handles inventory management, customer interactions, and role-based access for different types of users.."
              ghLink="https://github.com/LamiaEid1/Bookstore-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Education-Center-Web"
              description="This is a full-stack web application developed for a learning center that teaches kids.."
              ghLink="https://github.com/LamiaEid1/novamind-center"
              demoLink="https://novamind-center.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Video Calling Interview (T-Code)"
              description="Developed a full-stack web application for video interviews using React, Next.js, and Stream forvideo calling. Integrated Convex for real-time database updates and Clerk for secure userauthentication."
              ghLink="https://github.com/LamiaEid1/T-Code"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
