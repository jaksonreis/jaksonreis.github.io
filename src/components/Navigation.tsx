import { ReactNode } from 'react';

//@ts-ignore
import ScrollspyNav from "react-scrollspy-nav";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

interface LinkProps {
  children: ReactNode;
  href: string;
}


import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { Logo } from './Logo';

const Links = [{ name: 'Início', href: "#section_1" }, { name: 'Sobre', href: "#section_2" }, { name: 'Portifólio', href: "#section_3" }, { name: 'Contato', href: "#section_4" }];

const NavLink = ({ children, href }: LinkProps) => (
  <Link
    px={3}
    py={4}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('orange.400', 'orange.600'),
      color: 'gray.50'
    }}
    href={href}>
    {children}
  </Link>
);

interface Props {
  action: boolean;
}


export function Navigation({action} : Props ) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex className={action ? "activeColor" : "" } bg="#1F202910" px={4} width="100%" z-index={100}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
          <IconButton
          mr="10px"
            color="orange.500"
            bg="none"
            size={'lg'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack  spacing={8} alignItems={'center'}>

            <Logo />

            <ScrollspyNav
              scrollTargetIds={["section_1", "section_2", "section_3", "section_4"]}
              offset={100}
              activeNavClass="is-active"
              scrollDuration="1000"
              headerBackground="true"
            >
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link.name} href={link.href}>
                    <Box
                      h="100%">
                      {link.name}
                    </Box>

                  </NavLink>
                ))}
              </HStack>
            </ScrollspyNav>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
             <ScrollspyNav
              scrollTargetIds={["section_1", "section_2", "section_3", "section_4"]}
              offset={100}
              activeNavClass="is-active"
              scrollDuration="1000"
              headerBackground="true"
              direction="row"
            >
            <Stack as={'nav'} spacing={4}
              >
              {Links.map((link) => (
                <NavLink key={link.name} href={link.href}>{link.name}</NavLink>
              ))}
            </Stack>
            </ScrollspyNav>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}

