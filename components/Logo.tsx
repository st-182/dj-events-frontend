import React from 'react'

type

export default function Logo({mr}:) {
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
