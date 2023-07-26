import { Footer } from "../footer";
import { Header } from "../header";

type Layout = {
  children: React.ReactNode;
};

export function Layout({ children }: Layout) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
