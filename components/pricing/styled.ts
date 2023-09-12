import styled from "styled-components";

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #d7d7d7;
  padding: 20px;
  border-radius: 20px;
  border-bottom: 4px solid #d6d7d6;
  border-left: 4px solid #d6d7d6;
  @media (max-width: 1020px) {
    padding: 5%;
    margin: 1rem 0.1rem;
  }
`;

export const CheckDiv = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(1, auto 1fr);
`;

export const PricingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1020px) {
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }
`;
