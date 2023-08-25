import { ColumnBox } from "@/ui/box/styled";
import styled, { keyframes } from "styled-components";

const showsUp = keyframes`
  100%{
    top:0px;
  }
`;
const disappears = keyframes`
0%{
  top:0;
}
  100%{
    top:-2000px;
  }
`;

export const StyledNavMenu = styled(ColumnBox).attrs({ as: "nav" })`
  height: 100%;
  background-color: #fff;
  position: fixed;
  top: 0;
  top: -2000px;
  z-index: 3;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }) =>
    className === "closed"
      ? disappears
      : className === "opened"
      ? showsUp
      : ""};

  @media (min-width: 869px) {
    display: none;
  }
`;
