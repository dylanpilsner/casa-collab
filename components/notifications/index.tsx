import { useGetFriends, useGetNotifications } from "@/lib/hooks";
import {
  ButtonsContainer,
  DataContainer,
  MainContainer,
  NotificationContainer,
} from "./styled";
import { UserContainer, UserImg } from "@/ui/user/styled";
import { BodyApp } from "@/ui/typography";
import { AcceptButton, DeclineButton } from "@/ui/buttons";
import { addFriend, declineFriend } from "@/lib/api";
import { useEffect } from "react";
import { Notification } from "@/ui/notifications";

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
            <div key={i.id}>
              <Notification
                id={i.id}
                profilePic={i.sender_information.profile_img}
                status={i.status}
                name={i.sender_information.full_name}
                acceptFunction={() =>
                  acceptFriendRequest(i.sender_information.email)
                }
                declineFunction={() => declineFriendRequest(i.id)}
              />
            </div>
          );
        })}
      </NotificationContainer>
    </MainContainer>
  );
}
