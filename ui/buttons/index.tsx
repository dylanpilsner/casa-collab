import { StyledMainButton } from "./styled";

type Button = {
  text: string;
  callback?: () => void;
};

export function MainButton({ text, callback }: Button) {
  return <StyledMainButton onClick={callback}>{text}</StyledMainButton>;
}
