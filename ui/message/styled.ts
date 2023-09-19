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

// export const WarningContainer = styled.div`
//   height: 300px;
//   max-width: 90%;
//   background-color: white;
//   border-radius: 10px;
//   position: absolute;
//   margin: auto;
//   right: 0;
//   left: 0;
//   top: 0;
//   bottom: 0;
// `;

export const WarningContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 350px;
  max-height: 400px;
  border-width: 1px;
  border-color: rgba(219, 234, 254, 1);
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 1);
  padding: 3.5rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// 47375
