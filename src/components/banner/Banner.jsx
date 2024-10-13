import './banner.scss'
import {motion} from 'framer-motion'
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
        <div className='banner text-center md:text-left '>
           <div className="wrapper">
           <motion.div className="textContainer w-full md:w-1/2 m-0 md:m-10" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants} className=' text-2xl md:text-3xl mt-4 md:mt-0  '>Hello, I'm Coder Emran</motion.h2>
                <motion.h1 variants={textVariants}>Frontend Developer and Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>Download Resume</motion.button>
                    <motion.button variants={textVariants}>Contact me</motion.button>
                </motion.div>
                <motion.img className=" m-auto md:m-0 " variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
            </motion.div>
           </div>
           <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
                React JS, Next JS, Node JS, HTML, CSS
           </motion.div>

            <div className='imageContainer hidden md:block w-1/3 h-fit   '>
                <img src="/banner.png" alt="banner"  />
            </div>
        </div>
    );
};

export default Banner;