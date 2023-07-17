import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Projects.css";
import face_rec from "../img/face_rec.png";
import qrun from "../img/qrun.png";
import atc from "../img/atc.jpg";
import snakes from "../img/SNAKES.png";
import serial from "../img/serial_com.png";
import skinscreen from "../img/skin_screen.png";
import chat from "../img/chat.png";
import github from "../img/github.png";
import youtube from "../img/youtube.png";
import { useInView } from "react-intersection-observer";
const Tile = ({ project, toggled, handleOnClick }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      className="tile"
      style={{
        opacity: toggled ? 0 : 1,
        backgroundImage: `url(${project.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 1 }}
      animate={{ opacity: toggled ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      {hovered && (
        <div className="tile-overlay">
          <h3>{project.name}</h3>
        </div>
      )}
    </motion.div>
  );
};

function Project() {
  let listProject = [
    {
      name: "Skin Screen",
      language: "Swift UI, ",
      githubPage: "https://github.com/HUDTarM/SkinScreen",
      image: skinscreen,
      description:
        "IOS app that will display physilogical data, collected by a oximeter, and project patient's medical image on them using augment reality ",
      video: "https://www.youtube.com/embed/bHL9bEqIxeI",
    },
    {
      name: "Smart ChatBot",
      githubPage: "https://github.com/HackEDGigachat",
      image: chat,
      description:
        "Smart device that can be controlled from a website or raspberry pi that uses Chatgpt logic",
      video: "",
    },

    {
      name: "Face Recongition",
      githubPage: "https://github.com/zxlim92/FaceRecognistion",
      image: face_rec,
      description: "Face recognition program",
      video: "",
    },
    {
      name: "QRun",
      githubPage: "https://github.com/CMPUT301W22T11/QRun",
      image: qrun,
      description: "abcdefghijklmnop",
      video: "",
    },
    {
      name: "Air Traffic Control",
      githubPage: "https://github.com/zxlim92/airTrafficControl",
      image: atc,
      description: "Air Traffic Control",
      video: "",
    },
    {
      name: "Snake Game",
      githubPage: "https://github.com/zxlim92/SnakeGame",
      image: snakes,
      description: "abcdefghijklmnop",
      video: "",
    },
    {
      name: "Arudino Serial",
      githubPage: "https://github.com/zxlim92/Cmput274FinalProject",
      image: serial,
      description: "abcdefghijklmnop",
      video: "",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    createGrid();
    window.addEventListener("resize", createGrid);
    return () => {
      window.removeEventListener("resize", createGrid);
    };
  }, []);

  const toggle = (index, isToggled) => {
    document.body.classList.toggle("toggled");

    const project = listProject[index];
    setSelectedProject(project);
    setToggled(isToggled);
  };

  const handleOnClick = (index) => {
    const isToggled = !toggled;
    setToggled(isToggled);
    toggle(index, isToggled);
  };

  const createTiles = () => {
    const tiles = listProject.map((project, index) => (
      
      <Tile
        key={index}
        project={project}
        toggled={toggled}
        handleOnClick={() => handleOnClick(index)}
      />
    ));
    return tiles;
  };

  const createGrid = () => {
    const tileCount = listProject.length;
    const tilesPerRow = 3; // Adjust this value to the desired number of tiles per row
    const calculatedColumns = Math.min(tilesPerRow, tileCount);
    const calculatedRows = Math.ceil(tileCount / tilesPerRow);
    document.documentElement.style.setProperty("--columns", calculatedColumns);
    document.documentElement.style.setProperty("--rows", calculatedRows);
    setColumns(calculatedColumns);
    setRows(calculatedRows);
  };
  const { ref: titleRef, inView: titleVisible } = useInView();
  return (
    <div className="project_page">
      <motion.h1
        initial="hidden"
        animate={titleVisible ? "visible" : "hidden"}
        variants={{
          hidden: {
            scale: 3,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        ref={titleRef}
        className="titles"
      >
        Projects
      </motion.h1>

      <div id="tiles_container">
        {selectedProject && toggled && (
          <motion.div
            id="toggled_div"
            onClick={() => handleOnClick(listProject.indexOf(selectedProject))}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <div className="toggled_image">
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="toggled_content">
              <h2>{selectedProject.name}</h2>
              <p>{selectedProject.description}</p>
              <div className="icon-container">
                <a
                  href={selectedProject.githubPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="round_image">
                    <img className="icon" src={github} alt="GitHub" />
                  </div>
                </a>
                {selectedProject.video && (
                  <a
                    href={selectedProject.video}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="round_image">
                      <img className="icon" src={youtube} alt="YouTube" />
                    </div>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        <div id="tiles">{createTiles()}</div>
      </div>
    </div>
  );
}

export default Project;
