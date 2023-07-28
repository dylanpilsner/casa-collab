import { ColumnBox } from "@/ui/box/styled";
import { StyledNavMenu } from "./styled";
import { NavItem } from "@/ui/typography";
import { NavTriangle } from "@/ui/shapes/styled";

type NavMenu = {
  status: "closed" | "opened";
};

export function NavMenu({ status }: NavMenu) {
  return (
    <StyledNavMenu className={status}>
      <NavTriangle />
      <ColumnBox gap="60px">
        <NavItem>Features</NavItem>
        <NavItem>Pricing</NavItem>
        <NavItem>Newsletter</NavItem>
        <NavItem>Contacto</NavItem>
      </ColumnBox>
    </StyledNavMenu>
  );
}
