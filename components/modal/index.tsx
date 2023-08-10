import { SubTitle, Title } from "@/ui/typography";
import { StyledModal, StyledModalContainer, TextContainer } from "./styled";
import { Close } from "@/ui/icons/styled";

export function Modal({ winStatus, closeModal }: any) {
  function handleCloseModal() {
    closeModal();
  }

  const isVisible = winStatus ? "inherit" : "none";

  return (
    <StyledModalContainer style={{ display: isVisible }}>
      <StyledModal>
        <Close onClick={handleCloseModal} />
        <TextContainer>
          <SubTitle bg="#fff">
            Contactanos para obtener más información sobre nuestro servicio y
            cómo adquirirlo!
          </SubTitle>
        </TextContainer>
      </StyledModal>
    </StyledModalContainer>
  );
}
