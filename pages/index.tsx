import type { NextPage } from "next";
import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/home.module.scss";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const TravelType = ({ image, label }: { image: string; label: string }) => (
  <VStack spacing="1.5rem">
    <Image alt={label} width="85px" height="85px" src={image} />
    <Text fontSize="1.5rem" lineHeight="2.25rem" fontWeight={600}>
      {label}
    </Text>
  </VStack>
);

const Home: NextPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <Flex flexDir="column" mb="3rem">
      <Flex bg="white" h="100px" justifyContent="center" alignItems="center">
        <Image alt="logo" width="184px" height="46px" src="/logo.png" />
      </Flex>
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

      <Flex my="5rem" px="8.75rem" justify="space-between">
        <TravelType image="/cocktail.png" label="vida noturna" />
        <TravelType image="/surf.png" label="praia" />
        <TravelType image="/building.png" label="moderno" />
        <TravelType image="/museum.png" label="clássico" />
        <TravelType image="/earth.png" label="e mais..." />
      </Flex>

      <Divider w="90px" h="1px" borderBottom="1px solid #47585B" />

      <Text
        fontSize="2.25rem"
        lineHeight="3.375rem"
        fontWeight={500}
        color="47585B"
        textAlign="center"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Text>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        navigation
        pagination={{ clickable: true }}
        style={{
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": 0.9,
          "--swiper-navigation-color": "#FFBA08",
          "--swiper-pagination-color": "#FFBA08",
        }}
      >
        {swiperData.map(({ name, imageUri }) => (
          <SwiperSlide key={name}>
            <Flex
              bgGradient="linear(to-b, gray.900, gray.700)"
              width="1240px"
              height="450px"
              backgroundPosition="center"
              backgroundSize="cover"
              bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${imageUri})`}
            />
            <Flex position="absolute">
              <Text fontSize="3rem" color="white">
                {name}
              </Text>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

const swiperData = [
  {
    name: "Asia",
    imageUri:
      "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1684&q=80",
  },
  {
    name: "America",
    imageUri:
      "https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80",
  },
  {
    name: "Europa",
    imageUri:
      "https://bigseventravel.com/wp-content/uploads/2019/08/Screenshot-2019-08-13-at-16.38.03.png",
  },
];

export default Home;
