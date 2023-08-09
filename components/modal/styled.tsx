import styled from "styled-components";

export const StyledModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 20px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const StyledModal = styled.div`
  width: 80%;
  max-width: 1000px;
  height: 450px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--main-orange);
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
