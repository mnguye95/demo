import React from "react";
import Head from "next/head";
import Nav from "../components/Nav";
import Body from "../components/Body";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Weiss - Asset Management & Business Consultations</title>
        <meta name="description" content="Weiss is a business consultant marketing SaaS company located on Earth. They serve over 200 countries and manage assets for 8 billion individuals." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <Body />
      </main>
      <Footer />
    </>
  );
}
