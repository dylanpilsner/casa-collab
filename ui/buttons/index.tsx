import { StyledCallButton, StyledMainButton } from "./styled";

type Button = {
  text: string;
  callback?: () => void;
};

export function MainButton({ text, callback }: Button) {
  return <StyledMainButton onClick={callback}>{text}</StyledMainButton>;
}
export function CallButton({ text, callback }: Button) {
  return <StyledCallButton onClick={callback}>{text}</StyledCallButton>;
}
