import { Layout } from "@/components/layout";
import { Landing } from "@/components/landing-component";
import Cookies from "js-cookie";

export default function LandingPage() {
  return (
    <Layout>
      <Landing />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const cookie = context.req.cookies.user_cookie;

  if (cookie) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
