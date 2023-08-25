import { HeaderContainer, StyledHeader } from "./styled";
import { Logo } from "@/ui/logo";
import { Burger } from "../burger";
import { useEffect, useState } from "react";
import { NavMenu } from "../nav-menu/mobile";
import { MainButton, SecondaryButton } from "@/ui/buttons";
import { DesktopNavMenu } from "../nav-menu/desktop";
import { useRouter } from "next/router";
import { useHeader } from "@/lib/hooks";
import { LoggedInHeader, LoggedOutHeader } from "./headers";

export function Header() {
  const header = useHeader();

  return (
    // <StyledHeader>
    <StyledHeader>
      {header ? <LoggedInHeader /> : <LoggedOutHeader />}
    </StyledHeader>
    // </StyledHeader>
  );
}
