import { ProfileForm } from "@/components/forms/profile-form";
import { Layout } from "@/components/layout";
import { fetchApi } from "@/lib/api";
import { useProfile } from "@/lib/hooks";
import { useEffect } from "react";

export default function Profile() {
  const { profile } = useProfile();
  const name = profile?.full_name;
  const email = profile?.email;

  return (
    <Layout>
      <ProfileForm name={name} email={email} />
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
