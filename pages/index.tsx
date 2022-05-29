import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from "next/head";
import Layout from "./../components/Layout";
export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>DJ events</title>
          <meta name="description" content="Welcome to DJ events!" />
        </Head>
        <h1>Home</h1>
        <Link href="/about">About</Link>
      </div>
    </Layout>
  );
}
