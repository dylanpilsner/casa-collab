import { RowBox } from "@/ui/box/styled";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 4;
  .scrolled {
    background-color: var(--main-orange);
  }
`;

export const HeaderContainer = styled(RowBox)`
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  z-index: 5;
  transition: 0.5s ease;

  /* background-color: rgb(245, 171, 81); */
  @media (min-width: 869px) {
    padding: 0 30px;
  }
`;
