import { UserContainer, UserImg, HeaderUserName } from "./styled";
import { UserName } from "../typography";

type UserHeader = {
  callback?: () => void;
  name?: string;
  img?: string;
};

export function UserHeader({ callback, name, img }: UserHeader) {
  return (
    <UserContainer>
      <UserImg src={img ?? "/default_user.png"} onClick={callback} />
      <HeaderUserName>{name}</HeaderUserName>
    </UserContainer>
  );
}

type User = {
  callback?: () => void;
  userName: string;
  profilePic?: string;
};

export function User({ callback, userName }: User) {
  return (
    <UserContainer>
      <UserImg src="https://res.cloudinary.com/denl6uihc/image/upload/v1692831428/vrtuo2ctutn5xkzzbuly.jpg" />
      <UserName>{userName}</UserName>
    </UserContainer>
  );
}
