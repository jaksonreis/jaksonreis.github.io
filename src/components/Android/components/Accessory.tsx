
import { Flex, Image, Text } from '@chakra-ui/react';

const svg = "../../../assets/car.svg"

interface Props {
    name: string;
    icon: string;
}

export function Accessory({ name, icon}: Props) {
  return (
    <Flex direction="column" bg="#F4F5F6" justify="center" align="center" w="60px" h="51px" mb="5px" p="10px" >
    <Image src={icon} alt="Kiwi standing on oval" boxSize="20px"/>
        <Text color="#7A7A80" fontSize="xs">{name}</Text>
    </Flex>
  );
}