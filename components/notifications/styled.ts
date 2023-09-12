import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--main-orange);
  padding: 20px;
  height: 100%;
  min-height: 100vh;

  @media (min-width: 1020px) {
    padding: 20px 60px;
  }
`;

export const NotificationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
`;
export const Notification = styled.div`
  width: 100%;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: 1020px) {
    flex-direction: row;
  }
`;
