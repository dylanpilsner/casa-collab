import { CloseButton, StyledModal, StyledModalContainer } from "./styled";

export function Modal() {
  return (
    <StyledModalContainer>
      <StyledModal>
        <CloseButton></CloseButton>
      </StyledModal>
    </StyledModalContainer>
  );
}
