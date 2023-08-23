import { useIsLogged } from "@/lib/hooks";
import { MainContainer } from "./styled";

export function HomeComponent() {
  async function handleClick() {
    const res = await fetch("http://localhost:3000/test");
    const data = await res.json();
    console.log(data);
  }

  return (
    <MainContainer>
      <button onClick={handleClick}>TEST</button>
    </MainContainer>
  );
}
