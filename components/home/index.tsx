import { Extend, Oval } from "@/ui/icons/styled";
import {
  GroupHeader,
  GroupInformationContainer,
  MainContainer,
  SectionContainer,
} from "./styled";
import { BodyApp, SecondaryTitle, Subtitle } from "@/ui/typography";
import { DropDown } from "@/ui/dropdown/styled";
import { useRouter } from "next/router";
import { useAlternativeSection, useGetFriends, useHover } from "@/lib/hooks";
import { formatDate } from "@/utils";
import { FriendsComponent } from "../friends-component";

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
            bottom="-50px"
          >
            <BodyApp
              align="center"
              style={{ cursor: "pointer" }}
              onClick={() => router.push(routeToGo)}
            >
              {section}
            </BodyApp>
          </DropDown>
        </SectionContainer>
      </GroupHeader>
      <FriendsComponent data={friends} />
    </MainContainer>
  );
}

// PASAR A LOS AMIGOS POR PROPS EN getStaticProps
