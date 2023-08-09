import { Body, SubTitle } from "@/ui/typography";
import { FeatureContent, FeatureImg, Separator } from "./styled";
import { Article } from "@/ui/box/styled";

type Feature = {
  children: React.ReactNode;
  src: string;
  title: string;
  bgColor?: string;
  direction?: string;
};

export function Feature({ children, src, bgColor, direction, title }: Feature) {
  return (
    <Article bgColor={bgColor}>
      <FeatureContent direction={direction}>
        <FeatureImg src={src} />
        <div style={{ width: "420px" }}>
          <SubTitle style={{ textAlign: "left" }}>{title}</SubTitle>
          <Separator />
          <Body align="start">{children}</Body>
        </div>
      </FeatureContent>
    </Article>
  );
}
