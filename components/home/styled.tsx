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

export const GroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 1020px) {
    flex-direction: row;
  }
`;

export const GroupInformationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const SectionContainer = styled.div`
  place-self: start;
  display: flex;
  gap: 3px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--almost-black);
  }

  @media (min-width: 1020px) {
    align-self: center;
  }
`;

export const AlternativeSection = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  height: 50px;
  bottom: -47px;
  z-index: 10;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: var(--default-transition);
  /* opacity: 0%; */

  &.opened {
    display: flex;
  }
`;

export const GroupContent = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const GroupMemberContainer = styled.div``;

export const GroupMemberSeparator = styled.hr`
  margin-top: 30px;
`;
