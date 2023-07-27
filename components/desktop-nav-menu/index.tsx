import { NavItem } from "@/ui/typography";
import { StyledDesktopNavMenu } from "./styled";

export function DesktopNavMenu() {
  return (
    <StyledDesktopNavMenu gap="60px">
      <NavItem>Features</NavItem>
      <NavItem>Pricing</NavItem>
      <NavItem>Newsletter</NavItem>
    </StyledDesktopNavMenu>
  );
}
