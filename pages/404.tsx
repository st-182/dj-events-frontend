import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Link,
  Text
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Layout from "@/components/Layout";
import { TbError404 } from "react-icons/tb";
export default function NotFoundPage() {
  return (
    <Layout title="404 | Not Found">
      <Box>
        <Heading as="h1" display={"flex"} gap={2} alignItems="center">
          <Icon
            as={TbError404}
            w={12}
            h={12}
            transform={"auto"}
            translateY={".2rem"}
          />
          Page not found :)
        </Heading>
        <Text>
          This is my favorite part! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Necessitatibus recusandae doloremque eum autem
          adipisci, ullam numquam molestias aperiam vitae delectus aspernatur
          odio inventore natus amet voluptatem fugit! Sint, accusamus quia?
        </Text>
        <NextLink href={"/"} passHref>
          <Link>Home</Link>
        </NextLink>
      </Box>
    </Layout>
  );
}
