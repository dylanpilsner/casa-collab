import { MainContainer } from "./styled";
import { Hero } from "../hero";
import { Functions } from "./functions";
import { Features } from "./features";
import { Pricing } from "../pricing";
import { Contact } from "@/components/contact/index";

export function Landing() {
  return (
    <MainContainer>
      <Hero />
      <Functions />
      <Features />
      <Pricing />
      <Contact />
    </MainContainer>
  );
}
