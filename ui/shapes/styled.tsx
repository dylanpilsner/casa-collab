import styled from "styled-components";
import NavTriangleShape from "./Rectangle-41.svg";
import HeroTriangleShape from "./Rectangle-36.svg";
import MobileHeroTriangleShape from "./Rectangle-37.svg";
import LineShape from "./Line.svg";

export const NavTriangle = styled(NavTriangleShape)`
  position: absolute;
  top: 0;
`;

export const DesktopHeroTriangle = styled(HeroTriangleShape)`
  position: relative;
  width: 100%;
  top: -100px;
  left: -7px;
  display: none;

  @media (min-width: 768px) {
    display: initial;
  }
`;

export const MobileHeroTriangle = styled(MobileHeroTriangleShape)`
  position: relative;
  top: -100px;
  left: -5px;
  height: 800px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Line = styled(LineShape)``;
