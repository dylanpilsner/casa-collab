import { NavItem } from "@/ui/typography";
import { StyledDesktopNavMenu } from "./styled";

export function DesktopNavMenu() {
  return (
    <StyledDesktopNavMenu gap="60px">
      <NavItem href="#features">Features</NavItem>
      <NavItem href="#pricing">Pricing</NavItem>
      <NavItem>Newsletter</NavItem>
    </StyledDesktopNavMenu>
  );
}
