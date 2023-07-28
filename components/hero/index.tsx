import { Line, HeroTriangle, Click } from "@/ui/shapes/styled";
import { Content, HeroContainer, HeroImg } from "./styled";
import { HeroSubtitle, HeroTitle, SubTitle } from "@/ui/typography";
import { CallButton } from "@/ui/buttons";
import { ColumnBox } from "@/ui/box/styled";

export function Hero() {
  return (
    <HeroContainer>
      <HeroTriangle src="/hero-triangle.png" />
      {/* <Click /> */}
      <Content>
        <ColumnBox style={{ alignItems: "flex-start" }}>
          <HeroTitle>Descubrí una nueva forma de vivir</HeroTitle>
          <Line />
          <HeroSubtitle>
            Convivir es fácil: Optimizá la distribución de tareas y gastos en tu
            hogar
          </HeroSubtitle>
          <CallButton text="Empezar prueba gratis" />
        </ColumnBox>
        <HeroImg src="/couple.png" />
      </Content>
    </HeroContainer>
  );
}
