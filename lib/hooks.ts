import useSWR from "swr";
import useSWRImmutable from "swr/immutable";
import { NextRouter, useRouter } from "next/router";
import { useState, useEffect } from "react";

import { fetchApi } from "./api";

function useGetLocalStorageData(key: string) {
  const [data, setData] = useState();

  useEffect(() => {
    const localStorageInfo = localStorage.getItem(key);

    if (localStorageInfo) {
      setData(JSON.parse(localStorageInfo));
    }
  }, []);

  return data;
}

export function useUserScrolled() {
  const [scrolled, setScrolled] = useState(false);
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

  return { scrolled };
}

function useRedirect(data: any, router: NextRouter) {
  if (!data.status && router.pathname === "/") {
    router.push("/home");
  }
  if (data.status >= 300 && router.pathname !== "/") {
    router.push("/sign-in");
    console.log(3);
  }

  if (!data.status) {
    if (router.pathname === "/") {
      console.log(2);
      router.push("/home");
    }
  }
}

export function useHeader() {
  const router = useRouter();
  const pathname = router.pathname;
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (pathname !== "/" && pathname !== "/sign-in") {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [pathname]);

  return isLogged;
}

export function useIsLogged() {
  useEffect(() => {
    console.log("test");
  });
}

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchApi("/me").then((data) => {
      useRedirect(data, router);
    });
  }, []);
}

export function usePricingModal() {
  const [winStatus, setWinStatus] = useState(false);

  function openModal() {
    setWinStatus(true);
  }

  function closeModal() {
    setWinStatus(false);
  }

  return { openModal, closeModal, winStatus };
}
export function useContact() {
  const [contactStatus, setContactStatus] = useState(false);

  function openContact() {
    setContactStatus(true);
  }

  function closeContact() {
    setContactStatus(false);
  }

  return { openContact, closeContact, contactStatus };
}
export function useLoader() {
  const [loader, setLoader] = useState(false);

  function showLoader() {
    setLoader(true);
  }

  function hideLoader() {
    setLoader(false);
  }

  return { showLoader, hideLoader, loader };
}

export function useProfile() {
  const { data, mutate } = useSWRImmutable("/me", fetchApi);
  return { profile: data, mutateProfile: mutate };
}
export function useGetFriends() {
  const { data, mutate } = useSWRImmutable("/friend", fetchApi);
  return { friends: data?.friends, mutateFriends: mutate };
}
export function useGetNotifications() {
  const { data, mutate } = useSWR("/notifications", fetchApi);
  return { notifications: data, mutateNotifications: mutate };
}

export function useAlternativeSection() {
  const router = useRouter();
  const [section, setSection] = useState("closed");

  useEffect(() => {
    const pathnameArray = router.pathname.split("/");

    if (pathnameArray[2] === "expenses") {
      setSection("Gastos");
    }
    if (pathnameArray[2] === "tasks" || router.pathname === "/home") {
      setSection("Tareas");
    }
  }, [router.pathname]);

  return section;
}

export function useHover(key: string) {
  const [hover, setHover] = useState({} as any);

  useEffect(() => {
    setHover({ ...hover, [key]: { status: "closed" } });
  }, []);

  function setOpenedStatus() {
    setHover({ ...hover, [key]: { status: "opened" } });
  }

  function setClosedStatus() {
    setHover({ ...hover, [key]: { status: "closed" } });
  }

  return { hover, setOpenedStatus, setClosedStatus };
}
