import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TextTransition = (props) => {
    const [index, setIndex] = React.useState(0);

    const variants = {
        enter: direction => {
            return {
                y: 0,
                opacity: 0
            };
        },
        center: {
            y: 0,
            opacity: 1
        },
        exit: direction => {
            return {
                opacity: 0,
                duration: 1,
                transition: {
                    duration: 1
                }
            };
        }
    };

    useEffect(() => {
        setTimeout(() => {
            let next = index + 1;
            if (next === props.text.length) {
                next = 0;
            }
            setIndex(next);
        }, 4000);
    }, [index, setIndex]);

    return (
        <motion.div
            style={{ position: "absolute" }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1 }
            }}
        >
            {props.text[index]}
        </motion.div>
    )
}

export default TextTransition;