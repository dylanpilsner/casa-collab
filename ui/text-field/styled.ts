import styled from "styled-components";

export const Label = styled.label`
  display: block;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  border: none;
  border-bottom: 1px solid #000;
  text-indent: 10px;
  border-radius: 6px;
  border: none;

  &.not-editable {
    background-color: #c3c3c3;
  }
`;

export const StyledTextArea = styled.textarea`
  padding: 10px;
  font-family: "Poppins";
  border: 1px solid black;
  border-radius: 6px;
  padding: 10px;
  resize: none;
  border: none;
`;
