import { useEffect, useState } from "react";
import {
  LandingBurgerContainer,
  BurgerContainer,
  BurgerPiece,
  LandingBurgerPiece,
} from "./styled";

type Burger = {
  callback: () => void;
  menuStatus: "opened" | "closed";
};

export function LandingBurger({ callback, menuStatus }: Burger) {
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
    <LandingBurgerContainer
      onClick={handleClick}
      className={burgerStatus}
      width="37.5px"
      style={{ height: 26 }}
    >
      <LandingBurgerPiece className={burgerStatusTop} />
      <LandingBurgerPiece className={burgerStatusMiddle} />
      <LandingBurgerPiece className={burgerStatusBottom} />
    </LandingBurgerContainer>
  );
}
export function Burger({ callback, menuStatus }: any /*Burger*/) {
  function handleClick() {
    callback();
  }

  return (
    <BurgerContainer width="37.5px" style={{ height: 26, margin: "0 3rem" }}>
      <BurgerPiece />
      <BurgerPiece />
      <BurgerPiece />
    </BurgerContainer>
  );
}
