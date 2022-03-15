import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { Accessory } from "./components/Accessory";

interface Rent {
    period: string;
    price: number;
}

interface Accessory {
    type: string;
    name: string;
}

interface RootObject {
    id: string;
    brand: string;
    name: string;
    about: string;
    rent: Rent;
    fuel_type: string;
    thumbnail: string;
    accessories: Accessory[];
    photos: string[];
}

interface Props {
    car: RootObject;
}


export function CarDetails({ car }: Props) {
    return (
        <>

{/* 
        <Flex className="Header" bg="gray.900" h="30px" w="100%" pl="20px" >
                <Flex className="HeaderContent">
                    <Text> X-Cars </Text>
                </Flex>
            </Flex> */}
        <Box className="Conteinar-Div">


            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => { }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
            >
                <SwiperSlide>
                    <Flex justify="center" align="center">
                        <img src={car.photos[0]} style={{ width: "80%" }} alt='Car Photos' />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex justify="center" align="center">
                        <img src={car.photos[1]} style={{ width: "80%" }} alt='Car Photos' />
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex justify="center" align="center">
                        <img src={car.photos[2]} style={{ width: "80%" }} alt='Car Photos' />
                    </Flex>
                </SwiperSlide>
            </Swiper>

            <Flex className="Details" width="100%" direction="row" justify="space-between" align="center" >
                <Box className="Description">
                    <Text className="Brand" fontSize="xs" color="#AEAEB3" textTransform="uppercase">{car.brand}</Text>
                    <Text className="Name" fontSize="md" color="#47474D" >{car.name}</Text>
                </Box>

                <Box className="Rent">
                    <Text className="Period" fontSize="xs" color="#AEAEB3" textTransform="uppercase">{car.rent.period}</Text>
                    <Text className="Price" fontSize="sm" color="#DC1637">R$ {car.rent.price}</Text>
                </Box>
            </Flex>
            {
                car.accessories &&
                <Flex className="Accessories" direction="row" flexWrap="wrap" justify="space-between" w="100%" align="center">
                    {
                        car.accessories.map(accessory => (
                            <Accessory
                                key={accessory.type}
                                name={accessory.name}
                                icon={getAccessoryIcon(accessory.type)}

                            />

                        ))
                    }

                </Flex>
            }

            <Text className="About" textAlign="justify" color="#7A7A80" fontSize="sm" mt="15px" lineHeight="18px">{car.about}</Text>
        </Box ></>
    );
}