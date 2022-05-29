import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
export default function EventPage() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout title="Events | JS Events">
      <div>
        <h1>My Event</h1>
        <button onClick={() => router.push("/")}>Button</button>
      </div>
    </Layout>
  );
}
