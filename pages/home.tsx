import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Home({ cookie }: any) {
  useEffect(() => {
    // console.log(Cookies.get("auth_token"));
    console.log(cookie);
  }, []);

  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const cookie = context.req.cookies.auth_token;
  // const cookie = 1;
  // const cookie = Cookies.get("auth_token");

  // if (!cookie) {
  //   return {
  //     redirect: {
  //       destination: "/sign-in",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: { cookie },
  };
}
