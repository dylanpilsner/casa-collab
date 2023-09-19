import { ProfileForm } from "@/components/forms/profile-form";
import { Layout } from "@/components/layout";
import { fetchApi } from "@/lib/api";
import { useProfile } from "@/lib/hooks";
import { useEffect } from "react";

export default function Profile() {
  const { profile } = useProfile();
  const name = profile?.full_name;
  const email = profile?.email;
  const age = profile?.age;

  return (
    <Layout>
      <ProfileForm name={name} age={age} email={email} />
    </Layout>
  );
}
