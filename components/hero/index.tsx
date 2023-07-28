import {
  Line,
  HeroTriangle,
  Click,
  Polygon,
  Dot,
  Square,
} from "@/ui/shapes/styled";
import { Content, HeroContainer, HeroImg } from "./styled";
import { HeroSubtitle, HeroTitle } from "@/ui/typography";
import { CallButton } from "@/ui/buttons";
import { ColumnBox } from "@/ui/box/styled";

export function Hero() {
  return (
    <HeroContainer id="hero">
      <HeroTriangle src="/hero-triangle.png" />
      <Click />
      <Polygon />
      <Dot />
      <Square />
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
