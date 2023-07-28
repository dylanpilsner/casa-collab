import { useRouter } from "next/router";
import { RowBox } from "../box/styled";
import { Body } from "../typography";
import { Github, Linkedin } from "./styled";

type SocialMedia = {
  text: string;
  type: "linkedin" | "github";
  url: string;
};

export function SocialMedia({ text, type, url }: SocialMedia) {
  const socialMedia = type === "linkedin" ? <Linkedin /> : <Github />;
  const router = useRouter();
  function handleClick() {
    router.push(url);
  }

  return (
    <RowBox
      gap="3px"
      style={{ justifyContent: "flex-start", cursor: "pointer" }}
      onClick={handleClick}
    >
      {socialMedia}
      <Body style={{ fontFamily: "var(--main-font)" }}>{text}</Body>
    </RowBox>
  );
}
