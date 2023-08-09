import styled from "styled-components";

type Box = {
  gap?: string;
  width?: string;
};

export const ColumnBox = styled.div<Box>`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.gap ? props.gap : 0)};
`;

export const RowBox = styled(ColumnBox)`
  flex-direction: row;
`;

type Article = {
  bgColor?: string;
};

export const Article = styled.article<Article>`
  text-align: center;
  padding: 0 20px;
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "#fff")};
`;
