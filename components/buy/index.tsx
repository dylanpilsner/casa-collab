import Close from "@/ui/icons/close.svg";
import { Div } from "./styled";

export function Buy(props: any) {
  const handleClick = (e: any) => {
    e.preventDefault();
    props.closes(false);
  };

  return (
    <Div>
      <span onClick={handleClick} style={{ cursor: "pointer" }}>
        {" "}
        <Close />
      </span>
      <div style={{ width: "100%" }}>
        <h4>
          Contactanos para obtener más información sobre nuestro servicio y cómo
          adquirirlo!
        </h4>
      </div>
    </Div>
  );
}
