import styled from "styled-components";

export const DropDown = styled.div`
  position: absolute;
  /* background-color: white; */
  /* background-color: var(--cooper); */
  background-color: var(--default-white);
  width: 100%;
  min-height: 50px;
  bottom: -47px;
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--default-transition);

  &.opened {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
