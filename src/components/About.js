import React, { useEffect, useRef, useState } from "react";
import "./About.css";
import profilePic from "../img/pic.png";
import profilePic2 from "../img/grad_photo_fam.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function About() {
  // const cardRef = useRef(null);
  const { ref: titleRef, inView: titleVisible } = useInView();
  console.log(titleVisible);
  const { ref: cardRef, inView: cardVisible } = useInView();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleImageClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="about">
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
        About
      </motion.h1>

      <motion.div
        ref={cardRef}
        initial={{ x: cardVisible ? -100 : 0, opacity: cardVisible ? 0 : 1 }}
        animate={{ x: cardVisible ? 0 : -100, opacity: cardVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 2.5 }}
        className="about_card"
      >
        {/* <img className="about_img" src={profilePic} alt="Profile" /> */}
        <div className={`image-container ${isFlipped ? "flipped" : ""}`}>
          <div className="image-wrapper" onClick={handleImageClick}>
            <div className="image-front">
              <img className="about_img" src={profilePic} alt="Front Image" />
            </div>
            <div className="image-back">
              <img className="about_img" src={profilePic2} alt="Back Image" />
            </div>
          </div>
        </div>
        <div className="about_text">
          I am a Computer Engineer that graduated from the University of Alberta
          in 2023 with distinction. I am currently employed by Morgan Stanely as
          a technology analyst in Calgary.
          <br />
          <br />
          Fun Facts:
          <br />
          <br />
          -Apart from coding, my hobbies include Basketball, Fitness, Skiing and
          Gaming.
          <br />
          -Lived in 4 different countries: Malaysia, United Kingdom, Singapore
          and Canada
          <br/>
          -Click on the photo to see a graduation photo :) !
        </div>
      </motion.div>
    </div>
  );
}

export default About;
