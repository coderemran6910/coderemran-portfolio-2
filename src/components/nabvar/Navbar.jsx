import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/SIdebar";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar  */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className=" text-2xl md:text-3xl  ml-28 xl:m-0"
          initial={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 2 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          Coder Emran
        </motion.span>
        <div className="social mr-5 md:mr-0">
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
