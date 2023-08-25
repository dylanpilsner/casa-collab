import { ColumnBox, RowBox } from "@/ui/box/styled";
import styled, { keyframes } from "styled-components";

const showsUp = keyframes`
  100%{
    right:0;
  }
`;
const disappears = keyframes`
0%{
  right:0;
}
  100%{
    right:-25%;
  }
`;

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

export const StyledDesktopNavMenu = styled(RowBox)`
  display: none;
  @media (min-width: 869px) {
    display: flex;
  }
`;

export const StyledNavMenu = styled.nav`
  display: flex;
  /* justify-content: flex-start; */
  min-width: 320px;
  /* width: 25%; */
  height: 100%;
  padding: 20px;
  position: fixed;
  /* right: 0; */
  right: -25%;
  top: 0;
  z-index: 4;
  color: var(--default-white);
  border-radius: 15px 0 0px 15px;
  background-color: var(--almost-black);
  box-shadow: 0 2px 10px black;

  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }: any) =>
    className === "opened"
      ? showsUp
      : className === "closed"
      ? disappears
      : null};
  /* animation-name: ${showsUp}; */
  /* animation-name: ${disappears}; */
`;

export const BackgroundNavMenu = styled.div`
  position: fixed;
  top: 0;
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
