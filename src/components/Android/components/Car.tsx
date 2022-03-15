import React from 'react';

import { Box, Button, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';


const electric = "src/assets/energy.svg";
const gasoline = "src/assets/gasoline.svg";

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
    data: RootObject;
    onClick: () => void;
}




export function Car({ data, onClick }: Props) {

    return (
        <Button h="100px" w="205px" variant='outline' p="0" onClick={onClick} mb="5px">
            <Flex w="100%" justify="space-between" align="center" p="24px" mb="16px">
                <Flex direction="column" w="100%" align="center">
                    <Text fontSize="xs" color="black">{data.brand}</Text>
                    <Text fontSize="sm" color="black">{data.name}</Text>

                    <Flex direction="row" align="center" mt="5px">
                        <Flex direction="column">
                            <Text fontSize="xs" color="black">{data.rent.period}</Text>
                            <Text fontSize="sm" color="black" textColor="red.700">{`R$ ${data.rent.price}`}</Text>
                        </Flex>

                        <Flex direction="column">
                            <Image src={data.fuel_type == "electric_motor" ? electric : gasoline} alt={data.fuel_type} boxSize="20px" />
                        </Flex>
                    </Flex>
                </Flex>

                <Image w='100px' h='53px' src={data.thumbnail}
                />
            </Flex>
        </Button>
    );
}