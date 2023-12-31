import { useRouter } from "next/router";
import { LogoText } from "../typography";
import { ImgContainer, LogoBox } from "./styled";

export function Logo() {
  const router = useRouter();

  function goTo(url: string) {
    router.push(url);
  }

  return (
    <LogoBox onClick={() => goTo("#hero")}>
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
