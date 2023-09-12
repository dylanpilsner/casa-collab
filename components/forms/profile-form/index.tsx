import { ColumnBox } from "@/ui/box/styled";
import { FormContainer, StyledForm } from "../styled";
import { Title } from "@/ui/typography";
import { ControlledTextField, TextField } from "@/ui/text-field";
import { SecondaryButton } from "@/ui/buttons";

export function ProfileForm({ name, email }: any) {
  return (
    <ColumnBox
      style={{ backgroundColor: "var(--main-orange)", padding: "20px" }}
    >
      <Title>Perfil</Title>
      <StyledForm>
        <ControlledTextField
          name="name"
          title="Nombre completo"
          required
          value={name}
        />
        <ControlledTextField
          type="email"
          name="email"
          title="Email"
          required
          value={email}
        />
        <SecondaryButton text="Guardar" />
      </StyledForm>
    </ColumnBox>
  );
}
