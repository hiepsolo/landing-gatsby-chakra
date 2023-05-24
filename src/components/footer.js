import './footer.css';

import {
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';

import { AnchorLink } from 'gatsby-plugin-anchor-links';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            email
          }
        }
      }
    `
  )
  return (
    <Box as="footer" w="100%">
      <Center w="100%" px={{ base: 4, md: 8, xl: 0 }}>
        <VStack maxW="1176px" w="100%" paddingY="36px" spacing={4}>
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            w="100%"
            align="flex-start"
          >
            <AnchorLink to="/#top-banner">
              <Heading size='lg' w="200px">
              {site.siteMetadata.title}
              </Heading>
            </AnchorLink>
            <VStack alignItems={'flex-end'}>
              <HStack
                pt={{ base: 8, md: 0 }}
                justifyContent={{ base: 'space-between', md: 'flex-end' }}
                width={{ base: '100%', md: 'inherit' }}
                alignItems={'center'}
                spacing={4}
                marginInlineStart="0 !important"
              >
                <UnorderedList
                  ml="0"
                  textStyle="14-medium"
                  styleType="none"
                  display="flex"
                  color="my-custom.text-85"
                  flexDirection={{ base: 'column', md: 'row' }}
                  justifyContent={{ base: 'space-between', md: 'flex-end' }}
                >
                  <ListItem mr="5" className="my-link">
                    <AnchorLink to="/#why-us">Why us?</AnchorLink>
                  </ListItem>
                  <ListItem mr="5" mt={{ base: 4, md: 0 }} className="my-link">
                    <AnchorLink to="/#features">
                      Features
                    </AnchorLink>
                  </ListItem>
                  <ListItem mt={{ base: 4, md: 0 }} className="my-link">
                    <AnchorLink to="/#how-it-works">How it works</AnchorLink>
                  </ListItem>
                </UnorderedList>
                  <HStack spacing="1">
                    <a href="https://www.facebook.com" target="_blank">
                      <StaticImage
                        placeholder="blurred"
                        alt="facebook icon"
                        src="../images/facebook-deep.png"
                        sizes="icon-16"
                        className="icon-footer"
                      />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank">
                      <StaticImage
                        placeholder="blurred"
                        alt="linkedin icon"
                        src="../images/linkedin-deep.png"
                        sizes="icon-16"
                        className="icon-footer"
                      />
                    </a>
                    <a href="https://twitter.com/hiepsolo" target="_blank">
                      <StaticImage
                        placeholder="blurred"
                        alt="twitter icon"
                        src="../images/twitter-deep.png"
                        sizes="icon-16"
                        className="icon-footer"
                      />
                    </a>
                  </HStack>
              </HStack>
            </VStack>
          </HStack>
          <Divider color="my-custom.text-60" size="2px" />
          <HStack
            flexDirection={{ base: 'column', md: 'row' }}
            justify={'space-between'}
            w="100%"
            align={'flex-start'}
          >
            <VStack pb="2" alignItems={'flex-start'}>
              <HStack>
                <StaticImage
                  placeholder="blurred"
                  alt="location"
                  src="../images/location.png"
                  sizes={'icon-16'}
                />
                <Text color="my-custom.text-85" textStyle="10-medium">
                  Your address
                </Text>
              </HStack>
              <HStack>
                <StaticImage
                  placeholder="blurred"
                  alt="company"
                  src="../images/location-company.png"
                  sizes={'icon-16'}
                />
                <Text color="my-custom.text-85" textStyle="10-regular">
                  Company Number: xxx
                </Text>
              </HStack>
            </VStack>
            <HStack justifyContent={'flex-end'} spacing={2} ml="2px !important">
              <StaticImage
                placeholder="blurred"
                alt="copyright"
                src="../images/copyright.png"
                sizes={'icon-12'}
              />
              <Text color="my-custom.text-85" textStyle="10-regular">
                2023 My Brand limited, All Rights Reserved
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default Footer;
