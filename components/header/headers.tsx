import {
  HeaderContainer,
  StyledHeader,
  UserContainer,
  UserImg,
  UserName,
} from "./styled";
import { Logo } from "@/ui/logo";
import { Burger, LandingBurger } from "../burger";
import { useEffect, useState } from "react";
import { LandingMobileNavMenu } from "../nav-menu/mobile";
import { MainButton } from "@/ui/buttons";
import { LandingDesktopNavMenu, NavMenu } from "../nav-menu/desktop";
import { useRouter } from "next/router";
import { User } from "@/ui/typography";
import { Extend } from "@/ui/icons/styled";

export function LoggedInHeader() {
  return (
    <div style={{ height: 100 }}>
      <HeaderContainer>
        <Logo />
        <div style={{ display: "flex", alignItems: "center" }}>
          <UserContainer>
            <UserImg src="https://res.cloudinary.com/denl6uihc/image/upload/v1692831428/vrtuo2ctutn5xkzzbuly.jpg" />
            <UserName>Dylan Pilsner</UserName>
          </UserContainer>
        </div>
      </HeaderContainer>
      <NavMenu />
    </div>
  );
}

export function LoggedOutHeader() {
  const [navMenuStatus, setNavMenuStatus] = useState("") as any;
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      if (window.scrollY > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: 100 }}>
      <HeaderContainer className={scrolled ? "scrolled" : ""}>
        <Logo />
        <LandingBurger callback={toggleNavMenu} menuStatus={navMenuStatus} />
        <LandingDesktopNavMenu />
        <MainButton
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
