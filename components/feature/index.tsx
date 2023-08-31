import { Body, StrongLargeText } from "@/ui/typography";
import { FeatureContent, FeatureImg, Separator } from "./styled";
import { Article } from "@/ui/box/styled";

type Feature = {
  children: React.ReactNode;
  src: string;
  title: string;
  bgcolor?: string;
  direction?: string;
};

export function Feature({ children, src, bgcolor, direction, title }: Feature) {
  return (
    <Article bgcolor={bgcolor}>
      <FeatureContent direction={direction}>
        <FeatureImg src={src} />
        <div style={{ width: "420px" }}>
          <StrongLargeText style={{ textAlign: "left" }}>
            {title}
          </StrongLargeText>
          <Separator style={{ margin: "20px 0" }} />
          <Body align="left">{children}</Body>
        </div>
      </FeatureContent>
    </Article>
  );
}
