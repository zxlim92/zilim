import React, { useEffect, useRef, useState } from "react";
import "./WorkExp.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import morganStanley from "../img/ms2.png";
import tt from "../img/tt.png"
import ahs from "../img/ahs.png"
import npx from "../img/npx.png"
function WorkExp() {
 
    const { ref: titleRef, inView: titleVisible } = useInView();
    const { ref: msCardRef, inView: msCardVisible } = useInView();
    const { ref: ttCardRef, inView: ttCardVisible } = useInView();
    const { ref: ahsCardRef, inView: ahsCardVisible } = useInView();
    const { ref: npxCardRef, inView: npxCardVisible } = useInView();
    return (
    <div className="work_exp">
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
        Work Experience
      </motion.h1>

      <motion.div
        ref={msCardRef}
        initial={{ x: msCardVisible ? -100 : 0, opacity: msCardVisible ? 0 : 1 }}
        animate={{ x: msCardVisible ? 0 : -100, opacity: msCardVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 2.5 }}
        className="work_card"
      >
     <img className="comp_img" src={morganStanley} alt="Profile" /> 
        
        <div className="work_text">
        <h3 class="sub_role">Technology Analyst @ </h3>
          <h3 class="sub_titles">Moragn Stanely</h3>
          <br/><br/>
         Currently work here
        </div>
      </motion.div>
      <motion.div
        ref={ttCardRef}
        initial={{ x: ttCardVisible ? -100 : 0, opacity: ttCardVisible ? 0 : 1 }}
        animate={{ x: ttCardVisible ? 0 : -100, opacity: ttCardVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 2.5 }}
        className="work_card"
      >
     <img className="comp_img" src={tt} alt="Profile" /> 
 
          
        <div className="work_text">
        <h3 class="sub_role">Software Developer Co-op @ </h3>
        <h3 class="sub_titles">Tetra Tech</h3>
        <br /><br />
        At Tetra Tech, I was worked with the Transportation Team and AI team.
          For the first part of my work term I mainly focused on developing a full stack
          data management application that stored 1.2 GB worth of data from hard drives.
          For the second part of my work term I was involved in working on a project that
          detected bodies of water near rail way tracks. Here I learned how to manipulate geospatial data in python and
          process geotiffs in python.
        </div>
      </motion.div>
      <motion.div
        ref={ahsCardRef}
        initial={{ x: ahsCardVisible ? -100 : 0, opacity: ahsCardVisible ? 0 : 1 }}
        animate={{ x: ahsCardVisible ? 0 : -100, opacity: ahsCardVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 2.5 }}
        className="work_card"
      >
     <img className="comp_img" src={ahs} alt="Profile" /> 
        
        <div className="work_text">
        <h3 class="sub_role">Software Developer Co-op @ </h3>
          <h3 class="sub_titles">Alberta Health Services</h3>
          <br/><br/>
          At AHS, I was working on a project that was trying to provide play
          with kids(ages 3-10) with disabilities(mainly kids autism and cerebral palsy).
          Hence, the robot had to be built to take into account for their physical limitations.
          I was brought on to develop an android app to control the robot. I used flutter for the front end
          and firebase for the backend. I was also tasked to implement and fix hardware on the robot along with add
          extra functionalities in the Robot, such as movements of the limbs.
        </div>
      </motion.div>
      <motion.div
        ref={npxCardRef}
        initial={{ x: npxCardVisible ? -100 : 0, opacity: npxCardVisible ? 0 : 1 }}
        animate={{ x: npxCardVisible ? 0 : -100, opacity: npxCardVisible ? 1 : 0 }}
        transition={{ delay: 1, duration: 2.5 }}
        className="work_card"
      >
     <img className="comp_img" src={npx} alt="Profile" /> 
        
        <div className="work_text">
        <h3 class="sub_role">Software Developer Co-op @ </h3>
          <h3 class="sub_titles">Nuclear Promise X</h3>
          <br/><br/>
          At NPX, I was in the modernization team, which main goal was to make systems in the nuclear industry more
          efficient.
          We were mainly using Microsoft apps, suchs as Power Apps, SharePoint and Power Bi, to create apps. Throughout
          my coop term,
          I developed 2 full stack applications to replace and modernized legacy systems.

        </div>
      </motion.div>
    </div>
  );
}

export default WorkExp;
