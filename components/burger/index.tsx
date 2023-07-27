import { useEffect, useState } from "react";
import { BurgerContainer, BurgerPiece } from "./styled";

type Burger = {
  callback: () => void;
  menuStatus: "opened" | "closed";
};

export function Burger({ callback, menuStatus }: Burger) {
  const [burgerStatus, setBurgerStatus] = useState("");
  const [burgerStatusTop, setBurgerStatusTop] = useState("");
  const [burgerStatusMiddle, setBurgerStatusMiddle] = useState("");
  const [burgerStatusBottom, setBurgerStatusBottom] = useState("");

  useEffect(() => {
    if (menuStatus === "opened") {
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
  }, [menuStatus]);

  function handleClick() {
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
