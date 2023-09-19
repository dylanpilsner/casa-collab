import { Decline } from "../icons/styled";
import { BodyApp } from "../typography";
import {
  StyledAcceptButton,
  StyledDeclineButton,
  StyledFirstOptionButton,
  StyledHeaderMainButton,
  StyledMainButton,
  StyledSecondOptionButton,
  StyledSecondaryButton,
} from "./styled";
import Send from "@/ui/icons/send.svg";

type Button = {
  text: string;
  callback?: () => void;
  width?: string;
};

export function MainButton({ text, callback, width }: Button) {
  return (
    <StyledMainButton onClick={callback} width={width}>
      {text}
    </StyledMainButton>
  );
}
export function HeaderMainButton({ text, callback, width }: Button) {
  return (
    <StyledHeaderMainButton onClick={callback} width={width}>
      {text}
    </StyledHeaderMainButton>
  );
}
export function SecondaryButton({ text, callback, width }: Button) {
  return (
    <StyledSecondaryButton width={width} onClick={callback}>
      {text}
    </StyledSecondaryButton>
  );
}

export function SendButton({ text, callback, width }: Button) {
  return (
    <StyledMainButton
      width={width}
      onClick={callback}
      color="var(--default-white)"
    >
      {text} <Send style={{ fill: "white" }} />
    </StyledMainButton>
  );
}

export function DeclineButton({ text, callback }: Button) {
  return <StyledDeclineButton onClick={callback}>{text}</StyledDeclineButton>;
}

export function AcceptButton({ text, callback }: Button) {
  return <StyledAcceptButton onClick={callback}>{text}</StyledAcceptButton>;
}

export function FirstOptionButton({ text, callback }: Button) {
  return (
    <StyledFirstOptionButton onClick={callback}>{text}</StyledFirstOptionButton>
  );
}
export function SecondOptionButton({ text, callback }: Button) {
  return (
    <StyledSecondOptionButton onClick={callback}>
      {text}
    </StyledSecondOptionButton>
  );
}
