import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
export default function Home({ isLogged }: any) {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}
