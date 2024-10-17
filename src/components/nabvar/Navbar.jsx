import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/SIdebar";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar ">
      {/* sidebar  */}
      <Sidebar />
      <div className="wrapper pl-24   md:pl-28 pr-5 xl:pr-20">
        <motion.span
          className=" text-xl md:text-3xl"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Coder Emran
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/coderemran6910"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              {" "}
              <FaGithub />{" "}
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/coderemran/"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              {" "}
              <FaLinkedin />{" "}
            </span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/coderemran69/"
          >
            <span>
              <FaFacebook />
            </span>
          </a>
          <a href="https://wa.me/+8801789039407" target="_blank" rel="noreferrer">
            <span>
              <FaWhatsapp />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;