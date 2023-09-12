import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-family: var(--main-font);
  @media (max-width: 1020px) {
    padding: 0 1%;
  }
`;

export const FirstContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  text-align: center;
  margin-top: 4rem;
  @media (max-width: 1020px) {
    grid-template-columns: none;
    grid-template-rows: repeat(3, 1fr);
  }
`;
