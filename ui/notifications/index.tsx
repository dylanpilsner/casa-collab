import { AcceptButton, DeclineButton } from "../buttons";
import { BodyApp } from "../typography";
import { UserContainer, UserImg } from "../user/styled";
import { ButtonsContainer, DataContainer, StyledNotification } from "./styled";

export function Notification({
  id,
  profilePic,
  status,
  name,
  acceptFunction,
  declineFunction,
}: any) {
  return (
    <StyledNotification>
      <DataContainer>
        <UserContainer style={{ width: "100%" }}>
          <UserImg src={profilePic} alt="profile-img" />
          {status === "pending" ? (
            <BodyApp style={{ width: "50%" }}>
              {name} te ha invitado a ser su amigo!
            </BodyApp>
          ) : (
            <BodyApp style={{ width: "50%" }}>Ya eres amigo de {name}!</BodyApp>
          )}
        </UserContainer>
        {status === "pending" ? (
          <ButtonsContainer>
            <AcceptButton text="Aceptar" callback={acceptFunction} />
            <DeclineButton text="Rechazar" callback={declineFunction} />
          </ButtonsContainer>
        ) : null}
      </DataContainer>
      <hr />
    </StyledNotification>
  );
}
