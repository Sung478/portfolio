import React from 'react'
import { motion } from 'framer-motion'
import './Experiences.css'
import experiencesList from './experience-lists'
import { Timeline } from './experince-block'

export function Experiences() {
  let lastExperince = experiencesList.length - 1;
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }} id='experiences'>
      <h2>Experience</h2>
      {experiencesList.map((work, i )=>{return <Timeline last={i===lastExperince? true : false} duration={work.duaration} workPlace={work.workPlace} jobTitle={work.jobTitle} description={work.description} />})}
    </motion.section>
  )
}
