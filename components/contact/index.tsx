import { StrongLargeText } from "@/ui/typography";
import { ContactForm } from "../forms/contact-form";
import { useContact, useLoader } from "@/lib/hooks";
import { useState } from "react";
import { sendForm } from "@/lib/api";
import { Loader } from "@/ui/loader";
import { Message } from "@/ui/message";

export function Contact() {
  const { contactStatus, openContact, closeContact } = useContact();
  const { showLoader, hideLoader, loader } = useLoader();
  const [messageVisibility, setMessageVisibility] = useState(false);

  const submitForm = async (user: any) => {
    closeContact();
    showLoader();
    await sendForm(user);
    hideLoader();
    setMessageVisibility(true);
  };

  function closeMessage() {
    setMessageVisibility(false);
  }

  return (
    <div>
      <Loader visibility={loader} />
      <Message
        message="Su mensaje se ha enviado correctamente!"
        visible={messageVisibility}
        onClose={closeMessage}
      />
      <StrongLargeText id="contact" align="center" margin="20px 0">
        Podés contactarnos apretando{" "}
        <span
          style={{ color: "var(--main-orange)", cursor: "pointer" }}
          onClick={openContact}
        >
          aquí
        </span>
      </StrongLargeText>
      <ContactForm
        contactStatus={contactStatus}
        closeContact={closeContact}
        callback={submitForm}
      />
    </div>
  );
}
