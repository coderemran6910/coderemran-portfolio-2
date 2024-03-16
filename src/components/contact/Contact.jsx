import { useRef } from "react";
import "./contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from '@emailjs/browser';


const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
};


  




const Contact = () => {


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm( import.meta.env.VITE_SOPPORT_SERVICE_ID,
        import.meta.env.VITE_SOPPORT_TEMPLATE_ID, ref.current, {
        publicKey:  import.meta.env.VITE_SOPPORT_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




    const ref = useRef(null);
    const isInView = useInView(ref, { mergin: "-100px" });
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="wrapper" variants={variants}>
        <motion.div className="textContainer" variants={variants}>
          <motion.h1 variants={variants}>Get in touch</motion.h1>
          <motion.p variants={variants}>
            Feel free to contact me for any work or suggestions below
          </motion.p>

          <motion.div className="social" variants={variants}>
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
          </motion.div>
        </motion.div>

        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 1, duration: 2 }}
          >
            <motion.svg
              fill="#000000"
              initial={{pathLength: 0}}
              animate={isInView && {pathLength: 1}}
              transition={{duration: 3}}
              width="400px"
              height="400px"
              viewBox="0 0 64 64"
              version="1.1"
            >
              <g id="_x32_5_attachment" />

              <g id="_x32_4_office" />
              <g id="_x32_3_pin" />

              <g id="_x32_2_business_card" />

              <g id="_x32_1_form" />

              <g id="_x32_0_headset" />

              <g id="_x31_9_video_call" />

              <g id="_x31_8_letter_box" />

              <g id="_x31_7_papperplane" />

              <g id="_x31_6_laptop" />

              <g id="_x31_5_connection" />

              <g id="_x31_4_phonebook" />

              <g id="_x31_3_classic_telephone" />

              <g id="_x31_2_sending_mail" />

              <g id="_x31_1_man_talking" />

              <g id="_x31_0_date" />

              <g id="_x30_9_review" />

              <g id="_x30_8_email" />

              <g id="_x30_7_information" />

              <g id="_x30_6_phone_talking">
                <g>
                  <g>
                    <path d="M37.063,18.062h-0.0596c-0.5522,0-0.9702,0.4478-0.9702,1s0.4775,1,1.0298,1s1-0.4478,1-1S37.6152,18.062,37.063,18.062z     " />

                    <path d="M45.1787,18.062H45.123c-0.5522,0-0.9722,0.4478-0.9722,1s0.4756,1,1.0278,1s1-0.4478,1-1S45.731,18.062,45.1787,18.062z     " />

                    <path d="M53.2983,18.062h-0.0596c-0.5522,0-0.9702,0.4478-0.9702,1s0.4775,1,1.0298,1s1-0.4478,1-1     S53.8506,18.062,53.2983,18.062z" />

                    <path d="M45.1953,45.9268c-5.1489-2.9038-6.6909-2.6665-10.6172-0.4468c-2.0146,1.3389-4.4404,0.5225-8.6563-2.9111     c-0.8276-0.6743-1.6592-1.4263-2.4688-2.2319c-0.8091-0.8125-1.5605-1.644-2.2344-2.4722     c-3.1782-3.8999-4.0435-7.459-3.0112-8.5317c3.042-3.271,2.3516-5.957-0.3335-10.7173c-1.6172-3.0591-3.3931-6.104-5.7568-6.8027     c-1.7139-0.5034-4.2588,0.8154-5.0166,1.3184c-1.9492,1.2983-3.8003,3.5947-4.8311,5.9937     c-1.896,4.4136-1.3931,9.7329-0.29,13.2397c1.812,5.749,6.1611,12.4063,11.6348,17.8086     c5.4043,5.4761,12.0615,9.8242,17.8081,11.6313c1.8154,0.5728,4.1167,0.9844,6.5283,0.9844c2.2437,0,4.583-0.3564,6.7124-1.271     c2.3989-1.0327,4.6938-2.8838,5.9888-4.8306c0.5039-0.7554,1.8276-3.2998,1.3184-5.021     C51.2754,49.3071,48.2305,47.5308,45.1953,45.9268z M44.2368,47.6821c1.8521,0.979,5.2998,2.8018,5.8149,4.5513     c0.1056,0.3564-0.0228,1.0059-0.2598,1.681l-13.5292-7.089C38.8073,45.4165,39.8377,45.2009,44.2368,47.6821z M11.5513,13.7314     c1.7524,0.5181,3.5752,3.9663,4.5674,5.8428c2.6213,4.647,2.613,6.1134,0.9274,8.0579L9.748,14.0356     c0.556-0.2056,1.1049-0.3412,1.499-0.3412C11.3633,13.6943,11.4658,13.7061,11.5513,13.7314z M43.873,59.6807     c-3.9175,1.6836-8.8311,1.1694-11.8501,0.2163c-5.4517-1.7144-11.8032-5.8765-16.9897-11.1328     c-0.0034-0.0034-0.0063-0.0063-0.0098-0.0098C9.7695,43.5698,5.606,37.2178,3.8872,31.7642     c-0.9497-3.0195-1.4619-7.9346,0.2202-11.8501c0.8441-1.9645,2.3123-3.8291,3.8699-4.948l7.923,14.7618     c-0.4362,2.3732,0.9189,5.9038,3.7676,9.4001c0.7153,0.8789,1.5122,1.7607,2.3711,2.623     c0.8594,0.856,1.7407,1.6528,2.6196,2.3687c3.0879,2.5153,6.3303,4.6262,9.3667,3.7915l14.8708,7.792     C47.7888,57.3002,45.8823,58.816,43.873,59.6807z" />

                    <path d="M60.9551,10.771C56.3843,2.0591,45.5757-1.3105,36.8604,3.2568l-0.0005,0.0005     c-8.7119,4.5723-12.0825,15.3813-7.5137,24.0952c0.3311,0.6313,0.709,1.2549,1.1274,1.8613l-2.7012,4.6299     c-0.1885,0.3228-0.1812,0.7241,0.0195,1.0396c0.1997,0.3159,0.5596,0.4912,0.9321,0.4604l7.75-0.6851     c2.7095,1.5068,5.6899,2.2627,8.6748,2.2627c2.8374,0,5.6787-0.6836,8.293-2.0552     C62.1543,30.2944,65.5249,19.4854,60.9551,10.771z M52.5127,33.0952c-4.8472,2.543-10.5723,2.4214-15.3154-0.3252     c-0.1523-0.0884-0.3257-0.1348-0.501-0.1348c-0.0293,0-0.0586,0.0015-0.0879,0.0039l-6.1338,0.542l2.0532-3.519     c0.2017-0.3462,0.1777-0.7793-0.0615-1.1006c-0.5132-0.6899-0.9668-1.4092-1.3486-2.1377     c-4.0571-7.7373-1.0645-17.3354,6.6719-21.396l-0.0005,0.0005c7.7378-4.0581,17.3354-1.0635,21.395,6.6719     C63.2417,19.438,60.2485,29.0356,52.5127,33.0952z" />
                  </g>
                </g>
              </g>

              <g id="_x30_5_women_talking" />

              <g id="_x30_4_calling" />

              <g id="_x30_3_women" />

              <g id="_x30_2_writing" />

              <g id="_x30_1_chatting" />
            </motion.svg>
          </motion.div>

          <motion.form
           onSubmit={sendEmail}
           ref={ref}
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay:3 , duration: 1 }}
          >
            <input required type="text" placeholder="Name" name="user_name" />
            <input required type="email" placeholder="Email" name="user_email" />
            <textarea rows="8" placeholder="message" name="message" />
            <button type="submit">Send</button>
          </motion.form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
