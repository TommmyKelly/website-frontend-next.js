import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        type='module'
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'
      />
      <Script
        nomodule
        src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'
      />

      <Head></Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
