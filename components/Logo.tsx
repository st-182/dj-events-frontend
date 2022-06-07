import { Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Flex align="center" mr={5}>
      <Link href="/">
        <Heading as="h1" size="lg" letterSpacing={"tighter"} cursor="pointer">
          DJ Events
        </Heading>
      </Link>
    </Flex>
  );
}
