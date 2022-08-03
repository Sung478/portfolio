import React from "react";
import { motion } from "framer-motion";
import './Navbar.css'

import navLogo from '../../assets/sun-2.svg'

const motionList = {
    hoverMotion: 
    {   scale: 1.1,
        fontWeight: 'bold',
        rotate: 5
    }
}

export function NavBar () {
    return(
        <motion.div initial={{ opacity: 0.1 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="navBar">
            <motion.div initial={{ scale: 1, x: "18vw", y: "50vh" }} animate={{ scale: 0.3 , x: -80, y: 0, margin: 0, padding: 0 }}  transition={{ duration: 1, ease: "easeIn", delay: 2}} id="icon">
                <motion.img src={navLogo} initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{duration: 2, delay:0.5}} whileHover={{ borderRadius: "20%" }} />
                <motion.h3 initial={{ scale: 2 }} animate={{ scale: 1 }} transition={{ type: "spring" }}><motion.a variants={motionList} whileHover="hoverMotion" href="#home" >Sung</motion.a></motion.h3>
            </motion.div>
            <motion.div id="navBar-link" initial={{ opacity: 0}} animate={{opacity: 1}} transition={{ duration: 0.5, delay: 3}}>
                {/* <motion.a variants={motionList} whileHover="hoverMotion" href="#home"><p>Home</p></motion.a> */}
                <motion.a variants={motionList} whileHover="hoverMotion" href="#aboutMe"><p>About Me</p></motion.a>
                <motion.a variants={motionList} whileHover="hoverMotion" href="#experiences"><p>Experiences</p></motion.a>
                <motion.a variants={motionList} whileHover="hoverMotion" href="#skills"><p>Skills</p></motion.a>
                <motion.a variants={motionList} whileHover="hoverMotion" href="#projects"><p>Projects</p></motion.a>
                <motion.a variants={motionList} whileHover="hoverMotion" href="#contact"><p>Contact</p></motion.a>
            </motion.div>
        </motion.div>
    )
}