import React, { useState } from 'react'
import './projects.scss'
import Fade from "react-reveal/Fade";
import dataa1 from '../../../assets/images/proj1.JPG'
import dataa3 from '../../../assets/images/proj3.JPG'
import dataa4 from '../../../assets/images/proj4.JPG'
import dataa5 from '../../../assets/images/proj5.JPG'
import dataa6 from '../../../assets/images/proj6.JPG'
import dataa7 from '../../../assets/images/proj7.JPG'
import dataa8 from '../../../assets/images/proj8.JPG'
import dataa9 from '../../../assets/images/proj9.JPG'
import dataa10 from '../../../assets/images/proj10.JPG'
import dataa11 from '../../../assets/images/proj11.JPG'
import dataa12 from '../../../assets/images/proj12.JPG'
import dataa13 from '../../../assets/images/proj13.PNG'
import dataa14 from '../../../assets/images/proj14.PNG'
import dataa15 from '../../../assets/images/proj15.PNG'
import Helmet from 'react-helmet';


const data = [
  {
    type: "front",
    image: dataa1,
    link: "https://best-gamestore203040.netlify.app/",
    name: "Store game",
  },
  // NEW
  {
    type: "front",
    image: dataa13,
    link: "https://p-t-g.vercel.app/",
    name: "Private Luxury",
  },
  {
    type: "front",
    image: dataa14,
    link: "https://www.ray-wedding.com/",
    name: "Ray wedding",
  },
  {
    type: "front",
    image: dataa15,
    link: "http://back.luxservice.co/",
    name: "Platinum ",
  },


  // NEW
  {
    type: "front",
    image: dataa3,
    link: "https://youtubeclone-203040.netlify.app/",
    name: "Youtube Clone",
  },
  {
    type: "front",
    image: dataa12,
    link: "https://anime-blue-store.netlify.app/",
    name: "Anime Store",
  },
  {
    type: "front",
    image: dataa4,
    link: "https://besttodo203040.netlify.app/",
    name: "Todo",
  },
  {
    type: "front",
    image: dataa5,
    link: "https://small-course203040.netlify.app/",
    name: "Coursesa",
  },
  {
    type: "design",
    image: dataa6,
    link: "https://www.behance.net/gallery/141989545/resuranto",
    name: "Pizzato",
  },
  {
    type: "design",
    image: dataa7,
    link: "https://www.behance.net/gallery/141991655/Smart-developer",
    name: "Developer",
  },
  {
    type: "design",
    image: dataa8,
    link: "https://www.behance.net/gallery/141992621/restoranto2",
    name: "Burgure",
  },
  {
    type: "design",
    image: dataa9,
    link: "https://www.behance.net/gallery/141285029/gameoStore",
    name: "Game Design",
  },
  {
    type: "back",
    image: dataa10,
    link: "https://github.com/aak201610889/CRUD",
    name: "CRUD BACKEND",
  },
  {
    type: "back",
    image: dataa11,
    link: "https://github.com/aak201610889/ecommerce-server",
    name: "Backend ecommerce",
  },
];

function Projects() {
  const [projects, setprojects] = useState(data)
  const filter = (type) => {
    if (type === "all") {
      setprojects(data)
    } else {
      setprojects(data.filter((project) => project.type === type))
    }
}

  return (
    <div className="projects">
      <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="peojects page for my portfolio application"
        />
      </Helmet>
      <h1>Projects</h1>
      <div className="row_select_proj">
        
        <div>
          {" "}
          <button onClick={() => filter("all")}>All</button>
          <button onClick={() => filter("design")}>Design</button>
        </div>
        <div>
          {" "}
          <button onClick={() => filter("front")}>FrontEnd</button>
          <button onClick={() => filter("back")}>BackEnd</button>
        </div>
      </div>
      <div className="proj_container">
        {projects.map((item, index) => (
          <div key={index} className="proj ">
            <Fade left cascade>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ll"
              >
                <img className="proj_image" src={item.image} alt={index} />

                <div className="proj_title">
                  <p>{item.name}</p>
                </div>
              </a>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Projects