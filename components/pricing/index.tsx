import { Article } from "@/ui/box/styled";
import { Body, SubTitle } from "@/ui/typography";
import { useState, useEffect } from "react";
import { Button, CheckDiv, ContainerPrice, PricingContainer } from "./styled";
import { Buy } from "../buy";
import Check from "@/ui/icons/check.svg";
import NotCheck from "@/ui/icons/notCheck.svg";
import { Modal } from "@/components/modal/index";
import { PricingCard } from "../cards";
import { usePricingModal } from "@/lib/hooks";

export function Pricing() {
  const { winStatus, openModal, closeModal } = usePricingModal();

  function makeModalVisible() {
    openModal();
  }

  return (
    <PricingContainer>
      <PricingCard callback={makeModalVisible} />
      <PricingCard callback={makeModalVisible} />
      <Modal winStatus={winStatus} closeModal={closeModal} />
    </PricingContainer>
  );
}

// Puedo crear una función en la card, pasársela como prop onClick al botón, y que ejecute una función que le pase como prop a la card
