import React from "react";
import { motion, useScroll } from 'framer-motion';


export function ScrollBar() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleY: scrollYProgress }} />  
  )
}