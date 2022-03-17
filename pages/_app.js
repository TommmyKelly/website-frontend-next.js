import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";
import Layout2 from "@/components/Layout2";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
