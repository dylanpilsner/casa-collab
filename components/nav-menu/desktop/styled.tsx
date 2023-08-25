import { ColumnBox, RowBox } from "@/ui/box/styled";
import styled from "styled-components";

export const StyledDesktopNavMenu = styled(RowBox)`
  display: none;
  @media (min-width: 869px) {
    display: flex;
  }
`;

export const StyledNavMenu = styled.div`
  display: flex;
  /* justify-content: flex-start; */
  color: var(--default-white);
  padding: 20px;
  width: 30%;
  height: 100%;
  background-color: var(--almost-black);
  border-radius: 10px;
  border-radius: 15px 0 0px 15px;
  /* border: 100px red solid; */
  position: fixed;
  right: 0;
  top: 0px;
  z-index: 1000;
`;

export const BackgroundNavMenu = styled.div`
  position: fixed;
  top: 0;
  z-index: 2000;
  bottom: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.4);
`;
