import { BodyApp } from "@/ui/typography";
import { FriendsContent, FriendContainer, FriendSeparator } from "./styled";
import { User } from "@/ui/user";
import { DotsMenu } from "@/ui/menu";
import { deleteFriend } from "@/lib/api";
import { useGetFriends, useModal } from "@/lib/hooks";
import { AlertMessage } from "@/ui/message";
import { useState } from "react";

export function FriendsComponent({ data }: any) {
  const { mutateFriends } = useGetFriends();
  const [visibleAlert, setVisibleAlert] = useState(false);
  const { openModal } = useModal(visibleAlert, setVisibleAlert);
  const [selectedFriendData, setSelectedFriendData] = useState({} as any);
  function handleClose() {
    if (visibleAlert) {
      setVisibleAlert(false);
    }
  }

  function openDialog(friend: any) {
    openModal();
    setSelectedFriendData(friend);
  }

  async function handleDelete() {
    await deleteFriend(selectedFriendData.id);

    mutateFriends();
  }

  return (
    <FriendsContent>
      {data?.length === 0 && (
        <BodyApp>Todavía no agregaste a ningún amigo.</BodyApp>
      )}
      {data?.map((friend: any) => {
        return (
          <div key={friend.id}>
            <FriendContainer>
              <User userName={friend.full_name} />
              <DotsMenu
                id={friend.id}
                array={[
                  {
                    title: "Eliminar amigo",
                    callback: () => openDialog(friend),
                  },
                ]}
              />
            </FriendContainer>
            <FriendSeparator />
            <AlertMessage
              visible={visibleAlert}
              onClose={handleClose}
              firstCallback={handleDelete}
              message={`Estás seguro que deseás eliminar a ${selectedFriendData.full_name} de tus amigos?`}
              title="Eliminar amigo"
            />
          </div>
        );
      })}
    </FriendsContent>
  );
}
