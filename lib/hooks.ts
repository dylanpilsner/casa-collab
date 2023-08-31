import { NextRouter, useRouter } from "next/router";
import { useState, useEffect } from "react";
import useSWR from "swr";
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

function redirect(data: any, router: NextRouter) {
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
      redirect(data, router);
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
