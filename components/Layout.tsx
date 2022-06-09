import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { LayoutInterface } from "../interfaces";
import Footer from "./Footer";
import Header from "./Header";
import ShowCase from "./ShowCase";

export default function Layout({
  title,
  keywords,
  description,
  children
}: LayoutInterface) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === "/" && <ShowCase />}
      <Container as="main">{children}</Container>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  title: "DJ Events |  Find the best events for you and your friends!",
  keywords: "dj, event, party, nice place",
  description: "Find the best events on eventsfordjs.com"
};
