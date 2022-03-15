import { Text } from "@chakra-ui/react";

export function Logo() {

    return (

        <Text
        fontSize={["xl", "3xl"]}
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
    >
        Jakson Reis
        <Text as="span" ml="1" color="orange.500">.</Text>
    </Text>
    )
}