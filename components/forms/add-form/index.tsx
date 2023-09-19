import { BackgroundModal } from "@/ui/background/styled";
import { AddForm } from "./styled";
import { FormContainer } from "../styled";
import { Subtitle } from "@/ui/typography";
import { TextField } from "@/ui/text-field";
import { MainButton } from "@/ui/buttons";
import { Close } from "@/ui/icons/styled";
import { addFriend, sendFriendRequest } from "@/lib/api";
import { useFocus, useGetFriends } from "@/lib/hooks";
import { useRef } from "react";

type Form = {
  visibility: string;
  callback: () => void;
};

export function AddFriendForm({ visibility, callback }: Form) {
  const { mutateFriends } = useGetFriends();
  const containerEl = useRef() as any;
  useFocus(containerEl.current, visibility);

  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      callback();
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    await sendFriendRequest(email);
    target.reset();
    if (callback) {
      callback();
    }
    mutateFriends();
  }

  return (
    <BackgroundModal
      tabIndex={0}
      ref={containerEl}
      onKeyUp={handleKeyUp}
      className={visibility}
    >
      <FormContainer>
        <AddForm onSubmit={handleSubmit}>
          <Close onClick={callback} />
          <Subtitle align="center" bg="var(--default-white)">
            Agregar un amigo!
          </Subtitle>
          <TextField
            type="email"
            title="Email"
            name="email"
            color="var(--default-white)"
          />
          <MainButton text="Agregar amigo" />
        </AddForm>
      </FormContainer>
    </BackgroundModal>
  );
}
export function AddGroupForm({ visibility, callback }: Form) {
  const containerEl = useRef() as any;
  useFocus(containerEl.current, visibility);

  function handleKeyUp(e: any) {
    if (e.key === "Escape") {
      callback();
    }
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    await addFriend(email);
    target.reset();
    if (callback) {
      callback();
    }
  }

  return (
    <BackgroundModal
      tabIndex={0}
      ref={containerEl}
      onKeyUp={handleKeyUp}
      className={visibility}
    >
      <FormContainer>
        <AddForm onSubmit={handleSubmit}>
          <Close onClick={callback} />
          <Subtitle align="center" bg="var(--default-white)">
            Crear un grupo
          </Subtitle>
          <TextField
            type="email"
            title="Email"
            name="email"
            color="var(--default-white)"
          />
          <MainButton text="Agregar amigo" />
        </AddForm>
      </FormContainer>
    </BackgroundModal>
  );
}
