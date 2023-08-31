import { RowBox } from "@/ui/box/styled";
import { User } from "@/ui/typography";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  top: 0;
  position: sticky;
  z-index: 4;

  .scrolled {
    background-color: var(--main-orange);
  }

  @media (min-width: 869px) {
    position: relative;

    .scrolled {
      background-color: initial;
    }
  }
`;

export const HeaderContainer = styled(RowBox)`
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  z-index: 5;
  transition: 0.5s ease;

  @media (min-width: 869px) {
    padding: 0 30px;
  }
`;
