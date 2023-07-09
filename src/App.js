import "./App.css";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValueEvent,
} from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Main from "./components/Main";
import About from "./components/About";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import main_bg from "./img/ski2.png";
import banff from "./img/banf.png";
import work_exp_bg from "./img/exp_bg.png";
import WorkExp from "./components/WorkExp";
import Project from "./components/Projects";
function App() {
  const paraRef = useRef();
  const aboutRef = useRef(null);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isSnapped, setIsSnapped] = useState(false);

  return (
    <body>
      <Parallax pages={5} ref={paraRef}>
        <ParallaxLayer
          speed={2}
          factor={1.5}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${main_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundPositionY: "10%",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={1}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${banff})`,

            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={5}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${work_exp_bg})`,

            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={3.75}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0) 30%), linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 1)), url(${banff})`,

            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.1}>
          <Main />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <WorkExp />
        </ParallaxLayer>
        <ParallaxLayer offset={3.75} speed={0.5}>
          <Project />
        </ParallaxLayer>
      </Parallax>
    </body>
  );
}

export default App;
