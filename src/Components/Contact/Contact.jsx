import React from 'react'
import { motion } from 'framer-motion'
import './Contact.css'
import facebookPic from './facebook.png'
import gitHubPic from './github.png'
import gmailPic from './gmail.png'
import linkedInPic from './linkedin.png'

export function Contact() {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 3 }} id='contact'>
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
            <h2>Contact</h2>
            <h3><strong>Manunchaya Chongsutakawewong</strong></h3>
            <p>Bangrak, Bangkok, Thailand</p>
            <p> manunchayac.dr@gamil.com</p>
            <p> Sung478.github.io</p>
            <p> +6694-407-2333</p>
        </motion.div>
        <div className='contact-img'>
            <a href={'https://github.com/Sung478'} target="_blank"><img src={gitHubPic} /></a>
            <a href='#'><img src={linkedInPic} /></a>
            <a href={"mailto: manunchaya.dr@gmail.com"}><img src={gmailPic} /></a>
            <a href={"#"}><img src={facebookPic} /></a>
        </div>
    </motion.section>
  )
}
