import { PricingContainer } from "./styled";
import { Modal } from "@/components/modal/index";
import { PricingCard } from "../cards";
import { usePricingModal } from "@/lib/hooks";
import { Fade } from "react-awesome-reveal";
import { Subtitle } from "@/ui/typography";

export function Pricing() {
  const { winStatus, openModal, closeModal } = usePricingModal();

  function makeModalVisible() {
    openModal();
  }

  return (
    <div>
      <Subtitle>
        Empezá tu{" "}
        <span style={{ color: "var(--main-orange)" }}> free trial </span>por un
        mes, accediendo a todas las funciones!
      </Subtitle>
      <h4 style={{ textAlign: "center" }}>
        Después, podés elegir pagar la versión{" "}
        <span style={{ color: "var(--main-orange)" }}>premium</span> o continuar
        con el plan gratuito
      </h4>
      <PricingContainer id="pricing">
        <Fade triggerOnce>
          <PricingCard
            callback={makeModalVisible}
            title="Free"
            description="Accedé al plan gratuito y comenzá el cambio"
            price="0"
          >
            {[
              {
                feature: "Asignación de tareas y seguimiento del progreso",
                id: 1,
                checked: true,
              },
              {
                feature: "Recordatorios y notificaciones automáticas.",
                id: 2,
                checked: true,
              },
              {
                feature: "Registro de gastos compartidos.",
                id: 3,
                checked: false,
              },
              {
                feature: "Cálculo automático de contribuciones.",
                id: 4,
                checked: false,
              },
            ]}
          </PricingCard>

          <PricingCard
            callback={makeModalVisible}
            title="Premium"
            description="Probá todas las funcionalidades gratis por 30 días"
            price="1"
          >
            {[
              {
                feature: "Asignación de tareas y seguimiento del progreso",
                id: 5,
                checked: true,
              },
              {
                feature: "Recordatorios y notificaciones automáticas.",
                id: 6,
                checked: true,
              },
              {
                feature: "Registro de gastos compartidos.",
                id: 7,
                checked: true,
              },
              {
                feature: "Cálculo automático de contribuciones.",
                id: 8,
                checked: true,
              },
            ]}
          </PricingCard>
        </Fade>
        <Modal winStatus={winStatus} closeModal={closeModal} />
      </PricingContainer>
    </div>
  );
}
