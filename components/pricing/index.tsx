import { Article } from "@/ui/box/styled";
import { Body, SubTitle } from "@/ui/typography";
import { useState } from "react";
import { Button, CheckDiv, ContainerPrice } from "./styled";
import { Buy } from "../buy";
import Check from "@/ui/icons/check.svg";
import NotCheck from "@/ui/icons/notCheck.svg";

export function Pricing() {
  const [winOpen, setWinOpen] = useState(false);

  const handleClose = (e: any) => {
    setWinOpen(false);
    (document as any).body.style.overflow = "auto";
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    setWinOpen(true);
    (document as any).body.style.overflow = "hidden";
  };

  return (
    // <Article id="pricing">
    <div>
      {winOpen ? <Buy closes={handleClose}></Buy> : null}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: "4rem",
        }}
      >
        {/* <ContainerPrice>
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
        </ContainerPrice> */}
        <ContainerPrice>
          <h2>Premium</h2>
          <Body>Probá todas las funcionalidades gratis por 30 días</Body>
          <p
            style={{
              color: "#FF9052",
              fontSize: "3rem",
              fontWeight: "bold",
              margin: 0,
            }}
          >
            U$D 1
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
              <Check />
              <Body>Registro de gastos compartidos</Body>
            </CheckDiv>
            <CheckDiv>
              <Check />
              <Body>Cálculo automático de contribuciones</Body>
            </CheckDiv>
          </div>
        </ContainerPrice>
      </div>
    </div>
    // </Article>
  );
}
