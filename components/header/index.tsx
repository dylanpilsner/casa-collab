import { HeaderContainer, StyledHeader } from "./styled";
import { Logo } from "@/ui/logo";
import { Burger } from "../burger";
import { useEffect, useState } from "react";
import { NavMenu } from "../mobile-nav-menu";
import { MainButton } from "@/ui/buttons";
import { DesktopNavMenu } from "../desktop-nav-menu";
import { useRouter } from "next/router";

export function Header() {
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
    <StyledHeader>
      <HeaderContainer className={scrolled ? "scrolled" : ""}>
        <Logo />
        <Burger callback={toggleNavMenu} menuStatus={navMenuStatus} />
        <DesktopNavMenu />
        <MainButton text="Contacto" callback={() => goTo("#contact")} />
      </HeaderContainer>
      <NavMenu status={navMenuStatus} closeNavMenu={closeNavMenu} />
    </StyledHeader>
  );
}
