import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import bg from "../../assets/smartphone.png"
import { CarDetails } from "./CarDetails";
import { Car } from "./components/Car";



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

export function Android() {

    const car = [
        {
            "id": "535e8de8-721b-4bac-8b72-7d29be7da467",
            "brand": "Audi",
            "name": "RS 5 Coupé",
            "about": "O carro ainda tem sistema de tração nas quatro rodas Quattro com diferencial traseiro esportivo de série. De acordo com a Audi, ele faz o mesmo em 3,8 segundos na Sportback.",
            "rent": {
                "period": "Ao dia",
                "price": 120
            },
            "fuel_type": "electric_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/1.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "250km/h"
                },
                {
                    "type": "acceleration",
                    "name": "3.8s"
                },
                {
                    "type": "turning_diameter",
                    "name": "800 HP"
                },
                {
                    "type": "electric_motor",
                    "name": "Elétrico"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "5 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/1.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/2.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/3.png"
            ]
        },
        {
            "id": "ffb71f55-818a-48b1-b7d2-2efc406ede25",
            "brand": "Porsche",
            "name": "Panamera",
            "about": "O Panamera é um automóvel de luxo coupé com porte grande. Tem motorização dianteira V6 e V8. A tração é integral com uma caixa PDK de sete mudanças e dupla embreagem.",
            "rent": {
                "period": "Ao dia",
                "price": 340
            },
            "fuel_type": "gasoline_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/2.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "315km/h"
                },
                {
                    "type": "acceleration",
                    "name": "2.9s"
                },
                {
                    "type": "turning_diameter",
                    "name": "700 HP"
                },
                {
                    "type": "gasoline_motor",
                    "name": "Gasoline"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "4 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/4.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/5.png",
                "https://www.mazettoseguros.com.br/blog/wp-content/uploads/2019/10/seguro-panamera-corretora-de-seguros-700x350.png"
            ]
        },
        {
            "id": "52930821-cbea-4b05-9f45-7c02b1bb0d8c",
            "brand": "Chevrolet",
            "name": "Corvette Z06",
            "about": "O Chevrolet Corvette Z06 inclui freios Brembo de alto desempenho com pinças maiores no conjunto dianteiro, itens aerodinâmicos com capô de fibra de carbono, suspensão para alto desempenho.",
            "rent": {
                "period": "Ao dia",
                "price": 620
            },
            "fuel_type": "gasoline_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/3.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "330km/h"
                },
                {
                    "type": "acceleration",
                    "name": "6.2s"
                },
                {
                    "type": "turning_diameter",
                    "name": "900 HP"
                },
                {
                    "type": "gasoline_motor",
                    "name": "Gasoline"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "2 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/6.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/7.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/8.png"
            ]
        },
        {
            "id": "52930821-cbea-4b05-9f45-7c02b1bb0d8c-xcccv112",
            "brand": "Chevrolet",
            "name": "Impala 67",
            "about": "O Chevrolet Corvette Z06 inclui freios Brembo de alto desempenho com pinças maiores no conjunto dianteiro, itens aerodinâmicos com capô de fibra de carbono, suspensão para alto desempenho.",
            "rent": {
                "period": "Ao dia",
                "price": 320
            },
            "fuel_type": "gasoline_motor",
            "thumbnail": "https://64.media.tumblr.com/2200af74476caf523b51dfb796b8cc8f/tumblr_ml60wj42P81s5jjtzo1_1280.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "330km/h"
                },
                {
                    "type": "acceleration",
                    "name": "6.2s"
                },
                {
                    "type": "turning_diameter",
                    "name": "900 HP"
                },
                {
                    "type": "gasoline_motor",
                    "name": "Gasoline"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "2 pessoas"
                }
            ],
            "photos": [
                "https://www.pngplay.com/wp-content/uploads/13/1967-Chevrolet-Impala-PNG-HD-Quality.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/7.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/8.png"
            ]
        },
        {
            "id": "49983f6c-a46a-4dfd-a86e-425b8c72e086",
            "brand": "Lamborghini",
            "name": "Huracan",
            "about": "Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.",
            "rent": {
                "period": "Ao dia",
                "price": 120
            },
            "fuel_type": "electric_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/4.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "380km/h"
                },
                {
                    "type": "acceleration",
                    "name": "3.2s"
                },
                {
                    "type": "turning_diameter",
                    "name": "800 HP"
                },
                {
                    "type": "electric_motor",
                    "name": "Elétrico"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "2 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/9.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/10.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/11.png"
            ]
        },
        {
            "id": "508e7193-0078-4615-9071-920b59038fda",
            "brand": "volvo",
            "name": "XC40",
            "about": "A Poderosa Combinação de um Motor Elétrico de Alto Desempenho e um Motor a Combustão. Compacto e Inovador. Com Design Expressivo, Tecnologias Intuitivas e Estilo Urbano.",
            "rent": {
                "period": "Ao dia",
                "price": 120
            },
            "fuel_type": "gasoline_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/5.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "180km/h"
                },
                {
                    "type": "acceleration",
                    "name": "1.5s"
                },
                {
                    "type": "turning_diameter",
                    "name": "600 HP"
                },
                {
                    "type": "gasoline_motor",
                    "name": "Gasolina"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "5 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/12.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/13.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/14.png"
            ]
        },
        {
            "id": "59626707-88c5-4877-9350-07f372c0905a",
            "brand": "mitsubishi",
            "name": "Lancer",
            "about": "Mitsubishi Lancer é um belo e agressivo carro. Além do mais, ele encanta pelo conforto e pela eficiência. Bastante firme e estável para dirigir com tranquilidade e segurança.",
            "rent": {
                "period": "Ao dia",
                "price": 220
            },
            "fuel_type": "hybrid_motor",
            "thumbnail": "https://storage.googleapis.com/golden-wind/ignite/react-native/thumbnails/6.png",
            "accessories": [
                {
                    "type": "speed",
                    "name": "180km/h"
                },
                {
                    "type": "acceleration",
                    "name": "2.0s"
                },
                {
                    "type": "turning_diameter",
                    "name": "600 HP"
                },
                {
                    "type": "hybrid_motor",
                    "name": "Híbrido"
                },
                {
                    "type": "exchange",
                    "name": "Auto"
                },
                {
                    "type": "seats",
                    "name": "5 pessoas"
                }
            ],
            "photos": [
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/15.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/16.png",
                "https://storage.googleapis.com/golden-wind/ignite/react-native/images/17.png"
            ]
        }
    ];

    const [verf, setVerf] = useState(true);
    const [carItem, setCarItem] = useState<RootObject>({} as RootObject);

    function handleCarClick(item: RootObject) {

        setCarItem(item)
        setVerf(false)


    }

    function handleBack() {

        setVerf(true)


    }

    return (
        < Flex direction="column" h="500px" w="261px">
            <Image position="absolute" src={bg} h="500px" alt='Android' />


            <Flex direction="column" h="500px" w="261px" bg="gray.50" pb="32px">
                {
                    verf ?
                        <Flex className="HeaderContent" bg="gray.800" h="65px" align="end"
                            justify="space-between" p="0 25px">
                            <Text> <Text as="span" color="red">X</Text>-Cars </Text>
                            {
                                <Text className="TotalCars" fontSize="xs" color="gray.200">
                                    Total de {car.length} carros.
                                </Text>
                            }
                        </Flex>
                        :
                        <Flex className="HeaderContent" bg="gray.800" h="65px" align="end" p="0 10px">
                            <IconButton
                                h="27px"
                                bg="none"
                                _hover={{ bg: 'none', color: 'red.800' }}
                                color="red"
                                aria-label='back database'
                                onClick={() => handleBack()}
                                icon={<ChevronLeftIcon />} />
                            <Flex w="65%" justify="center">
                                <Text> <Text as="span" color="red">X</Text>-Cars </Text>
                            </Flex>
                        </Flex>
                }
                <Flex h="100%" direction="column" overflow="scroll" p="10px 25px 0" bg="#FFFFFF">
                    <Flex className="Header">
                    </Flex>
                    {
                        verf ?
                            car.map((item) => <Car data={item} onClick={() => handleCarClick(item)} />)
                            :
                            <CarDetails car={carItem} />
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}