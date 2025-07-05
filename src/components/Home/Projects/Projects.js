import React, { useState } from 'react'
import './projects.scss'
import Fade from "react-reveal/Fade";
import dataa1 from '../../../assets/images/proj1.JPG'
import company from '../../../assets/images/company.png'
import renew from '../../../assets/images/renew.png'

import dataa13 from '../../../assets/images/proj13.PNG'
import dataa14 from '../../../assets/images/proj14.PNG'
import dataa15 from '../../../assets/images/proj15.PNG'
import wed from '../../../assets/images/wed.png'
import als from '../../../assets/images/als.png'
import store from '../../../assets/images/store.png'

import Helmet from 'react-helmet';


const data = [
   {
    type: "full",
    image: company,
    link: "https://companyv3.netlify.app/",
    name: "Company",
  },
   {
    type: "full",
    image: store,
    link: "https://goldenstore2025.onrender.com/home",
    name: "Golden Store",
  },
   {
    type: "full",
    image: renew,
    link: "https://www.tamm.abudhabi/en/life-events/individual/Manage-your-Health/Health%20Insurance",
    name: "Renewal Health",
  },
  {
    type: "front",
    image: wed,
    link: "https://wedding-day2025.netlify.app/",
    name: "Wedding Day",
  },
  {
    type: "front",
    image: dataa1,
    link: "https://best-gamestore203040.netlify.app/",
    name: "Store game (Front)",
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
    type: "https://als2025.netlify.app/",
    image: dataa15,
    link: "http://back.luxservice.co/",
    name: "Platinum ",
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
          <button onClick={() => filter("front")}>Front End</button>
          <button onClick={() => filter("full")}>Full Stack</button>
        </div>
        
        <div>
          {" "}
          <button onClick={() => filter("all")}>All</button>
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