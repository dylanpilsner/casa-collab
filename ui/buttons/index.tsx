import { StyledMainButton, StyledSecondaryButton } from "./styled";
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
