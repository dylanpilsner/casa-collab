import { NavItem } from "@/ui/typography";
import {
  BackgroundNavMenu,
  StyledDesktopNavMenu,
  StyledNavMenu,
} from "./styled";

export function LandingDesktopNavMenu() {
  return (
    <StyledDesktopNavMenu gap="60px">
      <NavItem href="#features">Features</NavItem>
      <NavItem href="#pricing">Pricing</NavItem>
      <NavItem href="#social-medias">Social Medias</NavItem>
    </StyledDesktopNavMenu>
  );
}

export function NavMenu() {
  return (
    <BackgroundNavMenu>
      <StyledNavMenu>test</StyledNavMenu>
    </BackgroundNavMenu>
  );
}
