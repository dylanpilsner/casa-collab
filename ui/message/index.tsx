import { useEffect, useState } from "react";
import { Close, Success } from "../icons/styled";
import { Body } from "../typography";
import { MessageContainer } from "./styled";

type Message = {
  message: string;
  visible: boolean;
  onClose: () => void;
};

export function Message({ message, visible, onClose }: Message) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(visible);
    console.log(visible);
  }, [visible]);

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
