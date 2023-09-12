import { useGetFriends, useGetNotifications } from "@/lib/hooks";
import {
  ButtonsContainer,
  DataContainer,
  MainContainer,
  Notification,
  NotificationContainer,
} from "./styled";
import { UserContainer, UserImg } from "@/ui/user/styled";
import { BodyApp } from "@/ui/typography";
import { AcceptButton, DeclineButton } from "@/ui/buttons";
import { addFriend, declineFriend } from "@/lib/api";
import { useEffect } from "react";

export function NotificationsComponent() {
  const { notifications, mutateNotifications } = useGetNotifications();
  const { mutateFriends } = useGetFriends();

  async function acceptFriendRequest(email: string) {
    await addFriend(email);
    mutateNotifications();
    mutateFriends();
  }

  async function declineFriendRequest(notificationId: number) {
    await declineFriend(notificationId);
    mutateNotifications();
  }

  return (
    <MainContainer>
      <NotificationContainer>
        {notifications?.map((i: any) => {
          return (
            <Notification key={i.id}>
              <DataContainer>
                <UserContainer style={{ width: "100%" }}>
                  <UserImg
                    src={i.sender_information.profile_img}
                    alt="profile-img"
                  />
                  {i.status === "pending" ? (
                    <BodyApp style={{ width: "50%" }}>
                      {i.sender_information.full_name} te ha invitado a ser su
                      amigo!
                    </BodyApp>
                  ) : (
                    <BodyApp style={{ width: "50%" }}>
                      Ya eres amigo de {i.sender_information.full_name}!
                    </BodyApp>
                  )}
                </UserContainer>
                {i.status === "pending" ? (
                  <ButtonsContainer>
                    <AcceptButton
                      text="Aceptar"
                      callback={() =>
                        acceptFriendRequest(i.sender_information.email)
                      }
                    />
                    <DeclineButton
                      text="Rechazar"
                      callback={() => declineFriendRequest(i.id)}
                    />
                  </ButtonsContainer>
                ) : null}
              </DataContainer>
              <hr />
            </Notification>
          );
        })}
      </NotificationContainer>
    </MainContainer>
  );
}
