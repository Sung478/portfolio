import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

import profilePic from './20220306_220810.jpg';
import educationIcon from './education.png'

export function AboutMe() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 3 }} id='aboutMe'>
        <motion.img id='myPicture' src={profilePic} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0, x:[ "0vw", "60vw" , "0vw" ], rotate: [0, 360, 0], transition: { duration: 2, delay: 2 }}} viewport={{ once: true }} whileHover={{ scale: 1.2, borderRadius: "10%", transition: { delay: 0, duration:0.5}}} />
        <div className='aboutMe-content'>
            <h2>About Me</h2>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.5 }} >
              <p>I believe learning is the gate leading you to opportunities. Therefore, I keen to challenge myself to learn new things. 
                I am a responsible person and take account for what I do. I also have experiences working as a team with agile methodology. 
                I am looking forward for a job as a software developer. I believe coding and programing are powerful ways to create technology, 
                leading the world to a better future.</p>
              <h3>Education</h3>
              <div id="education-container">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <h4>Junior Software Developer Program</h4>
                  <h5>Generation Thailand</h5>
                  <p>June - August, 2022</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }}>
                  <h4>Bachelor of Science in Geology</h4>
                  <h5>Chulalongkorn University, Faculty of Science</h5>
                  <div id="grade-uni">
                    <p>2015 - 2019</p>
                    <p>GPAX : 3.50/4.00</p>
                  </div>
                </motion.div>
              </div>
            
              
            </motion.div>
        </div>
    </motion.section>
  )
}
