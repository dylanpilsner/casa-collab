import {
  FunctionContainer,
  HeaderContainer,
  RightSectionContainer,
} from "./styled";
import { Logo } from "@/ui/logo";
import { LandingBurger } from "../burger";
import { useState } from "react";
import { LandingMobileNavMenu } from "../nav-menu/mobile";
import { HeaderMainButton } from "@/ui/buttons";
import { LandingDesktopNavMenu, NavMenu } from "../nav-menu/desktop";
import { useRouter } from "next/router";
import { UserHeader } from "@/ui/user";
import { useProfile, useUserScrolled } from "@/lib/hooks";
import { Add, AddFriend, Bell } from "@/ui/icons/styled";
import { LightningBox } from "@/ui/box/styled";
import { AddFriendForm, AddGroupForm } from "../forms/add-form";

export function LoggedInHeader() {
  const [navStatus, setNavStatus] = useState("") as any;
  const [friendForm, setFriendForm] = useState("") as any;
  const [groupForm, setGroupForm] = useState("") as any;
  const { scrolled } = useUserScrolled();
  const { profile } = useProfile();
  const router = useRouter();

  function toggleNavMenu() {
    if (!navStatus || navStatus === "closed") {
      setNavStatus("opened");
    } else {
      setNavStatus("closed");
    }
    document.body.style.overflow = navStatus === "opened" ? "auto" : "hidden";
  }

  function openFriendForm() {
    setFriendForm("opened");
    document.body.style.overflow = "hidden";
  }
  function closeFriendForm() {
    setFriendForm("closed");
    document.body.style.overflow = "auto";
  }
  function openGroupForm() {
    setGroupForm("opened");
    document.body.style.overflow = "hidden";
  }
  function closeGroupForm() {
    setGroupForm("closed");
    document.body.style.overflow = "auto";
  }

  return (
    <div style={{ height: 100 }}>
      <AddGroupForm visibility={groupForm} callback={closeGroupForm} />
      <AddFriendForm visibility={friendForm} callback={closeFriendForm} />
      <HeaderContainer className={scrolled ? "scrolled" : ""}>
        <Logo />
        <RightSectionContainer>
          <FunctionContainer>
            <LightningBox onClick={() => router.push("/notifications")}>
              <Bell />
            </LightningBox>
            <LightningBox>
              <Add onClick={openGroupForm} />
            </LightningBox>
            <LightningBox>
              <AddFriend onClick={openFriendForm} />
            </LightningBox>
          </FunctionContainer>
          <UserHeader
            name={profile?.full_name}
            img={profile?.profile_img}
            callback={toggleNavMenu}
          />
        </RightSectionContainer>
      </HeaderContainer>
      <NavMenu navStatus={navStatus} callback={toggleNavMenu} />
    </div>
  );
}

export function LoggedOutHeader() {
  const [navMenuStatus, setNavMenuStatus] = useState("") as any;
  const { scrolled } = useUserScrolled();
  const router = useRouter();

  function goTo(url: string) {
    router.push(url);
  }
  function toggleNavMenu() {
    if (navMenuStatus === "closed" || navMenuStatus === "") {
      setNavMenuStatus("opened");
    } else {
      setNavMenuStatus("closed");
    }
  }

  function closeNavMenu() {
    setNavMenuStatus("closed");
  }

  return (
    <div style={{ height: 100 }}>
      <HeaderContainer className={scrolled ? "scrolled" : ""}>
        <Logo />
        <LandingBurger callback={toggleNavMenu} menuStatus={navMenuStatus} />
        <LandingDesktopNavMenu />
        <HeaderMainButton
          text="Iniciar sesión"
          width="171px"
          callback={() => goTo("sign-in")}
        />
      </HeaderContainer>
      <LandingMobileNavMenu
        status={navMenuStatus}
        closeNavMenu={closeNavMenu}
      />
    </div>
  );
}
