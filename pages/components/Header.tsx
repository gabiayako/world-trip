import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const Header = () => (
  <Flex bg="white" h="100px" justifyContent="center" alignItems="center">
    <Image alt="logo" width="184px" height="46px" src="/logo.png" />
  </Flex>
);
