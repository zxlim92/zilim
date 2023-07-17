import React, { useEffect, useRef, useState } from "react";
import "./WorkExp.css";
import { motion } from "framer-motion";

import morganStanley from "../img/ms2.png";
import tt from "../img/tt.png"
import ahs from "../img/ahs.png"
import npx from "../img/npx.png"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"
import { useInView } from "react-intersection-observer";
function WorkExp() {
    let timelineElements = [
      {
      id : 0,
      company:"Morgan Stanely",
      title : "Technology anaylst",
      description :"I am currently employed here and this will be updated ASAP",
      date:"August 2023 - present",
      location:"Calgary,AB",
      icon: morganStanley,

    },
    {
      id : 1,
      company:"Tetra Tech",
      title : "Software developer Coop",
      description :'At Tetra Tech, I was worked with the Transportation Team and AI team. For the first part of my work term I mainly focused on developing a full stack data management application that stored 1.2 GB worth of data from hard drives. For the second part of my work term I was involved in working on a project that detected bodies of water near rail way tracks. Here I learned how to manipulate geospatial data in python and process geotiffs in python.',
      location:"Edmonton,AB",
      date:"May 2022 - December 2022",
      icon: tt,

    },
    {
      id : 2,
      company:"Alberta Health Services",
      title : "Software developer Coop",
      description :"At AHS, I was working on a project that was trying to provide play with kids(ages 3-10) with disabilities(mainly kids autism and cerebral palsy). Hence, the robot had to be built to take into account for their physical limitations. I was brought on to develop an android app to control the robot. I used flutter for the front end and firebase for the backend. I was also tasked to implement and fix hardware on the robot along with add extra functionalities in the Robot, such as movements of the limbs.",
      location:"Edmonton,AB",
      date:"January 2021  - September 2021",
      icon: ahs,

    },
    {
      id : 3,
      company:"Nuclear Promise X",
      title : "Software developer Coop",
      description :"At NPX, I was in the modernization team, which main goal was to make systems in the nuclear industry more efficient. We were mainly using Microsoft apps, suchs as Power Apps, SharePoint and Power Bi, to create apps. Throughout my coop term, I developed 2 full stack applications to replace and modernized legacy systems.",
      location:"Kincardine,ON",
      date:"April 2020  - September 2020",
      icon: npx,

    },
  ]
  const { ref: titleRef, inView: titleVisible } = useInView();
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
        <VerticalTimeline>
          {timelineElements.map(element =>{
            return(
              <VerticalTimelineElement
              key={element.key}
              date = {element.date}
              dateClassName = "date"
              icon = {<img src={element.icon} className="work_icon" alt="Icon" />}
              
              >
                <h3 className = "vertical-timeline-element-title"> 
                {element.title} @  
                  
                </h3>
                
                <h3 className="sub_titles">{element.company}</h3>
                <h5 className = "vertical-timeline-element-subtitle">{element.location}</h5>
              <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            )
          })}
        </VerticalTimeline>
    </div>
  );
}

export default WorkExp;
