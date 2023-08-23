import { Body, Subtitle } from "@/ui/typography";
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
          <Subtitle style={{ textAlign: "left" }}>{title}</Subtitle>
          <Separator />
          <Body align="start">{children}</Body>
        </div>
      </FeatureContent>
    </Article>
  );
}
