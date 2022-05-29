import Head from "next/head";
import React from "react";
import { LayoutInterface } from "../interfaces";

export default function Layout({
  title,
  keywords,
  description,
  children
}: LayoutInterface) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <main>{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events |  Find the best events for you and your friends!",
  keywords: "dj, event, party, nice place",
  description: "Find the best events on eventsfordjs.com"
};
