import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/home.module.scss";

const Home: NextPage = () => {
  return (
    <Flex>
      <Flex
        position="relative"
        w="100%"
        direction="column"
        px="8.75rem"
        pt="5rem"
        pb="4.3rem"
        backgroundPosition="top"
        backgroundSize="cover"
        backgroundImage="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=top&fp-y=.25&w=2753&h=600&q=80"
      >
        <Text w="27rem" color="white" fontSize="2.25rem">
          5 Continentes, infinitas possibilidades.
        </Text>
        <Text w="33rem" mt="1.25rem" color="white" fontSize="1.25rem">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
        </Text>
        <Flex position="absolute" bottom="5%" right="10%">
          <Image
            src="/airplane.png"
            className={styles.airplane}
            width="430px"
            height="292px"
            alt="banner-airplane"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
