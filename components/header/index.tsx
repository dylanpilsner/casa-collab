import { RowBox } from "@/ui/box/styled";
import { StyledHeader } from "./styled";
import { Logo } from "@/ui/icons/styled";
import { Burger } from "../burger";

export function Header() {
  return (
    <StyledHeader>
      <RowBox>
        <Logo />
        <Burger callback={true} />
      </RowBox>
    </StyledHeader>
  );
}
