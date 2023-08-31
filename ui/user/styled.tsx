import styled from "styled-components";
import { UserName } from "../typography";

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  /* gap: 10px; */
`;

export const UserImg = styled.img`
  width: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 8px;
`;

export const HeaderUserName = styled(UserName)`
  display: none;

  @media (min-width: 669px) {
    display: initial;
  }
`;
