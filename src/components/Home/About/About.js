import React from "react";
import "./about.scss";
import Leveles from "./Leveles";
import Flip from "react-reveal/Flip";
import Helmet from "react-helmet";
function About() {
  const dataFront = [
    { name: "Html", level: 99 },
    { name: "Css", level: 90 },
    { name: "js", level: 84 },
    { name: "React", level: 87 },
    { name: "Tailwind css", level: 85 },
    { name: "Redux Toolkit", level: 75 },
    { name: "Socket IO", level: 72 },
  ];
  const dataBack = [
    { name: "ExpressJs", level: 74 },
    { name: "Nodejs", level: 80 },
    { name: "Docker", level: 74 },
    { name: "Microservices", level: 75 },
    { name: "Aws", level: 60 },
    { name: "MVC", level: 80 },
  ];
  const dataDesign = [
    { name: "Research", level: 90 },
    { name: "Design", level: 80 },
    { name: "wireFrame", level: 75 },
    { name: "Color", level: 73 },
    { name: "Font", level: 75 },
    { name: "Effective", level: 78 },
  ];
  return (
    <div className="about">
      <Helmet>
        <title>About page</title>
        <meta
          name="description"
          content="About page for my portfolio application"
        />
      </Helmet>
      <div className="about_rowone">
        <div className="about_text">
          <h1>About me</h1>
          <p>I am a web developer</p>
          <p>my experiances are:</p>
        </div>
        <div className="about_img">
          <img src="aa.png" alt="" />
        </div>
      </div>
      <Flip cascade left>
        <div className="about_box">
          <div>
            <h1>FrontEnd</h1>
            {dataFront.map((item, index) => (
              <Leveles key={index} data={item} />
            ))}
          </div>
          <div>
            <h1>BackEnd</h1>
            {dataBack.map((item, index) => (
              <Leveles key={index} data={item} />
            ))}
          </div>
          <div>
            <h1>UI/UX</h1>
            {dataDesign.map((item, index) => (
              <Leveles key={index} data={item} />
            ))}
          </div>
        </div>
      </Flip>
    </div>
  );
}

export default About;
