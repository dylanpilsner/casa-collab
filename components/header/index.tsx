import { StyledHeader } from "./styled";
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
