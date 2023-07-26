import { useState } from "react";
import { BurgerContainer, BurgerPiece } from "./styled";

type Burger = {
  callback: () => void;
};

export function Burger({ callback }: Burger) {
  const [burgerStatus, setBurgerStatus] = useState("");
  const [burgerStatusTop, setBurgerStatusTop] = useState("");
  const [burgerStatusMiddle, setBurgerStatusMiddle] = useState("");
  const [burgerStatusBottom, setBurgerStatusBottom] = useState("");

  function handleClick() {
    if (!burgerStatus) {
      setBurgerStatus("opened");
      setBurgerStatusTop("top-opened");
      setBurgerStatusMiddle("middle-opened");
      setBurgerStatusBottom("bottom-opened");
    } else {
      setBurgerStatus("");
      setBurgerStatusTop("top-closed");
      setBurgerStatusMiddle("middle-closed");
      setBurgerStatusBottom("bottom-closed");
    }
    callback();
  }

  return (
    <BurgerContainer
      onClick={handleClick}
      className={burgerStatus}
      width="37.5px"
      style={{ height: 26 }}
    >
      <BurgerPiece className={burgerStatusTop} />
      <BurgerPiece className={burgerStatusMiddle} />
      <BurgerPiece className={burgerStatusBottom} />
    </BurgerContainer>
  );
}
