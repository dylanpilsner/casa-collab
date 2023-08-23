import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
import { getProfile } from "@/lib/api";
import { useIsLogged } from "@/lib/hooks";
import Cookies from "js-cookie";
import { useEffect } from "react";
export default function Home() {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}
