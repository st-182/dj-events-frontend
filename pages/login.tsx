import {
  Button,
  Flex,
  Heading,
  Input,
  useColorModeValue
} from "@chakra-ui/react";
import React from "react";
import Layout from "@/components/Layout";

export default function login() {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Layout title="Login | DJ events">
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log In</Heading>
          <Input placeholder="Email" type={"email"} variant="filled" mb={3} />
          <Input
            placeholder="Password"
            type={"password"}
            variant="filled"
            mb={6}
          />
          <Button colorScheme={"teal"} mb={6}>
            Log In
          </Button>
        </Flex>
      </Flex>
    </Layout>
  );
}
