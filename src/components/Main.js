import "./Main.css";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
function Main() {
  return (
    
    <div className="main">
      <div className="content">
        <motion.h1
          initial="hidden"
          animate="visible"
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
          id="main_text"
        >
          Zi Xue Lim
        </motion.h1>
        <motion.h2
          initial={{ x: -100, opacity: 0 }} // initial position and opacity
          animate={{ x: 0, opacity: 1 }} // animate to final position and opacity
          transition={{ delay: 1, duration: 2.5 }} // optional delay before animation starts
          id="sub_text1"
        >
          Computer Engineer | Software Developer
        </motion.h2>
      </div>
      </div>
  );
}

export default Main;