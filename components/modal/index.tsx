import { StrongLargeText } from "@/ui/typography";
import { StyledModal, StyledModalContainer, TextContainer } from "./styled";
import { Close } from "@/ui/icons/styled";

type Modal = {
  winStatus: boolean;
  closeModal: () => void;
};

export function Modal({ winStatus, closeModal }: Modal) {
  function handleCloseModal() {
    closeModal();
  }

  const isVisible = winStatus ? "inherit" : "none";

  return (
    <StyledModalContainer style={{ display: isVisible }}>
      <StyledModal>
        <Close onClick={handleCloseModal} />
        <TextContainer>
          <StrongLargeText bg="#fff">
            Contactanos para obtener más información sobre nuestro servicio y
            cómo adquirirlo!
          </StrongLargeText>
        </TextContainer>
      </StyledModal>
    </StyledModalContainer>
  );
}
