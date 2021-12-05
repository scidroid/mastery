import "tailwindcss/tailwind.css";
import { UserProvider } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Mastery</title>
      </Head>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  );
};

export default App;
