import { RowBox } from "@/ui/box/styled";
import { HeaderContainer, StyledHeader } from "./styled";
import { Logo } from "@/ui/logo";
import { Burger } from "../burger";
import { useState } from "react";
import { NavMenu } from "../mobile-nav-menu";
import { MainButton } from "@/ui/buttons";
import { DesktopNavMenu } from "../desktop-nav-menu";

export function Header() {
  const [navMenuStatus, setNavMenuStatus] = useState("") as any;

  function toggleNavMenu() {
    if (navMenuStatus === "closed" || navMenuStatus === "") {
      setNavMenuStatus("opened");
    } else {
      setNavMenuStatus("closed");
    }
  }

  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Burger callback={toggleNavMenu} menuStatus={navMenuStatus} />
        <DesktopNavMenu />
        <MainButton text="Contacto" />
      </HeaderContainer>
      <NavMenu status={navMenuStatus} />
    </StyledHeader>
  );
}
