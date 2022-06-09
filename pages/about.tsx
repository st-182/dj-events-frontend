import NextLink from "next/link";
import React from "react";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About | DJ Events">
      <div>
        <h1>About</h1>
        <p>Page for finding musical events.</p>
        <p>Version 1.0</p>
        <NextLink href="/">Home</NextLink>
      </div>
    </Layout>
  );
}
