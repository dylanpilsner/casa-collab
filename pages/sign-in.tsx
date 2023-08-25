import { Layout } from "@/components/layout";
import { SignInComponent } from "@/components/sign-in";
import { useAuth } from "@/lib/hooks";

export default function SignIn() {
  return (
    <Layout>
      <SignInComponent />
    </Layout>
  );
}
