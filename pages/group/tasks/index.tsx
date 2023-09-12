import { HomeComponent } from "@/components/home";
import { Layout } from "@/components/layout";
export default function Home({ isLogged }: any) {
  return (
    <Layout>
      <HomeComponent />
    </Layout>
  );
}

// export async function getServerSideProps(context: any) {
//   const cookie = context.req.cookies.user_cookie;

//   if (!cookie) {
//     return {
//       redirect: {
//         destination: "/sign-in",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       logged: true,
//     },
//   };
// }
