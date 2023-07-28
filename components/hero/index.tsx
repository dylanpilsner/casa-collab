import {
  DesktopHeroTriangle,
  Line,
  MobileHeroTriangle,
} from "@/ui/shapes/styled";
import { Content, HeroContainer } from "./styled";
import { SubTitle, Title } from "@/ui/typography";
import { ColumnBox } from "@/ui/box/styled";

export function Hero() {
  return (
    <HeroContainer>
      <DesktopHeroTriangle />
      <MobileHeroTriangle />
      <Content>
        <Title>Descubrí una nueva forma de vivir</Title>
        <Line />
        <SubTitle>
          Convivir es fácil: Optimizá la distribución de tareas y gastos en tu
          hogar
        </SubTitle>
      </Content>
    </HeroContainer>
  );
}
