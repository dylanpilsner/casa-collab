import { RowBox } from "../box/styled";
import { LogoText } from "../typography";
import { ImgContainer, LogoBox } from "./styled";

export function Logo() {
  return (
    <LogoBox>
      <ImgContainer>
        <img
          src="/logotipo.png"
          style={{ height: "100%", width: "100%" }}
          alt="logotipo"
        />
      </ImgContainer>
      <a href="#hero">
        <LogoText>HomeWard</LogoText>
      </a>
    </LogoBox>
  );
}
