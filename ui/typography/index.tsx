import styled from "styled-components";

type Typography = {
  bg?: string;
  align?: string;
  margin?: string;
};

export const Title = styled.h1<Typography>`
  color: ${(props) => (props.bg ? props.bg : "black")};
  font-size: 2.5rem;
  text-align: ${({ align }: any) => align ?? "left"};
  margin: ${({ margin }: any) => margin ?? "0"};
  font-family: var(--main-font);
`;
export const SecondaryTitle = styled(Title)`
  font-size: 64px;
  font-weight: 600;
  font-family: var(--secondary-font);
`;
export const Subtitle = styled(Title).attrs({ as: "h2" })`
  font-family: var(--secondary-font);
  font-weight: 600;
  font-size: 32px;
`;

export const StrongLargeText = styled(Subtitle)`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Body = styled(StrongLargeText).attrs({ as: "p" })`
  color: ${((props: any) => props.bg) || "#fff"};
  font-weight: 400;
  font-size: 1rem;
  font-family: var(--main-font);
`;

export const BodyApp = styled(Body)`
  font-family: var(--secondary-font);
`;

export const LogoText = styled(Body).attrs({ as: "span" })`
  font-family: var(--secondary-font);
  font-size: 24px;
  font-weight: 600;
  color: var(--almost-black);
`;

export const NavItem = styled.a`
  font-family: var(--main-font);
  color: var(--almost-black);
  font-size: 48px;
  font-weight: 700;
  position: relative;

  @media (min-width: 869px) {
    font-size: 18px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--almost-black);
      transition: var(--default-transition);
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const HeroTitle = styled(Title)`
  color: ${(props: any) => props.bg};
  font-size: 48px;
  font-weight: 800;
  max-width: 500px;

  @media (min-width: 1020px) {
  }
`;

export const HeroSubtitle = styled(StrongLargeText)`
  font-weight: 400;
  max-width: 371px;

  @media (min-width: 1020px) {
    max-width: 600px;
  }
`;

export const FooterNav = styled(LogoText).attrs({ as: "a" })`
  color: #2b3377;
  font-size: 18px;
  font-weight: 600;
`;

export const Rights = styled(LogoText).attrs({ as: "p" })`
  color: #5c5e87;
  font-weight: 400;
  font-size: 16px;
`;

export const UserName = styled(StrongLargeText).attrs({ as: "span" })`
  color: var(--almost-black);
  font-size: 16px;
  font-weight: 400;
  font-family: "Nunito Sans";
`;
