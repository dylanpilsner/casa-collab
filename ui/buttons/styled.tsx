import styled from "styled-components";

type SecondaryButton = {
  width?: string;
  color?: string;
};

export const StyledMainButton = styled.button<SecondaryButton>`
  display: none;
  height: 60px;
  width: ${(props) => props.width ?? "100%"};
  /* width: 171px; */
  background: var(--main-orange);
  color: ${(props) => props.color ?? "var(--almost-black)"};
  border: none;
  border-radius: 5px;
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

export const StyledSecondaryButton = styled(StyledMainButton)`
  display: initial;
  background-color: var(--almost-black);
  color: #fff;
  height: 62px;
  &:hover {
    background-color: #393d3f;
  }
`;

// export const StyledSecondaryButton = styled(StyledMainButton)`
//   background-color: transparent;
//   /* border: 2.2px solid var(--almost-black); */
//   color: var(--english-walnut);
//   border-radius: 5px;

//   &:hover {
//     background-color: rgb(217, 217, 217, 0.5);
//     /* color: #fff; */
//   }
// `;
