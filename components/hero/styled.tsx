import styled from "styled-components";

export const HeroContainer = styled.section`
  /* display:flex; */
  width: 100%;
  height: 100%;
  position: relative;
  /* max-height: 700px; */
`;

export const Content = styled.div`
  position: absolute;
  top: 10%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 0 20px;

  @media (min-width: 1020px) {
    padding: 0 70px;
  }
`;
