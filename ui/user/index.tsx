import { UserContainer, UserImg, HeaderUserName } from "./styled";
import { UserName } from "../typography";

type UserHeader = {
  callback?: () => void;
};

export function UserHeader({ callback }: UserHeader) {
  return (
    <UserContainer>
      <UserImg
        src="https://res.cloudinary.com/denl6uihc/image/upload/v1692831428/vrtuo2ctutn5xkzzbuly.jpg"
        onClick={callback}
      />
      <HeaderUserName>Dylan Pilsner</HeaderUserName>
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
