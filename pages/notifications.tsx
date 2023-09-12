import { Layout } from "@/components/layout";
import { NotificationsComponent } from "@/components/notifications";
import { useEffect } from "react";

export default function NotificactionsPage({ cookies }: any) {
  useEffect(() => {
    console.log(cookies);
  }, []);
  return (
    <Layout>
      <NotificationsComponent />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = context.req.headers.cookie as string;

  if (cookies.slice(0, 11) !== "user_cookie") {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
