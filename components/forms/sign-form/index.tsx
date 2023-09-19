import { SignContainer, StyledForm } from "../styled";
import { TextField } from "@/ui/text-field";
import { SecondaryButton } from "@/ui/buttons";
import { BodyApp, Title } from "@/ui/typography";
import { getCode, sign } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { cookie } from "@/utils";

function EmailForm({ callback }: any) {
  return (
    <StyledForm onSubmit={callback}>
      <TextField
        type="email"
        name="email"
        placeholder="user@gmail.com"
        title="Email"
        required
      />
      <SecondaryButton text="Siguiente" />
    </StyledForm>
  );
}

function CodeForm({ callback }: any) {
  return (
    <StyledForm onSubmit={callback}>
      <TextField type="number" name="code" title="Código" required />
      <SecondaryButton text="Siguiente" />
    </StyledForm>
  );
}

export function SignForm() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const router = useRouter();

  async function settingEmail(e: any) {
    const target = e.target;
    e.preventDefault();
    const code = await getCode(target.email.value);
    setCode(code.newCode);
    setEmail(target.email.value);
  }
  async function sendEmail(e: any) {
    const target = e.target;
    e.preventDefault();

    const res = await sign({ email, code: target.code.value });

    if (res.token) {
      cookie.set("auth_token", res.token, {
        path: "/",
        expires: new Date(2100, 0, 1),
      });
      router.push("/home");
    }
  }

  return (
    <SignContainer>
      <Title style={{ fontFamily: "var(--secondary-font)", marginBottom: 20 }}>
        Ingresar
      </Title>
      <Title>{code}</Title>
      <BodyApp>
        {!email
          ? "Para continuar, ingrese su email"
          : `Ahora, ingrese el código que enviamos a ${email}`}
      </BodyApp>
      {!email ? (
        <EmailForm callback={settingEmail} />
      ) : (
        <CodeForm callback={sendEmail} />
      )}
    </SignContainer>
  );
}
