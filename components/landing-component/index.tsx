import { SubTitle } from "@/ui/typography";
import { MainContainer, Input, Label, FormDiv } from "./styled";
import { useEffect, useState } from "react";
import React from "react";
import Close from "@/ui/icons/close.svg";
import { Hero } from "../hero";
import { sendForm } from "@/lib/api";
import { Slide } from "react-awesome-reveal";
import { Loader } from "../../ui/loader";
import { Functions } from "./functions";
import { Features } from "./features";
import { Pricing } from "../pricing";
import { Article } from "@/ui/box/styled";
import { Modal } from "../modal";

export function Landing() {
  const [closeForm, setCloseForm] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        alert("Su mensaje se envió correctamente");
      }, 2000);
    }
  }, [loading]);

  const handleCloseForm = (e: any) => {
    e.preventDefault();
    setCloseForm(false);
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setCloseForm(false);
    const target = e.target;
    await sendForm(target);
  };

  return (
    <MainContainer>
      <Hero />
      <Functions />
      <Features />
      {/* <Slide triggerOnce> */}
      <Pricing />

      {/* <Article id="pricing">
          {winOpen ? <Buy closes={handleClose}></Buy> : null}
          <SubTitle>
            Empezá tu{" "}
            <span style={{ color: "var(--main-orange)" }}> free trial </span>por
            un mes, accediendo a todas las funciones!
          </SubTitle>
          <h4>
            Después, podés elegir pagar la versión{" "}
            <span style={{ color: "var(--main-orange)" }}>premium</span> o
            continuar con el plan gratuito
          </h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
              marginTop: "4rem",
            }}
          >
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
        </Article> */}
      {/* </Slide> */}
      {loading ? <Loader></Loader> : null}
      <div style={{ backgroundColor: "#FAFAFF" }}>
        <SubTitle id="contact">
          {" "}
          Podés contactarnos apretando{" "}
          <span
            style={{ color: "var(--main-orange)", cursor: "pointer" }}
            onClick={(e: any) => {
              e.preventDefault();
              setCloseForm(true);
            }}
          >
            {" "}
            Aquí{" "}
          </span>
        </SubTitle>
        {closeForm ? (
          <FormDiv onSubmit={submitForm}>
            <div
              style={{
                backgroundColor: "#26302E",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "end",
              }}
            >
              <Close
                style={{
                  marginTop: "1rem",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                onClick={handleCloseForm}
              ></Close>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  color: "#fff",
                  padding: "1.5rem 3rem",
                }}
                onSubmit={submitForm}
              >
                <div>
                  <Label htmlFor="name">Tu nombre</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Dylan Bruno"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Tu email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="ejemplo@hotmail.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="descripcion">Mensaje</Label>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    cols={30}
                    rows={10}
                    style={{
                      border: "1px solid #000",
                      borderRadius: "10px",
                      padding: "10px 10px",
                    }}
                    required
                  ></textarea>
                </div>
                <div style={{ display: "inherit", justifyContent: "center" }}>
                  {/* <Button> */}
                  {/* Enviar <Send />  VEEEEEEEEEEEEEEEEEEEER*/}
                  {/* </Button> */}
                </div>
              </form>
            </div>
          </FormDiv>
        ) : null}
      </div>
    </MainContainer>
  );
}
