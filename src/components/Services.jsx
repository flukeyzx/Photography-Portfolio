import clock from "../img/clock.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
import { About, Description, Image } from "../styles.js";
import styled from "styled-components";

const Services = () => {
  return (
    <Service>
      <Container>
        <div className="title">
          <h2>
            High <span>quality</span> services.
          </h2>
        </div>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Pro Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </Container>
      <Image>
        <img src={home2} alt="home" />
      </Image>
    </Service>
  );
};

const Service = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }

  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    display: block;
    h2 {
      text-align: center;
      margin-bottom: 4rem;
    }
    p {
      text-align: center;
    }
  }
`;

const Container = styled(Description)`
  @media (max-width: 1300px) {
    padding-right: 0;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1215px) {
    flex-wrap: wrap;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    padding: 1rem;
    background: white;
    color: black;
    cursor: pointer;
  }
  @media (max-width: 1215px) {
    flex: 1 0 50%;
    box-sizing: border-box;
    justify-content: center;
  }
`;
export default Services;
