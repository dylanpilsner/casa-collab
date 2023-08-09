import styled from "styled-components";

export const Div = styled.div<any>`
  position: fixed;
  top: 50%;
  color: white;
  right: 10%;
  left: 10%;
  /* bottom: 10%; */
  display: flex;
  background-color: #f5ac52;
  border-radius: 20px;
  font-size: 2rem;
  height: 450px;
  flex-direction: column;
  justify-content: right;
  align-items: end;
  padding: 20px;

  @media (min-width: 1020px) {
    font-size: 3rem;
  }
`;
