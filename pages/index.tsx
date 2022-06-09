import NextLink from "next/link";
import Head from "next/head";
import Layout from "@/components/Layout";
import { Heading, Link } from "@chakra-ui/react";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>DJ events</title>
        <meta name="description" content="Welcome to DJ events!" />
      </Head>
      <Heading as="h1">Home</Heading>
      <NextLink href="/about" passHref>
        <Link>About</Link>
      </NextLink>
      <NextLink href="/abouttt" passHref>
        <Link>Broken link</Link>
      </NextLink>
    </Layout>
  );
}
