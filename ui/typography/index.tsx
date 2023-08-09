import styled from "styled-components";

type Typography = {
  bg?: string;
};

export const Title = styled.h1<Typography>`
  color: ${(props) => (props.bg ? props.bg : "black")};
  font-size: 2.5rem;
  text-align: center;
`;
export const SubTitle = styled(Title).attrs({ as: "h2" })`
  font-size: 1.5rem;
  text-align: center;
`;

type Body = {
  align?: string;
};

export const Body = styled.p<Body>`
  color: ${((props: any) => props.bg) || "#fff"};
  font-weight: 300;
  font-size: 1rem;
  text-align: ${((props: any) => props.align) || "center"};

  @media (max-width: 1020px) {
    text-align: center !important;
  }
`;

export const LogoText = styled.span`
  font-family: "Poppins";
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
      transition: 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const HeroTitle = styled(Title)`
  color: ${(props: any) => props.bg};
  font-size: 48px;
  text-align: left;
  font-weight: 800;
  margin: 0;
  max-width: 500px;

  @media (min-width: 1020px) {
  }
`;

export const HeroSubtitle = styled(SubTitle)`
  text-align: left;
  font-weight: 400;
  max-width: 371px;

  @media (min-width: 1020px) {
    max-width: 600px;
  }
`;

export const FooterNav = styled.a`
  color: #2b3377;
  font-family: "Poppins";
  font-size: 18px;
  font-weight: 600;
`;

export const Rights = styled.p`
  color: #5c5e87;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 16px;
`;
