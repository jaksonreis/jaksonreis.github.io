import { Flex, Image, Text } from "@chakra-ui/react";
import imgI from "../../assets/eu.png";

interface Props {
    animation1: boolean;
    animation2: boolean;
    animation3: boolean;
}
export function Section02({ animation1, animation2, animation3 }: Props) {

    return (
        <Flex flexWrap="wrap" id="section_2" justify="center" align="start" mt="10px" pt={["50px","150px"]}>
                <Image opacity="0" className={animation2 ? "animationLeft" : ""}
                    position="relative" h="90%" src={imgI} filter='grayscale(1%)' />
                <Flex direction="column" >
                    <Flex
                        bg="gray.800"
                        borderRadius={8}
                        p="6"
                        className={animation1 ? "animationRight" : ""}
                        opacity="0"
                        position="relative"
                        fontSize={["xs", "lg"]} 
                    >
                        <Text  fontSize={["xs", "lg"]} mb="4" >
                            Meu nome é Jakson da cidade de Corinto, Minas Gerais,<br />
                            tenho 25 anos e sou um Web Developer.<br />
                            Me tornei especialista em React, React Native<br />
                            além de varias outras tecnologias... <br />
                        </Text>
                    </Flex>
                    <Flex
                        bg="gray.800"
                        borderRadius={8}
                        p="6"
                        className={animation3 ? "animationRight" : ""}
                        opacity="0"
                        position="relative"
                        mt="20px"
                    >
                        <Text fontSize={["xs", "lg"]} mb="4">
                            Atuo no mercado oferecendo,<br />
                            soluções para sistemas web, mobile.<br />
                            O foco é sempre desenvolver da maneira <br />
                            mais profissional, moderna e performática possivel,<br />
                            pensando sempre na experiencia do usuário <br />
                            e na satisfação de nossos clientes.
                        </Text>
                    </Flex>
                </Flex>
        </Flex>
    )

}