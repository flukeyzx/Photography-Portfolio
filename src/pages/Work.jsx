import styled from "styled-components";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//framer motion
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  animText,
  imgAnim,
  lineAnim,
} from "../animations";

const Work = () => {
  return (
    <StyledWork
      style={{ background: "#fff" }}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>

      <Movie>
        <motion.h2 variants={animText} initial="hidden" animate="show">
          Athlete
        </motion.h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
        ></motion.div>
        <Link>
          <Hide>
            <motion.img
              variants={imgAnim}
              initial="hidden"
              animate="show"
              src={athlete}
              alt="athlete"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={animText} initial="hidden" animate="show">
          The Racer
        </motion.h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
        ></motion.div>
        <Link>
          <motion.img
            variants={imgAnim}
            initial="hidden"
            animate="show"
            src={theracer}
            alt="theracer"
          />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={animText} initial="hidden" animate="show">
          Good Times
        </motion.h2>
        <div className="line"></div>
        <Link>
          <motion.img
            variants={imgAnim}
            initial="hidden"
            animate="show"
            src={goodtimes}
            alt="goodtimes"
          />
        </Link>
      </Movie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
    font-weight: 300;
    font-size: 3rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 14%;
  left: 0;
  background: #189cc2;
  width: 100%;
  height: 100vh;
  @media (max-width: 1700px) {
    top: 8%;
  }
  @media (max-width: 768px) {
    top: 5%;
  }
`;

const Frame2 = styled(Frame1)`
  background: #cc2677;
`;

const Frame3 = styled(Frame1)`
  background: #f9eb7f;
`;

const Frame4 = styled(Frame1)`
  background: #f97821;
`;

const Frame5 = styled(Frame1)`
  background: #21f9b8;
`;

export default Work;
