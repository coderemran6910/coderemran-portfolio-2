import './services.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IconContext } from 'react-icons';
import { FaLaptopCode, FaDesktop, FaGlobe, FaBox, FaPlug, FaMobileAlt, FaChrome, FaRocket, FaSearch, FaServer } from 'react-icons/fa';
import { useEffect } from 'react';


const servicesData = [
    {
      "name": "Custom Website Development",
      "description": "Develop fully customized websites tailored to your clients' specific requirements and preferences using React.js and other relevant technologies.",
      "color": "#007bff",
      "icon": FaLaptopCode
    },
    {
      "name": "Frontend Development",
      "description": "Specialize in frontend development, creating user interfaces and experiences that are intuitive, responsive, and visually appealing.",
      "color": "#28a745",
      "icon": FaDesktop
    },
    {
      "name": "Single Page Applications (SPAs)",
      "description": "Build dynamic SPAs using React.js to provide seamless navigation and enhanced user experience without page reloads.",
      "color": "#dc3545",
      "icon": FaGlobe
    },
    {
      "name": "Component Library Development",
      "description": "Create reusable component libraries to streamline development processes and maintain consistency across projects.",
      "color": "#ffc107",
      "icon": FaBox
    },
    {
      "name": "Integration with APIs",
      "description": "Integrate third-party APIs to add functionality such as payment gateways, social media integration, or data fetching from external sources.",
      "color": "#17a2b8",
      "icon": FaPlug
    },
    {
      "name": "Responsive Design",
      "description": "Ensure that websites are optimized for various devices and screen sizes, offering a consistent experience across desktops, tablets, and mobile devices.",
      "color": "#6610f2",
      "icon": FaMobileAlt
    },
    {
      "name": "Cross-browser Compatibility",
      "description": "Test and ensure compatibility with different web browsers to guarantee a consistent user experience for all visitors.",
      "color": "#6f42c1",
      "icon": FaChrome
    },
    {
      "name": "Performance Optimization",
      "description": "Optimize website performance by implementing techniques such as code splitting, lazy loading, and bundling to reduce load times and improve user satisfaction.",
      "color": "#20c997",
      "icon": FaRocket
    },
    {
      "name": "Deployment and Hosting",
      "description": "Assist clients with deploying their websites to production servers and recommend suitable hosting solutions based on their requirements.",
      "color": "#6c757d",
      "icon": FaServer
    }
  ]
  




  
  const Services = () => {
      const { ref, inView } = useInView();
      const controls = useAnimation();
  
      const containerVariants = {
          hidden: { opacity: 0, y: 500 },
          visible: {
              opacity: 1,
              y: 0,
              transition: {
                  type: 'spring',
                  stiffness: 120,
                  duration: 1.5
              }
          }
      };
  
      useEffect(() => {
          if (inView) {
              controls.start('visible');
          }
      }, [controls, inView]);
  
      return (
          <div className="services" ref={ref}>
              <div className="wrapper">
                  <motion.section className="services-container h-full lg:h-screen" variants={containerVariants} initial="hidden" animate={controls}>
                      {servicesData.map((item) => (
                        
                          <motion.div className="service w-full lg:w-1/3 p-4 h-screen lg:h-1/3" key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                             
                              <div className="icon text-center lg:text-left">
                              <IconContext.Provider value={{ size: '3em' }}>
                                  <item.icon color={item.color} /> {/* Rendering the icon dynamically */}
                              </IconContext.Provider>
                              </div>
                              <h2 className='font-bold text-3xl '>{item.name}</h2>
                              <p>{item.description}</p>
                              
                          </motion.div>
                        
                      ))}
                  </motion.section>
              </div>
          </div>
      );
  };
  
  export default Services;
  