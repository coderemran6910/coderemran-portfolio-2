import './banner.scss'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const myResume ='https://drive.google.com/file/d/1S0ZAakVU6G_8jMZkVbP-sPjkyeIk1Q5S/view?usp=sharing'
const textVariants = {
    initial:{
        x:-500,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    },
    scrollButton:{
        opacity:0,
        y: 10,
        transition:{
            duration:2,
            repeat: Infinity 
        }
    }
}
const sliderVariants = {
    initial:{
        x:0,
    },
    animate:{
        x:'-220%',
        transition:{
            repeat: Infinity,
            repeatType:'mirror',
            duration:20,
            staggerChildren:0.1
        },
    },
}


const Banner = () => {
    return (
        <div id='home' className='banner text-center lg:text-left '>
           <div className="wrapper">
           <motion.div className="textContainer w-full lg:w-1/2 m-0 p-0 md:p-10 lg:m-10" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants} className=' text-lg md:text-3xl mt-4 md:mt-0  '>Hello, I'm Coder Emran</motion.h2>
                <motion.h1 variants={textVariants} className='text-6xl  xl:text-6xl mt-4 md:mt-0 px-5 lg:px-0 '>Frontend Developer and Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons w-full flex justify-center lg:justify-start items-center gap-5 ">
                <a href={myResume} target="_blank" rel="noreferrer" download="Akramul Hoque Resume.pdf" > 
                    <motion.button className='w-40 text-sm m-0' variants={textVariants}>Download Resume</motion.button>
                </a>
                   <a href="#contact">
                   <motion.button className='w-40 text-sm m-0' variants={textVariants}>Contact me</motion.button>
                   </a>
                </motion.div>


                <Link  to="contact" smooth={true}  duration={2000} spy={true} hashSpy={true}  delay={500}  isDynamic={true} >
                <motion.img className=" m-auto md:m-0 cursor-pointer " variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll btn" />
                </Link>

                
            </motion.div>
           </div>
           <motion.div className="slidingTextContainer text-5xl" variants={sliderVariants} initial="initial" animate="animate">
                React JS, Next JS, Node JS, HTML, CSS
           </motion.div>

            <div className='imageContainer hidden lg:block w-1/3 md:w-5/12   '>
                <img src="/banner.png" alt="banner"  />
            </div>
        </div>
    );
};

export default Banner;