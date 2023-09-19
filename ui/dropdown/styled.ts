import styled from "styled-components";

type DropDown = {
  bottom?: string;
  gap?: string;
};

export const DropDown = styled.div<DropDown>`
  position: absolute;
  background-color: var(--default-white);
  min-width: 100%;
  padding: 10px;
  min-height: 50px;
  bottom: ${({ bottom }: any) => bottom ?? "initial"};
  gap: ${({ gap }: any) => gap ?? "initial"};
  z-index: 10;
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 4px;
  transition: var(--default-transition);

  &.opened {
    display: flex;
  }
`;
