import styled from "styled-components";

export const StyledNotification = styled.div`
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
