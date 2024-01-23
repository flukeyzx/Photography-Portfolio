// import styled from "styled-components";
//framer motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";
import styled from "styled-components";

const Contact = () => {
  return (
    <ContactSection
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Get in touch.</h1>
      <ContactInfo>
        <ul>
          <li>Send us a Message.</li>
          <li>Send an Email.</li>
          <li>Social Media.</li>
        </ul>
      </ContactInfo>
    </ContactSection>
  );
};

const ContactSection = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 90vh;
  background: #fff;
  h1 {
    font-size: 3.6rem;
    font-weight: 400;
  }
`;

const ContactInfo = styled(motion.div)`
  padding: 5rem 5rem;
  font-size: 3.6rem;
  font-weight: 300;
  li {
    padding: 1rem;
  }
`;

export default Contact;
