import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout title="About | DJ Events">
      <div>
        <h1>About</h1>
        <p>Page for finding musical events.</p>
        <p>Version 1.0</p>
        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
}
