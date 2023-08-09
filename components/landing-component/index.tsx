import { SubTitle } from "@/ui/typography";
import { MainContainer, Input, Label, FormDiv } from "./styled";
import { useEffect, useState } from "react";
import React from "react";
import Close from "@/ui/icons/close.svg";
import { Hero } from "../hero";
import { sendForm } from "@/lib/api";
import { Loader } from "../../ui/loader";
import { Functions } from "./functions";
import { Features } from "./features";
import { Pricing } from "../pricing";

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
      <Pricing />

      {loading ? <Loader /> : null}
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
                  {/* Enviar <Send />  */}
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
