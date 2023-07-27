import { RowBox } from "@/ui/box/styled";
import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 140px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 4;
`;

export const HeaderContainer = styled(RowBox)`
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  z-index: 5;

  @media (min-width: 869px) {
    padding: 0 30px;
  }
`;
