import React from "react";
import { motion } from "framer-motion";
import './Home.css'
import cloudGif from './giphy.gif'
import resume from './Manunchaya_Resume.png'

  

export function Home() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }} id="home">
        <motion.h2 animate={{ x: [-500, 0] }} transition={{ duration: 0.3, delay: 3.2}} >Hello! welcome to my portfolio</motion.h2>
        <motion.img animate={{ x: [500, 0] }} transition={{ duration: 1.5, delay: 3.6 }} src={cloudGif} />
        <div className="self-intro">
            <motion.div animate={{ x: [-800, 0] }} transition={{ duration: 0.3, delay: 3.5}} id="name">
                <motion.h1 whileHover={{ scale: 1.2, x: '10vw', color: '#1B2E43' }}>Manunchaya</motion.h1>
                <motion.h1 whileHover={{ scale: 1.1, x: '10vw', color: '#1B2E43' }}>Chongsutakawewong</motion.h1>
            </motion.div>
            <motion.div id="home-quote" animate={{ x: [-1000, 0] }} transition={{ duration: 0.3, delay: 3.7}}>
              <h2>"If you can dream it, you can do it"</h2>
              <h5>- Walt Disney</h5>
              <a href={resume} target="_blank" ><motion.button whileHover={{ scale: 1.1, color: "#1B2E43", backgroundColor: "rgba(255,255,255, 0.3)" }}>Resume</motion.button></a>
            </motion.div>
        </div>
    </motion.section>
  )
}
