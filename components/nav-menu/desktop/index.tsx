import { Body, NavItem } from "@/ui/typography";
import { MenuContainer, StyledDesktopNavMenu, StyledNavMenu } from "./styled";
import { CloseNav } from "@/ui/icons/styled";
import { signOut } from "@/utils";
import { useRouter } from "next/router";
import { BackgroundModal } from "@/ui/background/styled";
import { useEffect, useRef } from "react";
import { useFocus } from "@/lib/hooks";

export function LandingDesktopNavMenu() {
  return (
    <StyledDesktopNavMenu gap="60px">
      <NavItem href="#features">Features</NavItem>
      <NavItem href="#pricing">Pricing</NavItem>
      <NavItem href="#social-medias">Social Medias</NavItem>
    </StyledDesktopNavMenu>
  );
}

type navStatus = {
  navStatus: "opened" | "closed";
  callback: () => void;
};

export function NavMenu({ navStatus, callback }: navStatus) {
  const router = useRouter();
  const containerEl = useRef() as any;
  useFocus(containerEl.current, navStatus);

  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      callback();
    }
  }

  function logOut() {
    signOut();
    if (callback) {
      callback();
    }
    window.location.href = "/";
  }

  return (
    <BackgroundModal
      ref={containerEl}
      className={navStatus}
      tabIndex={0}
      onKeyUp={handleKeyUp}
    >
      <StyledNavMenu className={navStatus}>
        <MenuContainer>
          <CloseNav onClick={callback} />
          <Body
            style={{ marginTop: "90px", cursor: "pointer" }}
            bg="white"
            onClick={() => router.push("/me")}
          >
            Cuenta
          </Body>
          <Body style={{ cursor: "pointer" }} bg="white" onClick={logOut}>
            Cerrar sesión
          </Body>
        </MenuContainer>
      </StyledNavMenu>
    </BackgroundModal>
  );
}
