import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const FeatureItem = ({ children, title, text, isTextFirst }) => {
  return (
    <HStack
      w="100%"
      flexDirection={{
        base: isTextFirst ? 'column-reverse' : 'column',
        md: 'row',
      }}
      gap={{ base: 6, md: 0 }}
      spacing={{ base: 0, md: 20 }}
    >
      {!isTextFirst && (
        <Flex
          justify={{
            base: 'center',
            md: 'flex-end',
          }}
          width={{ base: '100%', md: '50%' }}
        >
          {children}
        </Flex>
      )}
      <VStack width={{ base: '100%', md: '50%' }} align={'flex-start'}>
        <Text
          w="100%"
          textAlign={{ base: 'center', md: 'inherit' }}
          textStyle="24-bold"
          color="my-custom.deep"
        >
          {title}
        </Text>
        <Text
          textStyle={{ base: '16-light', md: '18-light' }}
          color="my-custom.text-85"
          textAlign={{ base: 'center', md: 'inherit' }}
        >
          {text}
        </Text>
      </VStack>
      {isTextFirst && (
        <Flex
          justify={{
            base: 'center',
            md: 'flex-start',
          }}
          width={{ base: '100%', md: '50%' }}
        >
          {children}
        </Flex>
      )}
    </HStack>
  );
};

const Features = ({bookDemo}) => {
  return (
    <Box w="100%" id="features">
      <Center w="100%">
        <VStack
          px={{ base: 4, md: 8, xl: 0 }}
          maxW="1176px"
          w="100%"
          paddingY="60px"
          spacing={{ base: '20', md: '24', xl: '28' }}
        >
          <VStack spacing="16" w="100%">
            <Text
              align="center"
              color="my-custom.deep"
              width="100%"
              textStyle={{ base: '36-semi', md: '40-semi', xl: '56-semi' }}
            >
              Features
            </Text>
            <FeatureItem
              title="Feature 1"
              text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, quas?"
            >
              <StaticImage
                src="https://images.unsplash.com/photo-1682687980918-3c2149a8f110?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                placeholder="blurred"
                alt="access more stock"
                objectFit="cover"
              />
            </FeatureItem>
          </VStack>
          <FeatureItem
            isTextFirst
            title="Feature 2"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!"
          >
            <StaticImage
              src="https://images.unsplash.com/photo-1682687981974-c5ef2111640c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
              placeholder="blurred"
              alt="access more leads"
              objectFit="cover"
            />
          </FeatureItem>
          <FeatureItem
            title="Feature 3"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!"
          >
            <StaticImage
              src="https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              placeholder="blurred"
              alt="save time sourcing"
              objectFit="fill"
            />
          </FeatureItem>
          <FeatureItem
            isTextFirst
            title="Feature 4"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!"
          >
            <StaticImage
              src="https://images.unsplash.com/photo-1661956601031-4cf09efadfce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              placeholder="blurred"
              alt="shift properties quicker"
              objectFit="fill"
            />
          </FeatureItem>
          <FeatureItem
            title="Feature 5"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cupiditate!"
          >
            <StaticImage
              src="https://images.unsplash.com/photo-1684749841085-f144067c42ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              placeholder="blurred"
              alt="earn more commission"
              objectFit="cover"
            />
          </FeatureItem>
          <HStack
            flexDirection={{
              base: 'column-reverse',
              md: 'row',
            }}
            gap={{ base: 6, md: 0 }}
            spacing={{ base: 0, md: 20 }}
            w="100%"
          >
            <VStack width={{ base: '100%', md: '50%' }} align={'flex-start'}>
              <Text
                w="100%"
                textAlign={{ base: 'center', md: 'inherit' }}
                textStyle="24-bold"
                color="my-custom.deep"
              >
                Lorem ipsum dolor sit.
              </Text>
              <Text
                textStyle={{ base: '16-light', md: '18-light' }}
                color="my-custom.text-85"
                textAlign={{ base: 'center', md: 'inherit' }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, quaerat?
              </Text>
              <Flex
                justify={'space-between'}
                w={'100%'}
                alignItems={'flex-end'}
              >
                <Box marginTop={'40px'} w={{ base: '100%', md: 'inherit' }}>
                  <Button
                    textStyle="16-bold"
                    variant="light-blue"
                    w={{ base: '100%', md: 60, xl: 80 }}
                    h={12}
                    onClick={() => bookDemo()}
                  >
                    Book Demo
                  </Button>
                </Box>
              </Flex>
            </VStack>
            <Flex
              justify={{
                base: 'center',
                md: 'flex-start',
              }}
              width={{ base: '100%', md: '50%' }}
            >
              <StaticImage
                src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                placeholder="blurred"
                alt="take on more business"
                objectFit="cover"
              />
            </Flex>
          </HStack>
        </VStack>
      </Center>
    </Box>
  );
};

export default Features;
