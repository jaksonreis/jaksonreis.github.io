import { Flex, Grid, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, Wrap } from "@chakra-ui/react";

import Carousel from "../Carousel";

import image0 from '../../assets/Desktop01.jpg'
import image1 from '../../assets/Mobile01.jpg'
import image2 from '../../assets/Mobile03.jpg'
import image3 from '../../assets/Mobile04.jpg'
import image4 from '../../assets/Desktop02.jpg'
import image5 from '../../assets/Mobile02.jpg'

const cards = [
  {
    index: 0,
    title: 'dt money - Home',
    image: image0,
  },
  {
    index: 1,
    title: 'dt money - App',
    image: image1,
  },
  {
    index: 2,
    title: 'to.do - App',
    image: image2,
  },
  {
    index: 3,
    title: 'Rentz - App',
    image: image3,
  },
  {
    index: 4,
    title: 'dt money - Modal',
    image: image4,
  },
  {
    index: 5,
    title: 'gofinance App',
    image: image5,
  },
];


interface CardProps {
  index: number;
  title: string;
  image: string;
}

let cardsRearranged: CardProps[]


export function Section03() {

  const { isOpen, onOpen, onClose } = useDisclosure()


  function clickImage(index: number) {

    cardsRearranged = [
      cards[index],
      ...cards.filter((item) => item.index !== index)
    ]

    onOpen()
  }

  return (
    <Flex id="section_3" justify="center" align="center" w="100vw" pt="130px">

      <Flex
        direction="column"
        bg="gray.800"
        borderRadius={8}
        p="6"
        w="80vw"
        justify="flex-end"
      >
        <Flex borderBottom="1px solid #4B4D63" mb="8px">
          <Text
            fontSize={["xl","3xl"]}
            m="10px"
            fontWeight="bold"
            letterSpacing="tight"
            w="64">Portifólio</Text>
        </Flex>
        {/* <Grid templateColumns='repeat(6, 1fr)' gap={3}> */}
        <div className="divGrid">
          <GridItem m="5px"
            colSpan={2}
            rowSpan={1}
          >
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[0].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(0)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[0].title}</Text>
            </Flex>
          </GridItem>
          <GridItem m="5px"
            colSpan={2}
            rowSpan={2}
          >
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[1].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(1)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[1].title}</Text>
            </Flex>
          </GridItem>
          <GridItem m="5px"
            colSpan={2}
            rowSpan={1}>
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[2].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(2)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[2].title}</Text>
            </Flex>
          </GridItem>
          <GridItem m="5px"
            colSpan={2}
            rowSpan={2}>
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[3].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(3)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[3].title}</Text>
            </Flex>
          </GridItem>
          <GridItem m="5px"
            colSpan={2}
            rowSpan={1}>
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[4].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(4)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[4].title}</Text>
            </Flex>
          </GridItem>
          <GridItem m="5px"
            colSpan={4}
            rowSpan={1}>
            <Flex className="ImgContainer" h="100%" justify="center" align="center">
              <Image
                className="ImgView"
                src={cards[5].image}
                display="block"
                width="100%"
                height="100%"
                objectFit="cover"
                onClick={() => clickImage(5)}
              /><Text className="ImgText" position="absolute" opacity="0" color="orange.500" fontWeight="bold" fontSize="2xl" letterSpacing="tight">{cards[5].title}</Text>
            </Flex>
          </GridItem>
        </div >{/* 
        <Button onClick={onOpen}>Open Modal</Button> */}

        <Modal size="70%" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg='blackAlpha.300'
            backdropFilter='blur(10px) hue-rotate(90deg)'
          />
          <ModalContent style={{ width: "800px" }}>
            <ModalHeader color="gray.700">Portifólio</ModalHeader>
            <ModalCloseButton color="gray.700" />
            <ModalBody>
              <Carousel cards={cardsRearranged} />
            </ModalBody>

          </ModalContent>
        </Modal>

      </Flex>

    </Flex>
  )

}