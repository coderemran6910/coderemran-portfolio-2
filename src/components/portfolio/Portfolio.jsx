import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Contest Management",
    desc: "Determine the kind of contest you want to create. Is it a design contest, a coding challenge, a writing competition, or something else entirely? Clarify the rules, guidelines, and objectives for participants. Target Audience: Identify your target participants.",
    Image:
    "https://i.ibb.co/NyMw7yt/screencapture-contest-creation-platform-web-app-2024-02-18-01-50-08.png",
    link: "https://rastaurent-management-a-11.web.app",
    githubClient:
    "https://github.com/programming-hero-web-course1/b8a12-client-side-coderemran6910.git",
    githubServer:
    "https://github.com/programming-hero-web-course1/b8a12-server-side-coderemran6910.git",
  },

  {
    id: 2,
    title: "Rastaurent Management",
    desc: "a restaurant management system designed to streamline operations, manage orders, inventory, reservations, and more. Highlight the main features and functionalities.",
    Image:
      "https://i.ibb.co/NjHGV9G/screencapture-rastaurent-management-a-11-web-app-2024-02-18-01-51-40.png",
    link: "https://rastaurent-management-a-11.web.app",
    githubClient:
      "https://github.com/coderemran6910/Rastaurent-management-a11.git",
    githubServer:
      "https://github.com/coderemran6910/Rastaurent-management-a11-Server-Side.git",
  },

  {
    id: 3,
    title: "Event  Management",
    desc: " Event Management System, You can start your Event Business with this Application, The Application help you very much like you can setup every event With time, money, size etc filter.",
    Image: "https://i.ibb.co/r67JGTL/firebase.png",
    link: "https://social-event-react-project.web.app",
    githubClient:
      "https://github.com/coderemran6910/Event-management-website-a-9",
    githubServer: "#",
  },
  {
    id: 4,
    title: "Task  Management",
    desc: " Projects & Tasks is a comprehensive tool that allows you to efficiently manage your projects and tasks. With a user-friendly interface, you can create, organize, and prioritize tasks effortlessly. Stay on top of deadlines and milestones by assigning tasks, setting due dates, and tracking progress. Whether you are working on a solo project or collaborating with a team, Projects & Tasks has got you covered. Keep everything organized and on track.",
    Image: "https://i.ibb.co/QPHjXR3/Task-Flow.png",
    link: "https://contest-creation-platform.web.app/",
    githubClient: "https://github.com/reZerOR/task-management-project.git",
    githubServer:
      "https://github.com/reZerOR/task-management-project-server.git",
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
            <div className="img" style={{ backgroundImage: `url('${item.Image}')` }}>
            </div>
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>
              <a href={item.link}>live site</a>
            </button>
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
