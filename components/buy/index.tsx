import styled from "styled-components";
import Close from "@/ui/icons/close.svg";

const Div = styled.div<any>`
  position: sticky;
  top: 20%;
  color: white;
  right: 10%;
  left: 10%;
  bottom: 10%;
  display: flex;
  background-color: #f5ac52;
  border-radius: 20px;
  font-size: 2rem;
  height: 450px;
  flex-direction: column;
  justify-content: right;
  align-items: end;
  padding: 20px;

  @media (min-width: 1020px) {
    font-size: 3rem;
  }
`;

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
