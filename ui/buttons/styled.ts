import styled from "styled-components";
import { MainButton } from ".";

type Button = {
  width?: string;
  color?: string;
};

export const StyledMainButton = styled.button<Button>`
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
`;

export const StyledHeaderMainButton = styled(StyledMainButton)`
  display: none;

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

export const StyledDeclineButton = styled.button`
  width: 120px;
  height: 40px;
  cursor: pointer;
  background: red;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
  background: #e62222;
  font-family: var(--secondary-font);
  color: #eee;

  &:hover {
    background: #ff3636;
  }
`;

export const StyledAcceptButton = styled(StyledDeclineButton)`
  background-color: #14dd50;

  &:hover {
    background-color: #43e473;
  }
`;

export const StyledFirstOptionButton = styled.button`
  background-color: var(--main-orange);
  color: rgba(255, 255, 255, 1);
  border: none;
  display: inline-block;
  transition: all 0.15s ease;
  border-radius: 0.5rem;
  width: 100%;
  padding: 0.75rem 1.25rem;
  text-align: center;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 600;
  font-family: var(--secondary-font);
  cursor: pointer;

  &:hover {
    background-color: var(--secondary-orange);
  }
`;
export const StyledSecondOptionButton = styled(StyledFirstOptionButton)`
  margin-top: 0.5rem;
  background-color: rgba(249, 250, 251, 1);
  color: rgba(107, 114, 128, 1);

  &:hover {
    background-color: rgb(230, 231, 233);
  }
`;
