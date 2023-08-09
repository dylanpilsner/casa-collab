import { Body, SubTitle } from "@/ui/typography";
import { Article, FirstContainer } from "./styled";
import { Slide } from "react-awesome-reveal";

export function Functions() {
  return (
    <Slide triggerOnce>
      <Article>
        <SubTitle>
          Qué podés <span style={{ color: "var(--main-orange)" }}> hacer?</span>
        </SubTitle>
        <FirstContainer>
          <div>
            <img src="/graph_icon.png" />
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
            <img src="/financial_icon.png" />
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
            <img src="market_icon.png" />
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
        </FirstContainer>
      </Article>
    </Slide>
  );
}
