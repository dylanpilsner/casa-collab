import { ColumnBox, RowBox } from "@/ui/box/styled";
import {
  FooterNavContainer,
  ResponsiveContainer,
  SocialMediaContainer,
  StyledFooter,
} from "./styled";
import { Github, Linkedin } from "@/ui/icons/styled";
import { Rights, FooterNav } from "@/ui/typography";
import { Separator } from "@/ui/shapes/styled";
import { Logo } from "@/ui/logo";
import { SocialMedia } from "@/ui/icons";

export function Footer() {
  return (
    <StyledFooter id="social-medias">
      <SocialMediaContainer>
        <SocialMedia
          text="Dylan"
          type="linkedin"
          url="https://www.linkedin.com/in/dylan-pilsner"
        />
        <SocialMedia
          text="Dylan"
          type="github"
          url="https://github.com/dylanpilsner"
        />
        <SocialMedia text="Bruno" type="linkedin" />
        <SocialMedia text="Bruno" type="github" />
      </SocialMediaContainer>
      <ResponsiveContainer>
        <FooterNavContainer gap="30px">
          <FooterNav href="#features">Features</FooterNav>
          <FooterNav href="#pricing">Pricing</FooterNav>
          <FooterNav href="#hero">Home</FooterNav>
        </FooterNavContainer>
        <Separator />

        <ColumnBox style={{ alignItems: "flex-start" }}>
          <Logo />
          <Rights>All Rights Reserved © homeward.com</Rights>
        </ColumnBox>
      </ResponsiveContainer>
    </StyledFooter>
  );
}
