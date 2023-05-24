import './header.css';

import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import Menu from './menu';
import OurVideo from './video';
import { PlayIcon } from './icons';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Header = ({ bookDemo }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isVideoOpen,
    onOpen: onVideoOpen,
    onClose: onVideoClose,
  } = useDisclosure();
  return (
    <>
      <Center
        as="header"
        bg="my-custom.light"
        w="100%"
        color="white"
        position={'sticky'}
        zIndex={1}
        top={0}
      >
        <Flex
          maxW="1176px"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          paddingY="16px"
          mx={{ base: 4, md: 8, xl: 0 }}
        >
          <Box>
            <AnchorLink to="/#top-banner">
              <Heading>{site.siteMetadata.title}</Heading>
            </AnchorLink>
          </Box>
          <UnorderedList
            ml="0"
            textStyle="14-medium"
            styleType="none"
            display={{ base: 'none', xl: 'flex' }}
          >
            <ListItem mr="5" className="my-link">
              <AnchorLink to="/#why-us">Why us?</AnchorLink>
            </ListItem>
            <ListItem mr="5" className="my-link">
              <AnchorLink to="/#features">Features</AnchorLink>
            </ListItem>
            <ListItem className="my-link">
              <AnchorLink to="/#how-it-works">How it works</AnchorLink>
            </ListItem>
          </UnorderedList>
          <HStack
            display={{ base: 'none', xl: 'flex' }}
            spacing={4}
            align="center"
          >
            <Button size="md" variant="deep-blue" onClick={() => bookDemo()}>
              <Text textStyle="16-regular">Book Demo</Text>
            </Button>
            <HStack spacing="1">
              <a href="https://www.facebook.com/" target="_blank">
                <StaticImage
                  placeholder="blurred"
                  alt="facebook icon"
                  src="../images/facebook.png"
                  sizes="icon-16"
                  className="social-icon"
                />
              </a>
              <a href="https://www.linkedin.com/company" target="_blank">
                <StaticImage
                  placeholder="blurred"
                  alt="linkedin icon"
                  src="../images/linkedin.png"
                  sizes="icon-16"
                  className="social-icon"
                />
              </a>
              <a href="https://twitter.com/hiepsolo" target="_blank">
                <StaticImage
                  placeholder="blurred"
                  alt="twitter icon"
                  src="../images/twitter-square.png"
                  sizes="icon-16"
                  className="social-icon"
                />
              </a>
            </HStack>
          </HStack>
          <HStack
            display={{ base: 'flex', xl: 'none' }}
            spacing={4}
            align="center"
          >
            <Box cursor={'pointer'} onClick={onOpen}>
              <StaticImage
                placeholder="blurred"
                alt="menu"
                src="../images/menu.png"
                sizes="icon-26"
              />
            </Box>
          </HStack>
        </Flex>
      </Center>
      <Center bg="my-custom.light" w="100%" color="white" id="top-banner">
        <Flex
          maxW="1176px"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          paddingY="60px"
          mx={{ base: 4, md: 8, xl: 0 }}
        >
          <Grid
            height={{ base: '100%', md: '450px', xl: '530px' }}
            templateColumns={{ base: 'repeat(5, 1fr)', xl: 'repeat(2, 1fr)' }}
            gap="8"
            width="100%"
          >
            <GridItem display={'flex'} colSpan={{ base: 5, md: 3, xl: 1 }}>
              <VStack justifyContent={'center'} spacing={{ base: 5, md: 8 }}>
                <Text
                  textAlign={{ base: 'center', md: 'left' }}
                  textStyle={{ base: '40-semi', md: '52-semi', xl: '72-semi' }}
                >
                  Lorem ipsum dolor sit amet.
                </Text>
                <Text
                  textAlign={{ base: 'center', md: 'left' }}
                  color="my-custom.deep"
                  textStyle={{
                    base: '36-semi',
                    md: '40-semi',
                    xl: '52-semi',
                  }}
                  width="100%"
                >
                  Lorem, ipsum.!
                </Text>
                <Text
                  textAlign={{ base: 'center', md: 'left' }}
                  textStyle={{ base: '16-regular', md: '18-regular' }}
                  pr={{ base: 0, md: 20, xl: 28 }}
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, repellendus.
                </Text>
                <HStack
                  width="100%"
                  textStyle="16-bold"
                  spacing={{ base: 4, md: 6, xl: 8 }}
                  justify={{ base: 'center', md: 'flex-start' }}
                >
                  <Button
                    w={{ base: '50%', md: 48, xl: 56 }}
                    h={{ base: '40px', md: '44px', xl: '48px' }}
                    variant="deep-blue"
                    onClick={() => bookDemo()}
                  >
                    Book Demo
                  </Button>
                  <Button
                    w={{ base: '50%', md: 48, xl: 56 }}
                    color="my-custom.deep"
                    rightIcon={<PlayIcon />}
                    h={{ base: '40px', md: '44px', xl: '48px' }}
                    onClick={onVideoOpen}
                  >
                    Watch our video
                  </Button>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem
              height={'100%'}
              colSpan={{ base: 0, md: 2, xl: 1 }}
              display={{ base: 'none', md: 'block' }}
            >
              <StaticImage
                style={{ height: '100%' }}
                layout="fullWidth"
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1325&q=80"
                placeholder="blurred"
                alt="Right img"
                objectPosition="left"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
        </Flex>
      </Center>
      <Menu
        bookDemo={bookDemo}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
      <OurVideo
        isOpen={isVideoOpen}
        onOpen={onVideoOpen}
        onClose={onVideoClose}
      />
    </>
  );
};

export default Header;
