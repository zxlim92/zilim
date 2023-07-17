import React, { useState, useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Background from "./components/Backgroud.js";
import Main from "./components/Main";
import About from "./components/About";
import WorkExp from "./components/WorkExp";
import Project from "./components/Projects";
import main_bg from "./img/ski2.png";
import banff from "./img/banf.png";
import work_exp_bg from "./img/exp_bg.png";
import proj_bg2 from "./img/proj3.png";
import "./App.css";
import NavBar from "./components/Navbar.js";
import Contact from "./components/Contact.js";
function App() {
  const paraRef = useRef(1);
  const aboutRef = useRef(null);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isSnapped, setIsSnapped] = useState(false);

  return (
    <div>
      <NavBar paraRef={paraRef} />
      <div className="app">
        <Parallax pages={6} ref={paraRef}>
          <ParallaxLayer
            offset={1}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${banff})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />

          <ParallaxLayer
            offset={2}
            speed={1}
            factor={3}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${work_exp_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />

          <ParallaxLayer
            offset={4}
            speed={1}
            factor={1.5}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${proj_bg2})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />
          <ParallaxLayer
            offset={5}
            speed={1}
            factor={1}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${main_bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center top",
            }}
          />

          <ParallaxLayer offset={0} speed={0.1}>
            <Background />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={2} speed={0.5}>
            <WorkExp />
          </ParallaxLayer>

          <ParallaxLayer offset={4} speed={0.5}>
            <Project />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
