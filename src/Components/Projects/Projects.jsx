import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion'

import dummyPic from '../AboutMe/20220306_220810.jpg'
import extractsPic from './Extracts.png'
import jammmingPic from './Jammming.png'
import colmarPic from './Colmar.png'
import findYourHatPic from './FindYourHat.png'

const linkHover = { scale: 1.05, x: 10, y: 5, textShadow: "1px 1px 5px lightgrey" }

export function Projects() {

    const cardMotion = {
        cardNormal: {
            scale: 1
        },

        cardHover: {
            scale: 1.1
        }
    }
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }} id='projects'>
        <h2>Projects</h2>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 2 }} className='cards-container'>
            <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='card'>
                <div className='cardPic'>
                    <img src={extractsPic} />
                </div>
                <div className='cardContent'>
                    <h3>Extracks</h3>
                    <p>help track your excercise and visualize them</p>
                </div>
            </motion.div>
            <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='card'>
                <div className='cardPic'>
                    <img src={jammmingPic} />
                </div>
                <div className='cardContent'>
                <a href={'https://assigment-react2.vercel.app/'} target="_blank"><motion.h3 whileHover={linkHover}>Jammmig</motion.h3></a>
                    <p>connects to Spotyfy account and creates playlists</p>
                </div>
            </motion.div>
            <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='card'>
                <div className='cardPic'>
                    <img src={colmarPic} />
                </div>
                <div className='cardContent'>
                <a href={'https://sung478.github.io/Colmar/'} target="_blank"><motion.h3 whileHover={linkHover}>Colmar</motion.h3></a>
                    <p>a academy single-page website</p>
                </div>
            </motion.div>
            <motion.div variants={cardMotion} whileHover="cardHover" initial="cardNormal" className='card'>
                <div className='cardPic'>
                    <img src={findYourHatPic} />
                </div>
                <div className='cardContent'>
                <a href={'https://replit.com/@Sung478/Find-your-hat#index.js'} target="_blank"><motion.h3 whileHover={linkHover}>Find your hat</motion.h3></a>
                    <p>command-line interface game to find your hat in the maze</p>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
  )
}
