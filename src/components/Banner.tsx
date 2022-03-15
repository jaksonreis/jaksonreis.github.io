import { Box, Flex, Text } from "@chakra-ui/react";
import { ParallaxBanner } from "react-scroll-parallax";

import bg from "../assets/bg_space.jpg"
import avatar from "../assets/planet.png"
import meteoro from "../assets/meteoro.png"
import { Image } from '@chakra-ui/react'
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";


export function Banner() {
  const background: BannerLayer = {
    translateY: [0, 50],
    opacity: [1, 0],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Box h="100%">
        <Image
        fit="fill"
        h="100%"
          src={bg}
          alt='Dan Abramov'
        />
      </Box>
    ),
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    children: (
      <Flex direction="column" position="absolute" inset="0" align="center" justify="center" mt="100px">
        
    
        <Text fontSize={["md", "2xl"]} color="gray.100" lineHeight="1" >PORTIFÓLIO</Text>
      <Text fontSize={["3xl", "5xl", "7xl"]} color="white" lineHeight="1"	>Jakson Reis</Text>
        <Text fontSize={["lg","xl"]} color="white">| FRONT-END DEVELOPER | DESIGNER |</Text>


      </Flex>
    ),
  };




  const foreground: BannerLayer = {
    translateX: [0, 5],
    translateY: [0, 5],
    scale: [1, 0.8, 'easeOutCubic'],
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
    children: (
      <Flex position="relative" right="-150px" bottom="-80px" justify="end" align="end" h="100%">
        <Image
          h={['40%','80%']}
          src={avatar}
          alt='Web Developer'
        />
      </Flex>
    ),
  };



  const foreground2: BannerLayer = {
    translateX: [0, 35],
    translateY: [0, 55],
    scale: [1, 0, 'easeOutCubic'],
    expanded: false,
    shouldAlwaysCompleteAnimation: true,
    children: (
     <Image
          h={['20%','45%']}
          src={meteoro}
          alt='Web Developer'
        />
    ),
  };


  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <Box position="absolute" inset="0" bgGradient="linear(rgba(28, 29, 31, 0.5) 50%, gray.900)"/>
  };

  return (
    <ParallaxBanner
      layers={[background, foreground2, foreground, headline, gradientOverlay]}
      className="aspect"
    />
  );
};