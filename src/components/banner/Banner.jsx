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
        <div className='banner text-center lg:text-left '>
           <div className="wrapper">
           <motion.div className="textContainer w-full lg:w-1/2 m-0 p-0 md:p-10 lg:m-10" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants} className=' text-lg md:text-3xl mt-4 md:mt-0  '>Hello, I'm Coder Emran</motion.h2>
                <motion.h1 variants={textVariants} className='text-6xl  xl:text-6xl mt-4 md:mt-0 px-5 lg:px-0 '>Frontend Developer and Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons w-full flex justify-center lg:justify-start items-center gap-5 ">
                    <motion.button className='w-40 text-sm m-0' variants={textVariants}>Download Resume</motion.button>
                    <motion.button className='w-40 text-sm m-0' variants={textVariants}>Contact me</motion.button>
                </motion.div>
                <motion.img className=" m-auto md:m-0 " variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
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