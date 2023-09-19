import { FormContainer, StyledContactForm } from "../styled";
import { Close } from "@/ui/icons/styled";
import { TextArea, TextField } from "@/ui/text-field";
import { SendButton } from "@/ui/buttons";

type ContactForm = {
  callback: (argument: any) => void;
  contactStatus: boolean;
  closeContact: () => void;
};

export function ContactForm({
  callback,
  contactStatus,
  closeContact,
}: ContactForm) {
  function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    callback(target as any);
    target.reset();
  }

  function handleCloseContact() {
    closeContact();
  }

  const isVisible = contactStatus ? "flex" : "none";

  return (
    <FormContainer style={{ display: isVisible }}>
      <StyledContactForm onSubmit={handleSubmit}>
        <Close onClick={handleCloseContact} />
        <TextField
          title="Tu nombre"
          name="name"
          required
          color="var(--default-white)"
        />
        <TextField
          title="Tu email"
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
          color="var(--default-white)"
        />
        <TextArea title="Mensaje" name="message" required />
        <div style={{ display: "inherit", justifyContent: "center" }}>
          <SendButton text="Enviar"></SendButton>
        </div>
      </StyledContactForm>
    </FormContainer>
  );
}
