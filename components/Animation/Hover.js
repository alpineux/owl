import React from "react";
import { motion } from 'framer-motion'

export const Hover = (props) => {

    let up = props.up || 1.02;
    let down = props.down || 0.98;

    return (
        <motion.div
          whileTap={{ scale: down }}
          whileHover={{ scale: up }}
        >
          {props.children}
        </motion.div>
    )
}

export default Hover;