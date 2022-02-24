import React from "react";
import { motion, useViewportScroll } from "framer-motion";

import WithSubnavigation from "~/components/Navbar"

/** this is to FPO generate 5 links for the nav **/
const linkList = [{}, {}, {}, {}, {}];

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "6rem",
  padding: "0 2rem",
  width: "calc(100vw - 4rem)",
  left: "0"
};

const navLinksWrapper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "50%"
};

const Fade = () => {
  /** this hook gets the scroll y-axis **/
  const { scrollY } = useViewportScroll();
  /** this hook manages state **/
  const [hidden, setHidden] = React.useState(false);

  /** this onUpdate function will be called in the `scrollY.onChange` callback **/
  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 25 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  /** update the onChange callback to call for `update()` **/
  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  /** add this const **/
  const variants = {
    /** this is the "visible" key and it's correlating styles **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's correlating styles **/
    hidden: { opacity: 0, y: -25 }
  };

  return (
    <motion.nav /** the variants object needs to be passed into the motion component **/
      variants={variants}
      /** it's right here that we match our boolean state with these variant keys **/
      animate={hidden ? "hidden" : "visible"}
      /** I'm also going to add a custom easing curve and duration for the animation **/
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      /** basic nav styles **/
    >
      <WithSubnavigation />
    </motion.nav>
  );
}

export default Fade;
