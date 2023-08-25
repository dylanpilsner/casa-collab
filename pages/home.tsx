import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
import { fetchApi, getProfile } from "@/lib/api";
import { useAuth, useIsLogged } from "@/lib/hooks";
import Cookies from "js-cookie";
import { useEffect } from "react";
export default function Home({ isLogged }: any) {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const cookie = context.req.cookies.user_cookie;

  if (!cookie) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {
      logged: true,
    },
  };
}
