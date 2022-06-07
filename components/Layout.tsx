import { Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { LayoutInterface } from "../interfaces";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  title,
  keywords,
  description,
  children
}: LayoutInterface) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
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
