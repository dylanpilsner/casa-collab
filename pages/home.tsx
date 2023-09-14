import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
import { cookie } from "@/utils";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log(cookie.get("auth_token"));
  }, []);

  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}
