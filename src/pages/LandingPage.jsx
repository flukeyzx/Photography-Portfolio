import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import Faq from "../components/Faq";
//framer motion.
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const LandingPage = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutUs />
      <Services />
      <Faq />
    </motion.div>
  );
};

export default LandingPage;
