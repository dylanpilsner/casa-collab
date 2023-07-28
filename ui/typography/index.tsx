import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props: any) => props.bg};
  font-size: 48px;
  /* text-align: center; */
  font-weight: 800;
  margin: 0;
  max-width: 500px;

  @media (min-width: 1020px) {
    max-width: 677px;
    font-size: 64px;
  }
`;
export const SubTitle = styled.h2`
  font-size: 1.5rem;
  text-align: center;
`;
export const Body = styled.p<any>`
  color: ${((props: any) => props.$bg) || "#fff"};
  font-weight: 300;
  font-size: 1rem;
  text-align: ${((props: any) => props.align) || "center"};

<<<<<<< HEAD
  @media (max-width: 1020px) {
    text-align: center !important;
  }
=======

>>>>>>> a3733dad9689b8da80eaa894d2feda0d8f09c2a5
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
  }
`;
