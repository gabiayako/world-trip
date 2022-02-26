import type { NextPage } from "next";
import { Divider, Flex, Text } from "@chakra-ui/react";

import { Header, Banner, TravelTypes } from "./components";

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" mb="3rem">
      <Header />
      <Banner />
      <TravelTypes />

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
          maxWidth: "1240px",
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
              width="100%"
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
