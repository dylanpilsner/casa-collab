import styled from "styled-components";
import LinkedinIcon from "./linkedin.svg";
import GithubIcon from "./github.svg";
import StyledClose from "./close.svg";
import SuccessIcon from "./success.svg";
import ExtendIcon from "./ampliar.svg";
import CloseIcon from "./x.svg";
import OvalShape from "./oval.svg";

export const Linkedin = styled(LinkedinIcon)``;

export const Github = styled(GithubIcon)``;

export const Close = styled(StyledClose)`
  place-self: end;
  cursor: pointer;
`;

export const Success = styled(SuccessIcon)``;

export const Extend = styled(ExtendIcon)`
  margin-top: 0.3rem;
  cursor: pointer;
`;

export const CloseNav = styled(CloseIcon)`
  cursor: pointer;
`;
export const Oval = styled(OvalShape)`
  position: absolute;
  left: -60px;

  display: none;

  @media (min-width: 1020px) {
    display: initial;
  }
`;
