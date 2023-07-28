import styled from "styled-components";

export const StyledMainButton = styled.button`
  display: none;
  height: 60px;
  width: 171px;
  background: var(--main-orange);
  color: var(--almost-black);
  border: none;
  border-radius: 10px;
  font-family: var(--main-font);
  font-weight: 600;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: var(--orange-subtone);
  }

  @media (min-width: 869px) {
    display: initial;
  }
`;

export const StyledCallButton = styled(StyledMainButton)`
  display: initial;
  background-color: var(--almost-black);
  color: #fff;
  height: 62px;
  width: 250px;

  &:hover {
    background-color: #393d3f;
  }
`;
