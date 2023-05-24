import './how-it-works.css';

import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const HowItem = ({ children, title, text }) => {
  return (
    <HStack width="100%" spacing={4}>
      {children}
      <VStack alignItems={'flex-start'}>
        <Text textStyle="18-semi" color="my-custom.deep">
          {title}
        </Text>
        <Text textStyle="14-regular" color="text-85">
          {text}
        </Text>
      </VStack>
    </HStack>
  );
};

const HowItWorks = ({ findOutMore }) => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "why-us.png" }) {
          childImageSharp {
            fluid(quality: 20, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );
  const imageData = desktop.childImageSharp.fluid;
  return (
    <Box w="100%" id="how-it-works">
      <BackgroundImage
        Tag="section"
        className="bgImage"
        fluid={imageData}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        <Center w="100%">
          <VStack
            px={{ base: 4, md: 8, xl: 0 }}
            maxW="1176px"
            w="100%"
            paddingBottom={{ base: 20, md: 24 }}
            spacing={{ base: '20', md: '24', xl: '28' }}
            pt="20"
          >
            <HStack
              w="100%"
              flexDirection={{
                base: 'column',
                xl: 'row',
              }}
              gap={{ base: 6, xl: 0 }}
              spacing={{ base: 0, xl: 20 }}
            >
              <Flex
                justify={{
                  base: 'center',
                  xl: 'flex-end',
                }}
                width={{ base: '100%', xl: '50%' }}
                display={{base: 'none', xl: 'flex'}}
              >
                <StaticImage
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  placeholder="blurred"
                  alt="how it work 1"
                  objectFit="cover"
                />
              </Flex>
              <VStack
                width={{ base: '100%', xl: '50%' }}
                align={'flex-start'}
                spacing={14}
              >
                <Text
                  align={{ base: 'center', xl: 'inherit' }}
                  width="100%"
                  textStyle={{ base: '36-semi', md: '40-semi', xl: '56-semi' }}
                  color="my-custom.deep"
                >
                  How it works
                </Text>
                <VStack align={'flex-start'} spacing={{ base: 10, xl: 14 }}>
                  <HowItem
                    title="How it work 1"
                    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, aliquid eius repudiandae velit accusantium dolore?"
                  >
                    <Box
                      minW={{ base: '36px', md: '44px', xl: '48px' }}
                      h={{ base: '36px', md: '44px', xl: '48px' }}
                    >
                      <StaticImage
                        layout="constrained"
                        src="../images/user-outlined.png"
                        placeholder="blurred"
                        alt="user icon"
                        objectFit="contain"
                      />
                    </Box>
                  </HowItem>
                  <HowItem
                    title="How it works 2"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, vel repudiandae. Voluptates pariatur perspiciatis facere."
                  >
                    <Box
                      minW={{ base: '36px', md: '44px', xl: '48px' }}
                      h={{ base: '36px', md: '44px', xl: '48px' }}
                    >
                      <StaticImage
                        layout="constrained"
                        src="../images/stock-outlined.png"
                        placeholder="blurred"
                        alt="stock icon"
                        objectFit="contain"
                      />
                    </Box>
                  </HowItem>
                  <HowItem
                    title="How it works 3"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, numquam!"
                  >
                    <Box
                      minW={{ base: '36px', md: '44px', xl: '48px' }}
                      h={{ base: '36px', md: '44px', xl: '48px' }}
                    >
                      <StaticImage
                        layout="constrained"
                        src="../images/add-alt.png"
                        placeholder="blurred"
                        alt="add icon"
                        objectFit="contain"
                      />
                    </Box>
                  </HowItem>
                </VStack>
              </VStack>
            </HStack>

            <HStack
              w="100%"
              flexDirection={{
                base: 'column',
                xl: 'row',
              }}
              gap={{ base: 6, xl: 0 }}
              spacing={{ base: 0, xl: 20 }}
            >
              <Flex
                display={{ base: 'flex', xl: 'none' }}
                justify={{
                  base: 'center',
                  xl: 'flex-end',
                }}
                width={{ base: '100%', xl: '50%' }}
              >
                <StaticImage
                  src="../images/how-it-works-2.png"
                  placeholder="blurred"
                  alt="how it work 2"
                  objectFit="cover"
                />
              </Flex>
              <VStack
                width={{ base: '100%', xl: '50%' }}
                align={'flex-start'}
                spacing={14}
                marginInlineStart={'0 !important'}
              >
                <HowItem
                  title="How it works 4"
                  text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, in."
                >
                  <Box
                    minW={{ base: '36px', md: '44px', xl: '48px' }}
                    h={{ base: '36px', md: '44px', xl: '48px' }}
                  >
                    <StaticImage
                      layout="fullWidth"
                      src="../images/user-add-outlined.png"
                      placeholder="blurred"
                      alt="add lead icon"
                      objectFit="cover"
                    />
                  </Box>
                </HowItem>
                <HowItem
                  title="How it works 5"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repudiandae!"
                >
                  <Box
                    minW={{ base: '36px', md: '44px', xl: '48px' }}
                    h={{ base: '36px', md: '44px', xl: '48px' }}
                  >
                    <StaticImage
                      layout="fullWidth"
                      src="../images/git-pull-request-create.png"
                      placeholder="blurred"
                      alt="create a match icon"
                      objectFit="cover"
                    />
                  </Box>
                </HowItem>
                <HowItem
                  title="How it works 6"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, repudiandae!"
                >
                  <Box
                    minW={{ base: '36px', md: '44px', xl: '48px' }}
                    h={{ base: '36px', md: '44px', xl: '48px' }}
                  >
                    <StaticImage
                      layout="fullWidth"
                      src="../images/share-knowledge.png"
                      placeholder="blurred"
                      alt="share commission"
                      objectFit="cover"
                    />
                  </Box>
                </HowItem>
                <HStack justify={'center'} w={'100%'} spacing={6}>
                  <Button
                    textStyle="16-bold"
                    variant="light-blue"
                    w={{base: '100%', md: '50%', xl: '100%'}}
                    h={12}
                    onClick={() => findOutMore()}
                  >
                    Find out more
                  </Button>
                </HStack>
              </VStack>
              <Flex
                display={{ base: 'none', xl: 'flex' }}
                justify={{
                  base: 'center',
                  xl: 'flex-end',
                }}
                width={{ base: '100%', xl: '50%' }}
              >
                <StaticImage
                  src="../images/how-it-works-2.png"
                  placeholder="blurred"
                  alt="how it work 2"
                  objectFit="cover"
                />
              </Flex>
            </HStack>
          </VStack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default HowItWorks;
