import { Subtitle, Title } from "@/ui/typography";
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
          <Subtitle bg="#fff">
            Contactanos para obtener más información sobre nuestro servicio y
            cómo adquirirlo!
          </Subtitle>
        </TextContainer>
      </StyledModal>
    </StyledModalContainer>
  );
}
