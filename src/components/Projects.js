import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";

import anime from "animejs";
import face_rec from "../img/face_rec.png";
import qrun from "../img/qrun.png";
import atc from "../img/atc.jpg";
import snakes from "../img/SNAKES.png";
import serial from "../img/serial_com.png";
import skinscreen from "../img/skin_screen.png";
import chat from "../img/chat.png";
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
    },

    {
      name: "Face Recongition",
      githubPage: "https://github.com/zxlim92/FaceRecognistion",
      image: face_rec,
      description: "Face recognition program",
    },
    {
      name: "QRun",
      githubPage: "https://github.com/CMPUT301W22T11/QRun",
      image: qrun,
      description: "abcdefghijklmnop",
    },
    {
      name: "Air Traffic Control",
      githubPage: "https://github.com/zxlim92/airTrafficControl",
      image: atc,
      description: "Air Traffic Control",
    },
    {
      name: "Snake Game",
      githubPage: "https://github.com/zxlim92/SnakeGame",
      image: snakes,
      description: "abcdefghijklmnop",
    },
    {
      name: "Arudino Serial",
      githubPage: "https://github.com/zxlim92/Cmput274FinalProject",
      image: serial,
      description: "abcdefghijklmnop",
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

  const toggle = (index) => {
    setToggled((prevState) => !prevState);
    document.body.classList.toggle("toggled");
  
    const project = listProject[index];
    
    setTimeout(() => {
      setSelectedProject(project);
      console.log(project);
      console.log("Fwqfwqf" + toggled)
    }, 1000);
    
  };

  const handleOnClick = (index) => {
    console.log("----")
    console.log(toggled);
    toggle(index);

    anime({
      targets: ".tile",
      opacity: toggled ? 0 : 1,
      duration: 500, // Adjust the duration as needed
      easing: "linear",
    });
  };

  const createTile = (index) => {
    const project = listProject[index];
    return (
      <div
        className="tile"
        style={{
          opacity: toggled ? 0 : 1,
          backgroundImage: `url(${project.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onClick={() => handleOnClick(index)}
      ></div>
    );
  };

  const createTiles = () => {
    const quantity = listProject.length;
    const tiles = Array.from(Array(quantity)).map((_, index) =>
      createTile(index)
    );
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
  return (
    <div className="project_page">
      <div className="titles">Projects</div>

      <div id="tiles_container">
        {selectedProject && !toggled && (
          <div id="toggled_div" onClick={() => handleOnClick(listProject.indexOf(selectedProject))}>
            <div className="toggled_image">
              {`url(${selectedProject.image})`}
              <img src={selectedProject.image} alt={selectedProject.name} />
            </div>
            <div className="toggled_content">
              {selectedProject.name}
              <h2>{selectedProject.name}</h2>
              {selectedProject.description}
              <p>{selectedProject.description}</p>
            </div>
          </div>
        )}

        <div id="tiles">{createTiles(columns * rows)}</div>
      </div>
    </div>
  );
}

export default Project;
