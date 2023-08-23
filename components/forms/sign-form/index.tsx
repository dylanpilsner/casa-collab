import { StyledSignForm } from "../styled";
import { TextField } from "@/ui/text-field";
import { SecondaryButton } from "@/ui/buttons";
import { ColumnBox } from "@/ui/box/styled";
import { Subtitle, Title } from "@/ui/typography";
import { getCode, sign } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/router";

function EmailForm({ callback }: any) {
  return (
    <StyledSignForm onSubmit={callback}>
      <TextField
        type="email"
        name="email"
        placeholder="user@gmail.com"
        title="Email"
        required
      />
      <SecondaryButton text="Siguiente" />
    </StyledSignForm>
  );
}

function CodeForm({ callback }: any) {
  return (
    <StyledSignForm onSubmit={callback}>
      <TextField type="number" name="code" title="Código" required />
      <SecondaryButton text="Siguiente" />
    </StyledSignForm>
  );
}

export function SignForm() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function settingEmail(e: any) {
    const target = e.target;
    e.preventDefault();
    await getCode(target.email.value);
    setEmail(target.email.value);
  }
  async function sendEmail(e: any) {
    const target = e.target;
    e.preventDefault();
    const res = await sign({ email, code: target.code.value });

    if (res.token) {
      router.push("/home");
    }
  }

  return (
    <ColumnBox>
      <Title>Ingresar</Title>
      <Subtitle>Para continuar, ingrese su email</Subtitle>
      {!email ? (
        <EmailForm callback={settingEmail} />
      ) : (
        <CodeForm callback={sendEmail} />
      )}
    </ColumnBox>
  );
}
