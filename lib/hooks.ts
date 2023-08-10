import { useState } from "react";

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
