import React from "react";
import { motion } from "framer-motion";
const Test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5, x: 100 }}
        transition={{ duration: 2, delay: 2 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        drag
      ></motion.div>
    </div>
  );
};

export default Test;
