import { RowBox } from "../box/styled";
import { LogoText } from "../typography";
import { ImgContainer, LogoBox } from "./styled";

export function Logo() {
  function test() {
    console.log("test");
  }

  return (
    <LogoBox onClick={test}>
      <ImgContainer>
        <img
          src="/logotipo.png"
          style={{ height: "100%", width: "100%" }}
          alt="logotipo"
        />
      </ImgContainer>
      <LogoText>HomeWard</LogoText>
    </LogoBox>
  );
}
