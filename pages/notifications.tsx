import { Layout } from "@/components/layout";
import { NotificationsComponent } from "@/components/notifications";

export default function NotificactionsPage() {
  return (
    <Layout>
      <NotificationsComponent />
    </Layout>
  );
}

export async function getServerSideProps(context: any) {
  const cookies = context.req.cookies.user_cookie;

  if (!cookies) {
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
