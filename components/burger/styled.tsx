import styled, { keyframes } from "styled-components";
import { ColumnBox } from "@/ui/box/styled";

const openedXTop = keyframes`
  100%{
    transform:translateY(1px) rotate(-50deg)
  }
`;

const openedXBot = keyframes`
100%{
  transform:translateY(-3px) rotate(50deg);
}
`;

const openedXMid = keyframes`
  100%{
    transform:translateX(-100px);
  opacity:0;
  }
`;

const closedXTop = keyframes`
0%{
transform: translateY(1px) rotate(-50deg)
}
  100%{
    transform:translateY(0px) rotate(0deg)
  }
`;

const closedXBot = keyframes`
0%{
transform:translateY(-3px) rotate(50deg);
}
100%{
  transform:translateY(0px) rotate(0deg);
}
`;

const closedXMid = keyframes`
  0%{
    transform:translateX(-100px);
    opacity:0;
  }
  100%{
    transform:translateX(0px);
    opacity:100%;
  }
`;

export const BurgerContainer = styled(ColumnBox)`
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  gap: ${({ className }) => (className === "opened" ? 0 : "10px")};

  @media (min-width: 869px) {
    display: none;
  }
`;

function defineClassName(className: any) {
  if (className === "top-opened") {
    return openedXTop;
  }
  if (className === "middle-opened") {
    return openedXMid;
  }
  if (className === "bottom-opened") {
    return openedXBot;
  }
  if (className === "top-closed") {
    return closedXTop;
  }
  if (className === "middle-closed") {
    return closedXMid;
  }
  if (className === "bottom-closed") {
    return closedXBot;
  }
}

export const BurgerPiece = styled.div`
  background-color: var(--off-nav);
  height: 2px;
  width: 100%;
  animation-duration: 0.3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }) => defineClassName(className)};
`;
