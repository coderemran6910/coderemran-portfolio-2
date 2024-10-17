import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { FaCode } from "react-icons/fa6";




const items = [
  {
    id: 1,
    title: "Task  Management-(Team Project)",
    desc: " Projects & Tasks is a comprehensive tool that allows you to efficiently manage your projects and tasks. With a user-friendly interface, you can create, organize, and prioritize tasks effortlessly. Stay on top of deadlines and milestones by assigning tasks, setting due dates, and tracking progress. Whether you are working on a solo project or collaborating with a team, Projects & Tasks has got you covered. Keep everything organized and on track.",
    Image: "https://i.ibb.co/QPHjXR3/Task-Flow.png",
    link: "https://task-management-814.web.app/",
    githubClient: "https://github.com/reZerOR/task-management-project",
    githubServer: "https://github.com/reZerOR/task-management-project-server"
  },
  {
    id: 2,
    title: "Contest Management",
    desc: "Determine the kind of contest you want to create. Is it a design contest, a coding challenge, a writing competition, or something else entirely? Clarify the rules, guidelines, and objectives for participants. Target Audience: Identify your target participants.",
    Image:
      "https://i.ibb.co/NyMw7yt/screencapture-contest-creation-platform-web-app-2024-02-18-01-50-08.png",
    link: "https://contest-creation-platform.web.app",
    githubClient:
      "https://github.com/coderemran6910/contest-management-system",
    githubServer:
      "https://github.com/coderemran6910/contest-management-system-server",
  },

  {
    id: 3,
    title: "Rastaurent Management",
    desc: "a restaurant management system designed to streamline operations, manage orders, inventory, reservations, and more. Highlight the main features and functionalities.",
    Image:
      "https://i.ibb.co/NjHGV9G/screencapture-rastaurent-management-a-11-web-app-2024-02-18-01-51-40.png",
    link: "https://rastaurent-management-a-11.web.app",
    githubClient:
      "https://github.com/coderemran6910/Rastaurent-management-a11",
    githubServer:
      "https://github.com/coderemran6910/Rastaurent-management-a11-Server-Side",
  },

  {
    id: 4,
    title: "Event  Management System",
    desc: " Event Management System, You can start your Event Business with this Application, The Application help you very much like you can setup every event With time, money, size etc filter.",
    Image: "https://i.ibb.co/r67JGTL/firebase.png",
    link: "https://social-event-react-project.web.app",
    githubClient:
      "https://github.com/coderemran6910/Event-management-website-a-9",
    githubServer: "https://github.com/coderemran6910/Event-management-website-a-9",
  },
  {
    id: 5,
    title: "Game Shop ",
    desc: " Game Shop Like a E-commerce Website, You can buy and sell games with this Application, The Application help you very much like you can setup every game With game's Features, time, money, size etc filter.",
    Image:" https://i.ibb.co.com/4FQV7p7/screencapture-coderemran6910-github-io-gaming-responsive-website-2024-10-17-06-36-35.png",
    link: "https://coderemran6910.github.io/gaming-responsive-website/",
    githubClient:
      "https://github.com/coderemran6910/gaming-responsive-website",
    githubServer: "https://github.com/coderemran6910/gaming-responsive-website",
  },
 
  {
    id: 6,
    title: "Fruite Market",
    desc: " Fruite MArket ,This site is only frontend Design, This project is just Figma to HTML and CSS Project.",
    Image:"https://i.ibb.co.com/j5KV273/FRUIT-MARKET.png",
    link: "https://coderemran6910.github.io/fruits-market/",
    githubClient:"https://github.com/coderemran6910/fruits-market",
    githubServer: "https://github.com/coderemran6910/fruits-market",
  },
 
];

const SingleItem = ({ item }) => {
  const ref = useRef();

  //  Style For Paralax in TextContainer 
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["end end", "end start"],
  // });
  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className=" relative ">
      <div  style={{
      backgroundImage: `url('${item.Image}')`,
      backgroundPosition: "top",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
    }}>
        <div className="absolute inset-0 bg-purple-900 bg-opacity-60 flex items-center justify-center ">
          <div className="container">
            <div className="wrapper p-0 xl:p-10 ">
              <div
                className="imageContainer backdrop-blur-md cursor-pointer hidden lg:block "
                ref={ref}
              >
                <div
                  className="img"
                  style={{ backgroundImage: `url('${item.Image}')` }}
                ></div>
              </div>
              <div
                className="textContainer align-items-center lg:align-items-start pt-5 px-10 mt-40 lg:mt-0  rounded-xl   backdrop-blur-sm text-center lg:text-left"
              >
                <h2>{item.title}</h2>
                <p className="text-justify w-full h-52 overflow-auto ">{item.desc}</p>
                <button className="flex gap-2 items-center justify-center">
                  <CgWebsite className="text-2xl" />
                  <a target="_blank" rel="noreferrer" href={item.link}>live site</a>
                </button>
                <button className="flex gap-2 items-center justify-center">
                  <FaCode className="text-2xl" />
                  <a target="_blank" rel="noreferrer" href={item.githubClient}>Code Client </a>
                </button>
                <button className="flex gap-2 items-center justify-center">
                <FaLaptopCode className="text-2xl" />
                  <a target="_blank" rel="noreferrer" href={item.githubServer}>Code Server</a>
                </button>
              </div>
            </div>
          </div>
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
    <div className="portfolio " ref={ref}>
      <div className="portfolios" >
        <div className="progress z-50 bg-purple-950 p-5 ">
          <h1>My Portfolios</h1>
          <motion.div style={{ scaleX }} className="progressBar rounded-xl"></motion.div>
        </div>
        {items.map((item) => (
          <SingleItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
