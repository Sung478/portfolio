import React, {useState} from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'
import sun from './circle.svg'


const lastTextStyle = {
    borderLeft: '0px'
}

const textStyle = {
    borderLeft: '1px grey solid'
}

const spanBlock = {display: 'block'}
const spanNone = {display: 'none'}


export function Timeline(props) {
    const [desSpan, setDesSpan] = useState(false)

    // const control = useAnimation()

    const handleOnClick = () => {
        setDesSpan( prev => !prev )
        console.log(desSpan)
        // control.start({ x: 0, opacity: 1, transition:{ duration: 0.5, delay: 0.2 } })
    }

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className='timeline'>
        <div id='bundle'>
            <img src={sun} />
            <p>{props.duration}</p>
        </div>
        <div id='text' style={props.last? lastTextStyle:textStyle}>
            <motion.h4 whileHover={{ scale: 1.05, x: 15 }} onClick={handleOnClick}>{props.workPlace} | {props.jobTitle}</motion.h4>
            <AnimatePresence>
                {/* <motion.span key="spanBullet" animate={control} initial={{ x: 500, opacity: 0}} exit={{x: 500, opacity: 0}} style={desSpan? spanBlock:spanNone} >
                    <ul>
                        {props.description.map((des, i)=>{return <li key={i}>{des}</li>})}
                    </ul>
                </motion.span> */}
                {desSpan&&
                <motion.span key="spanBullet" animate={{ x: 0, opacity: 1 }} initial={{ x: 500, opacity: 0}} exit={{x: 500, opacity: 0}} transition={{ duration: 0.5, delay: 0.2}} >
                    <ul>
                        {props.description.map((des, i)=>{return <li key={i}>{des}</li>})}
                    </ul>
                </motion.span>}
            </AnimatePresence>
        </div>
    </motion.div>
  )
}
