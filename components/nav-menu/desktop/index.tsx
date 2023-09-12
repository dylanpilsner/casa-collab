import { Body, NavItem } from "@/ui/typography";
import { MenuContainer, StyledDesktopNavMenu, StyledNavMenu } from "./styled";
import { CloseNav } from "@/ui/icons/styled";
import { signOut } from "@/lib/api";
import { useRouter } from "next/router";
import { BackgroundModal } from "@/ui/background/styled";

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
  callback?: () => void;
};

export function NavMenu({ navStatus, callback }: navStatus) {
  const router = useRouter();

  async function logOut() {
    await signOut();
    if (callback) {
      callback();
    }
    router.push("/");
  }

  return (
    <BackgroundModal className={navStatus}>
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
