import { Subtitle } from "@/ui/typography";
import { Slide } from "react-awesome-reveal";
import { Feature } from "../feature";

export function Features() {
  return (
    <div id="features">
      <Slide triggerOnce>
        <Subtitle align="center" margin="20px">
          Beneficios{" "}
          <span style={{ color: "var(--main-orange)" }}> destacados</span>
        </Subtitle>
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <Feature src="/tasks-assign.png" title="Asignación de tareas">
            Descubre la forma más inteligente y eficiente de asignar y gestionar
            las tareas del hogar. Nuestra aplicación te permite delegar
            responsabilidades de manera rápida y sencilla, asegurando que cada
            miembro del hogar esté involucrado y comprometido con la
            organización diaria. Simplifica la coordinación y mejora la
            productividad en tu hogar con nuestra intuitiva función de
            asignación de tareas.
          </Feature>

          <Feature
            src="/progress-tracking.png"
            direction="row-reverse"
            bgcolor="#FAFAFF"
            title="Seguimiento del progreso"
          >
            Mantén un control total sobre el progreso de las tareas asignadas.
            Nuestra interfaz intuitiva te permite ver rápidamente qué tareas
            están completas, cuáles están en proceso y cuáles necesitan atención
            adicional, lo que te ayuda a mantener todo en orden sin esfuerzo.
          </Feature>

          <Feature src="/finance.png" title="Registro de gastos compartido">
            Simplifica la gestión financiera en tu hogar con nuestro sistema de
            registro de gastos compartidos. Registra fácilmente los gastos y
            categorízalos para tener una visión clara de dónde se está gastando
            el dinero, evitando sorpresas desagradables y promoviendo una
            distribución equitativa de los costos.
          </Feature>
        </div>
      </Slide>
    </div>
  );
}
