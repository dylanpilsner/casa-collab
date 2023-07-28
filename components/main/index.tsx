import { SubTitle, Body } from "@/ui/typography";
import Market from "@/ui/icons/market.svg";
import Graph from "@/ui/icons/graph.svg";
import Financial from "@/ui/icons/financial.svg";
import Task from "@/ui/icons/tasks-assign.svg";
import Finance from "@/ui/icons/finance.svg";
import Progress from "@/ui/icons/progress-tracking.svg";
import Check from "@/ui/icons/check.svg";
import NotCheck from "@/ui/icons/notCheck.svg";
import Send from "@/ui/icons/send.svg";
import {
  Article,
  PrimerContenedor,
  MainContainer,
  ContainerPrice,
  CheckDiv,
  Button,
  Input,
  Label,
  FormDiv,
} from "./styled";
import { Buy } from "../buy";
import { useState } from "react";
import Close from "@/ui/icons/close.svg";
import { Hero } from "../hero";
import { sendForm } from "@/lib/api";

export function Main() {
  const [winOpen, setWinOpen] = useState(false);
  const [closeForm, setCloseForm] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    setWinOpen(true);
  };
  const handleClose = (e: any) => {
    setWinOpen(false);
  };
  const handleCloseForm = (e: any) => {
    e.preventDefault();
    setCloseForm(false);
  };

  async function submitForm(e: any) {
    e.preventDefault();
    const target = e.target;
    await sendForm(target);
  }

  return (
    <MainContainer>
      <Hero />
      <Article>
        <SubTitle>
          Qué podés <span style={{ color: "var(--main-orange)" }}> hacer?</span>
        </SubTitle>
        <PrimerContenedor>
          <div>
            <Market />
            <h3 style={{ color: "#2B3377" }}>
              Organiza y asigna tareas domésticas
            </h3>
            <Body>
              Con nuestra aplicación, puedes crear una lista de tareas
              domésticas y asignarlas de manera equitativa entre los miembros
              del hogar.{" "}
            </Body>
          </div>
          <div>
            <Graph />
            <h3 style={{ color: "#2B3377" }}>
              Registra y divide los gastos compartidos
            </h3>
            <Body>
              Lleva un registro de los gastos compartidos, como el alquiler, las
              facturas o las compras conjuntas, y divide automáticamente los
              costos entre los miembros del hogar. Olvídate de cálculos
              complicados y malentendidos financieros.{" "}
            </Body>
          </div>
          <div>
            <Financial />
            <h3 style={{ color: "#2B3377" }}>
              Mantén un seguimiento en tiempo real
            </h3>
            <Body>
              Lleva un registro de los gastos compartidos, como el alquiler, las
              facturas o las compras conjuntas, y divide automáticamente los
              costos entre los miembros del hogar. Olvídate de cálculos
              complicados y malentendidos financieros.{" "}
            </Body>
          </div>
        </PrimerContenedor>
      </Article>

      <SubTitle id="features">
        Beneficios{" "}
        <span style={{ color: "var(--main-orange)" }}> destacados</span>
      </SubTitle>

      <Article>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Task />
          <div style={{ width: "420px" }}>
            <SubTitle>Asignación de tareas</SubTitle>
            <hr
              style={{
                width: "50px",
                border: "1px solid var(--cooper)",
                margin: 0,
              }}
            ></hr>
            <Body $align="start">
              Descubre la forma más inteligente y eficiente de asignar y
              gestionar las tareas del hogar. Nuestra aplicación te permite
              delegar responsabilidades de manera rápida y sencilla, asegurando
              que cada miembro del hogar esté involucrado y comprometido con la
              organización diaria. Simplifica la coordinación y mejora la
              productividad en tu hogar con nuestra intuitiva función de
              asignación de tareas.
            </Body>
          </div>
        </div>
      </Article>

      <Article>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "#FAFAFF",
            flexWrap: "wrap-reverse",
          }}
        >
          <div style={{ width: "420px" }}>
            <SubTitle>Seguimiento del progreso</SubTitle>
            <hr
              style={{
                width: "50px",
                border: "1px solid var(--cooper)",
                margin: 0,
              }}
            ></hr>
            <Body align="start">
              Mantén un control total sobre el progreso de las tareas asignadas.
              Nuestra interfaz intuitiva te permite ver rápidamente qué tareas
              están completas, cuáles están en proceso y cuáles necesitan
              atención adicional, lo que te ayuda a mantener todo en orden sin
              esfuerzo.
            </Body>
          </div>
          <Progress />
        </div>
      </Article>

      <Article>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Finance />
          <div style={{ width: "420px" }}>
            <SubTitle>Registro de gastos compartido</SubTitle>
            <hr
              style={{
                width: "50px",
                border: "1px solid var(--cooper)",
                margin: 0,
              }}
            ></hr>
            <Body align="start">
              Simplifica la gestión financiera en tu hogar con nuestro sistema
              de registro de gastos compartidos. Registra fácilmente los gastos
              y categorízalos para tener una visión clara de dónde se está
              gastando el dinero, evitando sorpresas desagradables y promoviendo
              una distribución equitativa de los costos.
            </Body>
          </div>
        </div>
      </Article>

      <Article id="pricing">
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
      </Article>

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
                  <Button>
                    Enviar <Send />
                  </Button>
                </div>
              </form>
            </div>
          </FormDiv>
        ) : null}
      </div>
    </MainContainer>
  );
}
