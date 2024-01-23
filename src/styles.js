import styled from "styled-components";

//Styled Components.
export const About = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 90vh;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1215px) {
    display: block;
    text-align: center;
    button {
      margin-bottom: 5rem;
    }
  }
  @media (max-width: 768px) {
    font-size: 60%;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: 200;
  }
`;

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
