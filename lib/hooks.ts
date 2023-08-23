import { useState, useEffect } from "react";
import useSWR from "swr";

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

export function useIsLogged() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data } = useSWR("http://localhost:3000/me", fetcher);
  return data;
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
