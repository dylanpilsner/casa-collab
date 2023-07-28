import styled from "styled-components";

export const HeroContainer = styled.section`
  /* display:flex; */
  width: 100%;
  height: 100%;
  position: relative;
  margin-bottom: 80px;
  @media (min-width: 490px) {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  flex-direction: column;
  align-items: center;

  padding: 0 20px;

  @media (min-width: 1020px) {
    padding: 0 70px;
  }

  @media (min-width: 700px) {
    flex-direction: row;
  }
`;

export const HeroImg = styled.img`
  width: 350px;
  place-self: start;
  align-self: center;

  @media (min-width: 769px) {
    width: 500px;
  }
  @media (min-width: 1020px) and (min-height: 900px) {
    width: 700px;
  }
`;

export const TopMask = styled.img`
  position: absolute;
  width: 100%;
  top: -400px;
  left: -100px;
  transform: translateY(50px) rotate(12deg);
`;
export const BottomMask = styled.img`
  width: 100%;
  position: absolute;
  bottom: 100px;
  left: -50px;

  @media (min-width: 1020px) {
    bottom: -50px;
  }
`;
