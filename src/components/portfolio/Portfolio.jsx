import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Contest Management",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Image:
      "https://i.ibb.co/NyMw7yt/screencapture-contest-creation-platform-web-app-2024-02-18-01-50-08.png",
    link: "https://contest-creation-platform.web.app/",
    githubClient:
      "https://github.com/programming-hero-web-course1/b8a12-client-side-coderemran6910.git",
    githubServer:
      "https://github.com/programming-hero-web-course1/b8a12-server-side-coderemran6910.git",
  },

  {
    id: 2,
    title: "Rastaurent Management",
    desc: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Image:
      "https://i.ibb.co/NjHGV9G/screencapture-rastaurent-management-a-11-web-app-2024-02-18-01-51-40.png",
    link: "https://contest-creation-platform.web.app/",
    githubClient:
      "https://github.com/programming-hero-web-course1/b8a12-client-side-coderemran6910.git",
    githubServer:
      "https://github.com/programming-hero-web-course1/b8a12-server-side-coderemran6910.git",
  },

  {
    id: 3,
    title: "Event  Management",
    desc: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Image: "https://i.ibb.co/r67JGTL/firebase.png",
    link: "https://contest-creation-platform.web.app/",
    githubClient:
      "https://github.com/programming-hero-web-course1/b8a12-client-side-coderemran6910.git",
    githubServer:
      "https://github.com/programming-hero-web-course1/b8a12-server-side-coderemran6910.git",
  },
  {
    id: 4,
    title: "Task  Management",
    desc: " lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    Image: "https://i.ibb.co/r67JGTL/firebase.png",
    link: "https://contest-creation-platform.web.app/",
    githubClient:
      "https://github.com/programming-hero-web-course1/b8a12-client-side-coderemran6910.git",
    githubServer:
      "https://github.com/programming-hero-web-course1/b8a12-server-side-coderemran6910.git",
  },
];

const SingleItem = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.Image} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }} >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link}>live site</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="portfolios">
        <div className="progress">
          <h1>My Portfolios</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
