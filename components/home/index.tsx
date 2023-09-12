import { Dots, Extend, Oval } from "@/ui/icons/styled";
import {
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
import { DropDown } from "@/ui/dropdown/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAlternativeSection, useGetFriends, useHover } from "@/lib/hooks";
import { formatDate } from "@/lib/api";

export function HomeComponent() {
  const router = useRouter();
  const section = useAlternativeSection();
  const { friends } = useGetFriends();
  const { hover, setOpenedStatus, setClosedStatus } =
    useHover("alternativeSection");
  const alternativeSection = section === "Tareas" ? "Gastos" : "Tareas";
  const routeToGo = section === "Tareas" ? "expenses" : "tasks";

  return (
    <MainContainer>
      <GroupHeader>
        <GroupInformationContainer>
          <Oval />
          <Subtitle margin="20px 0">{formatDate(new Date())}</Subtitle>
          <SecondaryTitle margin=" 0 0 20px">Amigos</SecondaryTitle>
        </GroupInformationContainer>
        <SectionContainer
          onMouseEnter={setOpenedStatus}
          onMouseLeave={setClosedStatus}
        >
          <BodyApp style={{ cursor: "pointer" }}>{alternativeSection}</BodyApp>
          <Extend style={{ placeSelf: "center" }} />
          <DropDown
            className={hover.alternativeSection?.status}
            style={{ fontFamily: "var(--secondary-font)" }}
          >
            <BodyApp
              align="center"
              style={{ cursor: "pointer" }}
              onClick={() => router.push(`/group/${routeToGo}?groupId=1`)}
            >
              {section}
            </BodyApp>
          </DropDown>
        </SectionContainer>
      </GroupHeader>

      <GroupContent>
        {friends?.length === 0 && (
          <BodyApp>Todavía no agregaste a ningún amigo.</BodyApp>
        )}
        {friends?.map((friend: any) => {
          return (
            <div key={friend.id}>
              <GroupMemberContainer style={{}}>
                <User userName={friend.full_name} />
                <Dots />
                {/* <BodyApp>Tareas realizadas</BodyApp> */}
              </GroupMemberContainer>
              <GroupMemberSeparator />
            </div>
          );
        })}
      </GroupContent>
    </MainContainer>
  );
}

// PASAR A LOS AMIGOS POR PROPS EN getStaticProps
