import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles.js";
//Framer Motion.
import { motion } from "framer-motion";
import { animText, container } from "../animations";

const AboutUs = () => {
  return (
    <About>
      <Description>
        <motion.div variants={container} initial="hidden" animate="show">
          <Hide>
            <motion.h2 variants={animText}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={animText}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={animText}>true.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have the professionals with amazing skills to help you.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="a man with the camera." />
      </Image>
    </About>
  );
};

export default AboutUs;
