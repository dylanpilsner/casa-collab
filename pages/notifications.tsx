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
