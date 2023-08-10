import styled, { keyframes } from "styled-components";

const showMessage = keyframes`
100%{
  top:110px;
}


  
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 90%;
  padding: 0 20px;
  background-color: #84d65a;
  border-radius: 5px;
  color: white;
  position: fixed;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);

  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }) => (className ? showMessage : "")};

  @media (min-width: 1020px) {
    width: 40%;
  }
`;
