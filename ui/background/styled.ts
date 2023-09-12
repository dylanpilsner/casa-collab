import styled, { keyframes } from "styled-components";

const revealBackgroundOnMenu = keyframes`
  100%{
    display:initial;
    opacity:100%;
  }
`;
const hideBackgroundOnMenu = keyframes`
  0%{opacity:100%}

  100%{
    opacity:0%;
    display:none;
  }
`;

export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0%;
  background-color: rgb(0, 0, 0, 0.15);
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }: any) =>
    className === "opened"
      ? revealBackgroundOnMenu
      : className === "closed"
      ? hideBackgroundOnMenu
      : null};

  display: ${({ className }: any) =>
    className === "opened" ? "initial" : "none"};
`;
