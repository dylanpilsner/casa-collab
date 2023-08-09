import { Body } from "@/ui/typography";
import { ContainerPrice, CheckDiv, Button } from "./styled";
import Check from "@/ui/icons/check.svg";
import NotCheck from "@/ui/icons/notCheck.svg";
import { MainButton } from "@/ui/buttons";

export function PricingCard({
  callback,
  title,
  description,
  children,
  price,
}: any) {
  function isChecked(item: boolean) {
    return item ? <Check /> : <NotCheck />;
  }

  function handleClick() {
    callback();
  }

  const colorPrice = {
    color: "#FF9052",
    fontSize: "3rem",
    fontWeight: "bold",
    margin: 0,
  };

  return (
    <ContainerPrice>
      <h2>{title}</h2>
      <Body>{description}</Body>
      <p style={colorPrice}>U$D {price}</p>
      <Body>
        <span style={{ color: "var(--main-orange)" }}>Per Month</span>
      </Body>
      <MainButton text="Comprar" callback={handleClick} />
      <div style={{ marginTop: "3rem", textAlign: "start" }}>
        {children?.map((i: any) => {
          return (
            <CheckDiv key={i.id}>
              {isChecked(i.checked)}
              <Body align="start">{i.feature}</Body>
            </CheckDiv>
          );
        })}
      </div>
    </ContainerPrice>
  );
}
