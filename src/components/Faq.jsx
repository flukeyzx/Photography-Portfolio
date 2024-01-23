import styled from "styled-components";
import { About } from "../styles.js";
import Toggle from "./Toggles.jsx";

const Faq = () => {
  return (
    <Faqs>
      <h2>
        Any questions? <span>FAQ</span>
      </h2>

      <Toggle title="How do I start?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            repellat.
          </p>
        </div>
      </Toggle>

      <Toggle title="What products do you offer?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            repellat.
          </p>
        </div>
      </Toggle>

      <Toggle title="What are different payment methods?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            repellat.
          </p>
        </div>
      </Toggle>

      <Toggle title="What is daily schedule?">
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
            repellat.
          </p>
        </div>
      </Toggle>
    </Faqs>
  );
};

const Faqs = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background-color: white;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default Faq;
