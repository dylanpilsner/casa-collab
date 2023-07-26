import styled from "styled-components";

export const ColumnBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const RowBox = styled(ColumnBox)`
  flex-direction: row;
`;
