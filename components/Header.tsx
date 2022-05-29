import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode
} from "@chakra-ui/react";
import React, { useState } from "react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";
import Router from "next/router";

export default function Header(props: any) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const handleToggle = (): void => {
    setIsOpen((p) => !p);
  };
  const handleCreateAccount = (): void => {
    Router.push("/login");
  };
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Heading as="h1" size="lg" letterSpacing={"tighter"} cursor="pointer">
            DJ Events
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href={"/about"}>
          <Text cursor="pointer">About</Text>
        </Link>
        <Link href={"/events"}>
          <Text cursor="pointer">Events</Text>
        </Link>
        <Link href={"/events/add"}>
          <Text cursor="pointer">Add event</Text>
        </Link>
      </Stack>

      <Flex
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        mt={{ base: 4, md: 0 }}
        gap={2}
      >
        <Button onClick={toggleColorMode} colorScheme={"teal"}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button
          variant="outline"
          _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          onClick={handleCreateAccount}
        >
          Create account
        </Button>
      </Flex>
    </Flex>
  );
}
