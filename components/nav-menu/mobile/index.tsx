import { ColumnBox } from "@/ui/box/styled";
import { StyledNavMenu } from "./styled";
import { NavItem } from "@/ui/typography";
import { NavTriangle } from "@/ui/shapes/styled";

type NavMenu = {
  status: "closed" | "opened";
  closeNavMenu?: any;
};

export function LandingMobileNavMenu({ status, closeNavMenu }: NavMenu) {
  return (
    <StyledNavMenu className={status}>
      <NavTriangle />
      <ColumnBox gap="60px">
        <div onClick={closeNavMenu}>
          <NavItem href="#features">Features</NavItem>
        </div>
        <div onClick={closeNavMenu}>
          <NavItem href="#pricing">Pricing</NavItem>
        </div>
        <div onClick={closeNavMenu}>
          <NavItem href="#social-medias">Social medias</NavItem>
        </div>
        <div onClick={closeNavMenu}>
          <NavItem href="/sign-in" style={{ textDecoration: "underline" }}>
            Iniciar sesión
          </NavItem>
        </div>
      </ColumnBox>
    </StyledNavMenu>
  );
}
