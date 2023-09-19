import { ColumnBox } from "@/ui/box/styled";
import { FormContainer, StyledForm } from "../styled";
import { Title } from "@/ui/typography";
import { ControlledTextField, TextField } from "@/ui/text-field";
import { SecondaryButton } from "@/ui/buttons";
import { updateProfile } from "@/lib/api";
import { useRouter } from "next/router";

export function ProfileForm({ name, age, email }: any) {
  const router = useRouter();

  async function updateData(e: any) {
    e.preventDefault();
    const target = e.target;
    const test = await updateProfile({
      full_name: target.name.value,
      age: target.age.value,
    });
    router.reload();
  }

  return (
    <ColumnBox
      style={{ backgroundColor: "var(--main-orange)", padding: "20px" }}
    >
      <Title>Perfil</Title>
      <StyledForm onSubmit={updateData}>
        <ControlledTextField
          type="email"
          name="email"
          title="Email"
          required
          notEditable
          value={email}
        />
        <ControlledTextField
          name="name"
          title="Nombre completo"
          required
          value={name}
        />
        <ControlledTextField
          type="number"
          name="age"
          title="Edad"
          required
          value={age}
        />
        <SecondaryButton text="Guardar" />
      </StyledForm>
    </ColumnBox>
  );
}
