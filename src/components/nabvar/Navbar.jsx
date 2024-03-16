import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/SIdebar";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Coder Emran
        </motion.span>
        <div className="social">
          <a href="#">
            
            <img src="./facebook.png" alt="" />
          </a>
          <a href="#">
            
            <img src="./instagram.png" alt="" />
          </a>
          <a href="#">
            
            <img src="./youtube.png" alt="" />
          </a>
          <a href="#">
            
            <img src="./dribble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
