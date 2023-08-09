import {
  Line,
  HeroTriangle,
  Click,
  Polygon,
  Dot,
  Square,
} from "@/ui/shapes/styled";
import { BottomMask, Content, HeroContainer, HeroImg, TopMask } from "./styled";
import { HeroSubtitle, HeroTitle } from "@/ui/typography";
import { CallButton } from "@/ui/buttons";
import { ColumnBox } from "@/ui/box/styled";
import { useRouter } from "next/router";

export function Hero() {
  const router = useRouter();

  function goTo(url: string) {
    router.push(url);
  }

  return (
    <HeroContainer id="hero">
      <HeroTriangle src="/hero-triangle.png" />
      <TopMask src="/top-mask.png" />
      <BottomMask src="/bottom-mask.png" />
      <Click />
      <Polygon />
      <Dot />
      <Square />
      <Content>
        <ColumnBox style={{ alignItems: "flex-start" }} gap="5px">
          <HeroTitle>Descubrí una nueva forma de vivir</HeroTitle>
          <Line />
          <HeroSubtitle>
            Convivir es fácil: Optimizá la distribución de tareas y gastos en tu
            hogar
          </HeroSubtitle>
          <CallButton
            text="Empezar prueba gratis"
            callback={() => goTo("#pricing")}
          />
        </ColumnBox>
        <HeroImg src="/couple.png" />
      </Content>
    </HeroContainer>
  );
}
