import { useEffect, useState } from "react";
import { Close } from "../icons/styled";
import { Body, BodyApp, StrongLargeText, Subtitle } from "../typography";
import { ButtonsContainer, MessageContainer, WarningContainer } from "./styled";
import { BackgroundModal } from "../background/styled";
import {
  AcceptButton,
  DeclineButton,
  FirstOptionButton,
  SecondOptionButton,
} from "../buttons";
import {
  StyledFirstOptionButton,
  StyledSecondOptionButton,
} from "../buttons/styled";
import { useModal, useVisibility } from "@/lib/hooks";

type Message = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export function Message({ message, visible, onClose }: Message) {
  const [isVisible, setIsVisible] = useState(false);
  useVisibility(visible, setIsVisible);

  function handleCloseMessage() {
    onClose();
  }

  return (
    <MessageContainer className={isVisible ? "showMessage" : ""}>
      <Body align="center" style={{ width: "100%" }}>
        {message}
      </Body>

      <Close
        style={{
          height: "1.7rem",
          alignSelf: "center",
          justifySelf: "end",
          placeSelf: "center",
        }}
        onClick={handleCloseMessage}
      />
    </MessageContainer>
  );
}

type Alert = {
  visible: boolean;
  message: string;
  title: string;
  onClose: () => void;
  firstCallback?: () => Promise<void>;
  secondCallback?: () => void;
};

export function AlertMessage({
  visible,
  message,
  onClose,
  firstCallback,
  title,
}: Alert) {
  const [isVisible, setIsVisible] = useState(false);

  const { closeModal } = useModal(visible, setIsVisible);

  function handleFirstOption() {
    if (firstCallback) {
      firstCallback();
    }
    onClose();
    closeModal();
  }
  function handleSecondOption() {
    onClose();
    closeModal();
  }

  return (
    <BackgroundModal className={isVisible ? "opened" : "closed"}>
      <WarningContainer className="card">
        <StrongLargeText align="center">{title}</StrongLargeText>

        <BodyApp align="center">{message}</BodyApp>

        <ButtonsContainer>
          <SecondOptionButton
            callback={handleFirstOption}
            text="Eliminar amigo"
          />
          <FirstOptionButton callback={handleSecondOption} text="Cancelar" />
        </ButtonsContainer>
      </WarningContainer>
    </BackgroundModal>
  );
}
