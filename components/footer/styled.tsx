import { ColumnBox, RowBox } from "@/ui/box/styled";
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  height: 100%;
  padding: 100px 50px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (min-width: 1020px) {
    padding: 100px;
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export const ResponsiveContainer = styled(ColumnBox)`
  align-items: flex-start;
  gap: 40px;

  @media (min-width: 1020px) {
    flex-direction: row-reverse;
  }
`;

export const FooterNavContainer = styled(ColumnBox).attrs({ as: "nav" })`
  align-items: flex-start;

  @media (min-width: 1020px) {
    align-items: flex-end;
  }
`;

export const SocialMediaContainer = styled(RowBox)`
  gap: 30px;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-self: center;

  @media (min-width: 1020px) {
    justify-content: flex-start;
    display: flex;
    align-self: flex-start;
  }
`;
