import styled from "styled-components";
import NavTriangleShape from "./Rectangle-41.svg";
import LineShape from "./Line.svg";
import ClickShape from "./click.svg";
import PolygonShape from "./polygon.svg";
import DotShape from "./dot.svg";
import SquareShape from "./square.svg";

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
  top: 1%;
  left: 45%;
  display: none;

  @media (min-width: 769px) {
    display: initial;
  }
`;
export const Polygon = styled(PolygonShape)`
  position: absolute;
  top: 70%;
  left: 45%;
  display: none;

  @media (min-width: 769px) {
    display: initial;
  }
`;
export const Dot = styled(DotShape)`
  position: absolute;
  top: 65%;
  left: 30%;
  display: none;

  @media (min-width: 769px) {
    display: initial;
  }
`;
export const Square = styled(SquareShape)`
  position: absolute;
  top: 25%;
  left: 40%;
  display: none;

  @media (min-width: 769px) {
    display: initial;
  }
`;
