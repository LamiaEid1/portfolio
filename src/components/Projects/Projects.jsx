import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import alibabaClone from "../../Assets/Projects/alibabaClone.jpeg";
import tCode from "../../Assets/Projects/TCode.png";
import brainwave from "../../Assets/Projects/brainwave.png";
import glamora from "../../Assets/Projects/glamora.png"
import productsPost from "../../Assets/Projects/productsPost.png";
import novamind from "../../Assets/Projects/novamind.png";
import forsa from "../../Assets/Projects/forsa.png";

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
              imgPath={forsa}
              loading="lazy"
              isBlog={false}
              title="Forsa"
              description="Forsa is a full-stack platform I founded to close the gap between students in North Lebanon and the internships that rarely reach them. Built with React, Next.js, Node.js, and PostgreSQL, it's free for job-seekers. Now live with 90+ users."
              demoLink="https://www.forsa-lb.com/"
            />
          </Col>
           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={glamora}
              loading="lazy"
              isBlog={false}
              title="Glamora Fashion Shop"
              description="Glamora is a full-stack e-commerce platform I built for a real fashion retailer, handling everything from product browsing to checkout to order management. It runs on React and Tailwind CSS on the frontend, Express.js and MySQL on the backend, with JWT authentication for customer and admin roles. Deployed on Railway and Vercel with CI/CD through GitHub, it's live today processing real orders and real sales." 
              demoLink="https://www.glamorafashionshop.com/"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={brainwave}
              loading="lazy"
              isBlog={false}
              title="Brainwave AI Chat App"
              description="Modern AI chat interface built with React.js and Tailwind CSS. Features sleek parallax animations, bento box layouts, and a comprehensive UI design. Includes sections for features, pricing, roadmap, and interactive AI chat simulation."
              ghLink="https://github.com/LamiaEid1/Brainwave"    
              demoLink="https://lamiaeid1.github.io/Brainwave/"        
            />
          </Col>

      <Col md={4} className="project-card">
            <ProjectCard
               imgPath={tCode}
               loading="lazy"
               isBlog={false}
               title="Video Calling Interview (T-Code)"
               description="Developed a full-stack web application for video interviews using React, Next.js, and Stream for video calling. Integrated Convex for real-time database updates and Clerk for secure user authentication."
               ghLink="https://github.com/LamiaEid1/T-Code"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={novamind}
              loading="lazy"
              isBlog={false}
              title="Education-Center-Web"
              description="This is a full-stack web application developed for a learning center that teaches kids.."
              ghLink="https://github.com/LamiaEid1/novamind-center"
              demoLink="https://novamind-center.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={productsPost}
              loading="lazy"
              isBlog={false}
              title="Product Showcase"
              description="A full-stack web application that allows users to post products with details like price and image URLs. Built using React for the frontend and Node.js with MongoDB for the backend, the project showcases a smooth integration between design and functionality."
              ghLink="https://github.com/LamiaEid1/Product-Showcase"
              demoLink="https://product-showcase-nd4w.onrender.com/"
            />
          </Col>
            
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
