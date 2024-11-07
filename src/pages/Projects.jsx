import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import lift from "../assets/projects/lift.png";
import gvb from "../assets/GloveBoardImage.png";
import spt from "../assets/soccerPlotterThumbnail.png";
import krypto from "../assets/projects/krypto.png";
import kickstart from "../assets/projects/kickstart.png";
import soccerPlotterVideo from "../assets/IMG_4202.mp4";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gvb}
              isBlog={false}
              title="GloveBoard"
              description="This project aims to create a tangible user interface where a user can provide physical input via a glove to produce sounds through a buzzer. Each finger is programmed to play a different note. This is made possible by photoresistors being attached to the fingertips of each finger slot on the glove. More details can be found on the github README file corresponding to the link below."
              ghLink="https://github.com/Saianeesh17/Arduino_GloveBoard"
              videoLink="https://drive.google.com/file/d/1ZrXhJuVRNSGk9bU3z2c4ip6xujIdlP3S/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spt}
              isBlog={false}
              title="Soccer Plotter"
              description="This project aims to create a plotting device which plots the ball position during soccer-attacks using x,y coordinates of the ball. The user can select which attack they want to represent using a python program and it will be displayed on the arduino. The parts for this project are 3d printed. More details including the circuit diagram and important links can be found on the github README file corresponding to the link below."
              ghLink="https://github.com/Saianeesh17/Arduino_GloveBoard"
              videoLink="https://drive.google.com/file/d/1gruD80WAGN8eXJEs5bCQIS3U1cwoUDyR/view?usp=sharing"
              videoPath = {soccerPlotterVideo}
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Social Media"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="E‑Commerce Website"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/19sajib/mern-stack-ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/19sajib/mern-blog-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Solidity Kickstart"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/19sajib/Solidity-Kickstart"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects