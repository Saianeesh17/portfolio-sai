import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

// Assuming the video is in src/assets/videos/
// const videoPath = require('../../assets/IMG_4202.mp4');

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "15px" }}>
          {props.description}
        </Card.Text>

        {/* Embed Video from assets folder */}
        <div style={{ marginBottom: "10px" }}>
          <video
            width="100%"
            height="auto"
            controls
            style={{
              borderRadius: "10px",
              marginBottom: "10px",
              maxHeight: "200px" // Adjust the maximum height as needed
            }}
          >
            <source src={props.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            width="100%"
            height="auto"
            controls
            style={{
              borderRadius: "10px",
              marginBottom: "10px",
              maxHeight: "200px" // Adjust the maximum height as needed
            }}
          >
            <source src={props.videoPath2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        <Button
          variant="primary"
          href={props.videoLink}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <h1 style={{ fontSize: "16px" }}>Video Link</h1>
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and it's not a Blog, render the Demo button */}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignContent: "flex-end",
              alignItems: "center",
              textAlign: "center",
              position: "static",
              bottom: "0px",
            }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
