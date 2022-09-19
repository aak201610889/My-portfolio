import React, { useEffect, useMemo, useState } from "react";
import Svactorg from "./Svactorg";
import "./Home.scss";
import RubberBand from "react-reveal/RubberBand";
import { Helmet } from "react-helmet";
function Home() {
  const [dev, setdev] = useState("web design");
  useEffect(() => {
   //change web design to web development every 3 seconds
    const interval = setInterval(() => {
      if (dev === "web design") {
        setdev("web developer");
      } else {
        setdev("web design");
      }
    }
      , 3000);
    return () => clearInterval(interval);
  }, [dev]);


  

  return (
    <>
      <div className="home">
        <Helmet>
          <title>Home page</title>
          <meta
            name="description"
            content="Home page for my portfolio application"
          />
        </Helmet>
        <div className="home_main">
          <div className="code start_code">&lt;body&gt;</div>
          <div className="intoduce_me">
            <h1>Hi</h1>
            <h1>I'm Ayham</h1>
            <h1 className="title_code">
              <RubberBand>
                <h1 className="deves">{dev}</h1>
              </RubberBand>
            </h1>
          </div>
          <div className=" code end_code">&lt;body&gt;</div>
          <div className=" code final_code">&lt;html&gt;</div>
        </div>
        <div className="home_logo">
          <Svactorg />
        </div>
      </div>
    </>
  );
}

export default Home;
