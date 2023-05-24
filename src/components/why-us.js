import './why-us.css';

import {
  Box,
  Center,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const WhyUsItem = ({ children, title, text }) => {
  return (
    <>
      <VStack>
        <Center>{children}</Center>
        <Center>
          <Text textStyle="24-semi" color="my-custom.deep">
            {title}
          </Text>
        </Center>
        <Text
          textStyle={{ base: '16-light', md: '18-light' }}
          color="my-custom.text-85"
          align="center"
        >
          {text}
        </Text>
      </VStack>
    </>
  );
};

const WhyUs = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "why-us.png" }) {
          childImageSharp {
            fluid(quality: 10, maxWidth: 300) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `
  );
  const imageData = desktop.childImageSharp.fluid;

  return (
    <Box w="100%" id="why-us">
      <BackgroundImage
        Tag="section"
        className="bg-why-us"
        fluid={imageData}
        title="Fullscreen Background"
        id="fullscreenbg"
        role="img"
        aria-label="Fullscreen Background"
        preserveStackingContext={true}
      >
        <Center w="100%">
          <VStack
            mx={{ base: 4, md: 8, xl: 0 }}
            maxW="1176px"
            w="100%"
            paddingY="60px"
            spacing="16"
          >
            <Text
              align="center"
              width="100%"
              textStyle={{ base: '36-semi', md: '40-semi', xl: '56-semi' }}
              color="my-custom.deep"
            >
              Why us?
            </Text>
            <SimpleGrid columns={{base: 1, md: 2}} columnGap={{base: 10, md: 0}} spacing="40px" width="100%">
                <WhyUsItem
                  title="The problem"
                  key="the-problem"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, qui!"
                  textStyle="18-light"
                >
                  <StaticImage
                    height={128}
                    src="../images/the-problem.png"
                    alt="the problem"
                    placeholder="blurred"
                  ></StaticImage>
                </WhyUsItem>
                <WhyUsItem
                  title="Why it happens"
                  key="why-it-happens"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, qui!"
                  textStyle="18-light"
                >
                  <StaticImage
                    height={128}
                    src="../images/why-it-happen.png"
                    alt="why it happens"
                    placeholder="blurred"
                  ></StaticImage>
                </WhyUsItem>
                <WhyUsItem
                  title="The result"
                  key="the-result"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, qui!"
                  textStyle="18-light"
                >
                  <StaticImage
                    height={128}
                    src="../images/the-result.png"
                    alt="the result"
                    placeholder="blurred"
                  ></StaticImage>
                </WhyUsItem>
                <WhyUsItem
                  title="The solution"
                  key="the-solution"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id dolores ipsa officia sed beatae ea?"
                  textStyle="18-light"
                >
                  <StaticImage
                    height={128}
                    src="../images/the-solution.png"
                    alt="the solution"
                    placeholder="blurred"
                  ></StaticImage>
                </WhyUsItem>
            </SimpleGrid>
          </VStack>
        </Center>
      </BackgroundImage>
    </Box>
  );
};

export default WhyUs;
