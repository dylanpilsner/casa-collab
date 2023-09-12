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
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
