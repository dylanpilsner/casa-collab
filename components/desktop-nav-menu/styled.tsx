import { RowBox } from "@/ui/box/styled";
import styled from "styled-components";

export const StyledDesktopNavMenu = styled(RowBox)`
  display: none;
  @media (min-width: 869px) {
    display: flex;
  }
`;
