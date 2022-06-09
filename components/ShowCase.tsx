import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function ShowCase() {
  const bannerBackground = useColorModeValue("#ffffff7f", "#0000007f");
  return (
    <Box background={" url(./images/showcase.jpg)"}>
      <Box
        textAlign={"center"}
        backdropFilter={"auto"}
        backdropBlur={"5px"}
        background={bannerBackground}
        p={10}
      >
        <Heading as="h1">Welcome to the party!</Heading>
        <Heading>--- Find the hottest events here ---</Heading>
      </Box>
    </Box>
  );
}
