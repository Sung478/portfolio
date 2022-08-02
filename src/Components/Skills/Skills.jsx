import React from 'react';
import './Skills.css'
import { motion } from 'framer-motion';

import htmlPic from './html.png'
import cssPic from './css-3.png'
import jsPic from './js.png'
import reactPic from './physics.png'
import nodePic from './nodejs.png'
import mongoPic from './mongodb_original_logo_icon_146424.png'
import sqlPic from './sql-server.png'
import gitPic from './git.png'

export function Skills() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }} id='skills'>
        <h2>Skills</h2>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <figure>
                <img src={htmlPic}/>
                <figcaption>HTML</figcaption>
            </figure>
            <figure>
                <img src={cssPic}/>
                <figcaption>CSS</figcaption>
            </figure>
            <figure>
                <img src={jsPic}/>
                <figcaption>JavaScript</figcaption>
            </figure>
            <figure>
                <img src={reactPic}/>
                <figcaption>React</figcaption>
            </figure>
            <figure>
                <img src={nodePic}/>
                <figcaption>NodeJS</figcaption>
            </figure>
            <figure>
                <img src={mongoPic}/>
                <figcaption>MongoDB</figcaption>
            </figure>
            <figure>
                <img src={sqlPic}/>
                <figcaption>SQL</figcaption>
            </figure>
            <figure>
                <img src={gitPic}/>
                <figcaption>Git</figcaption>
            </figure>
        </motion.div>
    </motion.section>
  )
}
