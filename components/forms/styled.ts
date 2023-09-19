import { ColumnBox } from "@/ui/box/styled";
import styled from "styled-components";

export const FormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(2px);
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #26302e;
  gap: 1rem;
  color: #fff;
  padding: 30px 3rem;
  border-radius: 10px;
`;

export const StyledForm = styled(StyledContactForm)`
  background-color: transparent;
  width: 100%;
  max-width: 500px;
  height: 55%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SignContainer = styled(ColumnBox)`
  background-color: var(--main-orange);
  height: 70vh;
`;
