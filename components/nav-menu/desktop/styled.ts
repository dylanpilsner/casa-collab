import { RowBox } from "@/ui/box/styled";
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

export const StyledDesktopNavMenu = styled(RowBox)`
  display: none;
  @media (min-width: 869px) {
    display: flex;
  }
`;

export const StyledNavMenu = styled.nav`
  display: flex;
  min-width: 320px;
  height: 100%;
  padding: 20px;
  position: fixed;
  right: -25%;
  top: 0;
  z-index: 4;
  color: var(--default-white);
  border-radius: 15px 0 0px 15px;
  background-color: var(--almost-black);
  box-shadow: 0 2px 10px black;

  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
  animation-name: ${({ className }: any) =>
    className === "opened"
      ? showsUp
      : className === "closed"
      ? disappears
      : null};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
