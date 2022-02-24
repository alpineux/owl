import React from "react";
import { motion } from 'framer-motion'

const FadeMap = (props) => {
    return (
        <motion.div key={props.index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: props.index * 0.2 }}
        >
          {props.children}
        </motion.div>
    )
}

export default FadeMap;