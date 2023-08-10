import { FormContainer, Form } from "./styled";
import { Close } from "@/ui/icons/styled";
import Send from "@/ui/icons/send.svg";
import { Button } from "../pricing/styled";
import { TextArea, TextField } from "@/ui/text-field";

export function ContactForm({ callback, contactStatus, closeContact }: any) {
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
      <Form onSubmit={handleSubmit}>
        <Close onClick={handleCloseContact} />
        <TextField title="Tu nombre" name="name" required />
        <TextField
          title="Tu email"
          name="email"
          type="email"
          placeholder="ejemplo@gmail.com"
          required
        />
        <TextArea title="Mensaje" name="message" required />
        <div style={{ display: "inherit", justifyContent: "center" }}>
          <Button>
            Enviar <Send />
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}
