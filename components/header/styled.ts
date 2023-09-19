import { RowBox } from "@/ui/box/styled";
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

export const RightSectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 1020px) {
    gap: 30px;
  }
`;

export const FunctionContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Notifications = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  position: absolute;
  border-radius: 50%;
  font-family: var(--main-font);
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 5px;
`;
