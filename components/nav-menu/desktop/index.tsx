import { NavItem } from "@/ui/typography";
import {
  BackgroundNavMenu,
  StyledDesktopNavMenu,
  StyledNavMenu,
} from "./styled";
import { CloseNav } from "@/ui/icons/styled";

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
  return (
    <BackgroundNavMenu className={navStatus}>
      <StyledNavMenu className={navStatus}>
        <CloseNav onClick={callback} />
      </StyledNavMenu>
    </BackgroundNavMenu>
  );
}
