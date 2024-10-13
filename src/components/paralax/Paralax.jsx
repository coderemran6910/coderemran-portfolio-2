import "./paralax.scss";
import { useRef } from "react";
import {motion, useScroll, useTransform} from 'framer-motion';
const Paralax = ({ type }) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]

    });
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div
      className="paralax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132 , #0c0c1d)"
            : "linear-gradient(180deg, #111132 , #505064)",
      }}
    >
      <motion.h1 className=" text-6xl md:text-8xl text-center" style={{ y: yText }}>
        {type === "services" && "Development Solutions"}
        {type === "portfolio" && "My Webfolio"}
        {type === "contact" && "Get in Contact"}
      </motion.h1>
      <motion.div className="mount"></motion.div>
      <motion.div style={{ y: yBg }} className="groho"></motion.div>
      <motion.div style={{ x: yBg }} className="tara"></motion.div>
      <div className="sun"></div>
    </div>
  );
};

export default Paralax;
