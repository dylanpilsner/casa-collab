// import { useIsLogged } from "@/lib/hooks";
import { Extend, Oval } from "@/ui/icons/styled";
import {
  AlternativeSection,
  GroupContent,
  GroupHeader,
  GroupInformationContainer,
  GroupMemberSeparator,
  MainContainer,
  SectionContainer,
} from "./styled";
import { BodyApp, SecondaryTitle, Subtitle } from "@/ui/typography";
import { User } from "@/ui/user";
import { GroupMemberContainer } from "./styled";
import { useState } from "react";

export function HomeComponent() {
  const [hover, setHover] = useState("closed");

  function enableHover() {
    setHover("opened");
  }
  function disableHover() {
    setHover("closed");
  }

  return (
    <MainContainer>
      <GroupHeader>
        <GroupInformationContainer>
          <Oval />
          <Subtitle margin="20px 0">25 ago. 2023</Subtitle>
          <SecondaryTitle margin=" 0 0 20px">Familia 2023</SecondaryTitle>
        </GroupInformationContainer>
        <SectionContainer
          onMouseEnter={enableHover}
          onMouseLeave={disableHover}
        >
          <BodyApp style={{ cursor: "pointer" }}>Tareas</BodyApp>
          <Extend style={{ placeSelf: "center" }} />
          <AlternativeSection
            className={hover}
            style={{ fontFamily: "var(--secondary-font)" }}
            onClick={() => console.log("click")}
          >
            <BodyApp align="center" style={{ cursor: "pointer" }}>
              Gastos
            </BodyApp>
          </AlternativeSection>
        </SectionContainer>
      </GroupHeader>

      <GroupContent>
        <GroupMemberContainer>
          <User userName="Dylan Pilsner" />
          <GroupMemberSeparator />
        </GroupMemberContainer>
        {/* ACÁ TERMINAN EL USUARIO */}
        <GroupMemberContainer>
          <User userName="Claudia Cendra" />
          <GroupMemberSeparator />
        </GroupMemberContainer>
        {/* ACÁ TERMINAN EL USUARIO */}
        <GroupMemberContainer>
          <User userName="Eduardo Pilsner" />
          <GroupMemberSeparator />
        </GroupMemberContainer>
        {/* ACÁ TERMINAN EL USUARIO */}
        <GroupMemberContainer>
          <User userName="Tobías Pilsner" />
          <GroupMemberSeparator />
        </GroupMemberContainer>
        {/* ACÁ TERMINAN EL USUARIO */}
        <GroupMemberContainer>
          <User userName="Goldina Pilsner" />
          <GroupMemberSeparator />
        </GroupMemberContainer>
        {/* ACÁ TERMINAN EL USUARIO */}
      </GroupContent>
    </MainContainer>
  );
}
