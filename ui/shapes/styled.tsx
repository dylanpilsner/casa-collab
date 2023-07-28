import styled from "styled-components";
import NavTriangleShape from "./Rectangle-41.svg";
import LineShape from "./Line.svg";
import ClickShape from "./click.svg";

export const NavTriangle = styled(NavTriangleShape)`
  position: absolute;
  top: 0;
`;

export const Line = styled(LineShape)``;

export const HeroTriangle = styled.img`
  width: 100%;
  height: 100vh;
  position: relative;
  top: -100px;
  left: -10px;
`;

export const Click = styled(ClickShape)`
  position: absolute;
  top: 30%;
  left: 50%;
`;
