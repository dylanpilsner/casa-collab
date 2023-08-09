import { Body } from "@/ui/typography";
import { ContainerPrice, CheckDiv, Button } from "./styled";
import Check from "@/ui/icons/check.svg";
import NotCheck from "@/ui/icons/notCheck.svg";
import { useState } from "react";
import { Modal } from "../modal";
import { usePricingModal } from "@/lib/hooks";

export function PricingCard({ callback }: any) {
  function handleClick() {
    callback();
  }

  return (
    <ContainerPrice>
      <h2>Free</h2>
      <Body>Accéde al plan gratuito y comenza el cambio</Body>
      <p
        style={{
          color: "#FF9052",
          fontSize: "3rem",
          fontWeight: "bold",
          margin: 0,
        }}
      >
        U$D 0
      </p>
      <Body>
        {" "}
        <span style={{ color: "var(--main-orange)" }}>Per Month</span>
      </Body>
      <Button onClick={handleClick}>Comprar</Button>
      <div style={{ marginTop: "3rem", textAlign: "start" }}>
        <CheckDiv>
          <Check />
          <Body>Asignación de tareas y seguimiento del progreso</Body>
        </CheckDiv>
        <CheckDiv>
          <Check />
          <Body>Recordatorios y notificaciones automáticas.</Body>
        </CheckDiv>
        <CheckDiv>
          <Check />
          <Body>Recordatorios y notificaciones automáticas.</Body>
        </CheckDiv>
        <CheckDiv>
          <NotCheck />
          <Body>Registro de gastos compartidos</Body>
        </CheckDiv>
        <CheckDiv>
          <NotCheck />
          <Body>Cálculo automático de contribuciones</Body>
        </CheckDiv>
      </div>
    </ContainerPrice>
  );
}
