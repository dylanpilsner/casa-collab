import { SubTitle, Title } from "@/ui/typography";
import { StyledModal, StyledModalContainer, TextContainer } from "./styled";
import { Close } from "@/ui/icons/styled";
import { useEffect, useState } from "react";
import { usePricingModal } from "@/lib/hooks";

export function Modal({ winStatus, closeModal }: any) {
  function handleCloseModal() {
    closeModal();
  }

  return (
    <StyledModalContainer style={{ display: winStatus ? "inherit" : "none" }}>
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
